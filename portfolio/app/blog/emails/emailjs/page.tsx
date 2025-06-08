import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";

const formHtmlCode = `<form id="contact-form">
  <input type="text" name="user_name" placeholder="Nom" required />
  <input type="email" name="user_email" placeholder="Email" required />
  <textarea name="message" placeholder="Message" required></textarea>
  <button type="submit">Envoyer</button>
</form>`;

const scriptCode = `import emailjs from 'emailjs-com';

const sendEmail = (e) => {
  e.preventDefault();
  emailjs.sendForm(
    'YOUR_SERVICE_ID',
    'YOUR_TEMPLATE_ID',
    e.target,
    'YOUR_PUBLIC_KEY'
  ).then((result) => {
    console.log('Email envoyé !', result.text);
  }).catch((error) => {
    console.error('Erreur :', error.text);
  });
};

document.getElementById('contact-form').addEventListener('submit', sendEmail);`;

export default function BlogPage() {
    return (
        <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Link
                href="/blog/emails"
                className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition"
            >
                <IoIosArrowRoundBack />
            </Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">
                        Envoyer un email avec EmailJS
                    </h1>
                </header>

                <div className="flex flex-col md:flex-row justify-between">
                    <div className="relative flex-1 flex flex-col items-center justify-center">
                        <div className="px-4 py-10 md:py-20 w-full">
                            <div className="w-full space-y-16">
                                <section id="intro">
                                    <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                                    <p className="text-gray-300">
                                        <code className="text-blue-400">EmailJS</code> permet d’envoyer des emails directement depuis le front-end, sans backend. C’est rapide,
                                        simple et gratuit jusqu’à une certaine limite mensuelle pour la version gratuite.
                                    </p>
                                </section>

                                <section id="setup">
                                    <h2 className="text-2xl font-bold mb-4 text-white">2. Création du compte EmailJS</h2>
                                    <p className="text-gray-300">
                                        Crée un compte sur <a href="https://www.emailjs.com/" target="_blank" className="text-blue-400 underline">emailjs.com</a>{" "}
                                        et connecte-toi.
                                        <br />
                                        Dans ton tableau de bord :
                                    </p>
                                    <ul className="list-disc list-inside mt-2 space-y-1">
                                        <li>Crée un nouveau service (Gmail par exemple).</li>
                                        <li>Crée un nouveau template avec les variables : <code className="text-blue-400">`user_name`</code>, <code className="text-blue-400">`user_email`</code>, <code className="text-blue-400">`message`</code>.</li>
                                        <li>Récupère ton <code className="text-blue-400">`Service ID`</code>, <code className="text-blue-400">`Template ID`</code> et <code className="text-blue-400">`Public Key`</code>.</li>
                                    </ul>
                                </section>

                                <section id="installation">
                                    <h2 className="text-2xl font-bold mb-4 text-white">3. Installation d&apos;EmailJS</h2>
                                    <p className="text-gray-300">
                                        Dans ton terminal, installe la bibliothèque :
                                    </p>
                                    <CodeBlock code="npm install emailjs-com" language="bash" />
                                </section>

                                <section id="formulaire">
                                    <h2 className="text-2xl font-bold mb-4 text-white">4. Créer un formulaire HTML</h2>
                                    <p className="text-gray-300">
                                        Voici un exemple simple de formulaire :
                                    </p>
                                    <CodeBlock code={formHtmlCode} language="html"/>
                                </section>

                                <section id="script">
                                    <h2 className="text-2xl font-bold mb-4 text-white">5. Ajouter le script JavaScript</h2>
                                    <p className="text-gray-300">
                                        Puis ajoute ce script à ton projet dans un fichier JS :
                                    </p>
                                    <CodeBlock code={scriptCode} language="javascript"/>
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                                    <p className="text-gray-300 mb-6">
                                        Tu peux maintenant envoyer des e-mails directement depuis
                                        ton site, sans backend ni configuration complexe. Pour aller
                                        plus loin, personnalise tes templates, ajoute des pièces
                                        jointes, ou intègre avec React.
                                    </p>
                                    <Link
                                        href="/blog"
                                        className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition"
                                    >
                                        ← Retour au blog
                                    </Link>
                                    <Link href="/blog/emails" className=" ml-4 inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition">
                                        ← Retour aux tutoriels email
                                    </Link>
                                </section>
                            </div>
                        </div>
                    </div>

                    <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
                        <h3 className="text-lg font-semibold text-white mb-4">
                            Sommaire
                        </h3>
                        <nav className="flex flex-col gap-2 text-sm text-gray-400">
                            <Link href="#intro" className="hover:text-white">1. Introduction</Link>
                            <Link href="#setup" className="hover:text-white">2. Création du compte EmailJS</Link>
                            <Link href="#installation" className="hover:text-white">3. Installation d&apos;EmailJS</Link>
                            <Link href="#formulaire" className="hover:text-white"> 4. Créer un formulaire HTML</Link>
                            <Link href="#script" className="hover:text-white">5. Ajouter le script JavaScript</Link>
                            <Link href="#conclusion" className="hover:text-white">Conclusion</Link>
                        </nav>
                    </aside>
                </div>
            </div>
        </main>
    );
}
