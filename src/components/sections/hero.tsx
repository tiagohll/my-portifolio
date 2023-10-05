import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function Hero({ children }: Props) {
    return (
        <section
            id="hero"
            className="h-[80vh] bg-gradient-to-tr from-[#0E1116] to-[#011611] text-gray-200 flex items-center justify-between px-3 sm:px-20 sm:pr-60"
        >
            {children}
        </section>
    );
}
