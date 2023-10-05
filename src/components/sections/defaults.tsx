import { ComponentProps, ReactNode } from "react";
import { VariantProps, tv } from "tailwind-variants";

const section = tv({
    base: "px-3 sm:px-20 sm:pr-60 py-3",
    variants: {
        types: {
            default: "bg-[#11151b] text-white",
            black: "bg-black text-white",
        },
    },
    defaultVariants: {
        types: "default",
    },
});

type Props = ComponentProps<"section"> &
    VariantProps<typeof section> & {
        children: ReactNode;
    };

export default function DefaultSection({ children, types, ...props }: Props) {
    return (
        <section className={section({ types })} {...props}>
            {children}
        </section>
    );
}
