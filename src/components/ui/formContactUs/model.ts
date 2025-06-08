import { createEvent, createStore } from "effector";

export type TContactForm = {
    name: string;
    email: string;
    phone: string;
}

export type TChangeSubscribeForm<Key extends keyof TContactForm> = {
    key: Key
    value: TContactForm[Key]
}

export const changeContactForm = createEvent<TChangeSubscribeForm<keyof TContactForm>>();
export const resetContactForm = createEvent()

export const $contact_form = createStore<TContactForm>({
    name: "",
    email: "",
    phone: "",
})
.on(changeContactForm, (state, payload) => ({
    ...state,
    [payload.key]: payload.value,
}))
.reset(resetContactForm)