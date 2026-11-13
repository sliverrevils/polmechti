import logo from "@/assets/img/logo.png";
import Image from "next/image";
import CalculateScreen from "@/components/screens/CalculateScreen";

export default function Home() {
    return (
        <div className="min-w-[360px] max-w-[600px] py-4 px-2 flex flex-col gap-4">
            <Image
                src={logo}
                width={logo.width}
                height={logo.height}
                alt="1/2 мечты логотип"
                className="w-[20%] self-center"
                loading="eager"
            />
            <CalculateScreen />
        </div>
    );
}
