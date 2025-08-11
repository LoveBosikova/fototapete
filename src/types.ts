export type IMaterial = {
    id: string | number | null;
    name: string;
    title: string | null;
    points: string[] | [];
    about: string | null;
    price: number | null;
}

export type TFile = {
    name: string;
    type: "image/jpeg" | "image/png" | "application/pdf" | "application/eps" | "image/eps";
    size: number; // в байтах
    data?: string | ArrayBuffer | null; // base64 или бинарные данные
};