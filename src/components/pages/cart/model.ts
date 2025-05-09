import { combine, createEvent, createStore, sample } from "effector";
import { Iproduct } from "../../ui/productPreview/productPreview";
import { IMaterial } from "../../../types";

export type TCartItemForm = {
    material: IMaterial | null | undefined;
    product: Iproduct | null | undefined;
    width: number | string | undefined;
    height: number | string | undefined;
    needInstallation: boolean | undefined;
}

export type TCartItemFormErrors = {
    material?: string;
    product?: string;
    width?: string;
    height?: string;
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
    material: undefined,
    product: undefined,
    width: undefined,
    height: undefined,
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

export const $cart = createStore<TCartItemForm[]>([])
    .on(addCartItem, (state, item) => [...state, item])
    .on(removeFromCart, (state, id) => state.filter(item => item.product?.id !== id));

sample({
    source: $cart_item_form,
    clock: addToCart,
    target: addCartItem
})

sample({
    clock: addToCart,
    target: resetCartItemForm,
})

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