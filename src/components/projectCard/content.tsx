import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export default function CardContent({ children }: Props) {
    return (
        <div className="flex flex-col items-start justify-between max-w-2xl gap-1">
            {children}
        </div>
    );
}
