import { IConsumptionStone, IGoodsList, ILayerStone, IStone } from "@/types/types";

export const MATERIALS_LIST = {
    gr: {
        code: "ГР",
        name: "Грунтовка",
        description: "Грунтовка для бетона полиуретановая адгезионная, для каменного ковра",
        links: {
            ozon: { link: "https://ozon.ru/t/Oy5wb52", art: "3316269233" },
        },
        countGr: 1000,
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
            ozon: { link: "https://ozon.ru/t/yeDE84Q", art: "3441921161" },
        },
        countGr: 2000,
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
        code: "ЕП2К",
        name: "Клей эп. горизонтальный",
        description: "Клей для каменного ковра уличный эпоксидный прозрачный двухкомпонентный",
        links: {
            ozon: { link: "https://ozon.ru/t/Zax90ni", art: "3320735830" },
        },
        countGr: 1500,
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
    kv: {
        code: "КВ",
        name: "Клей эп. вертикальный",
        description:
            "Клей для каменного ковра вертикальный эпоксидный двухкомпонентный густой для камня, мраморной крошки, гальки, 1/2 мечты",
        links: {
            ozon: { link: "https://ozon.ru/t/sXcuYQj", art: "3316269247" },
        },
        countGr: 1500,
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
    lak: {
        code: "ЛАК",
        name: "Лак эпоксидный",
        description:
            "Лак для камня, бетона, дерева, плитки, пола, стен, эпоксидный прозрачный глянцевый ",
        links: {
            ozon: { link: "https://ozon.ru/t/MnOGlck", art: "3329169145" },
        },
        countGr: 1500,
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
            ozon: { link: "https://ozon.ru/t/9o3gdpL", art: "3316278103" },
        },
        countGr: 3000,
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
            ozon: { link: "https://ozon.ru/t/LCUfjAY", art: "3329165493" },
        },
        countGr: 1200,
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
export const STONES_LIST: IStone[] = [
    {
        code: "НАП_СЕРМРМ",
        name: "Серо-голубоя",
        description:
            "Мраморная крошка для каменного ковра 3-5мм 20кг на 1м2, Серо-голубой, чистая, сухая",
        links: {
            ozon: { link: "https://ozon.ru/t/RhKsedW", art: "3541553442" },
        },
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
    },
    {
        code: "НАП_ШОКОЛАД",
        name: "Шоколад",
        description: "Камень для каменного ковра 3-5мм 20кг на 1м2, Галька Шоколад, чистая, сухая",
        links: {
            ozon: { link: "https://ozon.ru/t/9o3V95y", art: "3543591437" },
        },
        countGr: 20000,
        consumption: STONE_CONSUMPTION,
    },
];

//ЛИСТ ТОВАРОВ
export const GOODS_LIST: IGoodsList = {
    stones: STONES_LIST,
    materials: MATERIALS_LIST,
};
