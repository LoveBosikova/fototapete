import { createEvent, createStore } from "effector";

export type TSubscribeForm = {
    name: string;
    email: string;
}

export type TChangeSubscribeForm<Key extends keyof TSubscribeForm> = {
    key: Key
    value: TSubscribeForm[Key]
}

export const changeSubscribeForm = createEvent<TChangeSubscribeForm<keyof TSubscribeForm>>();
export const resetSubscribeForm = createEvent()

export const $subscribe_form = createStore<TSubscribeForm>({
    name: "",
    email: "",
})
.on(changeSubscribeForm, (state, payload) => ({
    ...state,
    [payload.key]: payload.value,
}))
.reset(resetSubscribeForm)