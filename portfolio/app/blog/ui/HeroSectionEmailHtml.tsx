"use client";
import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";

export function HeroSectionOne() {
    return (
        <div>
            <Link href="/blog/emails" className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition">
                <IoIosArrowRoundBack />
            </Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                {/* Header */}
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">Envoyer un email avec mailto:</h1>
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
                            <div className="w-full space-y-16">
                                <section id="intro">
                                    <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                                    <p className="text-gray-300">
                                        Le protocole <code className="text-blue-400">mailto:</code> permet de créer des liens cliquables
                                        qui ouvrent automatiquement le client de messagerie de l&apos;utilisateur comme <b>Gmail</b> ou <b>Outlook</b>
                                        avec une adresse, un objet ou un message déjà préremplis.
                                        <br />
                                        Cette méthode <strong>n&apos;envoie pas d&apos;email depuis le navigateur</strong>. Elle se contente
                                        d&apos;ouvrir une application d&apos;email installée sur l&apos;appareil de l&apos;utilisateur.
                                        <br />
                                        Même si elle est limitée et peu recommandée pour un usage professionnel, elle reste une solution
                                        rapide et simple à mettre en place, idéale pour débuter ou créer une page de contact minimale.
                                        <br/><br/>
                                        Il est possible d&apos;utiliser ce protocole de deux manières différentes :
                                        <ul className="list-disc ml-6 mt-2 text-gray-300">
                                            <li>sous forme d&apos;hyperlien</li>
                                            <li>ou dans un simple code de formulaire de contact</li>
                                        </ul>
                                    </p>
                                </section>

                                <section id="preparation">
                                    <h2 className="text-2xl font-bold mb-4 text-white">2. Utiliser mailto: sous forme d&apos;hyperlien</h2>
                                    <p className="text-gray-300">
                                        Pour créer un lien qui ouvre le client mail avec un destinataire, un sujet et un contenu pré-rempli, voici la structure à suivre :
                                    </p>
                                    <div className="bg-black-200 text-sm text-white p-4 rounded-md font-mono">
                                        &lt;a href=&ldquo;mailto:adresse@email.com?subject=Sujet&body=Contenu du message&rdquo;&gt;<br/>
                                        &nbsp;&nbsp;Envoyer un email<br/>
                                        &lt;/a&gt;
                                    </div>
                                    <p className="text-gray-300 mt-4">
                                        Exemple :
                                    </p>
                                    <div className="bg-black-200 text-sm text-white p-4 rounded-md font-mono">
                                        &lt;a href=&ldquo;mailto:contact@monsite.com?subject=Hello&body=Bonjour, je voulais juste dire bonjour !&rdquo;&gt;<br/>
                                        &nbsp;&nbsp;Envoyer un email<br/>
                                        &lt;/a&gt;
                                    </div>
                                </section>

                                <section id="form">
                                    <h2 className="text-2xl font-bold mb-4 text-white">3. Mailto dans un simple formulaire</h2>
                                    <p>
                                        Il est possible d&apos;insérer <code className="text-blue-400">mailto:</code> dans le code d&apos;un formulaire de contact basique et permettre à aux utilisateurs d&apos;envoyer des messages sans traitement en arrière-plan.
                                        Cependant, cette option est recommandée si tu prévois un faible trafic sur ton site.
                                    </p>
                                    <p className="text-gray-300 mt-4">
                                        Exemple :
                                    </p>
                                    <div className="bg-black-200 text-sm text-white p-4 rounded-md font-mono">
                                        &lt;form action=&quot;mailto:contact@monsite.com&quot; method=&quot;post&quot; enctype=&quot;text/plain&quot;&gt;<br/>
                                        &nbsp;&nbsp;Prénom: &lt;input type=&quot;text&quot; name=&quot;Prenom&quot;/&gt;<br/>
                                        &nbsp;&nbsp;Email: &lt;input type=&quot;text&quot; name=&quot;Email&quot;/&gt;<br/>
                                        &nbsp;&nbsp;&lt;input type=&quot;submit&quot; name=&quot;submit&quot; value=&quot;Envoyer&quot;/&gt;<br/>
                                        &lt;/form&gt;
                                    </div>
                                </section>

                                <section id="limitations">
                                    <h2 className="text-2xl font-bold mb-4 text-white">4. Limites de cette méthode</h2>
                                    <p className="text-gray-300">
                                        Bien que simple, cette méthode dépend du client mail installé sur le poste de l&apos;utilisateur.
                                        Sur mobile, le lien peut ouvrir Gmail ou Mail ; sur PC, cela ouvre Outlook ou une autre app liée
                                        par défaut.
                                        <br/><br/>
                                        <p className="text-md font-bold mb-4 text-white" id="avantages">3.1. Les avantages de cette méthode:</p>
                                        <ul className="list-disc ml-6 mt-2 text-gray-300">
                                            <li>Très facile à implémenter</li>
                                            <li>Pas besoin de backend</li>
                                            <li>Pas besoin de formulaire HTML</li>
                                        </ul>
                                        <br/>
                                        <p className="text-md font-bold mb-4 text-white" id="inconvenients">3.2. Les inconvénients de cette méthode:</p>
                                        <ul className="list-disc ml-6 mt-2 text-gray-300">
                                            <li>Pas personnalisable en profondeur</li>
                                            <li>Pas de traçabilité : tu ne sais pas si l&apos;email a été envoyé ou pas</li>
                                            <li>Dépend du client mail installé</li>
                                        </ul>
                                    </p>
                                </section>

                                <section id="next-steps">
                                    <h2 className="text-2xl font-bold mb-4 text-white">5. Les meilleures façons d’envoyer un email depuis son code</h2>
                                    <p className="text-gray-300 mb-4">
                                        Comme tu l&apos;as vu, la méthode <code className="text-blue-400">mailto:</code> est simple, mais limitée.
                                        Si tu veux aller plus loin, il existe des solutions plus fiables, professionnelles et personnalisables pour envoyer des emails depuis ton site ou ton application :
                                    </p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-4">
                                        <li>
                                            <strong>EmailJS (sans backend)</strong> : idéal pour envoyer des emails directement depuis le navigateur sans serveur.
                                            <br />
                                            <Link href="/blog/emails/emailjs" className="text-blue-400 underline">
                                                → Tutoriel : Envoyer un email avec EmailJS
                                            </Link>
                                        </li>
                                        <li>
                                            <strong>SMTP.js (sans backend)</strong> : une autre option côté client pour envoyer des mails via SMTP.
                                            <br />
                                            <Link href="/blog/emails/smtpjs" className="text-blue-400 underline">
                                                → Tutoriel : Envoyer un email avec SMTP.js
                                            </Link>
                                        </li>
                                        <li>
                                            <strong>NodeMailer avec Node.js (backend)</strong> pour un contrôle total sur l&apos;envoi d&apos;emails via un serveur Node.js.
                                            <br />
                                            <Link href="/blog/emails/nodemailer" className="text-blue-400 underline">
                                                → Tutoriel : Envoyer un email avec NodeMailer
                                            </Link>
                                        </li>
                                    </ul>


                                    <p className="text-gray-300 mt-6">
                                        Dans les prochains tutoriels, nous allons explorer chacune de ces options étape par étape avec des exemples concrets.
                                    </p>
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                                    <p className="text-gray-300 mb-6">
                                        Tu connais maintenant la façon la plus rapide d’ajouter un lien d’envoi d’email à ton site. C’est pratique pour les pages de contact simples ou les boutons d’assistance rapide.
                                        <br/><br/>
                                    </p>
                                    <Link href="/blog" className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition">
                                        ← Retour au blog
                                    </Link>
                                    <Link href="/blog/emails" className=" ml-4 inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition">
                                        ← Retourner à la série
                                    </Link>
                                </section>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar TOC */}
                    <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
                        <h3 className="text-lg font-semibold text-white mb-4">Sommaire</h3>
                        <nav className="flex flex-col gap-2 text-sm text-gray-400">
                            <Link href="#intro" className="hover:text-white">1. Introduction</Link>
                            <Link href="#preparation" className="hover:text-white">2. Utiliser mailto: sous forme d&apos;hyperlien</Link>
                            <Link href="#form" className="hover:text-white">3. Mailto dans un simple formulaire</Link>
                            <Link href="#limitations" className="hover:text-white">4. Limites de cette méthode</Link>
                            <Link href="#next-steps" className="hover:text-white">5. Les meilleures façons d’envoyer un email depuis son code</Link>
                            <Link href="#conclusion" className="hover:text-white">Conclusion</Link>
                        </nav>
                    </aside>
                </div>
            </div>
        </div>
    );
}

export default HeroSectionOne;
