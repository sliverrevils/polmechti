"use client";

import { useMemo, useState } from "react";
import Input from "../theme/Input";
import { calcPlane } from "@/utils/calcFuncs";
import { LAYER_STONE, MATERIALS_LIST, STONES_LIST } from "@/constants/goodsList";
import { IConsumptionStone } from "@/types/types";
import { MenuItem, Select, Slider, Switch, TextField } from "@mui/material";
import { ACCENT } from "@/constants/style";
import { LinkBuyMaterial, LinkBuyStone } from "../theme/LinkBuy";

const marksHor = [
    {
        value: 1,
        label: "1см",
    },
    {
        value: 1.5,
        label: "1.5см",
    },
    {
        value: 2,
        label: "2см",
    },
    {
        value: 2.5,
        label: "2.5см",
    },
    {
        value: 3,
        label: "3см",
    },
];
const marksVer = [
    {
        value: 0.6,
        label: "0.6см",
    },
    {
        value: 0.8,
        label: "0.8см",
    },
    {
        value: 1,
        label: "1см",
    },
    {
        value: 1.2,
        label: "1.2см",
    },
    {
        value: 1.5,
        label: "1.5см",
    },
    {
        value: 2,
        label: "2см",
    },
];

export default function CalcTab() {
    const [square, setSquare] = useState<number>(0);
    const [position, setPosition] = useState<keyof IConsumptionStone>("horizont");
    const [stoneLayer, setStoneLayer] = useState(LAYER_STONE.horizont.min);
    const [isAddTenProc, setIsAddTenProc] = useState(true);
    const [selectedStone, setSelectedStone] = useState(STONES_LIST.at(0)!.code);

    const resultMemo = useMemo(() => {
        if (!!!square) return <></>;

        const res = calcPlane({ square, position, stoneLayer, isAddTenProc });

        if (!res) return <></>;
        const { glue, grunt, stone, zap } = res;
        return (
            <div className="flex flex-col gap-2 border border-white rounded-md px-4 py-2">
                <div className="flex justify-between items-center">
                    <div>
                        Камень {stone} кг ({Math.ceil(stone / 20)} уп.)
                    </div>
                    <LinkBuyStone code={selectedStone} />
                </div>
                <div className="flex justify-between items-center">
                    <div>Грунт {grunt} кг</div>
                    <LinkBuyMaterial item="gr1" />
                </div>

                <div className="flex justify-between items-center">
                    <div>
                        Клей {position === "vertical" ? "вертикальный" : "горизонтальный"} {glue} кг
                    </div>
                    {position === "vertical" ? (
                        <LinkBuyMaterial item="kv15" />
                    ) : (
                        <LinkBuyMaterial item="ep2k15" />
                    )}
                </div>
                <div className="flex justify-between items-center">
                    <div>Запечатка {zap} кг</div>
                    <LinkBuyMaterial item="zap3" />
                </div>
            </div>
        );
    }, [square, position, stoneLayer, isAddTenProc]);

    return (
        <div className="flex flex-col gap-3 ">
            <TextField
                id="outlined-basic"
                label="Общая площадь"
                variant="outlined"
                type="number"
                placeholder="0"
                onChange={(e) =>
                    setSquare(
                        isNaN(Number(e.target.value)) || Number(e.target.value) <= 0
                            ? 0
                            : Number(e.target.value),
                    )
                }
                sx={{
                    "& .MuiInputBase-input": { color: "white" },
                    "& .MuiInputLabel-root": { color: "white" },
                    "& .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
                    "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: ACCENT,
                    },
                    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: ACCENT,
                    },
                    "& .MuiInputLabel-root.Mui-focused": { color: ACCENT },
                }}
            />
            <Select
                sx={{
                    color: "white",
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#D77B45",
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: "#D77B45",
                    },
                    "& .MuiSvgIcon-root": {
                        color: "white",
                    },
                }}
                title="Выбранная галька"
                value={selectedStone}
                onChange={(e) => setSelectedStone(e.target.value)}
            >
                {STONES_LIST.map((stone) => (
                    <MenuItem key={stone.code} value={stone.code}>
                        {stone.name}
                    </MenuItem>
                ))}
            </Select>

            <div className="flex *:w-full *:text-center  *:border-[#D77B45]  *:rounded-md *:px-4 *:py-2 *:cursor-pointer">
                <div
                    className={`${position === "horizont" ? "border text-[#D77B45]" : "border-0 text-white"}`}
                    onClick={() => {
                        if (position === "horizont") return;
                        setPosition(() => "horizont");
                        setStoneLayer(() => LAYER_STONE.horizont.min);
                    }}
                >
                    Горизонтальная
                </div>
                <div
                    className={`${position === "vertical" ? "border text-[#D77B45]" : "border-0 "}`}
                    onClick={() => {
                        if (position === "vertical") return;
                        setPosition(() => "vertical");
                        setStoneLayer(() => LAYER_STONE.vertical.min);
                    }}
                >
                    Вертикальная
                </div>
            </div>

            <div className="w-full flex flex-col items-center">
                <div className="flex gap-2 items-center">
                    <Switch
                        checked={isAddTenProc}
                        onChange={(e, checked) => {
                            setIsAddTenProc(checked);
                        }}
                        sx={{
                            "& .MuiSwitch-switchBase.Mui-checked": {
                                color: ACCENT,
                            },
                            "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                                backgroundColor: ACCENT,
                            },
                        }}
                    />
                    <div className={`${isAddTenProc ? "text-[#D77B45]" : ""}`}>
                        Добавить 10 процентов ко всем расходникам
                    </div>
                </div>

                <Slider
                    min={position === "horizont" ? marksHor.at(0)?.value : marksVer.at(0)?.value}
                    max={
                        position === "horizont" ? marksHor.at(-1)?.value : marksVer.at(0 - 1)?.value
                    }
                    step={null}
                    aria-label="Always visible"
                    value={stoneLayer}
                    onChange={(e, value) => {
                        setStoneLayer(value);
                    }}
                    marks={position === "horizont" ? marksHor : marksVer}
                    sx={{
                        color: ACCENT,
                        width: "90%",

                        "& .MuiSlider-thumb": {
                            backgroundColor: ACCENT,
                        },

                        "& .MuiSlider-track": {
                            backgroundColor: ACCENT,
                            borderColor: ACCENT,
                        },

                        "& .MuiSlider-rail": {
                            backgroundColor: "#ffffff55",
                        },

                        "& .MuiSlider-valueLabel": {
                            fontSize: 14,
                            fontWeight: 700,
                            backgroundColor: "transparent",
                            color: ACCENT,
                        },

                        "& .MuiSlider-mark": {
                            backgroundColor: "white",
                        },

                        "& .MuiSlider-markActive": {
                            backgroundColor: ACCENT,
                        },

                        "& .MuiSlider-markLabel": {
                            fontSize: 12,
                            color: "white",
                        },

                        "& .MuiSlider-markLabelActive": {
                            color: ACCENT,
                            fontWeight: 700,
                        },
                    }}
                />
                <div>{stoneLayer}</div>
            </div>

            {resultMemo}
        </div>
    );
}
