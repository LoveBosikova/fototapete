import { createEvent, createStore } from "effector";
import { IMaterial } from "../../../types";

export type TCalculateForm = {
    material?: IMaterial | undefined;
    width?: number;
    height?: number;
}

export type TChangeCalculateForm<Key extends keyof TCalculateForm> = {
    key: Key
    value: TCalculateForm[Key]
}

export const changeCalculateForm = createEvent<TChangeCalculateForm<keyof TCalculateForm>>();
export const resetCalculateForm = createEvent()

export const $calculate_form = createStore<TCalculateForm>({
    material: undefined,
    width: undefined,
    height: undefined,
})
.on(changeCalculateForm, (state, payload) => ({
    ...state,
    [payload.key]: payload.value,
}))
.reset(resetCalculateForm)