import { MATERIALS_LIST, STONES_LIST } from "@/constants/goodsList";
import Link from "next/link";
import ozon from "@/assets/img/orig.jpg";
import Image from "next/image";

export function LinkBuyMaterial({ item }: { item: keyof typeof MATERIALS_LIST }) {
    const current = MATERIALS_LIST[item];
    return (
        <div className="  flex flex-col gap-1">
            <Link href={current.links.ozon.link} className="text-white" target="_blank">
                <Image
                    src={ozon}
                    width={ozon.width}
                    height={ozon.height}
                    alt="ozonImg"
                    className="w-7 h-7 rounded-xl"
                />
            </Link>
        </div>
    );
}
export function LinkBuyStone({ code }: { code: keyof typeof STONES_LIST }) {
    const current = STONES_LIST[code];
    return (
        <div className=" flex flex-col gap-1">
            {!!current.price[20].links.ozon && (
                <Link href={current.price[20].links.ozon} className="text-white" target="_blank">
                    <Image
                        src={ozon}
                        width={ozon.width}
                        height={ozon.height}
                        alt="ozonImg"
                        className="w-7 h-7 rounded-full"
                    />
                </Link>
            )}
        </div>
    );
}
