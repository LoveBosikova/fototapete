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

export type TOfferFormErrors = {
    name?: string | undefined;
    phone?: string | undefined;
}

export const changeOfferErrorsForm = createEvent<any>();

export const resetOfferFormErrors = createEvent();

export const $offer_form_errors = createStore<TOfferFormErrors>({})
.on(changeOfferErrorsForm, (state, payload) => ({
    ...state,
    [payload.key]: payload.value,
}))
.reset(resetOfferFormErrors);


export type TOfferForm = {
    name: string | undefined;
    phone: string | undefined;
    mail?: string | undefined;
    request?: string | undefined;
}

export type TChangeOfferForm<Key extends keyof TOfferForm> = {
    key: Key
    value: TOfferForm[Key]
}

export const changeOfferForm = createEvent<TChangeOfferForm<keyof TOfferForm>>();
export const resetOfferForm = createEvent()

export const $offer_form = createStore<TOfferForm>({
    name: undefined,
    phone: undefined,
    mail: undefined,
    request: undefined,
})
.on(changeOfferForm, (state, payload) => ({
    ...state,
    [payload.key]: payload.value,
}))
.reset(resetOfferForm)