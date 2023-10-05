import Link from "next/link";

export default function Ads() {
    return (
        <Link
            href="/cchat?utm_source=projects&utm_medium=ad"
            className="custom-gradient w-full p-2 rounded flex items-center justify-start text-start"
        >
            <div className="flex flex-col">
                <span className="font-bold">
                    Projeto gratuito em desenvolvimento!
                </span>
                <p className="text-black">
                    Uma nova ferramenta está quase sendo pública! Vem conhecer
                    mais sobre o CChat.
                </p>
            </div>
        </Link>
    );
}
