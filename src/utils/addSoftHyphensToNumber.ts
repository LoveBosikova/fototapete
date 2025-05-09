export const addSoftHyphensToNumber = (num: number | string): string => {
    const str = String(num);
    return str.replace(/(\d)(?=(\d{3})+$)/g, '$1\u200B');
};