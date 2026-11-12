import { DetailedHTMLProps, InputHTMLAttributes } from "react";

export default function Input(
    props: DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> & {
        title?: string;
    },
) {
    return (
        <div
            className={`w-full py-2 px-4 rounded-md ${props.title ? "border border-gray-300" : ""}`}
        >
            {props.title && <h3>{props.title}</h3>}
            <input
                {...props}
                className="p-2 px-5 border border-white selection:outline-0 focus:outline-0 rounded-2xl "
            />
        </div>
    );
}
