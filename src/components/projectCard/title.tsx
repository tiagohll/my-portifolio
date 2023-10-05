import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function CardTitle({ children }: Props) {
    return <span className="font-bold text-lg">{children}</span>;
}
