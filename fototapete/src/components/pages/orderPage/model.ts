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

export const $form = createStore<any>({
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
})
.on(changeTaskForm, (state, payload) => ({
    ...state,
    [payload.key]: payload.value,
}))