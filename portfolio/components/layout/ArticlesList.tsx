import React, {useRef, useState} from 'react';
import {blogItems, categories} from "@/data";
import {CardDemo} from "@/app/blog/ui/Card";
import {HiMagnifyingGlass} from "react-icons/hi2";


const ArticlesList = () => {
    const [search, setSearch] = useState("");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const getCategoryAnchor = (name: string) => {
        if (name === "Templates de code") return "templates";
        if (name === "Tutoriels" || name === "Série de tutoriels") return "tutoriels";
        return "";
    };

    const highlight = (text: string, query: string) => {
        if (!query) return text;
        const regex = new RegExp(`(${query})`, 'gi');
        const parts = text.split(regex);
        return parts.map((part, index) =>
            regex.test(part)
                ? <mark key={index} className="bg-purple text-black">{part}</mark>
                : part
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

    return (

        <div className="w-full mt-8 space-y-10">

            <div className="flex w-full max-w-lg mx-auto">
                <div className="relative w-full">
    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
      <HiMagnifyingGlass size={14} />
    </span>
                    <input
                        type="text"
                        placeholder="Rechercher..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-9 pr-4 py-3 rounded-lg text-sm bg-white/5
        border border-white/10 text-white/80 placeholder:text-white/30
        focus:outline-none focus:border-violet-400 transition"
                    />
                </div>
            </div>

            {categories.map((category) => {
                const itemsInCategory = filteredItems.filter(
                    (item) => item.category === category.name
                );
                if (itemsInCategory.length === 0) return null;
                return (
                    <div
                        key={category.id}
                        id={getCategoryAnchor(category.name)}
                        className="space-y-4 scroll-mt-20"
                    >
                        <h2 className="text-lg font-bold text-white">
                            {highlight(category.name, search)}
                        </h2>
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
            })}

            {filteredItems.length === 0 && (
                <p className="text-gray-400 italic">Aucun résultat trouvé.</p>
            )}
        </div>
    );
};

export default ArticlesList;