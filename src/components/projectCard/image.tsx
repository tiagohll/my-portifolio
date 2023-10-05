import Image from "next/image";
import { ReactNode } from "react";

type Props = {
    url: string;
};

export default function CardImage({ url }: Props) {
    return (
        <Image
            className="rounded"
            src={url}
            alt="Project Card - Image"
            width={500}
            height={300}
        />
    );
}
