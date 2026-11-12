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
    let gruntRes = (square * MATERIALS_LIST.egr2.consumption.maxGr) / 1000;
    let glueRes =
        (square * MATERIALS_LIST[position === "vertical" ? "kv15" : "ep2k15"].consumption.maxGr) /
        1000;
    let zapRes = (square * MATERIALS_LIST.zap3.consumption.maxGr) / 1000;
    let lakRes = (square * MATERIALS_LIST.lak15.consumption.maxGr) / 1000;

    //ДОБАВЛЯЕМ 10%
    if (isAddTenProc) {
        stonesRes = add10Procent(stonesRes);
        gruntRes = add10Procent(gruntRes);
        glueRes = add10Procent(glueRes);
        zapRes = add10Procent(zapRes);
        lakRes = add10Procent(lakRes);
    }

    return {
        stone: fixGoodsNumber(stonesRes * stoneLayer),
        grunt: fixGoodsNumber(gruntRes),
        glue: fixGoodsNumber(glueRes * stoneLayer),
        zap: fixGoodsNumber(zapRes),
        lak: fixGoodsNumber(lakRes),
    };
}
