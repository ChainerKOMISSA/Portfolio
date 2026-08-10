"use client";
import { BiSearch } from "react-icons/bi";
import { quizCategories } from "@/data";
import {IoIosArrowRoundBack} from "react-icons/io"
import Link from 'next/link';
import { SiReact, SiJavascript, SiJenkins } from "react-icons/si";
import { LuBrainCircuit } from "react-icons/lu";
import { FaJava } from "react-icons/fa";

const quizIcons: Record<string, JSX.Element> = {
    react: <SiReact className="w-5 h-5" />,
    javascript : <SiJavascript className="w-5 h-5" />,
    ia : <LuBrainCircuit className="w-5 h-5" />,
    cicd : <SiJenkins className="w-5 h-5" />,
    java : <FaJava className="w-5 h-5" />
};

export default function QuizPage() {
    return (
        <>
            <header
                className={"fixed top-0 right-0 z-30 h-16 py-2 flex items-center gap-6 px-6\n   " +
                    "     bg-black-100/80 backdrop-blur-md border-b border-white/5\n    " +
                    "    transition-all duration-300\n      " +
                    "  left-0"}>
                <a
                    href="/blog"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm
                    text-white/50 hover:text-white hover:bg-white/8 transition"
                >
                    <IoIosArrowRoundBack size={15} />
                    <span>Retour</span>
                </a>
            </header>
            <main className=" mt-10 min-h-screen bg-black-100 text-white px-6 py-12">
            <div className="max-w-6xl mx-auto">

                <section className="mb-14">
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
                        <div>
                            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                                Explorer les{" "}
                                <span className="text-transparent bg-clip-text bg-purple">
                      Quiz
                    </span>
                            </h1>

                            <p className="mt-5 max-w-2xl text-md leading-8 text-white/60">
                                Testez vos compétences, repoussez vos limites et maîtrisez
                                les architectures modernes à travers nos défis interactifs.
                            </p>
                        </div>

                        {/* SEARCH */}
                        <div className="relative w-full md:w-72">
                            <BiSearch
                                size={20}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50"
                            />

                            <input
                                type="text"
                                placeholder="Rechercher un thème..."
                                className="
                      w-full
                      rounded-xl
                      border border-white/5
                      bg-white/5
                      py-4 pl-12 pr-4
                      text-sm text-white
                      placeholder:text-white/30
                      outline-none
                      focus:border-violet-500/50
                      focus:ring-1
                      focus:ring-violet-500/30
                      transition
                    "
                            />
                        </div>
                    </div>
                </section>

                {/* CATEGORIES */}
                <section
                    className="
                rounded-3xl
                border border-white/5
                bg-white/[0.02]
                p-6 md:p-10
              "
                >
                    {/* SECTION HEADER */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-xl font-semibold">
                            Parcourez les différents thèmes
                        </h2>
                    </div>

                    {/* GRID */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {quizCategories.map((category) => (
                            <Link
                                key={category.slug}
                                href={`/blog/quiz/${category.slug}`}
                                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:bg-white/[0.05]">
                                <div className="
                        absolute
                        -right-10
                        -top-10
                        h-32
                        w-32
                        rounded-full
                        bg-violet-500/10
                        blur-3xl
                        opacity-0 transition duration-300 group-hover:opacity-100"/>
                                {/* ICON */}
                                <div
                                    className={`relative flex h-14 w-14 items-center justify-center rounded-xl
                        ${category.iconBg} ${category.iconColor} text-xs font-bold tracking-wide`}>
                                    {quizIcons[category.icon]}
                                </div>

                                {/* CONTENT */}
                                <div className="relative mt-6">
                                    <h3 className="text-lg font-semibold">
                                        {category.title}
                                    </h3>

                                    <p className="mt-2 min-h-[48px] text-sm leading-6 text-white/45">
                                        {category.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-xs font-small uppercase tracking-widest text-violet-400">
                                        <span>{category.count} questions</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>

            </div>
        </main>
        </>
    );
}