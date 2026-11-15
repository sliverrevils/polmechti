"use client";

import { useMemo, useState } from "react";

import { calcPlane } from "@/utils/calcFuncs";
import { LAYER_STONE, MATERIALS_LIST, STONES_LIST } from "@/constants/goodsList";
import { IConsumptionStone } from "@/types/types";
import { MenuItem, Select, Slider, Switch, TextField } from "@mui/material";
import { ACCENT } from "@/constants/style";
import { LinkBuyMaterial, LinkBuyStone } from "../theme/LinkBuy";
import { marksHor, marksVer } from "@/constants/marks";
import { calculatePackages } from "@/utils/calculatePackages";
import CalculatedGood from "../common/CalculatedGood";
import Image from "next/image";
import CalculatedStone from "../common/CalculatedStone";

export default function CalculateScreen() {
    const [square, setSquare] = useState<number>(0);
    const [position, setPosition] = useState<keyof IConsumptionStone>("horizont");
    const [stoneLayer, setStoneLayer] = useState(LAYER_STONE.horizont.min);
    const [isAddTenProc, setIsAddTenProc] = useState(true);
    const [selectedStone, setSelectedStone] = useState<keyof typeof STONES_LIST>("bordo");
    const [isWinter, setIsWinter] = useState(false);
    const [isInHouse, setInHouse] = useState(false);
    const [isUseEp2k, setIsUseEp2k] = useState(true);
    const [isUseEgr, setIsUseEgr] = useState(true);

    const resultMemo = useMemo(() => {
        if (!!!square) return <></>;

        const res = calcPlane({ square, position, stoneLayer, isAddTenProc });

        if (!res) return <></>;
        const { glueVer, grunt1k, grunt2k, stone, zap, lak, glueGor, glueGorZ, glueVerZ } = res;

        return (
            <div className="flex flex-col gap-2  rounded-md  py-2">
                <CalculatedStone stoneKG={stone} stoneKey={selectedStone} />

                <CalculatedGood
                    count={
                        //TODO Какой грунт и где использовать ЭГР И ГР
                        // ИСПОЛЬЗУЕМ ЭПОКСИДНЫЙ ГРУНТ ?
                        isUseEgr ? grunt2k : grunt1k
                    }
                    item={isUseEgr ? "egr" : "gr"}
                />

                {
                    // КЛЕЙ ЗИМНИЙ ?
                    // НА ГОРИЗОНТЕ ИСПОЛЬЗУЕМ 1К ИЛИ ЭП2К ?
                    // 1К выгорает и желтеет (полеуретан) , ВЕРТИКАЛИ ТАКОЙ НЕТ
                    isWinter ? (
                        <CalculatedGood
                            count={glueVerZ}
                            item={position === "vertical" ? "kvz" : "2kz"}
                        />
                    ) : (
                        <CalculatedGood
                            count={glueVer}
                            item={position === "vertical" ? "kv" : isUseEp2k ? "ep2k" : "1k"}
                        />
                    )
                }

                {
                    // В ПОМЕЩЕНИИ ?
                    isInHouse ? (
                        <CalculatedGood count={zap} item="zap" />
                    ) : (
                        <CalculatedGood count={lak} item="lak" />
                    )
                }
            </div>
        );
    }, [
        square,
        position,
        stoneLayer,
        isAddTenProc,
        selectedStone,
        isWinter,
        isInHouse,
        isUseEp2k,
        isUseEgr,
    ]);

    return (
        <div className="flex flex-col gap-6 ">
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
                    "& .MuiInputBase-input": { color: ACCENT, fontSize: 33 },
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
                    color: ACCENT,
                    "& .MuiOutlinedInput-notchedOutline": {
                        borderColor: "white",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                        borderColor: ACCENT,
                    },
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                        borderColor: ACCENT,
                    },
                    "& .MuiSvgIcon-root": {
                        color: "white",
                    },
                }}
                title="Выбранная галька"
                value={selectedStone}
                onChange={(e) => setSelectedStone(e.target.value)}
            >
                {(Object.keys(STONES_LIST) as unknown as (keyof typeof STONES_LIST)[])
                    .filter((key) => STONES_LIST[key].show)
                    .map((key) => (
                        <MenuItem key={STONES_LIST[key].price[20].sku.ozon} value={key}>
                            <div className="flex items-center gap-4">
                                <Image
                                    src={`/stone/${key}.png`}
                                    width={50}
                                    height={50}
                                    alt={STONES_LIST[key].name}
                                    className="rounded-2xl aspect-square"
                                />
                                <div className="text-2xl">{STONES_LIST[key].name}</div>
                            </div>
                        </MenuItem>
                    ))}
            </Select>

            <div className="border white rounded-sm p-4">
                <div className="flex text-2xl *:w-full *:text-center  *:border-accent  *:rounded-md *:px-4 *:py-2 *:cursor-pointer">
                    <div
                        className={`${position === "horizont" ? "border text-accent" : "border-0 text-white"}`}
                        onClick={() => {
                            if (position === "horizont") return;
                            setPosition(() => "horizont");
                            setStoneLayer(() => LAYER_STONE.horizont.min);
                        }}
                    >
                        Горизонтальная
                    </div>
                    <div
                        className={`${position === "vertical" ? "border text-accent" : "border-0 "}`}
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
                    <Slider
                        min={
                            position === "horizont" ? marksHor.at(0)?.value : marksVer.at(0)?.value
                        }
                        max={
                            position === "horizont"
                                ? marksHor.at(-1)?.value
                                : marksVer.at(0 - 1)?.value
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
            </div>
            <label className="flex gap-2 items-center">
                <Switch
                    checked={isUseEgr}
                    onChange={(e, checked) => {
                        setIsUseEgr(checked);
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
                <div className={`${isUseEgr ? "text-accent" : ""} text-2xl`}>
                    Используем эпоксидный грунт
                </div>
            </label>
            <label className="flex gap-2 items-center">
                <Switch
                    checked={isUseEp2k}
                    onChange={(e, checked) => {
                        setIsUseEp2k(() => (isWinter ? true : checked));
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
                <div className={`${isUseEp2k ? "text-accent" : ""} text-2xl`}>
                    Используем эпоксидный клей
                </div>
            </label>
            <label className="flex gap-2 items-center">
                <Switch
                    checked={isInHouse}
                    onChange={(e, checked) => {
                        setInHouse(checked);
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
                <div className={`${isInHouse ? "text-accent" : ""} text-2xl`}>В помещении</div>
            </label>
            <label className="flex gap-2 items-center">
                <Switch
                    checked={isWinter}
                    onChange={(e, checked) => {
                        setIsWinter(checked);
                        checked && setIsUseEp2k(true);
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
                <div className={`${isWinter ? "text-accent" : ""} text-2xl`}>
                    Зимние комплекты (от 0°)
                </div>
            </label>
            <label className="flex gap-2 items-center">
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
                <div className={`${isAddTenProc ? "text-accent" : ""} text-2xl`}>
                    Добавить 10 % ко всем расходникам
                </div>
            </label>

            {resultMemo}
        </div>
    );
}
