import Link from "next/link";
import { Input } from "./ui/Input";
import { IoIosArrowRoundBack } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";
import {categories, blogItems} from "@/data";
import {CardDemo} from "./ui/Card";



export default function BlogPage() {
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
                    <Input id="search" type="text" placeholder="Effectuer une recherche ..." className="pl-10 w-full"/>
                </div>
                <div className="flex flex-col justify-center">
                    <button className="cursor-not-allowed inline-block px-4 py-2 w-32 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition">
                        Rechercher
                    </button>
                </div>
            </div>
            <div className="flex flex-row w-full mx-auto mt-4 py-2 gap-4">
                <div className="left w-4/5 p-4 space-y-8 overflow-y-auto">
                    {categories.map((category) => {
                        const itemsInCategory = blogItems.filter(
                            (item) => item.category === category.name
                        );
                        return (
                            <div key={category.id} className="space-y-4">
                                <div className="flex items-center gap-2">
                                    <h2 className="text-lg font-bold text-white">{category.name}</h2>
                                </div>
                                {itemsInCategory.length === 0 ? (
                                    <p className="text-gray-400 italic">Aucune donnée pour cette catégorie.</p>
                                ) : (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                    {itemsInCategory.map((item) => (
                                        <CardDemo
                                            key={item.id}
                                            title={item.title}
                                            desc={item.desc}
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
                </div>
                <div className="right w-1/5">
                    <h2 className="text-lg font-bold text-white hidden">Filtrer</h2>
                </div>
            </div>
        </main>
    );
}