"use client";
import Link from "next/link";
import Image from "next/image";
import {IoIosArrowRoundBack} from "react-icons/io";

export function HeroSectionOne() {

    return (
        <>
            <Link href="/blog" className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition">
                <IoIosArrowRoundBack /></Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                {/* Header */}
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">Déployer son application sur Github Pages</h1>
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
                                        GitHub Pages est un service gratuit proposé par GitHub qui permet d&apos;héberger facilement des sites web
                                        statiques directement depuis un dépôt. Que vous soyez développeur.se ou débutant.e, c&apos;est une solution simple,
                                        rapide et idéale pour publier un portfolio, une documentation ou même une application front-end. <br/>
                                        <br/>Dans ce tutoriel, nous allons découvrir pas à pas comment déployer votre application sur GitHub Pages.
                                    </p>
                                </section>

                                <section id="preparation">
                                    <h2 className="text-2xl font-bold mb-4 text-white">2. Préparation du projet</h2>
                                    <p className="text-gray-300">
                                        Avant de déployer, assurez-vous que votre projet est bien initialisé avec Git et à jour sur Github.<br/>
                                        Vous devez pouvoir accéder à votre repository sur Github comme ceci : <br/>
                                    </p><br/>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden">
                                        <Image src="/github1.png" alt="Capture du dépôt GitHub" fill className="object-cover"/>
                                    </div>
                                </section>

                                <section id="configuration">
                                    <h2 className="text-2xl font-bold mb-4 text-white">3. Configurations du déploiement</h2>
                                    <p className="text-gray-300">
                                        Naviguez dans l&apos;onglet <code className="text-blue-400">Settings</code> et accédez à la page :
                                    </p>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden">
                                        <Image src="/github3.png" alt="Capture du dépôt GitHub" fill className="object-cover"/>
                                    </div>
                                    <p className="text-gray-300 mt-4">
                                        Dans le menu à gauche cliquez sur l&apos;option <code className="text-blue-400">Pages</code> et suivez ces étapes pour la configuration :<br/>
                                    </p>
                                    <p className="text-gray-300 mt-4">
                                        <ul className="list-disc list-inside">
                                            <li>La source de déploiement doit être <b>Deploy from a branch</b> ce qui signifie que vous allez effectuer votre déploiement
                                                depuis l&apos;une des branches de votre repository.<br/>
                                                <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                                    <Image src="/github5.png" alt="Capture du dépôt GitHub" fill className="object-cover"/>
                                                </div>
                                            </li>

                                            <li>Vous devez donc choisir ensuite la branche depuis laquelle votre déploiement devra être fait. dans mon cas, j&apos;ai choisi la branche <code className="text-blue-400">main</code>.<br/>
                                                <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                                    <Image src="/github6.png" alt="Capture du dépôt GitHub" fill className="object-cover"/>
                                                </div>
                                            </li>
                                        </ul>
                                        Puis vous cliquez sur <code className="text-blue-400">Save</code> pour enregistrer vos modifications.<br/>
                                        Vous verrez une notification apparaître comme ceci :
                                        <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                            <Image src="/github7.png" alt="Capture du dépôt GitHub" fill className="object-cover"/>
                                        </div>
                                        Après quelques minutes, vous pouvez raffaîchir la page et remarquer que le déploiement a été réalisé avec succès. <br/>
                                        Le lien d&apos;accès à votre application sera affiché comme ceci :
                                        <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                            <Image src="/github8.png" alt="Capture du dépôt GitHub" fill className="object-cover"/>
                                        </div>
                                    </p>
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                                    <p className="text-gray-300 mb-6">
                                        Félicitations ! 🎉 Vous venez de mettre votre application (ou site web) en ligne gratuitement grâce à GitHub Pages. <br />
                                        Ce service vous permet de partager facilement vos projets avec le monde, sans configuration complexe. <br />
                                        N&apos;hésitez pas à explorer d’autres options de personnalisation ou à automatiser vos déploiements pour aller encore plus loin !                                </p>
                                    <Link href="/blog" className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition">
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
                            <Link href="#intro" className="hover:text-white">
                                1. Introduction
                            </Link>
                            <Link href="#preparation" className="hover:text-white">
                                2. Préparation du projet
                            </Link>
                            <Link href="#configuration" className="hover:text-white">
                                3. Configuration du déploiement
                            </Link>
                            <Link href="#conclusion" className="hover:text-white">
                                Conclusion
                            </Link>
                        </nav>
                    </aside>
                </div>
            </div>
        </>
    );
}

export default HeroSectionOne;