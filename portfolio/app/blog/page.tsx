'use client'
import React, {useState, useEffect, useRef} from "react";
import {blogItems, links} from "@/data";
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
import BlogNavbar from "@/components/layout/BlogNavbar";
import BlogHero from "@/components/layout/BlogHero";
import TemplatesSection from "@/components/layout/TemplatesSection";


export default function BlogPage() {
    const [collapsed, setCollapsed] = useState(false);
    const [search, setSearch] = useState("");
    const [filterOpen, setFilterOpen] = useState(false);
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const filterRef = useRef<HTMLDivElement>(null);

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

    const filteredLinks = links.filter((item) => {
        const inName = item.name.toLowerCase().includes(search.toLowerCase());
        const inLogo = item.logo.toLowerCase().includes(search.toLowerCase());
        return inName || inLogo;
    });

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
        html: <IoLogoHtml5 className="text-orange-500 w-8 h-8" />,
        web: <IoGlobeOutline className="text-white w-8 h-8" />,
        css: <SiCss3 className="text-blue-600 w-8 h-8" />,
        code: <BiCodeAlt className="text-white w-9 h-9" />,
        design: <RiPencilFill className="text-white w-8 h-8" />,
        reactnative: <SiReact className="text-purple w-8 h-8" />,
        ia: <PiBrainLight className="text-red-500 w-8 h-8" />,
        git: <FaGitAlt className="text-orange-500 w-8 h-8" />
    };

    return (
        <div className="flex min-h-screen bg-black-100">
            <div className={"flex flex-col flex-1 transition-all duration-300 ml-16"}>
                <BlogNavbar
                    collapsed={collapsed}
                    search={search}
                    onSearchChange={setSearch}
                    filterOpen={filterOpen}
                    onFilterToggle={() => setFilterOpen((prev) => !prev)}
                    filterRef={filterRef}
                    selectedCategories={selectedCategories}
                    onToggleCategory={toggleCategory}
                />

                <main className="mt-16 min-h-screen p-10 flex flex-col overflow-hidden sm:px-10 px-5">
                    <BlogHero/>
                    <TemplatesSection articles={blogItems}/>

                    <div id="ressources" className="mt-10 scroll-mt-20">
                        <h2 className="text-lg font-bold text-white mb-4">Liens utiles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
                            {filteredLinks.length > 0 ? (
                                filteredLinks.map((link) => (
                                    <div
                                        key={link.id}
                                        className="card overflow-hidden rounded-3xl border border-white/[0.1] bg-white/5 hover:bg-white/10 transition"
                                    >
                                        <div className="flex lg:flex-row flex-col lg:items-center p-6 gap-4">
                                            <div className="text-3xl">
                                                {techIcons[link.logo] ?? (
                                                    <span className="text-gray-400 text-sm">?</span>
                                                )}
                                            </div>
                                            <div className="flex flex-col lg:ms-5">
                                                <h2 className="text-xl font-bold text-white">{link.name}</h2>
                                                <p className="text-sm text-gray-300 mt-2">{link.description}</p>
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
            </div>
        </div>
    );
}