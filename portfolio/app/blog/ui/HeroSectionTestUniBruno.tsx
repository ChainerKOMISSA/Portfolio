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
                <h1 className="text-5xl font-bold text-slate-500 text-center">Tester ses APIs avec Bruno</h1>
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
                                <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                                <p className="text-gray-300">
                                    Dans cet article, nous allons découvrir comment écrire des tests unitaires efficaces
                                    avec Bruno, un outil simple et puissant pour tester des APIs.<br/><br/>
                                    Bruno est un client API open-source conçu pour être:
                                </p>
                                <ul className="space-y-2">
                                    <li className="flex items-start space-x-2">
                                        <svg className="w-4 h-4 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                        </svg>
                                        <span><b>Compatible avec Git</b> puisque les collections d’API sont enregistrées sous forme de fichiers texte simples.</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg className="w-4 h-4 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                                        </svg>
                                        <span><b>Utilisable hors ligne</b> car il fonctionne entièrement hors ligne, sans nécessité de se connecter avec un cloud.</span>
                                    </li>
                                </ul>
                            </section>
                            <section id="install">
                                <h2 className="text-2xl font-bold mb-4 text-white">2. Installation de Bruno</h2>
                                <p className="text-gray-300">
                                    Pour commencer, téléchargez Bruno depuis son <a className="text-blue-400 underline" href="https://docs.usebruno.com/introduction/what-is-bruno" target="_blank" rel="noopener noreferrer">
                                    site officiel</a> ou installez-le via npm si vous utilisez la version CLI.
                                </p><br/>
                                <p>Lorsque vous l&apos;ouvrez, la page d&apos;acceuil s&apos;affiche comme ceci:</p><br/>
                                <div className="bg-[url('/bruno1.png')] bg-cover bg-center h-96 w-full">

                                </div>
                            </section>

                            <section id="writing-tests">
                                <h2 className="text-2xl font-bold mb-4 text-white">3. Écriture de tests</h2>
                                <p className="text-gray-300">
                                    Voici comment structurer un test dans Bruno, comment envoyer des requêtes et valider les réponses...
                                </p>
                            </section>

                            <section id="good-practices">
                                <h2 className="text-2xl font-bold mb-4 text-white">4. Bonnes pratiques</h2>
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
                                    ← Retourner au blog
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
                            1. Introduction
                        </Link>
                        <Link href="#install" className={activeId === "install" ? "text-blue-400" : ""}>
                            2. Installation de Bruno
                        </Link>
                        <Link href="#writing-tests" className={activeId === "writing-tests" ? "text-blue-400" : ""}>
                            3. Écriture de tests
                        </Link>
                        <Link href="#good-practices" className={activeId === "good-practices" ? "text-blue-400" : ""}>
                            4. Bonnes pratiques
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