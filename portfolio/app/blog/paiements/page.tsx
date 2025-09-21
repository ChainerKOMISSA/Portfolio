import {categories} from "@/data";
import {CardDemo} from "@/app/blog/ui/Card";
import {paiementtutorialsItems} from "@/data";
import Link from "next/link";
import {IoIosArrowRoundBack} from "react-icons/io";

export default function BlogPage() {
    return(
        <>
            <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
                <Link href="/blog" className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition">
                    <IoIosArrowRoundBack /></Link>

                <div className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">Intégrer des solutions de paiement en ligne</h1>
                </div>
                <section id="intro">
                    <p className="text-gray-300">
                        Dans cette série de tutoriels, nous allons explorer différentes façons
                        d&apos;intégrer des solutions de paiement en ligne modernes, comme PayPal,
                        Stripe, Square, Google Pay et Apple Pay.<br/>
                        Chaque tutoriel sera pratique, illustré par des exemples concrets et des
                        bonnes pratiques pour t&apos;aider à choisir et mettre en place la solution
                        la plus adaptée à ton projet.<br/><br/>
                        Que tu développes une application web, mobile ou une boutique en ligne, tu
                        trouveras ici les bases pour offrir à tes utilisateurs une expérience de
                        paiement fluide et sécurisée !
                    </p>
                </section>
                <div className="flex flex-row w-full mx-auto mt-4 py-2 gap-4">
                    <div className="left w-full p-4 space-y-8 overflow-y-auto">
                        {paiementtutorialsItems.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                {paiementtutorialsItems.map((item) => (
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
                        ) : (
                            <p className="text-gray-400 italic">Aucun résultat trouvé.</p>
                        )}
                    </div>
                </div>
            </main>
        </>
    )
}