const base = import.meta.env.BASE_URL;

const textData = {
    en: {
        mainBillboard: {
            title: 'Transform your interior with our custom photo wallpapers!',
            handwriteTop: 'You imagine',
            handwriteBottom: 'we make it happen!',
            article: 'Looking for something special for your home or business? We offer custom-made photo wallpapers, crafted to fit the dimensions of your walls, ensuring a perfect fit for your space.',
        },
        bestsellers: {
            title: 'Our bestsellers',
            handwriteTop: 'Customers’ choice',
            handwriteBottom: '30+ more categories',
        },
        categories: {
            childrensWallpapers: `Children's wallpapers`,
            mural: 'Mural',
            marble: 'Marble',
        },
        categoriesBlock: {
            title: 'Categories',
            wallpapers: 'Wallpapers',
            films: 'Films',
        },
        transforming: {
            title: 'We specialize in transforming your visions into reality',
            handwriteTop: 'Why choose us?',
            articleTitle1: 'Custom sizes',
            articleText1: 'Each of our wallpapers is made according to your wall measurements, guaranteeing a perfect fit',
            articleTitle2: 'Individual approach',
            articleText2: `If you've found an image you like but it's not in our catalog — send it to us, and we'll help you find a similar option or create something alike`,
            articleTitle3: 'Wide range of designs',
            articleText3: 'We offer the largest selection of styles on the market, helping you create a unique atmosphere in your interior',
            articleTitle4: 'Installation service',
            articleText4: 'Fast and high-quality installation by our specialists',
            articleTitle5: 'Fast delivery',
            articleText5: 'Get your wallpaper in just 3-5 business days!',
        },
        calculate: {
            title: 'You can calculate the cost of your future project',
            calculatorTitle: 'To calculate the price:',
            calculatorDescription: 'Select the type of wallpaper, then enter the width and height of the surface where you want to apply the wallpaper. The price per square meter, total area, as well as the total price of the wallpaper will be displayed below.',
            note1: 'The minimum order price without installation is 50 €. The minimum order price with installation is 110 €.',
            note2: 'The installation price is calculated for the Zagreb area. We also perform installations outside of Zagreb, with additional travel costs applied to the total price. If this is your case, feel free to contact us for further information.',
            note3: 'If you need wallpaper starting from 50 m² you can recieve a commercial offer below',
            materialsPlaceholder: 'Material',
            witdh: 'Width (cm)',
            height: 'Height (cm)',
            priceFor: 'Price for entered dimensions:',
            priceForM: 'Price for m²:',
            priceForMValue: 'EUR',
            totalM: 'Total m²:',
            totalMValue: 'm²',
            wallpaperPrice: 'Wallpaper price:',
            wallpaperPriceValue: 'EUR',
            priceWithInstallation: 'Price with installation:',
            priceWithInstallationValue: 'EUR',
        },
        howToPlace: {
            title: 'How to place your order',
            step1Title: 'Choose design',
            step1Text: 'You can choose wallpaper from our gallery or from the website www.shutterstock.com by entering keywords in the search field (whichever photo you find, send it to us, and we will design it as wallpaper). You can also send us any photo (your own or downloaded from the internet), and we will check if it is suitable for printing.',
            step2Title: 'Enter dimensions',
            step2Text: 'Measure the width and height of the surface where you want to apply the wallpaper and enter the dimensions in cm. We suggest reading all important notes before measuring and looking at the installation guide. Our team is happy to take the measurements for you (this service is chargeable).',
            step3Title: 'We will send you a preview',
            step3Text: 'Before we send the order to production, we will contact you in writing and send you a preview of the chosen wallpaper in the desired dimensions.',
            step4Title: 'Manufacture and delivery',
            step4Text: 'From the moment you confirm your order, the wallpaper will arrive within 3 to 5 working days. An express production service is also available for an additional fee. Delivery is paid separately. The ordered goods will be sent to your address, and there is also an option for personal pickup at our production facility in Zagreb.',
            step5Title: 'Installation',
            step5Text: 'You can hire our installers or apply the wallpaper yourself by following the instructions we have prepared for you.',
        },
        wallpapersInInteriors: {
            title: 'Our wallpaper in interiors',
            handwrite: 'Gallery',
        },
        orderingProcess: {
            title: `We’ve made the ordering process easier for you`,
            handwrite: 'Additional services',
            point1: 'Measurement service',
            point2: 'Individual design development',
            point3: 'Sample printing',
            point4: 'Design visualization',
            point5: 'Installation service',
            point6: 'Gift certificates',
        },
        commonQuestions: {
            title: `Our customers often ask`,
            handwrite: 'Frequently Asked Questions',
            quesions: [{
                question: 'Do you have any additional patterns besides those offered on the website?',
                answer: 'Yes, we do! Contact us with your idea, and we will find additional galleries for you. You can choose wallpaper from our gallery or from the website www.shutterstock.com by entering keywords in the search field (whichever photo you find, send it to us, and we can produce it as wallpaper). You can also send us any photo (your own or downloaded from the internet), and we will check if it is suitable for printing.',
            }, {
                question: 'How many cm more should be added to the existing wall measurements?',
                answer: 'You can fill in the exact dimensions of the wall, and after you place the order, we will add 3-4 cm to the width and height of the wall, as walls are never completely straight, and you may find that you are missing a few mm or cm in some places.',
            }, {
                question: 'Are certain modifications possible on the pattern I choose?',
                answer: 'Usually, yes, but it depends on the pattern itself and the modifications you want. If the changes are minor, we strive to accommodate you and do not charge extra. However, if the changes require more time, the service will be charged additionally in agreement with the designer.',
            }, {
                question: 'How long does it take for the wallpaper to arrive after we place the order?',
                answer:'From the moment you confirm the order, the delivery time is 3 to 5 working days, and the wallpaper will arrive at your address. If you need urgent production, please contact us. We always make an effort to accommodate you and produce the wallpaper outside of standard deadlines if possible. We also ship to other countries.',
            }, {
                question: 'What is the procedure in case of a complaint?',
                answer: 'We accept complaints if the wallpaper has not been applied. If there is an objective reason for your dissatisfaction, please contact us with a brief explanation within the correspondence where we agreed on the order, and we will find a solution as soon as possible! As in any business, mistakes can happen to us as well. Don’t let that ruin your day! Let us know, because in the case of our mistake, we will cover the costs of producing a new wallpaper or refund your money.',
            }],
        },
        subscribe: {
            title: 'Be the first to know about our news and special offers',
            note: 'Leave your details in the form below and we will send you our special offers',
            name: 'Name',
            email: 'Email',
            subscribe: 'Subscribe'
        },
        helpfulArticles: {
            title: 'We also write helpful articles for you',
            handwrite: 'Our blog',
            articles: [
                { text: `5 Tips for Decorating a Children's Room`, img: `${base}article-1.png`, link: '0' },
                { text: 'Budget-Friendly Home Decorating Tricks', img: `${base}article-2.png`, link: '1' },
                { text: 'How to Choose the Perfect Wallpaper?', img: `${base}article-3.png`, link: '2' },
            ]
        },
        footer: {
            titleTop: `Let's keep`,
            titleBottom: 'in touch with us',
            handwrite: 'Contacts',
            links: [
                {
                    linkName: 'Catalog',
                    linkTo: '/catalog'
                },
                {
                    linkName: 'About us',
                    linkTo: '/info'
                },
                {
                    linkName: 'Instructions',
                    linkTo: '/info'
                },
                {
                    linkName: 'Wallpapers',
                    linkTo: '/catalog'
                },
                {
                    linkName: 'Before & after',
                    linkTo: ''
                },
                {
                    linkName: 'Materials',
                    linkTo: '/materials'
                },
                {
                    linkName: 'Other',
                    linkTo: '/blog'
                },
                {
                    linkName: 'Price',
                    linkTo: '/'
                },
                {
                    linkName: 'FAQ',
                    linkTo: '/'
                },
                {
                    linkName: 'Custom design',
                    linkTo: ''
                },
                {
                    linkName: 'Blog',
                    linkTo: '/blog'
                },
            ]
        },
        categoriesPage: {
            title: 'CATALOG',
            breadcrumbles: 'Catalog / Wallpapers',
            otherCategories: 'Other categories',
            colorsSubtitle: 'Colors',
            colors: [
                'White',
                'Pink', 
                'Orange',
                'Red',
                'Black',
                'Grey',
                'Multicolor',
                'Brown',
                'Yellow'
            ],            
            categories: [
                {
                    id: 0,
                    categoryName: '3D',
                    imgSrc: `${base}categories/3D.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                    ]
                },
                {
                    id: 1,
                    categoryName: 'Abstract',
                    imgSrc: `${base}categories/abstract.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 2,
                    categoryName: 'Animals',
                    imgSrc:`${base}categories/animals.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 3,
                    categoryName: 'Bricks',
                    imgSrc: `${base}categories/bricks.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 4,
                    categoryName: 'Chalkboard & Dry erase',
                    imgSrc: `${base}categories/chalkboardDryErase.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 5,
                    categoryName: 'Children’s wallpapers',
                    imgSrc: `${base}categories/childrensWallpapers.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 6,
                    categoryName: 'Christmas',
                    imgSrc: `${base}categories/christmas.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 7,
                    categoryName: 'Cities',
                    imgSrc: `${base}categories/cities.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 8,
                    categoryName: 'Coffee',
                    imgSrc: `${base}categories/coffee.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 9,
                    categoryName: 'Concrete texture',
                    imgSrc: `${base}categories/concreteTexture.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 10,
                    categoryName: 'Flowers',
                    imgSrc: `${base}categories/flowers.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 11,
                    categoryName: 'Food',
                    imgSrc: `${base}categories/food.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 12,
                    categoryName: 'Kitchen',
                    imgSrc: `${base}categories/kitchen.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 13,
                    categoryName: 'Leaves',
                    imgSrc: `${base}categories/leaves.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 14,
                    categoryName: 'Marble',
                    imgSrc: `${base}categories/marble.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 15,
                    categoryName: 'Mural',
                    imgSrc: `${base}categories/abstract.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 16,
                    categoryName: 'Films',
                    imgSrc: `${base}categories/films.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ],
                    imgs: [
                        `${base}childrens/children-1`,
                        `${base}childrens/children-2`,
                        `${base}childrens/children-3`,
                        `${base}childrens/children-4`,
                        `${base}childrens/children-5`,
                        `${base}childrens/children-6`,
                        `${base}childrens/children-7`,
                        `${base}childrens/children-8`,
                        `${base}childrens/children-9`,
                        `${base}childrens/children-10`,
                        `${base}childrens/children-11`,
                        `${base}childrens/children-12`,
                    ]
                },
            ]
        },
        productPage: {
            breadcrumbs: 'Catalog / Wallpapers / ',
            dependOn: 'depending on the type of wallpaper',
            note: 'Adhesive is free!',
            material: 'Material',
            selectMaterial: 'Select a material',
            calculatorTitle: 'Price for entered dimensions',
            priceForM: 'Price for m²:',
            priceForMValue: 'EUR',
            totalM: 'Total m²:',
            totalMValue: '0 m²',
            wallpaperPrice: 'Wallpaper price:',
            wallpaperPriceValue: '0 EUR',
            wallWidth: 'Wall width (cm)',
            wallHeight: 'Wall height (cm)',
            enterValue: 'Enter a value',
            instructions: 'Instructions',
            productionAndDelivery: 'Production and delivery time',
            measureWall: 'How to measure your wall?',
            alsoLikeTitle: 'You may also like',
            customDesignServiceTitle: 'If you want unique wallpaper, we offer a custom design service',
            handwriting: 'Custom design',
            point1: 'You can create custom-made photo wallpapers with UNLIMITED design options with us. Any high-resolution image can be your wallpaper, and we make wallpapers in the dimensions YOU choose!',
            point2: 'Our designers will help you create a special pattern or develop a completely new design based on your wishes. The service is charged, and the price depends on the complexity of the design.',
            checkbox: "I need installation",
            needInsallationNote: "*Installation is paid separately. After placing your order, our manager will contact you to calculate the cost and schedule a convenient installation time.",
            questions: [
                {
                    id: 0,
                    question: 'Materials',
                    answer: 'Smooth adhesive-based'
                },
                {
                    id: 1,
                    question: 'Installation',
                    answer: 'We offer a professional wallpaper installation service to ensure a perfect result. Our experts carefully and efficiently install the wallpaper, ensuring a high-quality finish for your space. Installation is charged separately.'
                },
                {
                    id: 2,
                    question: 'Production and delivery time',
                    answer: 'From the moment you confirm your order, the delivery time is 3 to 5 business days. An express production service is also available for an additional fee.The courier service calculates based on the weight of the package, and it is usually between 6€ - 9€ (Croatia). In addition to delivery within Croatia, we also ship to other countries. Just let us know where you would like the shipment sent, and we will offer you the most favorable and secure shipping option.'
                },
                {
                    id: 3,
                    question: 'Design Visualization',
                    answer: 'Once you place an order on our website, our managers will contact you and send you a design you’ve chosen, adjusted to your dimensions. We also offer a wallpaper visualization on your wall so you can see how the design will look in your space. To get the best results, simply send us a photo of your wall taken with good lighting and from a distance where the entire wall is visible. For the best outcome, please ensure there are no pictures or posters on the wall. Based on your photo, we will create a visualization with your chosen wallpaper, allowing you to assess how the pattern and colors will fit into your room.'
                },
                {
                    id: 4,
                    question: 'How to measure your wall?',
                    answer: 'We have prepared instructions for you on how to measure your wall in different situations. If you cannot find the instructions you need here and require assistance, please contact us and we will be happy to help you.'
                },
            ],
        },
        catalog: {
        products: [
            {
            id: 0,
            name: `Children's Jungle 01`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: `${base}catalog/01.png`,
            imgs: [
                `${base}catalog/01.png`,
                `${base}catalog/01.png`,
                `${base}catalog/01.png`,
                `${base}catalog/01.png`
            ]
            },
            {
            id: 1,
            name: `Children's Jungle 02`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: `${base}catalog/02.png`,
            imgs: [
                `${base}catalog/02.png`,
                `${base}catalog/02.png`,
                `${base}catalog/02.png`,
                `${base}catalog/02.png`
            ]
            },
            {
            id: 2,
            name: `Children's Jungle 03`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: `${base}catalog/03.png`,
            imgs: [
                `${base}catalog/03.png`,
                `${base}catalog/03.png`,
                `${base}catalog/03.png`,
                `${base}catalog/03.png`
            ]
            },
            {
            id: 3,
            name: `Children's Jungle 04`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: `${base}catalog/04.png`,
            imgs: [
                `${base}catalog/04.png`,
                `${base}catalog/04.png`,
                `${base}catalog/04.png`,
                `${base}catalog/04.png`
            ]
            },
            {
            id: 4,
            name: `Children's Jungle 05`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: `${base}catalog/05.png`,
            imgs: [
                `${base}catalog/05.png`,
                `${base}catalog/05.png`,
                `${base}catalog/05.png`,
                `${base}catalog/05.png`
            ]
            },
            {
            id: 5,
            name: `Children's Jungle 06`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: `${base}catalog/06.png`,
            imgs: [
                `${base}catalog/06.png`,
                `${base}catalog/06.png`,
                `${base}catalog/06.png`,
                `${base}catalog/06.png`
            ]
            },
            {
            id: 6,
            name: `Children's Jungle 07`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: `${base}catalog/07.png`,
            imgs: [
                `${base}catalog/07.png`,
                `${base}catalog/07.png`,
                `${base}catalog/07.png`,
                `${base}catalog/07.png`
            ]
            },
            {
            id: 7,
            name: `Children's Jungle 08`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: `${base}catalog/08.png`,
            imgs: [
                `${base}catalog/08.png`,
                `${base}catalog/08.png`,
                `${base}catalog/08.png`,
                `${base}catalog/08.png`
            ]
            },
            {
            id: 8,
            name: `Children's Jungle 09`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: `${base}catalog/09.png`,
            imgs: [
                `${base}catalog/09.png`,
                `${base}catalog/09.png`,
                `${base}catalog/09.png`,
                `${base}catalog/09.png`
            ]
            },
            {
            id: 9,
            name: `Children's Jungle 10`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: `${base}catalog/10.png`,
            imgs: [
                `${base}catalog/10.png`,
                `${base}catalog/10.png`,
                `${base}catalog/10.png`,
                `${base}catalog/10.png`
            ]
            },
            {
            id: 10,
            name: `Children's Jungle 11`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: `${base}catalog/11.png`,
            imgs: [
                `${base}catalog/11.png`,
                `${base}catalog/11.png`,
                `${base}catalog/11.png`,
                `${base}catalog/11.png`
            ]
            },
            {
            id: 11,
            name: `Children's Jungle 12`,
            category: 'Children`s wallpapers',
            metrics: 'from 16€ / m² — 41€ / m²',
            img: `${base}catalog/12.png`,
            imgs: [
                `${base}catalog/12.png`,
                `${base}catalog/12.png`,
                `${base}catalog/12.png`,
                `${base}catalog/12.png`
            ]
            }
        ]
        },
        cartPage: {
            noCartItems: "Your shopping cart is currently empty. Choose wallpaper to your taste in the catalog.",
            note:'BEFORE PLACING THE ORDER, WE WILL SEND YOU AN IMAGE OF THE SELECTED DESIGN IN THE REQUIRED DIMENSIONS TO THE PROVIDED EMAIL ADDRESS. WE WILL ASK YOU TO CONFIRM VIA EMAIL WHETHER THE WALLPAPER DESIGN MEETS YOUR EXPECTATIONS.',
            title_product: 'Product',
            title_price: 'Price',
            title_amount: 'Amount',
            title_total: 'Total',
            cart_total_in_cart: 'Total in cart',
            delivery: 'Delivery', 
            cart_note: 'For cash-on-delivery orders, you pay the order cost calculated on the website plus shipping expenses. Unfortunately, we do not have exact information on the shipping costs. The courier service calculates them based on the parcel`s weight, and they are usually between 5 and 10 euros.',
            discount: 'Discount',
        },
        infoPage: {
            main_title: "At Fototapete Zagreb we specialize in transforming your visions into reality",
            main_handwritind: "You imagine — we make it happen",
            main_localized: "While located in Zagreb, we proudly serve customers across Croatia and Europe, having already brought joy to thousands of people with our custom-made solutions",
            mission_title: "Our mission is to help you transform any space into something truly personal and unique",
            mission_card1: "Whether it's a home",
            mission_card2: "business",
            mission_card3: "or creative space",
            process_title: "From start to finish, we`re here to support you, making the process easy and enjoyable",
            process_handwriting: "Additional services",
            process_measurement_service: "Measurement service",
            process_design_creation: "Custom design creation",
            process_sample_printing: "Sample Printing",
            process_design_visualization: "Design Visualization",
            process_installation: "Installation",
            process_gift_certificates: "Gift certificates",
            in_media_title: "Foto tapete in media"
        },
        orderPage: {
            cart_note_installation: "IF YOU WANT INSTALLATION: At the bottom of the form, please indicate that you would like our team to install the wallpaper. Provide an email address or WhatsApp number where we can reach you in writing to arrange the details. The current price does not include the installation service.",
            private: "Private",
            company: "Company",
            contact_information: "Contact information",
            email: "E-mail",
            phone_number: "Phone number",
            shippnig_information: "Shippnig information",
            first_name: "First name",
            last_name: "Last name",
            country: "Country",
            city: "City",
            address: "Address (street, house number and apartment)",
            postal_code: "Postal code",
            district: "District (optional)",
            additional_information: "Additional information",
            order_notes: "Order Notes (optional)",
            invoice_address: "Use other invoice address",
            your_order: "Your order",
            product: "Product",
            total: "Total",
            delivery: "Delivery",
            order_note: "For cash-on-delivery orders, you pay the order cost calculated on the website plus shipping expenses. Unfortunately, we do not have exact information on the shipping costs. The courier service calculates them based on the parcel's weight, and they are usually between 5 and 10 euros.",
            discount: "Discount",
            discount_code: "Discount code",
            promo_note: "If you have a promo code or certificate, enter it in the field below",
            personal_info_note: "Your personal information will be used to support your experience on this website and for other purposes described in our",
            width: "Width (cm):",
            height: "Height (cm):",
            total_m2: "Total m2:",
        },
        materialsPage: {
            main_title: "We use eco-friendly materials for the comfort and aesthetics of your home",
            main_sub_left: "Our range includes materials from standard to self-adhesive wallpapers and those with textures, such as straw, sand and canvas. Each can be customized with your choice of images and designs, allowing you to create the perfect atmosphere in your space.",
            main_sub_right: "And most importantly, every material is eco-friendly, without any harmful additives or emissions. While we aim to make your home look aesthetically pleasing, health always comes first.",
            main_sub_right_orange: "Discover more about the materials and textures we offer below.",
            materisla_title: "Materials in our product range",
            smooth_adhesive_based: {
                id: 1,
                name: "Smooth Adhesive-based Wallpaper",
                price: 22,
                title: "Smooth Adhesive-based Wallpaper - €22/m²",
                points: [
                    "application with adhesive", 
                    "smooth matt surface", 
                    "dry cleaning", 
                    "adhesive is free",
                ],
                about: "This wallpaper is printed on matte blueback paper. It has a smooth surface and is the most affordable option in our range. The wallpaper is suitable for flat walls (it cannot be applied using a textured technique)."
            },
            smooth_self_adhesive: {
                id: 2,
                name: "Smooth Self-Adhesive Wallpaper",
                price: 27.5,
                title: "Smooth Self-Adhesive Wallpaper - €27,5/m²",
                points: [
                    "self-adhesive", 
                    "smooth matt surface", 
                    "cleaning with damp cloth", 
                    "no additional adhesive required",
                ],
                about: "This wallpaper is printed on self-adhesive PVC matte foil. It is suitable for all flat and smooth surfaces."
            },
            textured_adhesive_based: {
                id: 3,
                name: "Textured Adhesive-Based Wallpaper (Straw/Sand Texture)",
                title: "Textured Adhesive-Based Wallpaper (Straw/Sand Texture) - €32/m²",
                price: 32,
                points: [
                    "application with adhesive", 
                    "textured surface — straw/sand texture", 
                    "dry cleaning", 
                    "adhesive is free",
                ],
                about: "The fine texture of the paper gives it a more luxurious appearance in any space. It`s an excellent solution for both commercial spaces and residential areas, including bedrooms and living rooms."
            },
            textured_self_adhesive: {
                id: 4,
                name: "Textured Self-Adhesive Wallpaper",
                price: 45,
                title: "Textured Self-Adhesive Wallpaper — €45/m²",
                points: [
                    "self-adhesive", 
                    "textured surface — similar to canvas", 
                    "cleaning with damp cloth", 
                    "no additional adhesive required",
                ],
                about: "This type of wallpaper is printed on self-adhesive PVC matte foil with a subtle texture, similar to a painter`s canvas."
            },
            self_adhesive_smooth_with_lamination: {
                id: 5,
                name: "TSelf-Adhesive Smooth Wallpapers with Lamination",
                price: 30,
                title: "TSelf-Adhesive Smooth Wallpapers with Lamination — 30 €/m²",
                points: [
                    "self-adhesive", 
                    "smooth matt surface", 
                    "waterproof", 
                    "resistant to scratching, scuffing and etc",
                    "no additional adhesive required",
                    "ideal for dark wallpapers",
                ],
                about: "These are smooth matte PVC wallpapers with an additional protective layer of transparent lamination."
            },
            concrete_texture: {
                id: 6,
                name: "Exclusive textured self-adhesive (concrete texture)",
                price: 58,
                title: "Exclusive textured self-adhesive (concrete texture) — €58/m²",
                points: [
                    "self-adhesive", 
                    "textured surface: concrete (veneziano)", 
                    "cleaning with damp cloth", 
                    "no additional adhesive required",
                ],
                about: "Wallpaper is printed on a self-adhesive matte PVC film with the finest 3D texture. This is the thickest and strongest material in our offer."
            },
            self_adhesive_smooth_with_extra_protection: {
                id: 7,
                name: "Self-Adhesive Smooth Wallpapers with Extra Protection (for Kitchens and Bathrooms)",
                price: 45,
                title: "Self-Adhesive Smooth Wallpapers with Extra Protection (for Kitchens and Bathrooms) — €45/m²",
                points: [
                    "self-adhesive with reinforced adhesive", 
                    "smooth matt surface", 
                    "waterproof", 
                    "resistant to steam, strong chemicals, and rough cleaning",
                    "no additional adhesive required",
                    "ideal for kitchens and bathrooms",
                ],
                about: ""
            },
        },
        form_contact_us: {
            title: "Leave your details or contact us for a free consultation on wallpaper material selection",
            text: "Our experts will help you decide and choose the ideal material for your interior design.",
            name: "Name",
            mail: "E-mail",
            phone: "Phone number",
            note: "By clicking «Send» you agree with the"
        },
        btns: {
            catalog:'Catalog',
            individualOrder: 'Individual order',
            categories: 'View all categories',
            loadMore: 'Load more',
            goToCategory: 'Go to category',
            getOffer: 'Get an offer',
            viewMore: 'View more',
            learnMore: 'Learn more',
            subscribe: 'Subscribe',
            viewAllArticles: 'View all articles',
            calculateThePrice: 'Calculate the price',
            addToCart: 'Add to cart',
            goToCheckout: 'Go to checkout',
            preview_dimensions: "Preview in your dimensions",
            order: "Order",
            readMore: "Read more",
            send: "Send",
        },
        materials: [
            {
                id: 1,
                name: "Smooth Adhesive-based Wallpaper",
                title: "Smooth Adhesive-based Wallpaper - €22/m²",
                price: 22,
                points: [
                    "application with adhesive", 
                    "smooth matt surface", 
                    "dry cleaning", 
                    "adhesive is free",
                ],
                about: "This wallpaper is printed on matte blueback paper. It has a smooth surface and is the most affordable option in our range. The wallpaper is suitable for flat walls (it cannot be applied using a textured technique)."
            },
            {
                id: 2,
                name: "Smooth Self-Adhesive Wallpaper",
                price: 27.5,
                title: "Smooth Self-Adhesive Wallpaper - €27,5/m²",
                points: [
                    "self-adhesive", 
                    "smooth matt surface", 
                    "cleaning with damp cloth", 
                    "no additional adhesive required",
                ],
                about: "This wallpaper is printed on self-adhesive PVC matte foil. It is suitable for all flat and smooth surfaces."
            },
            {
                id: 3,
                name: "Textured Adhesive-Based Wallpaper (Straw/Sand Texture)",
                price: 32,
                title: "Textured Adhesive-Based Wallpaper (Straw/Sand Texture) - €32/m²",
                points: [
                    "application with adhesive", 
                    "textured surface — straw/sand texture", 
                    "dry cleaning", 
                    "adhesive is free",
                ],
                about: "The fine texture of the paper gives it a more luxurious appearance in any space. It`s an excellent solution for both commercial spaces and residential areas, including bedrooms and living rooms."
            },
            {
                id: 4,
                name: "Textured Self-Adhesive Wallpaper",
                price: 45,
                title: "Textured Self-Adhesive Wallpaper — €45/m²",
                points: [
                    "self-adhesive", 
                    "textured surface — similar to canvas", 
                    "cleaning with damp cloth", 
                    "no additional adhesive required",
                ],
                about: "This type of wallpaper is printed on self-adhesive PVC matte foil with a subtle texture, similar to a painter`s canvas."
            },
            {
                id: 5,
                name: "TSelf-Adhesive Smooth Wallpapers with Lamination",
                price: 30,
                title: "TSelf-Adhesive Smooth Wallpapers with Lamination — 30 €/m²",
                points: [
                    "self-adhesive", 
                    "smooth matt surface", 
                    "waterproof", 
                    "resistant to scratching, scuffing and etc",
                    "no additional adhesive required",
                    "ideal for dark wallpapers",
                ],
                about: "These are smooth matte PVC wallpapers with an additional protective layer of transparent lamination."
            },
            {
                id: 6,
                name: "Exclusive textured self-adhesive (concrete texture)",
                price: 58,
                title: "Exclusive textured self-adhesive (concrete texture) — €58/m²",
                points: [
                    "self-adhesive", 
                    "textured surface: concrete (veneziano)", 
                    "cleaning with damp cloth", 
                    "no additional adhesive required",
                ],
                about: "Wallpaper is printed on a self-adhesive matte PVC film with the finest 3D texture. This is the thickest and strongest material in our offer."
            },
            {
                id: 7,
                name: "Self-Adhesive Smooth Wallpapers with Extra Protection (for Kitchens and Bathrooms)",
                price: 45,
                title: "Self-Adhesive Smooth Wallpapers with Extra Protection (for Kitchens and Bathrooms) — €45/m²",
                points: [
                    "self-adhesive with reinforced adhesive", 
                    "smooth matt surface", 
                    "waterproof", 
                    "resistant to steam, strong chemicals, and rough cleaning",
                    "no additional adhesive required",
                    "ideal for kitchens and bathrooms",
                ],
                about: ""
            },
        ],
        favourites: {
            title: "Favourites fototapete",
            noFavourites: "Favorites are currently empty. Choose designs to your taste in the catalog!"
        },
        errors: {
            selectMaterial: "Select material here",
            enterHeight: "Enter height here",
            enterWeight: "Enter weight here",
        },
        modals: {
            modal: {
                title: 'Measurement service',
                text: `If you're not sure how to properly measure your walls or want to avoid potential mistakes, we offer a measurement service by a professional. Our technician will come to your address, take all necessary measurements, and advise you on design options. The service is charged, and the price depends on your location and is available upon request. We offer measurement services in Zagreb and the surrounding area.`,
            },
            subscribeSuccess: {
                title: "Everything went well",
                text: "Thank you for subscribing!",
            }
        },
        blogPage: {
            header: "Helpful article"
        },
        articles: [
            {   
                id: 0,
                titleImg: `${base}catalog/01.png`,
                title: "5 Tips for Decorating a Children's Room",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                text: [
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                        photoAfter: `${base}catalog/02.png`,
                    },
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                    },
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoAfter: `${base}catalog/02.png`,
                    }
                ]
            },
            {
                id: 1,
                titleImg: `${base}catalog/01.png`,
                title: "Budget-Friendly Home Decorating Tricks",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                text: [
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                        photoAfter: `${base}catalog/02.png`,
                    },
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                    },
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoAfter: `${base}catalog/02.png`,
                    }
                ]
            },
            {
                id: 1,
                titleImg: `${base}catalog/01.png`,
                title: "How to Choose the Perfect Wallpaper?",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                text: [
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                        photoAfter: `${base}catalog/02.png`,
                    },
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                        photoAfter: `${base}catalog/02.png`,
                    },
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                        // photoAfter: `${base}catalog/02.png`,
                    }
                ]
            }
        ]
    },
    hrv: {
        mainBillboard: {
            title: 'Transformirajte svoj interijer s našim personaliziranim fototapetama!',
            handwriteTop: 'Vi zamišljate',
            handwriteBottom: 'mi ostvarujemo!',
            article: 'Tražite nešto posebno za svoj dom ili poslovni prostor? Nudimo fototapete po mjeri, prilagođene dimenzijama vaših zidova za savršen izgled vašeg prostora.',
        },
        bestsellers: {
            title: 'Naši bestseleri',
            handwriteTop: 'Izbor kupaca',
            handwriteBottom: 'Više od 30 kategorija',
        },
        categories: {
            childrensWallpapers: `Dječje tapete`,
            mural: 'Murale',
            marble: 'Mramor',
        },
        categoriesBlock: {
            title: 'Kategorije',
            wallpapers: 'Tapete',
            films: 'Folije',
        },
        transforming: {
            title: 'Specijalizirani smo za pretvaranje vaših vizija u stvarnost',
            handwriteTop: 'Zašto odabrati nas?',
            articleTitle1: 'Prilagođene dimenzije',
            articleText1: 'Svaka naša fototapeta izrađuje se prema mjerama vašeg zida, što osigurava savršeno uklapanje',
            articleTitle2: 'Individualni pristup',
            articleText2: `Ako ste pronašli sliku koja vam se sviđa, ali je nema u našem katalogu – pošaljite nam je, pokušat ćemo je pronaći u visokoj kvaliteti,ako to nije moguće, poslat ćemo vam slične opcije`,
            articleTitle3: 'Širok izbor dizajna',
            articleText3: 'Nudimo najveći izbor dizajna na tržištu, omogućujući vam stvaranje jedinstvene atmosfere u vašem interijeru',
            articleTitle4: 'Usluga montaže',
            articleText4: 'Brza i kvalitetna montaža od naših stručnjaka',
            articleTitle5: 'Brza dostava',
            articleText5: 'Dobijte svoju narudžbu u samo 3-5 radnih dana!',
        },
        calculate: {
            title: 'Možete izračunati cijenu svog budućeg projekta',
            calculatorTitle: 'Za izračun cijene:',
            calculatorDescription: 'Odaberite vrstu tapete, zatim unesite širinu i visinu površine na koju želite staviti tapetu. Ispod će biti prikazana cijena kvadratnog metra, ukupna površina, kao i ukupna cijena tapeta.',
            note1: 'Minimalna cijena narudžbe bez montaže je 50 €. Minimalna cijena narudžbe s montažom je 110 €.',
            note2: 'Cijena montaže je obračunata za područje Zagreba. Montaže izvodimo i izvan Zagreba, uz dodatne troškove puta na ukupnu cijenu. Ako je ovo vaš slučaj, slobodno nas kontaktirajte za dodatne informacije.',
            note3: 'Ako trebate tapete već od 50 m², ispod možete dobiti komercijalnu ponudu',
            materialsPlaceholder: 'Materijal',
            witdh: 'širina (cm)',
            height: 'Visina (cm)',
            priceFor: 'Cijena za unesene dimenzije:',
            priceForM: 'Cijena za m²:',
            priceForMValue: 'EUR',
            totalM: 'Ukupno m²:',
            totalMValue: 'm²',
            wallpaperPrice: 'Cijena tapeta:',
            wallpaperPriceValue: 'EUR',
            priceWithInstallation: 'Cijena sa montažom:',
            priceWithInstallationValue: 'EUR',
        },
        howToPlace: {
            title: 'Kako naručiti',
            step1Title: 'Odaberite dizajn',
            step1Text: 'Možete odabrati tapete iz naše galerije ili s web stranice www.shutterstock.com unosom ključnih riječi u polje za pretragu (bilo koju fotografiju koju pronađete, pošaljite nam, a mi ćemo je prilagoditi za tapete). Također nam možete poslati bilo koju fotografiju (vlastitu ili preuzetu s interneta), a mi ćemo provjeriti je li prikladna za tisak.',
            step2Title: 'Unesite dimenzije',
            step2Text: 'Izmjerite širinu i visinu površine na koju želite postaviti tapete i unesite dimenzije u cm. Unesite točne dimenzije zida, a mi ćemo dodati 3-5 cm viška kako bismo osigurali da tapete savršeno odgovaraju. Ako niste sigurni kako točno izmjeriti zid, pogledajte upute ili nam se slobodno obratite. Naš tim može preuzeti mjerenje umjesto vas (ova usluga se naplaćuje).',
            step3Title: 'Poslat ćemo vam pregled',
            step3Text: 'Prije slanja narudžbe u proizvodnju kontaktirat ćemo Vas pisanim putem i poslati Vam pregled odabrane tapete u željenim dimenzijama.',
            step4Title: 'Proizvodnja i dostava',
            step4Text: 'Od trenutka kada potvrdite narudžbu, tapeta će stići u roku od 3 do 5 radnih dana. Usluga ekspresne proizvodnje također je dostupna uz dodatnu naknadu. Dostava se posebno plaća. Naručenu robu šaljemo na Vašu adresu, a postoji i mogućnost osobnog preuzimanja u našem proizvodnom pogonu u Zagrebu.',
            step5Title: 'Montaža',
            step5Text: 'Možete naručiti našu uslugu montaže (usluga se naplaćuje) ili sami postaviti tapete prema detaljnim uputama koje smo pripremili za vas.',
        },
        wallpapersInInteriors: {
            title: 'Naše tapete u interijerima',
            handwrite: 'Galerija',
        },
        orderingProcess: {
            title: `Olakšali smo vam proces naručivanja`,
            handwrite: 'Dodatne usluge',
            point1: 'Usluga izmjere',
            point2: 'Izrada individualnog dizajna',
            point3: 'Tisak uzoraka',
            point4: 'Vizualizacija dizajna',
            point5: 'Usluga montaže',
            point6: 'Poklon bonovi',
        },
        commonQuestions: {
            title: `Naši kupci često pitaju`,
            handwrite: 'Često postavljana pitanja',
            quesions: [{
                question: 'Imate li dodatne uzorke osim onih ponuđenih na web stranici?',
                answer: 'Da, naravno! Kontaktirajte nas sa svojom idejom, a mi ćemo za vas pronaći dodatne galerije. Možete odabrati tapete iz naše galerije ili s web stranice www.shutterstock.com unosom ključnih riječi u polje za pretragu (bilo koju fotografiju koju pronađete, pošaljite nam i možemo je izraditi kao tapetu). Također nam možete poslati bilo koju fotografiju (vlastitu ili preuzetu s interneta), a mi ćemo provjeriti je li pogodna za printanje.',
            }, {
                question: 'Koliko cm treba dodati postojećim mjerama zida?',
                answer: 'Možete unijeti točne dimenzije svog zida, a nakon što potvrdite narudžbu, dodat ćemo 3-4 cm na širinu i visinu. Zidovi nikada nisu potpuno ravni, pa će vam ovaj dodatak osigurati da ne nedostaje nekoliko milimetara ili centimetara na nekim dijelovima..',
            }, {
                question: 'Je li moguće napraviti određene izmjene na odabranom uzorku?',
                answer: 'Obično da, ali to ovisi o samom uzorku i željenim izmjenama. Ako su promjene manje, trudimo se prilagoditi ih bez dodatne naknade. Međutim, ako izmjene zahtijevaju više vremena, usluga će se dodatno naplatiti u dogovoru s dizajnerom.',
            }, {
                question: 'Koliko je potrebno da tapeta stigne nakon što naručimo?',
                answer:'Od trenutka kada potvrdite narudžbu, vrijeme dostave je od 3 do 5 radnih dana, a tapete će stići na vašu adresu. Ako vam je potrebna hitna proizvodnja, slobodno nas kontaktirajte. Uvijek se trudimo prilagoditi vašim potrebama i proizvesti tapete izvan standardnih rokova, ako je moguće. Također šaljemo u druge zemlje.',
            }, {
                question: 'Koja je procedura u slučaju reklamacije?',
                answer: 'Prihvaćamo reklamacije ako tapete nisu postavljene. Ako postoji objektivan razlog za vašu nezadovoljstvo, slobodno nas kontaktirajte s kratkim objašnjenjem u dopisivanju u kojem smo dogovorili narudžbu i mi ćemo što prije pronaći rješenje! Kao i u svakom poslovanju, greške se mogu dogoditi i nama. Ne dopustite da to pokvari vaš dan! Javite nam, jer u slučaju naše greške, snosit ćemo troškove proizvodnje novih tapeta ili vam vratiti novac.',
            }],
        },
        subscribe: {
            title: 'Budite prvi koji će saznati naše novosti i posebne ponude',
            note: 'Ostavite svoje podatke u obrascu ispod i poslat ćemo vam naše posebne ponude',
            name: 'Ime',
            email: 'Email',
            subscribe: 'Pretplatite se'
        },
        helpfulArticles: {
            title: 'Također pišemo korisne članke za vas',
            handwrite: 'Naš blog',
            articles: [
                {
                    text: `5 savjeta za uređenje dječje sobe`, 
                    img: `${base}article-1.png`, 
                    link: '0'},
                {
                    text: 'Povoljni trikovi za uređenje doma', 
                    img: `${base}article-2.png`, 
                    link: '1'},
                {
                    text: 'Kako odabrati savršenu tapetu?', 
                    img: `${base}article-3.png`, 
                    link: '2'},
            ]
        },
        footer: {
            titleTop: `Ostanimo u`,
            titleBottom: 'kontaktu s nama',
            handwrite: 'Kontakti',
            links: [
                {
                    linkName: 'Katalog',
                    linkTo: '/catalog'
                },
                {
                    linkName: 'O nama',
                    linkTo: '/info'
                },
                {
                    linkName: 'Upute',
                    linkTo: '/info'
                },
                {
                    linkName: 'Tapete',
                    linkTo: '/catalog'
                },
                {
                    linkName: 'Prije & poslije',
                    linkTo: ''
                },
                {
                    linkName: 'Materijali',
                    linkTo: '/materials'
                },
                {
                    linkName: 'Ostalo',
                    linkTo: '/blog'
                },
                {
                    linkName: 'Cijena',
                    linkTo: '/'
                },
                {
                    linkName: 'FAQ',
                    linkTo: '/'
                },
                {
                    linkName: 'Dizajn po narudžbi',
                    linkTo: ''
                },
                {
                    linkName: 'Blog',
                    linkTo: '/blog'
                },
            ]
        },
            categoriesPage: {
            title: 'CATALOG',
            breadcrumbles: 'Catalog / Wallpapers',
            otherCategories: 'Other categories',
            colorsSubtitle: 'Colors',
            colors: [
                'White',
                'Pink', 
                'Orange',
                'Red',
                'Black',
                'Grey',
                'Multicolor',
                'Brown',
                'Yellow'
            ],            
            categories: [
                {
                    id: 0,
                    categoryName: '3D',
                    imgSrc: `${base}categories/3D.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                    ]
                },
                {
                    id: 1,
                    categoryName: 'Abstract',
                    imgSrc: `${base}categories/abstract.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 2,
                    categoryName: 'Animals',
                    imgSrc:`${base}categories/animals.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 3,
                    categoryName: 'Bricks',
                    imgSrc: `${base}categories/bricks.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 4,
                    categoryName: 'Chalkboard & Dry erase',
                    imgSrc: `${base}categories/chalkboardDryErase.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 5,
                    categoryName: 'Children’s wallpapers',
                    imgSrc: `${base}categories/childrensWallpapers.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 6,
                    categoryName: 'Christmas',
                    imgSrc: `${base}categories/christmas.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 7,
                    categoryName: 'Cities',
                    imgSrc: `${base}categories/cities.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 8,
                    categoryName: 'Coffee',
                    imgSrc: `${base}categories/coffee.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 9,
                    categoryName: 'Concrete texture',
                    imgSrc: `${base}categories/concreteTexture.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 10,
                    categoryName: 'Flowers',
                    imgSrc: `${base}categories/flowers.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 11,
                    categoryName: 'Food',
                    imgSrc: `${base}categories/food.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 12,
                    categoryName: 'Kitchen',
                    imgSrc: `${base}categories/kitchen.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 13,
                    categoryName: 'Leaves',
                    imgSrc: `${base}categories/leaves.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 14,
                    categoryName: 'Marble',
                    imgSrc: `${base}categories/marble.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 15,
                    categoryName: 'Mural',
                    imgSrc: `${base}categories/abstract.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ]
                },
                {
                    id: 16,
                    categoryName: 'Films',
                    imgSrc: `${base}categories/films.png`,
                    subCategories: [
                        'Animals',
                        'Cartoon heroes',
                        'Dinosaurs',
                        'Geographic maps',
                        'Heroes',
                        'Jungle',
                        'Mountains',
                        'Other',
                        'Princesses',
                        'Sky',
                        'Space',
                        'Sports',
                        'Underwater world',
                        'Unicorns',
                ],
                    imgs: [
                        `${base}childrens/children-1`,
                        `${base}childrens/children-2`,
                        `${base}childrens/children-3`,
                        `${base}childrens/children-4`,
                        `${base}childrens/children-5`,
                        `${base}childrens/children-6`,
                        `${base}childrens/children-7`,
                        `${base}childrens/children-8`,
                        `${base}childrens/children-9`,
                        `${base}childrens/children-10`,
                        `${base}childrens/children-11`,
                        `${base}childrens/children-12`,
                    ]
                },
            ]
        },
        catalog: {
            products: [
                    {
                    id: 0,
                    name: `Children's Jungle 01`,
                    category: 'Children`s wallpapers',
                    metrics: 'from 16€ / m² — 41€ / m²',
                    img: `${base}catalog/01.png`,
                    imgs: [
                        `${base}catalog/01.png`,
                        `${base}catalog/01.png`,
                        `${base}catalog/01.png`,
                        `${base}catalog/01.png`
                    ]
                    },
                    {
                    id: 1,
                    name: `Children's Jungle 02`,
                    category: 'Children`s wallpapers',
                    metrics: 'from 16€ / m² — 41€ / m²',
                    img: `${base}catalog/02.png`,
                    imgs: [
                        `${base}catalog/02.png`,
                        `${base}catalog/02.png`,
                        `${base}catalog/02.png`,
                        `${base}catalog/02.png`
                    ]
                    },
                    {
                    id: 2,
                    name: `Children's Jungle 03`,
                    category: 'Children`s wallpapers',
                    metrics: 'from 16€ / m² — 41€ / m²',
                    img: `${base}catalog/03.png`,
                    imgs: [
                        `${base}catalog/03.png`,
                        `${base}catalog/03.png`,
                        `${base}catalog/03.png`,
                        `${base}catalog/03.png`
                    ]
                    },
                    {
                    id: 3,
                    name: `Children's Jungle 04`,
                    category: 'Children`s wallpapers',
                    metrics: 'from 16€ / m² — 41€ / m²',
                    img: `${base}catalog/04.png`,
                    imgs: [
                        `${base}catalog/04.png`,
                        `${base}catalog/04.png`,
                        `${base}catalog/04.png`,
                        `${base}catalog/04.png`
                    ]
                    },
                    {
                    id: 4,
                    name: `Children's Jungle 05`,
                    category: 'Children`s wallpapers',
                    metrics: 'from 16€ / m² — 41€ / m²',
                    img: `${base}catalog/05.png`,
                    imgs: [
                        `${base}catalog/05.png`,
                        `${base}catalog/05.png`,
                        `${base}catalog/05.png`,
                        `${base}catalog/05.png`
                    ]
                    },
                    {
                    id: 5,
                    name: `Children's Jungle 06`,
                    category: 'Children`s wallpapers',
                    metrics: 'from 16€ / m² — 41€ / m²',
                    img: `${base}catalog/06.png`,
                    imgs: [
                        `${base}catalog/06.png`,
                        `${base}catalog/06.png`,
                        `${base}catalog/06.png`,
                        `${base}catalog/06.png`
                    ]
                    },
                    {
                    id: 6,
                    name: `Children's Jungle 07`,
                    category: 'Children`s wallpapers',
                    metrics: 'from 16€ / m² — 41€ / m²',
                    img: `${base}catalog/07.png`,
                    imgs: [
                        `${base}catalog/07.png`,
                        `${base}catalog/07.png`,
                        `${base}catalog/07.png`,
                        `${base}catalog/07.png`
                    ]
                    },
                    {
                    id: 7,
                    name: `Children's Jungle 08`,
                    category: 'Children`s wallpapers',
                    metrics: 'from 16€ / m² — 41€ / m²',
                    img: `${base}catalog/08.png`,
                    imgs: [
                        `${base}catalog/08.png`,
                        `${base}catalog/08.png`,
                        `${base}catalog/08.png`,
                        `${base}catalog/08.png`
                    ]
                    },
                    {
                    id: 8,
                    name: `Children's Jungle 09`,
                    category: 'Children`s wallpapers',
                    metrics: 'from 16€ / m² — 41€ / m²',
                    img: `${base}catalog/09.png`,
                    imgs: [
                        `${base}catalog/09.png`,
                        `${base}catalog/09.png`,
                        `${base}catalog/09.png`,
                        `${base}catalog/09.png`
                    ]
                    },
                    {
                    id: 9,
                    name: `Children's Jungle 10`,
                    category: 'Children`s wallpapers',
                    metrics: 'from 16€ / m² — 41€ / m²',
                    img: `${base}catalog/10.png`,
                    imgs: [
                        `${base}catalog/10.png`,
                        `${base}catalog/10.png`,
                        `${base}catalog/10.png`,
                        `${base}catalog/10.png`
                    ]
                    },
                    {
                    id: 10,
                    name: `Children's Jungle 11`,
                    category: 'Children`s wallpapers',
                    metrics: 'from 16€ / m² — 41€ / m²',
                    img: `${base}catalog/11.png`,
                    imgs: [
                        `${base}catalog/11.png`,
                        `${base}catalog/11.png`,
                        `${base}catalog/11.png`,
                        `${base}catalog/11.png`
                    ]
                    },
                    {
                    id: 11,
                    name: `Children's Jungle 12`,
                    category: 'Children`s wallpapers',
                    metrics: 'from 16€ / m² — 41€ / m²',
                    img: `${base}catalog/12.png`,
                    imgs: [
                        `${base}catalog/12.png`,
                        `${base}catalog/12.png`,
                        `${base}catalog/12.png`,
                        `${base}catalog/12.png`
                    ]
                    }
                ]
                    },
        productPage: {
            breadcrumbs: 'Katalog / Tapete / ',
            dependOn: 'depending on the type of wallpaper',
            note: 'Adhesive is free!',
            material: 'Materijal',
            selectMaterial: 'Select a material',
            instructions: 'Upute',
            productionAndDelivery: 'Vrijeme izrade i dostave',
            measureWall: 'Kako izmjeriti svoj zid?',
            calculatorTitle: 'Price for entered dimensions',
            priceForM: 'Price for m²:',
            priceForMValue: 'EUR',
            totalM: 'Total m²:',
            totalMValue: '0 m²',
            wallpaperPrice: 'Wallpaper price:',
            wallpaperPriceValue: '0 EUR',
            wallWidth: 'Wall width (cm)',
            wallHeight: 'Wall height (cm)',
            enterValue: 'Enter a value',
            alsoLikeTitle: 'Slični proizvodi',
            customDesignServiceTitle: 'Ako želite jedinstvene tapete, nudimo uslugu dizajna po narudžbi',
            handwriting: 'Custom design',
            point1: 'Kod nas možete kreirati foto tapete po mjeri s NEOGRANIČENIM mogućnostima dizajna. Bilo koja slika visoke rezolucije može postati vaša tapeta, a izrađujemo ih u dimenzijama koje VI odaberete!',
            point2: 'Naši dizajneri pomoći će vam stvoriti poseban uzorak ili razviti potpuno novi dizajn prema vašim željama. Usluga se naplaćuje, a cijena ovisi o složenosti dizajna.',
            checkbox: "I need installation",
            needInsallationNote: "*Installation is paid separately. After placing your order, our manager will contact you to calculate the cost and schedule a convenient installation time.",
            questions: [
                {
                    id: 0,
                    question: 'Materials',
                    answer: 'Glatka na bazi ljepila'
                },
                {
                    id: 1,
                    question: 'Montaža ',
                    answer: 'Nudimo profesionalnu uslugu postavljanja tapeta kako bismo osigurali savršen rezultat. Naši stručnjaci pažljivo i učinkovito postavljaju tapete, osiguravajući visokokvalitetan završetak vašeg prostora. Montaža se naplaćuje zasebno.'
                },
                {
                    id: 2,
                    question: 'Vrijeme isporuke i dostave',
                    answer: 'Od trenutka potvrde vaše narudžbe, rok isporuke iznosi 3 do 5 radnih dana. Također nudimo uslugu žurne isporuke uz dodatnu naknadu. Kurirska služba izračunava cijenu na temelju težine paketa, a obično se kreće između 6€ - 9€ (Hrvatska). Osim dostave unutar Hrvatske, šaljemo i u druge zemlje. Samo nam javite gdje želite da pošaljemo vašu pošiljku, a mi ćemo vam ponuditi najpovoljniju i najsigurniju opciju dostave.'
                },
                {
                    id: 3,
                    question: 'Vizualizacija dizajna',
                    answer: 'Nakon što dovršite narudžbu na našoj web stranici, naši menadžeri će vas kontaktirati i poslati vam odabrani dizajn prilagođen vašim dimenzijama. Također, nudimo vizualizaciju tapete na vašem zidu kako biste mogli vidjeti kako će dizajn izgledati u vašem prostoru. Za najbolje rezultate, jednostavno nam pošaljite fotografiju vašeg zida snimljenu uz dobro osvjetljenje i iz udaljenosti na kojoj je cijeli zid vidljiv.'
                },
                {
                    id: 4,
                    question: 'Kako izmjeriti svoj zid?',
                    answer: 'Pripremili smo upute za vas kako izmjeriti svoj zid u različitim situacijama. Ako ovdje ne možete pronaći potrebne upute ili trebate pomoć, slobodno nas kontaktirajte i rado ćemo vam pomoći.'
                },
            ]
        },
        cartPage: {
            noCartItems: "Your shopping cart is currently empty. Choose wallpaper to your taste in the catalog.",
            note:'BEFORE PLACING THE ORDER, WE WILL SEND YOU AN IMAGE OF THE SELECTED DESIGN IN THE REQUIRED DIMENSIONS TO THE PROVIDED EMAIL ADDRESS. WE WILL ASK YOU TO CONFIRM VIA EMAIL WHETHER THE WALLPAPER DESIGN MEETS YOUR EXPECTATIONS.',
            title_product: 'Product',
            title_price: 'Price',
            title_amount: 'Amount',
            title_total: 'Total',
            cart_total_in_cart: 'Total in cart',
            delivery: 'Delivery', 
            cart_note: 'For cash-on-delivery orders, you pay the order cost calculated on the website plus shipping expenses. Unfortunately, we do not have exact information on the shipping costs. The courier service calculates them based on the parcel`s weight, and they are usually between 5 and 10 euros.',
            discount: 'Discount',
        },
        infoPage: {
            main_title: "At Fototapete Zagreb we specialize in transforming your visions into reality",
            main_handwritind: "You imagine — we make it happen",
            main_localized: "While located in Zagreb, we proudly serve customers across Croatia and Europe, having already brought joy to thousands of people with our custom-made solutions",
            mission_title: "Our mission is to help you transform any space into something truly personal and unique",
            mission_card1: "Whether it's a home",
            mission_card2: "business",
            mission_card3: "or creative space",
            process_title: "From start to finish, we`re here to support you, making the process easy and enjoyable",
            process_handwriting: "Additional services",
            process_measurement_service: "Measurement service",
            process_design_creation: "Custom design creation",
            process_sample_printing: "Sample Printing",
            process_design_visualization: "Design Visualization",
            process_installation: "Installation",
            process_gift_certificates: "Gift certificates",
            in_media_title: "Foto tapete in media"
        },
        orderPage: {
            cart_note_installation: "IF YOU WANT INSTALLATION: At the bottom of the form, please indicate that you would like our team to install the wallpaper. Provide an email address or WhatsApp number where we can reach you in writing to arrange the details. The current price does not include the installation service.",
            private: "Private",
            company: "Company",
            contact_information: "Contact information",
            email: "E-mail",
            phone_number: "Phone number",
            shippnig_information: "Shippnig information",
            first_name: "First name",
            last_name: "Last name",
            country: "Country",
            city: "City",
            address: "Address (street, house number and apartment)",
            postal_code: "Postal code",
            district: "District (optional)",
            additional_information: "Additional information",
            order_notes: "Order Notes (optional)",
            invoice_address: "Use other invoice address",
            your_order: "Your order",
            product: "Product",
            total: "Total",
            delivery: "Delivery",
            order_note: "For cash-on-delivery orders, you pay the order cost calculated on the website plus shipping expenses. Unfortunately, we do not have exact information on the shipping costs. The courier service calculates them based on the parcel's weight, and they are usually between 5 and 10 euros.",
            discount: "Discount",
            discount_code: "Discount code",
            promo_note: "If you have a promo code or certificate, enter it in the field below",
            personal_info_note: "Your personal information will be used to support your experience on this website and for other purposes described in our",
            width: "Width (cm):",
            height: "Height (cm):",
            total_m2: "Total m2:",
        },
        materialsPage: {
            main_title: "We use eco-friendly materials for the comfort and aesthetics of your home",
            main_sub_left: "Our range includes materials from standard to self-adhesive wallpapers and those with textures, such as straw, sand and canvas. Each can be customized with your choice of images and designs, allowing you to create the perfect atmosphere in your space.",
            main_sub_right: "And most importantly, every material is eco-friendly, without any harmful additives or emissions. While we aim to make your home look aesthetically pleasing, health always comes first.",
            main_sub_right_orange: "Discover more about the materials and textures we offer below.",
            materisla_title: "Materials in our product range",
            smooth_adhesive_based: {
                id: 1,
                name: "Smooth Adhesive-based Wallpaper",
                price: 22,
                title: "Smooth Adhesive-based Wallpaper - €22/m²",
                points: [
                    "application with adhesive", 
                    "smooth matt surface", 
                    "dry cleaning", 
                    "adhesive is free",
                ],
                about: "This wallpaper is printed on matte blueback paper. It has a smooth surface and is the most affordable option in our range. The wallpaper is suitable for flat walls (it cannot be applied using a textured technique)."
            },
            smooth_self_adhesive: {
                id: 2,
                name: "Smooth Self-Adhesive Wallpaper",
                price: 27.5,
                title: "Smooth Self-Adhesive Wallpaper - €27,5/m²",
                points: [
                    "self-adhesive", 
                    "smooth matt surface", 
                    "cleaning with damp cloth", 
                    "no additional adhesive required",
                ],
                about: "This wallpaper is printed on self-adhesive PVC matte foil. It is suitable for all flat and smooth surfaces."
            },
            textured_adhesive_based: {
                id: 3,
                name: "Textured Adhesive-Based Wallpaper (Straw/Sand Texture)",
                title: "Textured Adhesive-Based Wallpaper (Straw/Sand Texture) - €32/m²",
                price: 32,
                points: [
                    "application with adhesive", 
                    "textured surface — straw/sand texture", 
                    "dry cleaning", 
                    "adhesive is free",
                ],
                about: "The fine texture of the paper gives it a more luxurious appearance in any space. It`s an excellent solution for both commercial spaces and residential areas, including bedrooms and living rooms."
            },
            textured_self_adhesive: {
                id: 4,
                name: "Textured Self-Adhesive Wallpaper",
                price: 45,
                title: "Textured Self-Adhesive Wallpaper — €45/m²",
                points: [
                    "self-adhesive", 
                    "textured surface — similar to canvas", 
                    "cleaning with damp cloth", 
                    "no additional adhesive required",
                ],
                about: "This type of wallpaper is printed on self-adhesive PVC matte foil with a subtle texture, similar to a painter`s canvas."
            },
            self_adhesive_smooth_with_lamination: {
                id: 5,
                name: "TSelf-Adhesive Smooth Wallpapers with Lamination",
                price: 30,
                title: "TSelf-Adhesive Smooth Wallpapers with Lamination — 30 €/m²",
                points: [
                    "self-adhesive", 
                    "smooth matt surface", 
                    "waterproof", 
                    "resistant to scratching, scuffing and etc",
                    "no additional adhesive required",
                    "ideal for dark wallpapers",
                ],
                about: "These are smooth matte PVC wallpapers with an additional protective layer of transparent lamination."
            },
            concrete_texture: {
                id: 6,
                name: "Exclusive textured self-adhesive (concrete texture)",
                price: 58,
                title: "Exclusive textured self-adhesive (concrete texture) — €58/m²",
                points: [
                    "self-adhesive", 
                    "textured surface: concrete (veneziano)", 
                    "cleaning with damp cloth", 
                    "no additional adhesive required",
                ],
                about: "Wallpaper is printed on a self-adhesive matte PVC film with the finest 3D texture. This is the thickest and strongest material in our offer."
            },
            self_adhesive_smooth_with_extra_protection: {
                id: 7,
                name: "Self-Adhesive Smooth Wallpapers with Extra Protection (for Kitchens and Bathrooms)",
                price: 45,
                title: "Self-Adhesive Smooth Wallpapers with Extra Protection (for Kitchens and Bathrooms) — €45/m²",
                points: [
                    "self-adhesive with reinforced adhesive", 
                    "smooth matt surface", 
                    "waterproof", 
                    "resistant to steam, strong chemicals, and rough cleaning",
                    "no additional adhesive required",
                    "ideal for kitchens and bathrooms",
                ],
                about: ""
            },
        },
        form_contact_us: {
            title: "Leave your details or contact us for a free consultation on wallpaper material selection",
            text: "Our experts will help you decide and choose the ideal material for your interior design.",
            name: "Name",
            mail: "E-mail",
            phone: "Phone number",
            note: "By clicking «Send» you agree with the"
        },
        materials: [
            {
                id: 1,
                name: "Smooth Adhesive-based Wallpaper",
                title: "Smooth Adhesive-based Wallpaper - €22/m²",
                price: 22,
                points: [
                    "application with adhesive", 
                    "smooth matt surface", 
                    "dry cleaning", 
                    "adhesive is free",
                ],
                about: "This wallpaper is printed on matte blueback paper. It has a smooth surface and is the most affordable option in our range. The wallpaper is suitable for flat walls (it cannot be applied using a textured technique)."
            },
            {
                id: 2,
                name: "Smooth Self-Adhesive Wallpaper",
                price: 27.5,
                title: "Smooth Self-Adhesive Wallpaper - €27,5/m²",
                points: [
                    "self-adhesive", 
                    "smooth matt surface", 
                    "cleaning with damp cloth", 
                    "no additional adhesive required",
                ],
                about: "This wallpaper is printed on self-adhesive PVC matte foil. It is suitable for all flat and smooth surfaces."
            },
            {
                id: 3,
                name: "Textured Adhesive-Based Wallpaper (Straw/Sand Texture)",
                price: 32,
                title: "Textured Adhesive-Based Wallpaper (Straw/Sand Texture) - €32/m²",
                points: [
                    "application with adhesive", 
                    "textured surface — straw/sand texture", 
                    "dry cleaning", 
                    "adhesive is free",
                ],
                about: "The fine texture of the paper gives it a more luxurious appearance in any space. It`s an excellent solution for both commercial spaces and residential areas, including bedrooms and living rooms."
            },
            {
                id: 4,
                name: "Textured Self-Adhesive Wallpaper",
                price: 45,
                title: "Textured Self-Adhesive Wallpaper — €45/m²",
                points: [
                    "self-adhesive", 
                    "textured surface — similar to canvas", 
                    "cleaning with damp cloth", 
                    "no additional adhesive required",
                ],
                about: "This type of wallpaper is printed on self-adhesive PVC matte foil with a subtle texture, similar to a painter`s canvas."
            },
            {
                id: 5,
                name: "TSelf-Adhesive Smooth Wallpapers with Lamination",
                price: 30,
                title: "TSelf-Adhesive Smooth Wallpapers with Lamination — 30 €/m²",
                points: [
                    "self-adhesive", 
                    "smooth matt surface", 
                    "waterproof", 
                    "resistant to scratching, scuffing and etc",
                    "no additional adhesive required",
                    "ideal for dark wallpapers",
                ],
                about: "These are smooth matte PVC wallpapers with an additional protective layer of transparent lamination."
            },
            {
                id: 6,
                name: "Exclusive textured self-adhesive (concrete texture)",
                price: 58,
                title: "Exclusive textured self-adhesive (concrete texture) — €58/m²",
                points: [
                    "self-adhesive", 
                    "textured surface: concrete (veneziano)", 
                    "cleaning with damp cloth", 
                    "no additional adhesive required",
                ],
                about: "Wallpaper is printed on a self-adhesive matte PVC film with the finest 3D texture. This is the thickest and strongest material in our offer."
            },
            {
                id: 7,
                name: "Self-Adhesive Smooth Wallpapers with Extra Protection (for Kitchens and Bathrooms)",
                price: 45,
                title: "Self-Adhesive Smooth Wallpapers with Extra Protection (for Kitchens and Bathrooms) — €45/m²",
                points: [
                    "self-adhesive with reinforced adhesive", 
                    "smooth matt surface", 
                    "waterproof", 
                    "resistant to steam, strong chemicals, and rough cleaning",
                    "no additional adhesive required",
                    "ideal for kitchens and bathrooms",
                ],
                about: ""
            },
        ],
        blogPage: {
            header: "Helpful article"
        },
        articles: [
            {   id: 0,
                titleImg: `${base}catalog/01.png`,
                title: "5 Tips for Decorating a Children's Room",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                text: [
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                        photoAfter: `${base}catalog/02.png`,
                    },
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                    },
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoAfter: `${base}catalog/02.png`,
                    }
                ]
            },
            {
                id: 1,
                titleImg: `${base}catalog/01.png`,
                title: "Budget-Friendly Home Decorating Tricks",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                text: [
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                        photoAfter: `${base}catalog/02.png`,
                    },
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                    },
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoAfter: `${base}catalog/02.png`,
                    }
                ]
            },
            {
                id: 2,
                titleImg: `${base}catalog/01.png`,
                title: "How to Choose the Perfect Wallpaper?",
                subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                text: [
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                        photoAfter: `${base}catalog/02.png`,
                    },
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                        photoAfter: `${base}catalog/02.png`,
                    },
                    {
                        header: "5 Tips for Decorating a Children's Room",
                        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.',
                        photoBefore: `${base}catalog/01.png`,
                        // photoAfter: `${base}catalog/02.png`,
                    }
                ]
            }
        ],
        favourites: {
            title: "Favourites fototapete",
            noFavourites: "Favorites are currently empty. Choose designs to your taste in the catalog!"
        },
        errors: {
            selectMaterial: "Select material here",
            enterWeight: "Enter weight here",
            enterHeight: "Enter height here",
        },
        modals: {
            modal: {
                title: 'Measurement service',
                text: `If you're not sure how to properly measure your walls or want to avoid potential mistakes, we offer a measurement service by a professional. Our technician will come to your address, take all necessary measurements, and advise you on design options. The service is charged, and the price depends on your location and is available upon request. We offer measurement services in Zagreb and the surrounding area.`,
            },
            subscribeSuccess: {
                title: "Everything went well",
                text: "Thank you for subscribing!",
            }
        },
        btns: {
            catalog:'Katalog',
            individualOrder: 'Individualna narudžba',
            categories: 'Pogledajte sve kategorije',
            loadMore: 'Učitajte više',
            goToCategory: 'Idite na kategoriju',
            getOffer: 'Dobijte ponudu',
            viewMore: 'Pogledajte više',
            learnMore: 'Saznajte više',
            subscribe: 'Pretplatite se',
            viewAllArticles: 'Pogledajte sve članke',
            calculateThePrice: 'Izračunajte cijenu',
            addToCart: 'Dodajte u košaricu',
            goToCheckout: 'Go to checkout',
            preview_dimensions: "Preview in your dimensions",
            order: "Order",
            readMore: "Read more",
            send: "Send",
        },
    }
}

export default textData;