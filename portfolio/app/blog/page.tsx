'use client'
import Link from "next/link";
import React, {useState} from "react";
import { Input } from "./ui/Input";
import { IoIosArrowRoundBack } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {categories, blogItems, links} from "@/data";
import {CardDemo} from "./ui/Card";
import {
    SiAngular,
    SiExpress,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiTailwindcss,
    SiTypescript, SiCss3
} from "react-icons/si";
import {BiLogoJava, BiCodeAlt} from "react-icons/bi";
import {IoLogoHtml5} from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";






export default function BlogPage() {
    const [search, setSearch] = useState("");


    const highlight = (text: string, query: string) => {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) =>
            regex.test(part) ? <mark key={index} className="bg-purple text-black">{part}</mark> : part
        );
    };

    // Filtrage des items en fonction de la recherche
    const filteredItems = blogItems.filter((item) => {
        const inTitle = item.title.toLowerCase().includes(search.toLowerCase());
        const inDesc = item.desc.toLowerCase().includes(search.toLowerCase());
        return inTitle || inDesc;
    });

    // Filtrage des liens en fonction de la recherche
    const filteredLinks = links.filter((item) => {
        const inName= item.name.toLowerCase().includes(search.toLowerCase());
        const inLogo = item.logo.toLowerCase().includes(search.toLowerCase());
        return inName || inLogo;
    })

    const techIcons: Record<string, JSX.Element> = {
        react: <SiReact className="text-blue-400 w-8 h-8" />,
        typescript: <SiTypescript className="text-blue-600 w-8 h-8" />,
        javascript: <SiJavascript className="text-yellow-400 w-7 h-7" />,
        nodejs: <SiNodedotjs className="text-green-600 w-8 h-8" />,
        tailwindcss: <SiTailwindcss className="text-cyan-400 w-8 h-8" />,
        nextjs: <SiNextdotjs className="text-gray-300 w-8 h-8" />,
        python: <SiPython className="text-yellow-400 w-8 h-8" />,
        mongodb: <SiMongodb className="text-green-600 w-8 h-8" />,
        express: <SiExpress className="text-whitew-8 h-8" />,
        angular: <SiAngular className="text-red-600 w-8 h-8" />,
        java: <BiLogoJava className="text-red-600 w-8 h-8" />,
        html:<IoLogoHtml5 className="text-orange-500 w-8 h-8"/>,
        web:<IoGlobeOutline className="text-white w-8 h-8"/>,
        css:<SiCss3 className="text-blue-600 w-8 h-8"/>,
        code:<BiCodeAlt className="text-white w-9 h-9"/>,
        design:<RiPencilFill className="text-white w-8 h-8"/>,
        reactnative: <SiReact className="text-purple w-8 h-8" />
    };

    return (
        <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Link href="/" className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition">
                    <IoIosArrowRoundBack /></Link>
            <div className="flex flex-col items-center justify-center px-2">
                <h1 className="text-5xl font-bold mb-4 text-center">Bienvenue sur <span className="text-purple">mon blog</span></h1>
                    <p className="max-w-2xl text-center text-sm sm:text-base">
                        Un espace pour les devs curieux : vous trouverez ici mes boilerplates, des tutoriels sur des outils que j&apos;ai testé et des liens
                        vers des plateformes, des outils bref des ressources utiles que j&apos;ai découvert. Open source, bien sûr.
                    </p>
                </div>
            <div className="flex flex-row w-2/3 mx-auto gap-4 mt-4">
                <div className="relative w-full"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 text-sm">
                    <HiMagnifyingGlass/></span>
                    <Input id="search" type="text" placeholder="Effectuer une recherche ..." className="pl-10 w-full"
                           value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
            </div>
            <div className=" flex flex-row w-full">
                <div className="flex flex-row w-full mx-auto mt-4 py-2 gap-2">
                    <div className="left w-full p-4 space-y-8 overflow-y-auto">
                        {categories.map((category) => {
                            const itemsInCategory = filteredItems.filter(
                                (item) => item.category === category.name
                            );
                            if (itemsInCategory.length === 0) return null;
                            return (
                                <div key={category.id} className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-lg font-bold text-white">{highlight(category.name, search)}</h2>
                                    </div>
                                    {itemsInCategory.length === 0 ? (
                                        <p className="text-gray-400 italic">Aucune donnée pour cette catégorie.</p>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                            {itemsInCategory.map((item) => (
                                                <CardDemo
                                                    key={item.id}
                                                    title={highlight(item.title, search)}
                                                    desc={highlight(item.desc, search)}
                                                    img={item.img}
                                                    date={item.date}
                                                    category={item.category}
                                                    technologies={item.technologies}
                                                    projectLink={item.link}
                                                />
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                        {filteredItems.length === 0 && (
                            <p className="text-gray-400 italic">Aucun résultat trouvé.</p>
                        )}
                    </div>
                </div>
                {/*<div className="flex flex-col w-1/4 mx-auto mt-4 py-2 gap-2">
                    <h2 className="text-lg font-bold text-white">Liens utiles</h2>
                    <ul role="list" className="divide-y divide-gray-800">
                        {visibleLinks.map((link) => (
                            <li key={link.id} className="flex justify-between gap-x-6 py-5">
                                <div className="flex min-w-0 gap-x-4">
                                    <div className="size-12 flex items-center justify-center rounded-full bg-gray-900">
                                        {techIcons[link.logo] ?? (
                                            <span className="text-gray-400 text-sm">?</span>
                                        )}
                                    </div>
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-md font-semibold text-white">
                                            {highlight(link.name, search)}
                                        </p>
                                        <a className="mt-1 truncate text-xs/5 text-purple" href={link.link} target="_blank">
                                            {link.link}
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                        {filteredLinks.length === 0 && (
                            <p className="text-gray-400 italic">Aucun résultat.</p>
                        )}
                    </ul>
                    {filteredLinks.length > 10 && !search && !showAll && (
                        <button
                            className="mt-2 text-sm text-blue-400 hover:underline"
                            onClick={() => setShowAll(true)}
                        >
                            Afficher plus
                        </button>
                    )}
                </div>*/}
            </div>

            <h2 className="text-lg font-bold text-white mb-4">Liens utiles</h2>
            <div className="flex flex-row w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
                    {filteredLinks.length > 0 ? (
                        filteredLinks.map((link) => (
                            <div
                                key={link.id}
                                className="card overflow-hidden rounded-3xl border border-white/[0.1] bg-white/5 hover:bg-white/10 transition">
                                <div className="flex lg:flex-row flex-col lg:items-center p-6 gap-4">
                                    <div className="text-3xl">
                                        {techIcons[link.logo] ? techIcons[link.logo] : (
                                            <span className="text-gray-400 text-sm">?</span>
                                        )}
                                    </div>
                                    <div className="flex flex-col lg:ms-5">
                                        <h2 className="text-xl font-bold text-white">
                                            {link.name}
                                        </h2>
                                        <p className="text-sm text-gray-300 mt-2">
                                            {link.description}
                                        </p>
                                        <a
                                            href={link.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-purple hover:underline text-sm mt-1"
                                        >
                                            Voir...
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-400 italic">Aucun résultat.</p>
                    )}
                </div>
            </div>



        </main>
    );
}