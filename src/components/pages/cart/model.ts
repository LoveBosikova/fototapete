import { combine, createEvent, createStore, sample } from "effector";
import { Iproduct } from "../../ui/productPreview/productPreview";
import { IMaterial } from "../../../types";
import { openModal } from "../../ui/modal/model";
import { ICartItemAdditionalProps } from "../../ui/cartItem/cartItemAdditional";

export type TCartItemForm = {
    material: IMaterial | null | undefined;
    product: Iproduct | null | undefined;
    width: number | null;
    height: number | null;
    needInstallation: boolean | undefined;
}

export type TCartItemFormErrors = {
    material?: string;
    product?: string;
    width?: string | null;
    height?: string | null;
    needInstallation?: string;
}

export const validateCartItemForm = createEvent<TCartItemForm>();
export const changeCartItemErrorsForm = createEvent<any>();

export const resetCartItemFormErrors = createEvent();

export const $cart_item_form_errors = createStore<TCartItemFormErrors>({})
.on(changeCartItemErrorsForm, (state, payload) => ({
    ...state,
    [payload.key]: payload.value,
}))
.reset(resetCartItemFormErrors);

export type TChangeCartItemForm<Key extends keyof TCartItemForm> = {
    key: Key
    value: TCartItemForm[Key]
}

export const changeCartItemForm = createEvent<TChangeCartItemForm<keyof TCartItemForm>>();
export const resetCartItemForm = createEvent()

export const $cart_item_form = createStore<TCartItemForm>({
    material: null,
    product: null,
    width: null,
    height: null,
    needInstallation: false,
})
.on(changeCartItemForm, (state, payload) => ({
    ...state,
    [payload.key]: payload.value,
}))
.reset(resetCartItemForm)

// Стор корзины
export const addToCart = createEvent()
export const removeFromCart = createEvent<number>(); // product.id

export const addCartItem = createEvent<TCartItemForm>()

export const finishOrder = createEvent()

export const $cart = createStore<TCartItemForm[]>([])
    .on(addCartItem, (state, item) => [...state, item])
    .on(removeFromCart, (state, id) => state.filter(item => item.product?.id !== id))
    .reset(finishOrder)

export const addAdditionalItem = createEvent<ICartItemAdditionalProps>();
export const removeAdditionalFromCart = createEvent<number>(); // product.id

export const $additionalInCart = createStore<ICartItemAdditionalProps[]>([])
    .on(addAdditionalItem, (state, item) => [...state, item])
    .on(removeAdditionalFromCart, (state, id) => state.filter(item => item.id !== id))
    .reset(finishOrder)

// export const $totalPrice = $cart.map(cart => {
//     return cart.reduce((total, item) => {

//     if (!item.product || !item.width || !item.height) return total;
    
//     const area = Number(item.width) * Number(item.height);
//     const itemPrice = (area/10000) * item.material?.price!;
    
//     return total + itemPrice;
//     }, 0);
// });

export const $cartTotal = $cart.map(cart => {
    return cart.reduce((total, item) => {
        if (!item.product || !item.width || !item.height) return total;
        
        const area = Number(item.width) * Number(item.height);
        const itemPrice = (area / 10000) * item.material?.price!;

        const isMoreThanMin = total + itemPrice >= 50
        
        return isMoreThanMin ? total + itemPrice : 50;
    }, 0);
});

export const $additionalTotal = $additionalInCart.map(additionalItems => {
    return additionalItems.reduce((total, item) => {
        return total + item.price;
    }, 0);
});

export const $totalPrice = combine(
    $cartTotal,
    $additionalTotal,
    (cartTotal, additionalTotal) => cartTotal + additionalTotal
);

sample({
    source: $cart_item_form,
    clock: addToCart,
    target: addCartItem
})

sample({
    clock: addToCart,
    target: resetCartItemForm,
})

sample({
    clock: addToCart,
    fn: () => 'cartSuccess',
    target: openModal,
});

// стор избранных товаров

// Тип элемента избранного
export type TFavouriteItem = {
    product: Iproduct;
}

// События
export const addToFavourites = createEvent<Iproduct>();
export const removeFromFavourites = createEvent<number>(); // product.id
export const toggleFavouriteProduct = createEvent<Iproduct>();

// Стор избранного
export const $favourites = createStore<TFavouriteItem[]>([])
.on(addToFavourites, (state, product) => {
    const exists = state.some(item => item.product.id === product.id);
    return exists ? state : [...state, { product }];
})
.on(removeFromFavourites, (state, id) =>
    state.filter(item => item.product.id !== id)
)
.on(toggleFavouriteProduct, (state, product) => {
    const exists = state.some(item => item.product.id === product.id);
    return exists
        ? state.filter(item => item.product.id !== product.id)
        : [...state, { product }];
});

// Хелпер для проверки, в избранном ли товар
export const createIsProductFavourite = (productId: number) =>
    combine($favourites, (items) =>
        items.some(item => item.product.id === productId)
);