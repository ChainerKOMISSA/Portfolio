"use client";
import Link from "next/link";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";

export function HeroSectionOne() {
    return (
        <>
            <Link href="/blog" className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition">
                <IoIosArrowRoundBack />
            </Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                {/* Header */}
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">Analyser le trafic sur son site web avec Vercel</h1>
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
                                        Vercel offre un service intégré d&apos;analyses permettant de suivre les performances, les visiteurs et les pages vues de votre site en temps réel.
                                        <br/>
                                        Dans ce tutoriel, nous allons voir comment activer et consulter ces <b>analyses</b> sur un site déjà déployé sur Vercel.
                                    </p>
                                </section>

                                <section id="preparation">
                                    <h2 className="text-2xl font-bold mb-4 text-white">2. Accéder au tableau de bord</h2>
                                    <p className="text-gray-300">
                                        Rendez-vous sur <a href="https://vercel.com/dashboard" className="text-blue-400 underline" target="_blank">Vercel Dashboard</a> et sélectionnez le projet que vous souhaitez analyser.
                                    </p>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                        <Image src="/vercelanalytics1.png" alt="Tableau de bord Vercel" fill className="object-cover" />
                                    </div>
                                </section>

                                <section id="analytics">
                                    <h2 className="text-2xl font-bold mb-4 text-white">3. Activer Vercel Analytics</h2>
                                    <p className="text-gray-300">
                                        Dans le menu de navigation, cliquez sur l&apos;onglet <code className="text-blue-400">Analytics</code>.
                                    </p>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                        <Image src="/vercelanalytics2.png" alt="Onglet Analytics sur Vercel" fill className="object-cover" />
                                    </div>

                                    <p className="text-gray-300 mt-4">
                                        Si vous n&apos;avez pas encore activé le service, cliquez sur le bouton <code className="text-blue-400">Enable Analytics</code>. Vous aurez la possibilité de tester la fonctionnalité gratuitement pendant un essai limité (ou via le plan payant si vous y êtes déjà).
                                    </p>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                        <Image src="/vercelanalytics3.png" alt="Activer Vercel Analytics" fill className="object-cover" />
                                    </div>

                                    <p className="text-gray-300 mt-4">
                                        Une fois activée, la section vous affichera automatiquement :
                                    </p>
                                    <ul className="list-disc list-inside text-gray-300">
                                        <li>Le nombre de visiteurs uniques</li>
                                        <li>Le nombre de pages vues</li>
                                        <li>Les pays d&apos;origine des utilisateurs</li>
                                        <li>Les performances par route (latence, temps de réponse)</li>
                                    </ul>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                        <Image src="/vercelanalytics4.png" alt="Statistiques Vercel Analytics" fill className="object-cover" />
                                    </div>
                                    <p className="text-gray-300 mt-4">
                                        Pour l&apos;instant, ces données seront toutes à 0. Pour démarrer le tracking, il faudra installer le package <code className="text-blue-400">@vercel/analytics</code> dans votre projet.
                                    </p>
                                </section>

                                <section id="package-analytics">
                                    <h2 className="text-2xl font-bold mb-4 text-white">4. Installer @vercel/analytics</h2>
                                    <p className="text-gray-300">
                                        Pour l&apos;installation du package dans votre projet, la plateforme Vercel vous montre la démarche à suivre pour y parvenir. Il suffit de sélectionner le langage dans lequel est votre projet et de suivre les instructions.
                                    </p>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                        <Image src="/vercelanalytics5.png" alt="Statistiques Vercel Analytics" fill className="object-cover" />
                                    </div>
                                    <p className="text-gray-300 mt-4">Nous allons réaliser un example pour un projet Next js.</p>
                                    <p className="text-gray-300">
                                        Dans votre terminal, saisissez et lancez la commande :
                                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md text-sm my-2">npm install @vercel/analytics</pre>
                                    </p>
                                    <p className="text-gray-300 mt-4">
                                        Dans votre fichier <code className="text-blue-400">layout.tsx</code>, ajoutez le code suivant :
                                        <pre className="bg-gray-800 text-gray-100 p-4 rounded-md text-sm my-2">{`
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
`}</pre>

                                    </p>
                                    <p className="text-gray-300">
                                        Vous pouvez maintenant partager le lien de votre site avec vos visiteurs et voir les statistiques de votre site.<br/>
                                        Voici un exemple de statistiques pour un site Next js :
                                    </p>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                        <Image src="/vercelanalytics6.png" alt="Statistiques Vercel Analytics" fill className="object-cover" />
                                    </div>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                        <Image src="/vercelanalytics7.png" alt="Statistiques Vercel Analytics" fill className="object-cover" />
                                    </div>
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                                    <p className="text-gray-300 mb-6">
                                        Grâce à Vercel Analytics, vous disposez d&apos;un moyen efficace pour suivre l&apos;engagement sur votre site, sans service externe.
                                        <br/>
                                    </p>
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
                                2. Accéder au tableau de bord
                            </Link>
                            <Link href="#analytics" className="hover:text-white">
                                3. Activer Vercel Analytics
                            </Link>
                            <Link href="#package-analytics" className="hover:text-white">
                                4. Installer @vercel/analytics
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
