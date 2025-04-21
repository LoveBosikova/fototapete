type ILang = {
    name: string;
    value: string;
}

const LANGS : ILang[] = [
    {name: 'English', value: 'En'}, 
    {name: 'Hrvatski', value: 'Hrv'},
]

const TEST_ORDER = [
    {
        product: {
            id: 0,
            name: `Children's Jungle 01`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: '/fototapete/catalog/01.png',
            imgs: [
                '/fototapete/catalog/01.png',
                '/fototapete/catalog/01.png',
                '/fototapete/catalog/01.png',
                '/fototapete/catalog/01.png'
            ]
        },
        material: 'Smooth Adhesive-based Wallpaper', 
        width: '500',
        height: '100',
        total_m2: '5',
        count: 1,
    },
    {
        product: {
            id: 4,
            name: `Children's Jungle 05`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: '/fototapete/catalog/05.png',
            imgs: [
                '/fototapete/catalog/05.png',
                '/fototapete/catalog/05.png',
                '/fototapete/catalog/05.png',
                '/fototapete/catalog/05.png'
            ]
        },
        material: 'Textured Adhesive-Based Wallpaper (Straw/Sand Texture)', 
        width: '500',
        height: '100',
        total_m2: '5',
        count: 1,
    }
]

export { LANGS, TEST_ORDER }
export type { ILang };