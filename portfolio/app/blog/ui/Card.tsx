"use client";
import { cn } from "@/lib/utils";
import {SiReact, SiTypescript, SiJavascript, SiNodedotjs, SiTailwindcss, SiNextdotjs, SiPython,
    SiMongodb, SiExpress, SiAngular, SiFiles } from "react-icons/si";
import { BiLogoJava } from "react-icons/bi";
import { IoLogoHtml5 } from "react-icons/io5";
import { LuFiles } from "react-icons/lu";
import Image from "next/image";



type CardDemoProps = {
    title: string | React.ReactNode;
    desc: string | React.ReactNode;
    date: string;
    category: string;
    img: string;
    technologies: string[];
    projectLink: string;
};

const techIcons: Record<string, JSX.Element> = {
    react: <SiReact className="text-blue-400 w-5 h-5" />,
    typescript: <SiTypescript className="text-blue-600 w-5 h-5" />,
    javascript: <SiJavascript className="text-yellow-400 w-5 h-5" />,
    nodejs: <SiNodedotjs className="text-green-600 w-5 h-5" />,
    tailwindcss: <SiTailwindcss className="text-cyan-400 w-5 h-5" />,
    nextjs: <SiNextdotjs className="text-gray-900 w-5 h-5" />,
    python: <SiPython className="text-yellow-400 w-5 h-5" />,
    mongodb: <SiMongodb className="text-green-600 w-5 h-5" />,
    express: <SiExpress className="text-white w-5 h-5" />,
    angular: <SiAngular className="text-red-600 w-5 h-5" />,
    java: <BiLogoJava className="text-red-600 w-6 h-6" />,
    html:<IoLogoHtml5 className="text-orange-500 w-5 h-5"/>,
    serie:<LuFiles className="text-white w-5 h-5"/>

};

export const BentoGridItem = ({
                                  className,
                                  title,
                                  description,
                                  header,
                                  icon,
                              }: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
                className
            )}
        >
            {header}
            <div className="transition duration-200 group-hover/bento:translate-x-2">
                {icon}
                <div className="mt-2 mb-2 font-sans font-bold text-neutral-600 dark:text-neutral-200">
                    {title}
                </div>
                <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
                    {description}
                </div>
            </div>
        </div>
    );
};

export function CardDemo({
                             title,
                             desc,
                             img,
                             date,
                             category,
                             technologies,
                             projectLink,
                         }: CardDemoProps) {
    // header = image en grand
    const header = (
        <Image
            src={img}
            alt=""
            className="object-cover rounded-md mb-4"
            width={1000}
            height={350}
        />
    );

    // icon = liste d'icônes technologies sur une ligne
    const icon = (
        <div className="flex space-x-3 mb-2">
            {technologies.map((tech) => (
                <div key={tech} title={tech} className="flex items-center">
                    {techIcons[tech.toLowerCase()] || null}
                </div>
            ))}
        </div>
    );

    // ligne catégorie à gauche, date à droite
    const categoryDateLine = (
        <div className="flex justify-between text-gray-500 dark:text-gray-400 mb-4
        font-sans text-xs font-normal">
            <span>{category}</span>
            <span>{date}</span>
        </div>
    );

    // description + categoryDateLine + bouton dans la description pour garder tout ensemble
    const description = (
        <>
            <p className="mb-2">{desc}</p>
            {categoryDateLine}
            {projectLink ? (
                category === "Templates de code" ? (
                    <a
                        href={projectLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-indigo-950 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded transition"
                    >
                        Voir le projet
                    </a>
                ) : (
                    <a
                        href={projectLink}
                        className="inline-block bg-indigo-950 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded transition"
                    >
                        Voir
                    </a>
                )
            ) : (
                <span className="inline-block bg-gray-400 text-white font-semibold px-4 py-2 rounded cursor-not-allowed select-none">
                Non disponible
            </span>
            )}
        </>
    );

    return (
        <BentoGridItem
            header={header}
            icon={icon}
            title={title}
            description={description}
        />
    );
}
