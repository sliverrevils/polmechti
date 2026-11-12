import { MATERIALS_LIST } from "@/constants/goodsList";

export interface ILinks {
    ozon?: {
        link: string;
        art: string;
    };
    wb?: string;
    yandex?: string;
    my?: string;
}

export interface IItem {
    name: string;
    code: string;
    links: ILinks;
    description?: string;
    countGr: number;
    price?: number; //ЦЕНА СО СКЛАДА
}

//РАСХОД НА ВЕРТИКАЛЬ И ГОРИЗОНТ м2
export interface IConsumptionStone {
    horizont: number;
    vertical: number;
}

export interface ILayerStone {
    horizont: { min: number; max: number };
    vertical: { min: number; max: number };
}

export type IStone = IItem & {
    consumption: IConsumptionStone;
};

export interface IGoodsList {
    stones: IStone[]; //КАМНИ
    materials: typeof MATERIALS_LIST; //МАТЕРИАЛЫ (КЛЕЙ, ГРУНТ итд)
}
