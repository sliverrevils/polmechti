import { MATERIALS_LIST } from "@/constants/goodsList";
import { LinkBuyMaterial } from "../theme/LinkBuy";
import { calculatePackages } from "@/utils/calculatePackages";

export default function CalculatedGood({
    item,
    count,
    position,
}: {
    item: keyof typeof MATERIALS_LIST;
    count: number;
    position?: "вертикальный" | "горизонтальный";
}) {
    if (!count) return <></>;
    const currentItem = MATERIALS_LIST[item];
    const calcedPackages = calculatePackages(count, currentItem.priceKg);

    return (
        <div className="border border-gray-800 flex flex-col px-3 py-1 rounded-2xl">
            <div className="flex justify-between items-center">
                <div className="flex flex-col">
                    <div className="flex gap-3">
                        <div className="flex gap-1">
                            <div>{currentItem.name}</div>
                            <div className="text-accent font-extrabold"> {count} </div>
                            <div>кг</div>
                        </div>
                        <div className="text-accent font-bold">{calcedPackages.totalPrice} ₽</div>
                    </div>
                    <div className="flex gap-2 ml-4 text-gray-500 text-sm">
                        <div className="text-gray-300">
                            {calcedPackages.packages.reduce<string>(
                                (acc, el, idx) =>
                                    acc +
                                    `[  ${el.weight}кг x ${el.count}  ]${
                                        calcedPackages.packages.length - 1 !== idx ? ", " : ""
                                    }`,
                                "",
                            )}
                        </div>
                    </div>
                </div>
                <LinkBuyMaterial item="lak" />
            </div>

            {/* <pre className="opacity-40">{JSON.stringify(calcedPackages, null, 2)}</pre> */}
        </div>
    );
}
