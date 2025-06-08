import Link from "next/link";
import {IoIosArrowRoundBack} from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";

export default function BlogPage(){

    const code = `<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Envoyer un email avec SMTP.js</title>
    <script src="https://smtpjs.com/v3/smtp.js"></script>
</head>
<body>
    <header>
        <h1>Application d'envoi d'email</h1> 
        <p>Cliquez sur le bouton ci-dessous pour envoyer un email avec SMTP.js</p> 
    </header>
    <button onclick="sendEmail()">Envoyer un email</button> 

    <script>
        function sendEmail() {
            Email.send({
                Host: "smtp.servicesmtp.com",
                Username: "nom_utilisateur",
                Password: "mot_de_passe",
                To: 'destinataire@example.com',
                From: "expediteur@example.com",
                Subject: "Email",
                Body: "Ceci est un email de test envoyé avec SMTP.js"
            })
            .then(function (message) {
                alert("Email envoyé avec succès")
            });
        }
    </script>
</body>
</html>`;

    return (
        <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Link href="/blog/emails" className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition">
                <IoIosArrowRoundBack />
            </Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                {/* Header */}
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">Envoyer un mail avec SmtpJS</h1>
                </header>
                <div className="flex flex-col md:flex-row justify-between">
                    <div className="relative flex-1 flex flex-col items-center justify-center">
                        {/* Borders */}
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
                                        <code className="text-blue-400">SMTP.js</code> est une bibliothèque JavaScript très légère qui
                                        permet aux applications web orientées front-end d&apos;envoyer des mails directement depuis le
                                        client via le protocole SMTP (Simple Mail Transfer Protocol).<br/><br/>
                                        Cette bibliothèque convient surtout aux projets de petite envergure ou aux tests. Pour un usage en
                                        production ou dans des projets où la sécurité est importante, il est recommandé d&apos;utiliser
                                        un service d&apos;email offrant une meilleure sécurité.
                                    </p>
                                </section>

                                <section id="preparation">
                                    <h2 className="text-2xl font-bold mb-4 text-white">2. Utilisation de SmtpJS</h2>
                                    <p className="text-gray-300">
                                        Pour utiliser SmtpJS, il faut ajouter la balise <code className="text-blue-400">script</code> dans ton code comme ceci :
                                    </p><br/>
                                    <pre className="bg-neutral-900 text-green-300 p-4 rounded-md overflow-auto text-sm mb-4">
                                        <code>
                                        &lt;script src=&ldquo;https://smtpjs.com/v3/smtp.js&rdquo;&gt;&lt;/script&gt;
                                        </code>
                                    </pre>
                                    <p className="text-gray-300">
                                        Voici un exemple complet d&apos;utilisation de <code className="text-blue-400">SmtpJS</code> dans une page Html :
                                    </p><br/>
                                    <CodeBlock code={code} language="html"/>
                                </section>

                                <section id="configuration">
                                    <h2 className="text-2xl font-bold mb-4 text-white">3. Configuration</h2>
                                    <p className="text-gray-300">
                                        Le nom d&apos;utilisateur, le mot de passe et les autres paramètres du mail doivent être remplacés par les vraies données de ton serveur SMTP.<br/>
                                        Pour configurer ton serveur SMTP en local, je te conseille de lire ce <a className="text-blue-400 underline" href="https://mailtrap.io/fr/blog/setup-smtp-server/" target="_blank">tutoriel</a> de Mailtrap.
                                    </p>
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                                    <p className="text-gray-300 mb-6">
                                        Il est important de garder à l&apos;esprit que <b className="text-blue-400">SMTP.js ne chiffre pas les informations sensibles</b> comme
                                        les identifiants SMTP. Il n&apos;est donc pas recommandé pour des applications en production ou tout
                                        cas d&apos;usage où la sécurité est primordiale.<br/>
                                        Pour des projets sérieux, privilégie l&apos;utilisation de services d’email professionnels SendGrid
                                        (un tutoriel sera bientôt disponible) avec une authentification sécurisée.
                                    </p>
                                    <Link href="/blog" className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition">
                                        ← Retour au blog
                                    </Link>
                                    <Link href="/blog/emails" className=" ml-4 inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition">
                                        ← Retour aux tutoriels email
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
                            <Link href="#preparation" className="hover:text-white">2. Utilisation de SmtpJS</Link>
                            <Link href="#configuration" className="hover:text-white">3. Configuration</Link>
                            <Link href="#conclusion" className="hover:text-white">Conclusion</Link>
                        </nav>
                    </aside>
                </div>
            </div>
        </main>
    )
}