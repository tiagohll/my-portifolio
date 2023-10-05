import Header from "@/components/header";
import DefaultSection from "@/components/sections/defaults";
import Hero from "@/components/sections/hero";
import Image from "next/image";

export default function CChat() {
    return (
        <div>
            <Header />
            <Hero>
                <div className="flex items-center">
                    {/* <Image
                        src="/cchat.svg"
                        width={300}
                        height={300}
                        alt="CChat"
                        loading="lazy"
                        className="select-none"
                    /> */}
                </div>

                <div className="flex flex-col">
                    <h1 className="font-bold text-3xl max-w-sm">
                        Olá, seja bem-vindo(a) ao{" "}
                        <span className="text-[#5865F2]">CChat</span>
                    </h1>
                    <p>
                        Uma ferramenta gratuita que pode aumentar seus ganhos em
                        20%
                    </p>
                    <span className="text-gray-400">
                        Ferramenta indisponível para uso no momento.
                    </span>
                </div>
            </Hero>
            <DefaultSection types="default">
                <div className="max-w-lg">
                    <h2 className="font-bold text-xl">O que é o CChat?</h2>
                    <p>
                        O CChat é uma ferramenta que acelera o atendimento ao
                        cliente em sua empresa. Ela conta com mensagens em tempo
                        real. Além disso você tera um botão o cliente enviar uma
                        mensagem para sua empresa, que podera ser respondida
                        pelo painel do aplicativo do CChat.
                    </p>
                </div>
            </DefaultSection>
        </div>
    );
}
