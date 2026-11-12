import { IConsumptionStone, IGoodsList, ILayerStone, IStone } from "@/types/types";

export const MATERIALS_LIST = {
    gr1: {
        code: "ГР1",
        name: "Грунтовка 1кг",
        description: "Грунтовка для бетона полиуретановая адгезионная, для каменного ковра",
        links: {
            ozon: { link: "https://ozon.ru/t/Oy5wb52", art: "3316269233" },
        },
        countGr: 1000,
        consumption: {
            minGr: 150,
            maxGr: 300,
        },
    },
    egr2: {
        code: "ЭГР2",
        name: "Эпоксидная грунтовка 2кг",
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
    },
    ep2k15: {
        code: "КВ1.5",
        name: "Клей горизонтальный эпоксидный 1,5 кг",
        description: "Клей для каменного ковра уличный эпоксидный прозрачный двухкомпонентный",
        links: {
            ozon: { link: "https://ozon.ru/t/Zax90ni", art: "3320735830" },
        },
        countGr: 1500,
        consumption: {
            minGr: 600,
            maxGr: 800,
        },
    },
    kv15: {
        code: "КВ1.5",
        name: "Клей вертикальный эпоксидный 1,5 кг",
        description:
            "Клей для каменного ковра вертикальный 1,5 кг эпоксидный двухкомпонентный густой для камня, мраморной крошки, гальки, 1/2 мечты",
        links: {
            ozon: { link: "https://ozon.ru/t/sXcuYQj", art: "3316269247" },
        },
        countGr: 1500,
        consumption: {
            minGr: 1200,
            maxGr: 1200,
        },
    },
    lak15: {
        code: "ЛАК1,5",
        name: "Лак эпоксидный 1,5 кг",
        description:
            "Лак для камня, бетона, дерева, плитки, пола, стен, эпоксидный прозрачный глянцевый 1,5 кг",
        links: {
            ozon: { link: "https://ozon.ru/t/MnOGlck", art: "3329169145" },
        },
        countGr: 1500,
        consumption: {
            minGr: 100,
            maxGr: 300,
        },
    },
    zap3: {
        code: "ЗАП3",
        name: "Запечатка 3 кг",
        description: "Герметизация каменного ковра 3 кг (запечатка) эпоксидный состав ",
        links: {
            ozon: { link: "https://ozon.ru/t/9o3gdpL", art: "3316278103" },
        },
        countGr: 3000,
        consumption: {
            minGr: 1200,
            maxGr: 1400,
        },
    },
    she12: {
        code: "ШЭ1,2",
        name: "Клей шпаклевка 1.2 кг",
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
        name: "Мраморная крошка Серо-голубоя 20кг",
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
        name: "Галька Шоколад 20кг",
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
