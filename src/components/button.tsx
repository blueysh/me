import { MouseEventHandler } from "react";

export default function Button({ type, children, onClick }: ButtonProps) {
    return (
        <button
            className={`${type === 'primary' ? "bg-blue-600 hover:bg-blue-700" : "bg-neutral-600 hover:bg-neutral-700"} active:translate-y-[1px] text-white ${ type === "icon" ? "p-5 h-[25] w-[25]" : "px-5 py-1" } mx-2 rounded-full`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}

interface ButtonProps {
    type: "primary" | "secondary" | "icon";
    children?: any;
    onClick?: MouseEventHandler;
}