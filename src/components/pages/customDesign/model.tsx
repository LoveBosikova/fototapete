import { createEvent, createStore } from "effector";
import { IMaterial, TFile } from "../../../types";
import { TAllowedFile } from "../../ui/buttons/uploadBtn/uploadBtn";

export type TCustomDesignForm = {
    name: string | null;
    surname: string | null;
    phone: string | null;
    email: string | null;
    address: string | null;
    width: string | null;
    height: string | null;
    material: IMaterial | null;
    custom_image: string | null;
    file: TAllowedFile | null; 
}

export type TChangeCustomDesignForm<Key extends keyof TCustomDesignForm> = {
    key: Key
    value: TCustomDesignForm[Key]
}

export const changeCustomDesignForm = createEvent<TChangeCustomDesignForm<keyof TCustomDesignForm>>()
export const resetCustomDesignForm= createEvent();

export const $form_custom_design = createStore<TCustomDesignForm>({
    name: "",
    surname: "",
    phone: "",
    email: "",
    address: "",
    width: null,
    height: null,
    material: null,
    custom_image: null,
    file: null,
})
.on(changeCustomDesignForm, (state, payload) => ({
    ...state,
    [payload.key]: payload.value,
}))
.reset(resetCustomDesignForm);



// Типы для ошибок формы
export type TCustomDesignFormErrors = {
    name?: string | undefined;
    surname?: string | undefined;
    phone?: string | undefined;
    email?: string | undefined;
    address?: string | undefined;
    width?: string | undefined;
    height?: string | undefined;
    material?: string | undefined;
    custom_image?: string | undefined;
    file?: string | undefined;
}

// Тип для изменения ошибки конкретного поля
export type TChangeCustomDesignError<Key extends keyof TCustomDesignFormErrors> = {
    key: Key
    value: string | undefined
}

// События
export const changeCustomDesignError = createEvent<TChangeCustomDesignError<keyof TCustomDesignFormErrors>>();
export const resetCustomDesignErrors = createEvent();

// Стор
export const $custom_design_errors = createStore<TCustomDesignFormErrors>({})
    .on(changeCustomDesignError, (state, payload) => ({
        ...state,
        [payload.key]: payload.value,
    }))
    .reset(resetCustomDesignErrors);