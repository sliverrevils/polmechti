"use client";
import { useMemo, useState } from "react";

export default function StoneCarpetCalculator() {
    const [mode, setMode] = useState("area");

    const [thickness, setThickness] = useState(1);

    // Площадка
    const [area, setArea] = useState("");
    const [length, setLength] = useState("");
    const [width, setWidth] = useState("");

    // Ступени
    const [stepsCount, setStepsCount] = useState(1);
    const [stepLength, setStepLength] = useState(1.5);
    const [stepDepth, setStepDepth] = useState(0.3);
    const [stepHeight, setStepHeight] = useState(0.15);
    const [radius, setRadius] = useState(0);

    const result = useMemo(() => {
        let horizontalArea = 0;
        let verticalArea = 0;

        if (mode === "area") {
            horizontalArea = Number(area) || 0;
        }

        if (mode === "dimensions") {
            horizontalArea = (Number(length) || 0) * (Number(width) || 0);
        }

        if (mode === "stairs") {
            horizontalArea = stepsCount * stepLength * stepDepth;

            const verticalStepsArea = stepsCount * stepLength * stepHeight;

            const radiusArea = radius > 0 ? stepsCount * stepLength * ((Math.PI * radius) / 2) : 0;

            verticalArea = verticalStepsArea + radiusArea;
        }

        const horizontalPebble = horizontalArea * 20 * thickness;

        const ep2k = horizontalArea * 0.8 * thickness;

        const verticalPebble = verticalArea * 12;

        const kv = verticalArea * 1.2;

        return {
            horizontalArea,
            verticalArea,
            horizontalPebble,
            verticalPebble,
            ep2k,
            kv,
            totalPebble: horizontalPebble + verticalPebble,
        };
    }, [
        mode,
        area,
        length,
        width,
        thickness,
        stepsCount,
        stepLength,
        stepDepth,
        stepHeight,
        radius,
    ]);

    return (
        <div className="mx-auto max-w-3xl rounded-3xl border border-zinc-200 bg-black p-6 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold">Калькулятор каменного ковра</h2>

            <div className="space-y-4">
                <div>
                    <label className="mb-2 block font-medium">Что рассчитываем?</label>

                    <select
                        value={mode}
                        onChange={(e) => {
                            setMode(e.target.value);
                            // console.log(e.target.value);
                        }}
                        className="w-full rounded-xl border border-zinc-800 px-4 py-3"
                    >
                        <option value="area">Площадка по площади</option>

                        <option value="dimensions">Площадка по длине и ширине</option>

                        <option value="stairs">Ступеньки</option>
                    </select>
                </div>

                <div>
                    <label className="mb-2 block font-medium">Толщина слоя (см)</label>

                    <input
                        type="range"
                        min="1"
                        max="3"
                        step="0.5"
                        value={thickness}
                        onChange={(e) => setThickness(Number(e.target.value))}
                        className="w-full"
                    />

                    <div className="mt-1 text-sm text-zinc-500">{thickness} см</div>
                </div>

                {/* Площадь */}
                {mode === "area" && (
                    <div>
                        <label className="mb-2 block font-medium">Площадь (м²)</label>

                        <input
                            type="number"
                            min="0"
                            step="0.01"
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            className="w-full rounded-xl border border-zinc-800 px-4 py-3"
                        />
                    </div>
                )}

                {/* Размеры */}
                {mode === "dimensions" && (
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label className="mb-2 block font-medium">Длина (м)</label>

                            <input
                                type="number"
                                min="0"
                                step="0.01"
                                value={length}
                                onChange={(e) => setLength(e.target.value)}
                                className="w-full rounded-xl border border-zinc-800 px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium">Ширина (м)</label>

                            <input
                                type="number"
                                min="0"
                                step="0.01"
                                value={width}
                                onChange={(e) => setWidth(e.target.value)}
                                className="w-full rounded-xl border border-zinc-800 px-4 py-3"
                            />
                        </div>
                    </div>
                )}

                {/* Ступени */}
                {mode === "stairs" && (
                    <div className="grid gap-4 md:grid-cols-2">
                        <div>
                            <label className="mb-2 block font-medium">Количество ступеней</label>

                            <input
                                type="number"
                                min="1"
                                value={stepsCount}
                                onChange={(e) => setStepsCount(Number(e.target.value))}
                                className="w-full rounded-xl border border-zinc-800 px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium">Длина ступени (м)</label>

                            <input
                                type="number"
                                step="0.01"
                                value={stepLength}
                                onChange={(e) => setStepLength(Number(e.target.value))}
                                className="w-full rounded-xl border border-zinc-800 px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium">Глубина проступи (м)</label>

                            <input
                                type="number"
                                step="0.01"
                                value={stepDepth}
                                onChange={(e) => setStepDepth(Number(e.target.value))}
                                className="w-full rounded-xl border border-zinc-800 px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium">Высота подступенка (м)</label>

                            <input
                                type="number"
                                step="0.01"
                                value={stepHeight}
                                onChange={(e) => setStepHeight(Number(e.target.value))}
                                className="w-full rounded-xl border border-zinc-800 px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="mb-2 block font-medium">Радиус скругления (м)</label>

                            <input
                                type="number"
                                step="0.01"
                                min="0"
                                value={radius}
                                onChange={(e) => setRadius(Number(e.target.value))}
                                className="w-full rounded-xl border border-zinc-800 px-4 py-3"
                            />
                        </div>
                    </div>
                )}

                <div className="mt-6 rounded-2xl bg-zinc-800 p-5">
                    <h3 className="mb-4 text-lg font-semibold">Расчет материалов</h3>

                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span>Горизонтальная площадь:</span>
                            <span>{result.horizontalArea.toFixed(2)} м²</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Вертикальная площадь:</span>
                            <span>{result.verticalArea.toFixed(2)} м²</span>
                        </div>

                        <hr className="my-2" />

                        <div className="flex justify-between">
                            <span>Галька (горизонталь):</span>

                            <span>{result.horizontalPebble.toFixed(1)} кг</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Клей ЭП2К:</span>

                            <span>{result.ep2k.toFixed(1)} кг</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Галька (вертикаль):</span>

                            <span>{result.verticalPebble.toFixed(1)} кг</span>
                        </div>

                        <div className="flex justify-between">
                            <span>Клей КВ:</span>

                            <span>{result.kv.toFixed(1)} кг</span>
                        </div>

                        <hr className="my-2" />

                        <div className="flex justify-between text-lg font-bold">
                            <span>Всего гальки:</span>

                            <span>{result.totalPebble.toFixed(1)} кг</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
