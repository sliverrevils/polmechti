import { MATERIALS_LIST, STONE_CONSUMPTION } from "@/constants/goodsList";
import { IConsumptionStone } from "@/types/types";

export const fixNumber = (num: number) => num.toFixed(1);
export const fixGoodsNumber = (num: number): number => Math.ceil(num * 2) / 2; // ОКРУГЛЯЯЕМ ТОВАРЫ
export const add10Procent = (num: number) => num * 1.1;

export function calcPlane({
    square,
    position,
    stoneLayer,
    isAddTenProc,
}: {
    square: number;
    position: keyof IConsumptionStone;
    stoneLayer: number;
    isAddTenProc: boolean;
}) {
    if (square <= 0) return false;

    let stonesRes = (square * STONE_CONSUMPTION[position]) / 1000;
    let grunt2KRes = (square * MATERIALS_LIST.egr.consumption.maxGr) / 1000;
    let grunt1KRes = (square * MATERIALS_LIST.gr.consumption.maxGr) / 1000;
    let glueVerRes =
        (square * MATERIALS_LIST[position === "vertical" ? "kv" : "ep2k"].consumption.maxGr) / 1000;
    let glueVerZRes =
        (square * MATERIALS_LIST[position === "vertical" ? "kvz" : "2kz"].consumption.maxGr) / 1000;
    let glueGorRes = (square * MATERIALS_LIST["1k"].consumption.maxGr) / 1000;
    let glueGorZRes = (square * MATERIALS_LIST["2kz"].consumption.maxGr) / 1000;
    let zapRes = (square * MATERIALS_LIST.zap.consumption.maxGr) / 1000;
    let lakRes = (square * MATERIALS_LIST.lak.consumption.maxGr) / 1000;

    //ДОБАВЛЯЕМ 10%
    if (isAddTenProc) {
        stonesRes = add10Procent(stonesRes);
        grunt2KRes = add10Procent(grunt2KRes);
        grunt1KRes = add10Procent(grunt1KRes);
        glueVerRes = add10Procent(glueVerRes);
        zapRes = add10Procent(zapRes);
        lakRes = add10Procent(lakRes);
        glueGorRes = add10Procent(glueGorRes);
    }

    return {
        stone: fixGoodsNumber(stonesRes * stoneLayer),
        grunt1k: fixGoodsNumber(grunt1KRes),
        grunt2k: fixGoodsNumber(grunt2KRes),
        glueVer: fixGoodsNumber(glueVerRes * stoneLayer),
        glueVerZ: fixGoodsNumber(glueVerZRes * stoneLayer),
        glueGor: fixGoodsNumber(glueGorRes * stoneLayer),
        glueGorZ: fixGoodsNumber(glueGorZRes * stoneLayer),
        zap: fixGoodsNumber(zapRes),
        lak: fixGoodsNumber(lakRes),
    };
}
