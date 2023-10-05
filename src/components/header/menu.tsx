import Button from "../button";

export default function Menu({ state }: { state: boolean }) {
    return (
        <div
            className="fixed top-12 right-5 hidden data-[state=open]:block z-[101]"
            data-state={state ? "open" : "closed"}
        >
            <div className="flex flex-col gap-1 max-w-fit bg-black p-1 rounded">
                <Button color="green">
                    <span>Início</span>
                </Button>
                <Button color="green">
                    <span>Projetos</span>
                </Button>
                <Button color="green">
                    <span>Sobre</span>
                </Button>
                <Button color="green">
                    <span>Configurações</span>
                </Button>
            </div>
            <span className="z-[999] absolute peer-hover:opacity-in border-[5px] left-[90%] -translate-x-1/2 bottom-full border-l-transparent border-r-transparent border-t-0 border-b-black" />
        </div>
    );
}
