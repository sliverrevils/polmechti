import { STONES_LIST } from "@/constants/goodsList";

const findStoneByCode = (code: string) =>
    STONES_LIST.find((stone) => stone.code === code) || STONES_LIST[0];
