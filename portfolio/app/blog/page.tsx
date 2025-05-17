import Link from "next/link";
import { Input } from "./ui/Input";
import { IoIosArrowRoundBack } from "react-icons/io";
import { HiMagnifyingGlass } from "react-icons/hi2";



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
                    <Link href="/" className="inline-block px-4 py-2 w-32 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition">
                        Rechercher
                    </Link>
                </div>
            </div>
            <div className="flew flew-row w-full mt-4 bg-red-300">
                <div className="left w-4/5 bg-green-400">
                </div>
                <div className="right w-1/5 bg-blue-300">
                </div>
            </div>
        </main>
    );
}