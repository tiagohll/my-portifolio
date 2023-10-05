import { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
    base: "py-2 px-4 rounded duration-300",
    variants: {
        color: {
            green: "bg-emerald-950 text-emerald-300 hover:bg-emerald-300 hover:text-emerald-950 active:bg-emerald-200 active:text-black",
            blue: "bg-blue-950 text-blue-300 hover:bg-blue-300 hover:text-blue-950 active:bg-blue-200 active:text-black",
            gray: "bg-gray-950 text-gray-300 hover:bg-gray-300 hover:text-gray-950 active:bg-gray-200 active:text-black",
            zinc: "bg-zinc-950 text-zinc-300 hover:bg-zinc-300 hover:text-zinc-950 active:bg-zinc-200 active:text-black",
        },
    },
    defaultVariants: {
        color: "green",
    },
});

type Props = ComponentProps<"button"> &
    VariantProps<typeof button> & {
        children: ReactNode;
    };

export default function Button({ children, color, ...props }: Props) {
    return (
        <button className={button({ color }) + props.className} {...props}>
            {children}
        </button>
    );
}
