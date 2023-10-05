import { ReactNode, ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const Cards = tv({
    base: "flex gap-1 items-center justify-ceenter p-1 select-none rounded",
    variants: {
        color: {
            green: "bg-emerald-950 text-emerald-300 ",
            blue: "bg-blue-950 text-blue-300 ",
            purple: "bg-purple-950 text-purple-300 ",
            zinc: "bg-zinc-800 bg-opacity-50 text-zinc-300 ",
            red: "bg-red-950 text-red-300 ",
        },
    },
    defaultVariants: {
        color: "green",
    },
});

type Props = ComponentProps<"div"> &
    VariantProps<typeof Cards> & {
        children: ReactNode;
    };

export default function TechnologyCard({ children, color, ...props }: Props) {
    return (
        <div className={Cards({ color }) + props.className} {...props}>
            {children}
        </div>
    );
}
