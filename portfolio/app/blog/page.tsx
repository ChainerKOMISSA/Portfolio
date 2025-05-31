'use client'
import Link from "next/link";
import {useState} from "react";
import { Input } from "./ui/Input";
import { IoIosArrowRoundBack } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {categories, blogItems} from "@/data";
import {CardDemo} from "./ui/Card";



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

    return (
        <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Link href="/" className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition">
                    <IoIosArrowRoundBack /></Link>
            <div className="flex flex-col items-center justify-center px-4">
                    <h1 className="text-4xl font-bold mb-4 text-center">Bienvenue sur mon blog</h1>
                    <p className="max-w-2xl text-center text-sm sm:text-base">
                        Un espace pour les devs curieux : vous trouverez ici mes boilerplates, des retours d’expérience sur des bugs tordus, et les solutions que j’ai trouvées en chemin.<br/>Open source, bien sûr.
                    </p>
                </div>
            <div className="flex flex-row w-2/3 mx-auto gap-4 mt-4">
                <div className="relative w-full"><span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 text-sm">
                    <HiMagnifyingGlass/></span>
                    <Input id="search" type="text" placeholder="Effectuer une recherche ..." className="pl-10 w-full"
                           value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
                {/*<div className="flex flex-col justify-center">
                    <button className="cursor-not-allowed inline-block px-4 py-2 w-32 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition">
                        Rechercher
                    </button>
                </div>*/}
            </div>
            <div className="flex flex-row w-full mx-auto mt-4 py-2 gap-4">
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
        </main>
    );
}