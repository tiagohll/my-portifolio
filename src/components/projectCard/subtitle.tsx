import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function CardSubTitle({ children }: Props) {
    return <span className="text-zinc-400">{children}</span>;
}
