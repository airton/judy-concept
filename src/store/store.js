
let screenshots = [
    require('@/assets/images/p-single-1.jpg'),
    require('@/assets/images/p-single-2.jpg'),
];

let screenshots2 = [
    require('@/assets/images/p-single-3.jpg'),
    require('@/assets/images/p-single-4.jpg'),
];

let screenshots3 = [
    require('@/assets/images/p-single-5.jpg'),
    require('@/assets/images/p-single-6.jpg'),
];

let screenshots4 = [
    require('@/assets/images/p-single-7.jpg'),
    require('@/assets/images/p-single-8.jpg'),
];
let screenshots5 = [
    require('@/assets/images/p-single-9.jpg'),
    require('@/assets/images/p-single-10.jpg'),
    require('@/assets/images/p-single-11.jpg'),
];


// Data
let ProductsData = {
    ourKitProducts: {
        title: 'SHOP OUR KITS',
        buttonText: 'Compare them all',
        buttonLink: '#',
        products: [
            {
                id: 1,
                slug: 'the-safe',
                img: require('@/assets/images/the-safe.png'),
                cmpImg: require('@/assets/images/the-safe.png'),
                hoverimg: require('@/assets/images/the-safe-hover.png'),
                title: 'The Safe',
                cmpTitle: 'The Safe (4 people)',
                subtitle: 'The ready-kit stocked with everything you need for any situation.',
                dimension: 'H 11.5in x W 15.5in x D 11in',
                weight: '18.0 lb',
                material: 'Phthalate-free TPE fabric',
                price: '$250',
                screenshots: screenshots,
                toolsTitle: 'Tools',
                tools: [
                    {
                        text: "Disposable Emergency Charger"
                    },
                    {
                        text: "Multipurpose Bag (x2)"
                    },
                    {
                        text: "AAA batteries (x3)"
                    },
                    {
                        text: "Duct Tape Mini Roll"
                    },
                    {
                        text: "Multitool"
                    },
                    {
                        text: "LED Flashlight"
                    },
                    {
                        text: "Hand Crank Radio / Charger"
                    },
                ],
                warmthTitle: 'Warmth',
                warmth: [
                    {
                        text: 'Candles (x2)'
                    },
                    {
                        text: 'Waterproof Matches (x2)'
                    },
                    {
                        text: 'Hand Warmers (x8)'
                    },
                    {
                        text: 'Rescue Blanket (x4)'
                    },
                ],
                safetyTitle: 'Safety',
                safety: [
                    {
                        text: 'Emergency Whistle (x2)'
                    },
                    {
                        text: 'Poncho (x4)'
                    },
                    {
                        text: 'Glow Sticks (x4)'
                    },
                    {
                        text: 'Gloves'
                    },
                ],
                firstaidTitle: 'First-Aid',
                firstaid: [
                    {
                        text: "First-Aid Kit"
                    },
                    {
                        text: "Quick Dry Towel"
                    },
                    {
                        text: "Biohazard Bag"
                    },
                    {
                        text: "Hand Sanitizer (x2)"
                    },
                    {
                        text: "Wet Wipes"
                    },
                    {
                        text: "Pocket Tissues (x2)"
                    },
                ],
                foodTitle: 'Food',
                food: [
                    {
                        text: "Food (x10)"
                    }
                ],
                waterTitle: 'Water',
                water: [
                    {
                        text: 'Water Packets (x16)'
                    }
                ],
                starterTitle: '',
                starter: ''
            },
            {
                id: 2,
                slug: 'the-mover',
                img: require('@/assets/images/the-mover.png'),
                cmpImg: require('@/assets/images/the-mover.png'),
                hoverimg: require('@/assets/images/the-mover-hover.png'),
                title: 'The \nMover',
                cmpTitle: 'The Mover (2 people)',
                subtitle: 'The go-bag stocked and ready with everything you need on the fly.',
                dimension: 'H 18in x W 17in x D 8in',
                weight: '12.0 lb',
                material: 'Phthalate-free TPE fabric',
                price: '$150',
                screenshots: screenshots2,
                toolsTitle: 'Tools and First-Aid',
                tools: [
                    {
                        text: "AAA Batteries (x3)"
                    },
                    {
                        text: "Flashlight"
                    },
                    {
                        text: "Multi Tool"
                    },
                    {
                        text: "Duct Tape"
                    },
                    {
                        text: "Disposable Phone Charger"
                    },
                    {
                        text: "First-Aid Kit"
                    },
                    {
                        text: "Biohazard Bag"
                    },
                    {
                        text: "Quick Dry Towel"
                    },
                    {
                        text: "Pocket Tissue"
                    },
                    {
                        text: "Hand Sanitizer"
                    },
                    {
                        text: "Wet Wipes"
                    },
                    {
                        text: "Hand Crank Radio / Charger"
                    },
                ],
                warmthTitle: 'Safety and Warmth',
                warmth: [
                    {
                        text: 'Ponchos (x2)'
                    },
                    {
                        text: 'Gloves'
                    },
                    {
                        text: 'Glow Sticks (x2)'
                    },
                    {
                        text: 'Emergency Whistle'
                    },
                    {
                        text: 'Hand Warmers (x4)'
                    },
                    {
                        text: 'Rescue Blankets (x2)'
                    },
                ],
                safetyTitle: '',
                safety: '',
                firstaidTitle: '',
                firstaid: '',
                waterTitle: 'Food and Water',
                water: [
                    {
                        text: 'Food Bars (x5)'
                    },
                    {
                        text: 'Water Pouches (x8)'
                    },
                ],
                starterTitle: '',
                starter: ''
            },
            {
                id: 3,
                slug: 'the-starter',
                img: require('@/assets/images/the-starter.png'),
                cmpImg: require('@/assets/images/the-starter-compare.png'),
                hoverimg: require('@/assets/images/the-starter-hover.png'),
                title: 'The \nStarter',
                cmpTitle: 'The Starter (1 person)',
                subtitle: 'Small but mighty, the quick kit keeps everything you need on-hand and ready to go',
                dimension: 'H 6.5in x W 13.5in x D 3.5in',
                weight: '4.0 lb',
                material: 'Phthalate-free TPE fabric',
                price: '$60',
                screenshots: screenshots3,
                toolsTitle: '',
                tools: '',
                warmthTitle: '',
                warmth: '',
                safetyTitle: '',
                safety: '',
                firstaidTitle: '',
                firstaid: '',
                foodTitle: '',
                food: '',
                waterTitle: '',
                water: '',
                starterTitle: 'The Starter',
                starter: [
                    {
                        text: 'Whistle'
                    },
                    {
                        text: 'Glow Sticks (x2)'
                    },
                    {
                        text: 'Rescue Blankets (x2)'
                    },
                    {
                        text: 'Ponchos (x2)'
                    },
                    {
                        text: 'First-Aid Kit'
                    },
                    {
                        text: 'Food Bars (x2)'
                    },
                    {
                        text: 'Water Pouches (x2)'
                    },
                ]
            },
            {
                id: 4,
                slug: 'the-mover-max',
                img: require('@/assets/images/the-mover.png'),
                cmpImg: require('@/assets/images/the-mover.png'),
                hoverimg: require('@/assets/images/the-mover-hover.png'),
                title: 'The \nMover Max',
                cmpTitle: 'The Mover Max (4 people)',
                subtitle: 'The go-bag stocked and ready with everything you need on the fly.',
                dimension: 'H 18in x W 17in x D 8in',
                weight: '15.0 lb',
                material: 'Phthalate-free TPE fabric',
                price: '$180',
                screenshots: screenshots4,
                toolsTitle: 'Tools and First-Aid',
                tools: [
                    {
                        text: "AAA Batteries (x3)"
                    },
                    {
                        text: "Flashlight"
                    },
                    {
                        text: "Multi Tool"
                    },
                    {
                        text: "Duct Tape"
                    },
                    {
                        text: "Disposable Phone Charger"
                    },
                    {
                        text: "First-Aid Kit"
                    },
                    {
                        text: "Biohazard Bag"
                    },
                    {
                        text: "Quick Dry Towel"
                    },
                    {
                        text: "Pocket Tissue (x2)"
                    },
                    {
                        text: "Hand Sanitizer (x2)"
                    },
                    {
                        text: "Wet Wipes"
                    },
                    {
                        text: "Hand Crank Radio / Charger"
                    },
                ],
                warmthTitle: 'Safety and Warmth',
                warmth: [
                    {
                        text: 'Ponchos (x4)'
                    },
                    {
                        text: 'Gloves (x1)'
                    },
                    {
                        text: 'Glow Sticks (x2)'
                    },
                    {
                        text: 'Emergency Whistle (x2)'
                    },
                    {
                        text: 'Hand Warmers (x8)'
                    },
                    {
                        text: 'Rescue Blankets (x4)'
                    },
                ],
                safetyTitle: '',
                safety: '',
                firstaidTitle: '',
                firstaid: '',
                foodTitle: 'Food and Water',
                food: [
                    {
                        text: "Food Bars (x7)"
                    },
                    {
                        text: "Water Pouches (x14)"
                    },
                ],
                waterTitle: '',
                water: '',
                starterTitle: '',
                starter: ''
            },
            {
                id: 5,
                slug: 'the-safety',
                img: require('@/assets/images/safety-homepage.png'),
                cmpImg: require('@/assets/images/the-safety-compare.png'),
                hoverimg: require('@/assets/images/safety-homepage-hover.png'),
                title: 'The \nSafety',
                cmpTitle: 'The Safety (1 person)',
                subtitle: 'Contains 7 unique preparedness items designed to keep you safe while on-the-go.',
                dimension: 'H 3.7in x W 7.5in x D 3.2in',
                weight: '1.0 lb',
                material: 'Phthalate-free TPE fabric',
                price: '$45',
                screenshots: screenshots5,
                toolsTitle: '',
                tools: '',
                warmthTitle: '',
                warmth: '',
                safetyTitle: 'The Safety',
                safety: [
                    {
                        text: 'Hand Sanitizer'
                    },
                    {
                        text: 'Wet Wipes'
                    },
                    {
                        text: 'Pocket Tissue'
                    },
                    {
                        text: 'First-Aid Kit'
                    },
                    {
                        text: 'Nitrile Gloves'
                    },
                ],
                firstaidTitle: '',
                firstaid: '',
                waterTitle: '',
                water: '',
                starterTitle: '',
                starter: ''
            },
        ]
    },
};

export default ProductsData;


