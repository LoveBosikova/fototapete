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
})
.on(changeTaskForm, (state, payload) => ({
    ...state,
    [payload.key]: payload.value,
}))