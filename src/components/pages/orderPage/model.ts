import { createEvent, createStore } from "effector";

export type TForm = {
    email: string | null;
    phone: string | null;
    first_name: string | null;
    last_name: string | null;
    country: string | null;
    city: string | null;
    address: string | null;
    postal_code: string | null;
    district: string | null;
    order_notes: string | null;
    invoice_address: boolean | null;
    discount_code: string | null;
    isPrivate: boolean,
    company: string | null;
    OIB: string | null;
    other_first_name: string | null;
    other_last_name: string | null;
    other_country: string | null;
    other_city: string | null;
    other_address: string | null;
    other_postal_code: string | null;
    other_district: string | null;
}

export type TChangeTaskForm<Key extends keyof TForm> = {
    key: Key
    value: TForm[Key]
}

export const changeTaskForm = createEvent<TChangeTaskForm<keyof TForm>>()
export const resetOfferForm= createEvent();

export const $form = createStore<TForm>({
    email: "",
    phone: "",
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    address: "",
    postal_code: "",
    district: "",
    order_notes: "",
    invoice_address: false,
    discount_code: "",
    isPrivate: true,
    company: "",
    OIB: "",
    other_first_name: null,
    other_last_name: null,
    other_country: null,
    other_city: null,
    other_address: null,
    other_postal_code:  null,
    other_district: null,
})
.on(changeTaskForm, (state, payload) => ({
    ...state,
    [payload.key]: payload.value,
}))
.reset(resetOfferForm);



// Типы для ошибок формы
export type TOfferFormErrors = {
    email?: string | undefined;
    phone?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    country?: string | undefined;
    city?: string | undefined;
    address?: string | undefined;
    postal_code?: string | undefined;
    district?: string | undefined;
    order_notes?: string | undefined;
    invoice_address?: string | undefined;
    discount_code?: string | undefined;
    isPrivate?: string | undefined;
    other_first_name?: string | undefined;
    other_last_name?: string | undefined;
    other_country?: string | undefined;
    other_city?: string | undefined;
    other_address?: string | undefined;
    other_postal_code?: string | undefined;
    other_district?: string | undefined;
    company?: string | undefined;
    OIB?: string | undefined;
}

// Тип для изменения ошибки конкретного поля
export type TChangeOfferError<Key extends keyof TOfferFormErrors> = {
    key: Key
    value: string | undefined
}

// События
export const changeOfferError = createEvent<TChangeOfferError<keyof TOfferFormErrors>>();
export const resetOfferErrors = createEvent();

// Стор
export const $offer_errors = createStore<TOfferFormErrors>({})
    .on(changeOfferError, (state, payload) => ({
        ...state,
        [payload.key]: payload.value,
    }))
    .reset(resetOfferErrors);