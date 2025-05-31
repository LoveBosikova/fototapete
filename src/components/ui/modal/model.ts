import { createEvent, createStore } from 'effector';

export const openModal = createEvent<string>();
export const closeModal = createEvent();

export const $activeModal = createStore<string | null>(null)
    .on(openModal, (_, modalName) => modalName)
    .on(closeModal, () => null);