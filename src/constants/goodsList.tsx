import { IConsumptionStone, IGoodsList, ILayerStone, IStone } from "@/types/types";

export const MATERIALS_LIST = {
    gr: {
        code: "ГР",
        name: "Грунтовка",
        description: "Грунтовка для бетона полиуретановая адгезионная, для каменного ковра",
        links: {
            ozon: { link: "https://ozon.ru/t/QW9RuWS", art: "ГР1", sku: "3316269233" },
        },
        consumption: {
            minGr: 150,
            maxGr: 300,
        },
        priceKg: {
            1: 800,
            5: 600,
        },
    },
    egr: {
        code: "ЭГР",
        name: "Эпоксидная грунтовка",
        description:
            "Эпоксидная грунтовка праймер для бетона, дерева, металла адгезионная, гидроизоляционная",
        links: {
            ozon: { link: "https://ozon.ru/t/j7Rk8YX", art: "ЭГР2", sku: "3441921161" },
        },
        consumption: {
            minGr: 150,
            maxGr: 300,
        },
        priceKg: {
            2: 850,
            5: 800,
            10: 750,
        },
    },
    ep2k: {
        code: "ЭП2К",
        name: "Клей эпоксидный горизонтальный",
        description: "Клей для каменного ковра уличный эпоксидный прозрачный двухкомпонентный",
        links: {
            ozon: { link: "https://ozon.ru/t/TOaVFlE", art: "ЭП2К1,5", sku: "3320735830" },
        },
        consumption: {
            minGr: 600,
            maxGr: 800,
        },
        priceKg: {
            1.5: 1100,
            3: 1100,
            7.5: 950,
        },
    },
    "1k": {
        code: "1К",
        name: "Клей полиуретановый горизонтальный",
        description: "Клей для каменного ковра полиуретановый, для камня мраморной крошки, уличный",
        links: {
            ozon: { link: "https://ozon.ru/t/zLHaxnI", art: "1К1", sku: "3317566247" },
        },
        consumption: {
            minGr: 600,
            maxGr: 800,
        },
        priceKg: {
            1: 900,
            5.75: 700,
            11.5: 700,
        },
    },
    "2kz": {
        code: "2КЭ",
        name: "Клей зимний эп. горизонтальный",
        description:
            "Клей зимний для каменного ковра  уличный, эпоксидный, прозрачный, двухкомпонентный",
        links: {
            ozon: { link: "https://ozon.ru/t/oNwlgyL", art: "2К1,5Э", sku: "3446449047" },
        },
        consumption: {
            minGr: 600,
            maxGr: 800,
        },
        priceKg: {
            1.5: 1200,
            3: 1150,
            7.5: 1000,
        },
    },
    kv: {
        code: "КВ",
        name: "Клей эп. вертикальный",
        description:
            "Клей для каменного ковра вертикальный эпоксидный двухкомпонентный густой для камня, мраморной крошки, гальки",
        links: {
            ozon: { link: "https://ozon.ru/t/wEQ3l9P", art: "КВ1,5", sku: "3316269247" },
        },
        consumption: {
            minGr: 1200,
            maxGr: 1200,
        },
        priceKg: {
            1.5: 1400,
            3: 1250,
            6: 1200,
        },
    },
    kvz: {
        code: "КВЗ",
        name: "Клей зимний эп. вертикальный",
        description:
            "Клей зимний для каменного ковра вертикальный эпоксидный двухкомпонентный густой для камня, мраморной крошки, гальки",
        links: {
            ozon: { link: "https://ozon.ru/t/1f7diSR", art: "КВ1,5З", sku: "3446999568" },
        },
        consumption: {
            minGr: 1200,
            maxGr: 1200,
        },
        priceKg: {
            1.5: 1500,
            3: 1350,
            6: 1300,
        },
    },
    lak: {
        code: "ЛАК",
        name: "Лак эпоксидный",
        description:
            "Лак для камня, бетона, дерева, плитки, пола, стен, эпоксидный прозрачный глянцевый ",
        links: {
            ozon: { link: "https://ozon.ru/t/BSAGGoD", art: "ЛАК1,5", sku: "3329169145" },
        },
        consumption: {
            minGr: 150,
            maxGr: 300,
        },
        priceKg: {
            1.5: 1000,
            3: 1000,
            7.5: 900,
        },
    },
    zap: {
        code: "ЗАП",
        name: "Запечатка",
        description: "Герметизация каменного ковра (запечатка) эпоксидный состав ",
        links: {
            ozon: { link: "https://ozon.ru/t/1f7jRIl", art: "ЗАП3", sku: "3316278103" },
        },

        consumption: {
            minGr: 1200,
            maxGr: 1400,
        },
        priceKg: {
            3: 1200,
            7.5: 1100,
        },
    },
    she: {
        code: "ШЭ",
        name: "Клей шпаклевка",
        description:
            "Клей шпаклевка эпоксидная для ремонта бетона, монтажа дерева, металла, керамогранита, плитки",
        links: {
            ozon: { link: "https://ozon.ru/t/Crtq50f", art: "ШЭ1,2", sku: "3329165493" },
        },
        consumption: {
            //РАСХОД НА МЕТР ПРОФИЛЕЙ
            minGr: 30,
            maxGr: 35,
        },
        priceKg: {
            1.2: 1500,
            2.4: 1300,
            4.8: 1300,
        },
    },
} as const;

export const TOOLS_LIST = {
    code: "Кель",
    name: "Кельма для каменного ковра",
    description: "Гладилка для бетона, кельма для каменного ковра",
    links: {
        ozon: { link: "https://ozon.ru/t/LCUfjAY", art: "3329165493" },
    },
    price: {
        250: {
            price: 600,
            sku: { ozon: "3316276501" },
            links: { ozon: "https://ozon.ru/t/Rh6Lkhm" },
        },
        255: {
            price: 600,
            sku: { ozon: "3316276501" },
            links: { ozon: "https://ozon.ru/t/Rh6Lkhm" },
        },
        300: {
            price: 750,
            sku: { ozon: "3363812112" },
            links: { ozon: "https://ozon.ru/t/sXIoxwF" },
        },
        350: {
            price: 850,
            sku: { ozon: "3365476498" },
            links: { ozon: "https://ozon.ru/t/ukLTO50" },
        },
        400: {
            price: 1000,
            sku: { ozon: "3365507508" },
            links: { ozon: "https://ozon.ru/t/bTZcFCF" },
        },
        500: {
            price: 1200,
            sku: { ozon: "3365517599" },
            links: { ozon: "https://ozon.ru/t/bTZcx1H" },
        },
    },
};

//РАСХОД КАМНЯ
export const STONE_CONSUMPTION: IConsumptionStone = {
    horizont: 20000,
    vertical: 12000,
};

//СЛОЙ КАМНЯ
export const LAYER_STONE: ILayerStone = {
    horizont: { min: 1, max: 5 },
    vertical: { min: 0.6, max: 3 },
};

//ЛИСТ КАМНЯ
export const STONES_LIST = {
    sermpm: {
        show: true,
        code: "НАП_СЕРМРМ",
        name: "Серо - голубой",
        description:
            "Галька 'Серо-голубая' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "3541553442" },
                links: { ozon: "https://ozon.ru/t/wEQKrh6" },
            },
        },
    },
    shok: {
        show: true,
        code: "НАП_ШОКОЛАД",
        name: "Шоколад",
        description:
            "Галька 'Шоколад' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "3543591437" },
                links: { ozon: "https://ozon.ru/t/9odCoJz" },
            },
        },
    },
    jem: {
        show: true,
        code: "НАП_ЖЕМ",
        name: "Жемчужная",
        description:
            "Галька 'Жемчужная' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "3316291219" },
                links: { ozon: "https://ozon.ru/t/EIWda2P" },
            },
        },
    },
    krm: {
        show: true,
        code: "НАП_КРМ",
        name: "Красное море",
        description:
            "Галька 'Красное море' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "3543685464" },
                links: { ozon: "https://ozon.ru/t/cFNQ5cP" },
            },
        },
    },
    kasp: {
        show: true,
        code: "НАП_КАСП",
        name: "Каспийское море",
        description:
            "Галька 'Каспийское море' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "3543765475" },
                links: { ozon: "https://ozon.ru/t/4Ky5oHX" },
            },
        },
    },
    chernomor: {
        show: true,
        code: "НАП_ЧЕРНОМОР",
        name: "Черное море",
        description:
            "Галька 'Черное море' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "3543778900" },
                links: { ozon: "https://ozon.ru/t/4Ky5wE9" },
            },
        },
    },
    grafit: {
        show: true,
        code: "НАП_ГРАФИТ",
        name: "Графит",
        description:
            "Галька 'Графит' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "3808368650" },
                links: { ozon: "https://ozon.ru/t/4Ky5wE9" },
            },
        },
    },
    relikt: {
        show: true,
        code: "НАП_РЕЛИКТ",
        name: "Реликтовая",
        description:
            "Галька 'Реликтовая' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "3811213269" },
                links: { ozon: "https://ozon.ru/t/EIWdLNx" },
            },
        },
    },
    yashma: {
        show: true,
        code: "НАП_ЯШМА_СУР",
        name: "Яшма сургучная",
        description:
            "Галька 'Яшма сургучна' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "3929229023" },
                links: { ozon: "https://ozon.ru/t/sXIo3TN" },
            },
        },
    },
    dalmatin: {
        show: true,
        code: "НАП_ДАЛМАТИН",
        name: "Далматинец",
        description:
            "Галька 'Далматинец' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "3929687070" },
                links: { ozon: "https://ozon.ru/t/8M5ZgjL" },
            },
        },
    },
    cherkes: {
        show: true,
        code: "НАП_ЧЕРКЕС",
        name: "Черкесская",
        description:
            "Галька 'Черкесская' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "3969936408" },
                links: { ozon: "https://ozon.ru/t/8M5ZA0B" },
            },
        },
    },
    medovaya: {
        show: true,
        code: "НАП_МЕДОВАЯ",
        name: "Медовая",
        description:
            "Галька 'Медовая' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "4700512599" },
                links: { ozon: "https://ozon.ru/t/LCq2JFc" },
            },
        },
    },
    koshka: {
        show: true,
        code: "НАП_КОШКА",
        name: "Британская кошка",
        description:
            "Галька 'Британская кошка' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "5124497055" },
                links: { ozon: "https://ozon.ru/t/1f76rZ1" },
            },
        },
    },
    kot: {
        show: true,
        code: "НАП_КОТ",
        name: "Британский кот",
        description:
            "Галька 'Британский кот' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "5157279752" },
                links: { ozon: "https://ozon.ru/t/dw3tqqQ" },
            },
        },
    },
    terrakot: {
        show: true,
        code: "НАП_КОТ",
        name: "Терракотовая",
        description:
            "Галька 'Терракотовая' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "5612578565" },
                links: { ozon: "https://ozon.ru/t/3Qruk3t" },
            },
        },
    },
    bordo: {
        show: true,
        code: "НАП_БОРДО",
        name: "Бордо",
        description:
            "Галька 'Бордо' мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, , чистая, сухая",
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
        price: {
            20: {
                price: 1200,
                sku: { ozon: "5657896137" },
                links: { ozon: "https://ozon.ru/t/Crtz46a" },
            },
        },
    },
} as const;
