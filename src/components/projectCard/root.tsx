import Link from "next/link";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    projectUrl: string;
};

export default function CardRoot({ children, projectUrl, ...props }: Props) {
    return (
        <Link
            {...props}
            href={`/projects/${projectUrl}`}
            className="hover:bg-gray-700 hover:bg-opacity-20 hover:border-b-gray-700 hover:border-opacity-20 group rounded flex flex-col p-1 mb-3 border-b border-emerald-950/50 items-start duration-200"
        >
            {children}
        </Link>
    );
}
