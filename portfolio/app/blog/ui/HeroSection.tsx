"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function HeroSectionOne() {
    const [activeId, setActiveId] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            const headings = document.querySelectorAll("h2, h3");
            let currentId = null;
            for (let heading of headings) {
                const rect = heading.getBoundingClientRect();
                if (rect.top < 150) {
                    currentId = heading.id;
                }
            }
            setActiveId(currentId);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
            {/* Header */}
            <header className="w-full px-4 md:px-8 py-6">
                <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Tester ses APIs avec Bruno</h1>
            </header>
            <div className="flex flex-col md:flex-row justify-between">
                <div className="relative flex-1 flex flex-col items-center justify-center">
                    <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
                    </div>
                    <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
                        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
                    </div>

                    <div className="px-4 py-10 md:py-20 w-full">
                        {/* Content */}
                        <div className="w-full space-y-16">
                            <section id="intro">
                                <h2 className="text-2xl font-bold mb-4 text-white">Introduction</h2>
                                <p className="text-gray-300">
                                    Dans cet article, nous allons découvrir comment écrire des tests unitaires efficaces avec Bruno, un outil simple et puissant pour tester des APIs.
                                </p>
                            </section>

                            <section id="install">
                                <h2 className="text-2xl font-bold mb-4 text-white">Installation de Bruno</h2>
                                <p className="text-gray-300">
                                    Pour commencer, téléchargez Bruno depuis son site officiel ou installez-le via npm si vous utilisez la version CLI.
                                </p>
                            </section>

                            <section id="writing-tests">
                                <h2 className="text-2xl font-bold mb-4 text-white">Écriture de tests</h2>
                                <p className="text-gray-300">
                                    Voici comment structurer un test dans Bruno, comment envoyer des requêtes et valider les réponses...
                                </p>
                            </section>

                            <section id="good-practices">
                                <h2 className="text-2xl font-bold mb-4 text-white">Bonnes pratiques</h2>
                                <p className="text-gray-300">
                                    Séparer les cas de test, documenter chaque scénario, et utiliser des données dynamiques sont essentiels pour un test fiable.
                                </p>
                            </section>

                            <section id="conclusion">
                                <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                                <p className="text-gray-300 mb-6">
                                    Bruno vous permet de simplifier vos tests d&apos;API tout en restant flexible. Essayez-le dans vos prochains projets !
                                </p>
                                <Link href="/blog" className="inline-block bg-blue-600 hover:bg-blue-500 text-white text-sm px-4 py-2 rounded-md transition">
                                    ← Retour au blog
                                </Link>
                            </section>
                        </div>
                    </div>
                </div>

                {/* Sidebar TOC */}
                <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
                    <h3 className="text-lg font-semibold text-white mb-4">Sommaire</h3>
                    <nav className="flex flex-col gap-2 text-sm text-gray-400">
                        <Link href="#intro" className={activeId === "intro" ? "text-blue-400" : ""}>
                            Introduction
                        </Link>
                        <Link href="#install" className={activeId === "install" ? "text-blue-400" : ""}>
                            Installation de Bruno
                        </Link>
                        <Link href="#writing-tests" className={activeId === "writing-tests" ? "text-blue-400" : ""}>
                            Écriture de tests
                        </Link>
                        <Link href="#good-practices" className={activeId === "good-practices" ? "text-blue-400" : ""}>
                            Bonnes pratiques
                        </Link>
                        <Link href="#conclusion" className={activeId === "conclusion" ? "text-blue-400" : ""}>
                            Conclusion
                        </Link>
                    </nav>
                </aside>
            </div>
        </div>
    );
}

export default HeroSectionOne;