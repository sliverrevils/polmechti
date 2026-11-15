import { MATERIALS_LIST, STONES_LIST } from "@/constants/goodsList";
import { LinkBuyMaterial, LinkBuyStone } from "../theme/LinkBuy";
import { calculatePackages } from "@/utils/calculatePackages";

export default function CalculatedStone({
    stoneKG,
    stoneKey,
}: {
    stoneKG: number;
    stoneKey: keyof typeof STONES_LIST;
}) {
    if (!stoneKG) return <></>;

    const currentItem = STONES_LIST[stoneKey];
    const stoneBoxes = Math.ceil(stoneKG / 20);

    return (
        <div className="border border-gray-800 flex flex-col px-3 py-1 rounded-2xl">
            <div className="flex justify-between items-center gap-2">
                <div className="flex flex-col w-full ">
                    <div className="flex justify-between gap-3">
                        <div className="flex gap-1 font-bold text-md ">
                            <div>{currentItem.name}</div>
                        </div>
                        <div className="flex gap-2  self-end text-nowrap ">
                            <div className="text-accent font-extrabold"> {stoneBoxes * 20} </div>
                            <div>кг</div>
                            <div className="text-accent font-bold">
                                {stoneBoxes * currentItem.price[20].price} ₽
                            </div>
                        </div>
                    </div>
                    {/* <div className="flex gap-2 ml-4 text-gray-500 text-sm justify-center">
                        <div className="text-gray-300">20кг x {stoneBoxes}</div>
                    </div> */}
                    <div className="flex gap-2 ml-4 text-gray-500 text-sm justify-between">
                        <div className="text-[10px]">{currentItem.code}</div>
                        <div className="text-gray-300"></div>
                        <div>[ 20кг x {stoneBoxes} ]</div>
                    </div>
                </div>
                <LinkBuyStone code={stoneKey} />
            </div>

            {/* <pre className="opacity-40">{JSON.stringify(calcedPackages, null, 2)}</pre> */}
        </div>
    );
}
