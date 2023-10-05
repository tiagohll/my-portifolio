import Ads from "@/components/ads";
import Button from "@/components/button";
import Header from "@/components/header";
import { NextJs } from "@/components/icons/nextjs";
import { Photoshop } from "@/components/icons/photoshop";
import { ReactIcon } from "@/components/icons/react";
import { TailwindCss } from "@/components/icons/tailwindcss";
import { Ts } from "@/components/icons/ts";
import { ProjectCard } from "@/components/projectCard";
import DefaultSection from "@/components/sections/defaults";
import Hero from "@/components/sections/hero";
import SectionTitle from "@/components/sections/title";
import TechnologyCard from "@/components/technology";
import { projectsData } from "@/db/projects";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <Header />
            <Hero>
                <div className="flex flex-col w-full sm:max-w-md container gap-3 z-[10]">
                    <code className="text-emerald-400 text-xl max-w-fit p-1 rounded">
                        Olá mundo, meu nome é
                    </code>
                    <h1 className="text-3xl font-bold mb-3">Tiago Henrique</h1>
                    <p className="text-gray-400">
                        Olá, meu nome é Tiago Henrique e sou um desenvolvedor
                        front-end. Com mais de 6 meses de experiência, meu
                        objetivo é criar interfaces de usuário bonitas e
                        funcionais. Estou sempre aberto a novas oportunidades e
                        desafios.
                    </p>
                    <div className="flex flex-wrap gap-2 w-full sm:max-w-sm">
                        <TechnologyCard color="blue">
                            <ReactIcon />
                            <span>React</span>
                        </TechnologyCard>
                        <TechnologyCard color="zinc">
                            <NextJs />
                            <span>Next.js</span>
                        </TechnologyCard>
                        <TechnologyCard color="purple">
                            <span>Next Auth</span>
                        </TechnologyCard>
                        <TechnologyCard color="blue">
                            <Ts />
                            <span>Typescript</span>
                        </TechnologyCard>
                        <TechnologyCard color="blue">
                            <TailwindCss />
                            <span>Tailwind CSS</span>
                        </TechnologyCard>
                        <TechnologyCard color="zinc">
                            <span>Shadcn UI</span>
                        </TechnologyCard>
                        <TechnologyCard color="blue">
                            <Photoshop />
                            <span>Adobe Photoshop</span>
                        </TechnologyCard>
                    </div>
                    <Button color="green">
                        <span>Fale comigo</span>
                    </Button>
                </div>
                <Image
                    src="/BANNER-1-P.png"
                    alt="Portifólio - Tiago Technologys"
                    width={500}
                    height={700}
                    className="select-none object-contain blur hidden xl:block"
                />
            </Hero>
            <DefaultSection types="default">
                <SectionTitle title="Projetos" subtitle="destaque" />
                <Ads />
                <div className="flex flex-col p-1">
                    {projectsData.map(
                        (project) =>
                            project.isHighlighted && (
                                <ProjectCard.Root
                                    projectUrl={project.url}
                                    key={project.id}
                                >
                                    <div className="flex gap-10">
                                        <ProjectCard.Image
                                            url={project.image}
                                        />
                                        <ProjectCard.Content>
                                            <div className="flex flex-col">
                                                <ProjectCard.Title>
                                                    {project.name}
                                                </ProjectCard.Title>
                                                <ProjectCard.SubTitle>
                                                    {project.description}
                                                </ProjectCard.SubTitle>
                                            </div>

                                            <div className="flex flex-wrap gap-2 max-w-sm">
                                                {project.languages.map(
                                                    (technology) => (
                                                        <TechnologyCard
                                                            key={technology}
                                                            color={
                                                                technology ===
                                                                    "React.js" ||
                                                                technology ===
                                                                    "Typescript" ||
                                                                technology ===
                                                                    "Tailwind CSS" ||
                                                                technology ===
                                                                    "Adobe Photoshop"
                                                                    ? "blue"
                                                                    : technology ===
                                                                          "Next.js" ||
                                                                      technology ===
                                                                          "Shadcn UI"
                                                                    ? "zinc"
                                                                    : technology ===
                                                                          "Next Auth" ||
                                                                      technology ===
                                                                          "Adobe After Effects"
                                                                    ? "purple"
                                                                    : technology ===
                                                                          "Firebase" ||
                                                                      technology ===
                                                                          "Adobe Illustrator"
                                                                    ? "red"
                                                                    : "blue"
                                                            }
                                                        >
                                                            {technology}
                                                        </TechnologyCard>
                                                    )
                                                )}
                                            </div>
                                            <button className="p-1 rounded my-1">
                                                Acessar projeto{" "}
                                                <span className="group-hover:ml-1 duration-300">
                                                    {"->"}
                                                </span>
                                            </button>
                                        </ProjectCard.Content>
                                    </div>
                                </ProjectCard.Root>
                            )
                    )}
                </div>
            </DefaultSection>
        </div>
    );
}
