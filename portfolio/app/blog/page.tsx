'use client'
import Link from "next/link";
import React, {useState, useEffect, useRef} from "react";
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
import {IoLogoHtml5, IoGlobeOutline} from "react-icons/io5";
import { RiPencilFill } from "react-icons/ri";
import { PiBrainLight } from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import { FiFilter } from "react-icons/fi";


export default function BlogPage() {
    const [search, setSearch] = useState("");
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const filterRef = useRef<HTMLDivElement>(null);
    const categoriesList = [
        "Templates de code",
        "Tutoriels",
        "Série de tutoriels"
    ];

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (filterRef.current && !filterRef.current.contains(e.target as Node)) {
                setFilterOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleCategory = (category: string) => {
        setSelectedCategories((prev) =>
            prev.includes(category)
                ? prev.filter((c) => c !== category)
                : [...prev, category]
        );
    };


    const highlight = (text: string, query: string) => {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) =>
            regex.test(part) ? <mark key={index} className="bg-purple text-black">{part}</mark> : part
        );
    };


    const filteredItems = blogItems.filter((item) => {
        const matchesSearch =
            item.title.toLowerCase().includes(search.toLowerCase()) ||
            item.desc.toLowerCase().includes(search.toLowerCase());
        const matchesCategory =
            selectedCategories.length === 0 ||
            selectedCategories.includes(item.category);
        return matchesSearch && matchesCategory;
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
        express: <SiExpress className="text-white w-8 h-8" />,
        angular: <SiAngular className="text-red-600 w-8 h-8" />,
        java: <BiLogoJava className="text-red-600 w-8 h-8" />,
        html:<IoLogoHtml5 className="text-orange-500 w-8 h-8"/>,
        web:<IoGlobeOutline className="text-white w-8 h-8"/>,
        css:<SiCss3 className="text-blue-600 w-8 h-8"/>,
        code:<BiCodeAlt className="text-white w-9 h-9"/>,
        design:<RiPencilFill className="text-white w-8 h-8"/>,
        reactnative: <SiReact className="text-purple w-8 h-8" />,
        ia: <PiBrainLight className="text-red-500 w-8 h-8" />,
        git: <FaGitAlt className="text-orange-500 w-8 h-8" />
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
                <div className="relative w-full" ref={filterRef}>
                    {/* Icône de recherche */}
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 text-sm">
      <HiMagnifyingGlass />
    </span>
                    <Input
                        id="search"
                        type="text"
                        placeholder="Effectuer une recherche ..."
                        className="pl-10 w-full"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button
                        type="button"
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-transparent p-1 rounded hover:bg-white/10"
                        onClick={() => setFilterOpen((prev) => !prev)}
                    >
                        <FiFilter className="text-white/80" />
                    </button>
                    {filterOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-black-100 border border-white/20 rounded shadow-lg p-3 z-10">
                            <div className="mb-3 border-b border-white/20 pb-1">
                                <span className="text-white text-sm font-semibold tracking-wide uppercase">
                                    Catégories
                                </span>
                            </div>
                            {categoriesList.map((category) => (
                                <label
                                    key={category}
                                    className="flex items-center gap-2 text-white/90 mb-2 cursor-pointer"
                                >
                                    <input
                                        type="checkbox"
                                        className="accent-purple-500"
                                        checked={selectedCategories.includes(category)}
                                        onChange={() => toggleCategory(category)}
                                    />
                                    {category}
                                </label>
                            ))}
                        </div>
                    )}
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
                        {/*{categoriesList.map((category) => {
                            const itemsInCategory = filteredItems.filter(
                                (item) => item.category === category
                            );
                            if (itemsInCategory.length === 0) return null;
                            return (
                                <div key={category} className="space-y-4">
                                    <div className="flex items-center gap-2">
                                        <h2 className="text-lg font-bold text-white">
                                            {highlight(category, search)}
                                        </h2>
                                    </div>
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
                                </div>
                            );
                        })}*/}
                    </div>
                </div>
            </div>

            <h2 className="text-lg font-bold text-white mb-4">Liens utiles</h2>
            <div className="flex flex-row w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
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