import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";
import Image from "next/image";

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
            <Link href="/blog/emails" className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition"><IoIosArrowRoundBack /></Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">Envoyer un email avec EmailJS</h1>
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
                                        <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                            <Image src="/emailjs1.png" alt="Tableau de bord EmailJS" fill className="object-cover"/>
                                        </div>
                                    </p>
                                    <ul className="list-disc list-inside mt-2 space-y-1">
                                        <li className="my-4">Crée un nouveau service (Gmail par exemple).</li>
                                        <div className="relative w-full h-96 rounded-lg overflow-hidden">
                                            <Image src="/emailjs2.png" alt="Service Emailjs" fill className="object-cover"/>
                                        </div>
                                        <div className="relative w-full h-96 rounded-lg overflow-hidden">
                                            <Image src="/emailjs3.png" alt="Service Emailjs" fill className="object-cover"/>
                                        </div>
                                        <li className="mt-4">Crée un nouveau template avec les variables : <code className="text-blue-400">`user_name`</code>, <code className="text-blue-400">`user_email`</code>, <code className="text-blue-400">`message`</code>.</li>
                                        <div className="relative w-full h-96 rounded-lg overflow-hidden my-4">
                                            <Image src="/emailjs4.png" alt="Service Emailjs" fill className="object-cover"/>
                                        </div>
                                        <li className="mt-4">Récupère ton <code className="text-blue-400">`Service ID`</code>, <code className="text-blue-400">`Template ID`</code> et <code className="text-blue-400">`Public Key`</code>.</li>
                                    </ul>
                                    <p className="text-gray-300 mt-4">
                                        Le Public Key se situe dans l&apos;onglet Account :
                                    </p>
                                    <div className="relative w-full h-96 rounded-lg overflow-hidden">
                                        <Image src="/emailjs5.png" alt="Service Emailjs" fill className="object-cover"/>
                                    </div>
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

                                <section id="exemple">
                                    <h2 className="text-2xl font-bold mb-4 text-white">6. Exemple dans un projet React/Next.js</h2>

                                    <h4 className="text-xl font-semibold text-white mt-6">Étape 1. Créer un fichier <code>.env.local</code></h4>
                                    <p className="text-gray-300 mb-4">
                                        Stocke tes identifiants EmailJS dans un fichier <code className="text-blue-400">.env.local</code> (non versionné sur GitHub).
                                    </p>
                                    <CodeBlock
                                        code={`NEXT_PUBLIC_EMAILJS_SERVICE_ID=xxxxxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=xxxxxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxxxxx`}
                                        language="bash"
                                    />

                                    <h4 className="text-xl font-semibold text-white mt-6">Étape 2. Créer un composant ContactForm</h4>
                                    <p className="text-gray-300 mb-4">
                                        Dans ton projet, crée un composant React <code>ContactForm.jsx</code> (ou <code>ContactForm.tsx</code> si tu utilises TypeScript).
                                    </p>
                                    <CodeBlock
                                        code={`"use client";
import { useRef } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      form.current,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    )
    .then((result) => {
      console.log("Email envoyé !", result.text);
      alert("Message envoyé avec succès");
    })
    .catch((error) => {
      console.error("Erreur :", error.text);
      alert("Une erreur est survenue");
    });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 p-4 border rounded-lg">
      <input type="text" name="user_name" placeholder="Nom" required className="p-2 border rounded"/>
      <input type="email" name="user_email" placeholder="Email" required className="p-2 border rounded"/>
      <textarea name="message" placeholder="Message" required className="p-2 border rounded"/>
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
        Envoyer
      </button>
    </form>
  );
}`}
                                        language="javascript"
                                    />

                                    <h4 className="text-xl font-semibold text-white mt-6">Étape 3. Importer le formulaire</h4>
                                    <p className="text-gray-300 mb-4">
                                        Tu peux ensuite l&apos;utiliser dans une page Next.js (par exemple <code>app/contact/page.jsx</code>).
                                    </p>
                                    <CodeBlock
                                        code={`import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <div className="max-w-lg w-full bg-gray-900 p-8 rounded-lg">
        <h1 className="text-2xl font-bold text-white mb-4">Contact</h1>
        <ContactForm />
      </div>
    </main>
  );
}`}
                                        language="javascript"
                                    />

                                    <p className="text-gray-300 mt-6">
                                        Avec cette configuration, ton formulaire envoie directement les emails via EmailJS, sans backend supplémentaire.
                                    </p>
                                    <h4 className="text-xl font-semibold text-white mt-6">Étape 4. Ajouter les variables en production</h4>
                                    <p className="text-gray-300 mb-4">
                                        Les fichiers <code className="text-blue-400">.env.local</code> ne sont pas envoyés lors du déploiement.
                                        Il faut donc définir tes variables dans l&apos;environnement de ton hébergeur.
                                    </p>

                                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                                        <li>Sur <span className="text-blue-400">Vercel</span> : va dans ton projet → <em>Settings</em> → <em>Environment Variables</em> → ajoute <code>NEXT_PUBLIC_EMAILJS_SERVICE_ID</code>, <code>NEXT_PUBLIC_EMAILJS_TEMPLATE_ID</code>, <code>NEXT_PUBLIC_EMAILJS_PUBLIC_KEY</code>.</li>
                                        <li>Sur <span className="text-blue-400">Netlify</span> : va dans <em>Site settings</em> → <em>Build & Deploy</em> → <em>Environment</em> → ajoute les mêmes variables.</li>
                                        <li>Sur un autre hébergeur, recherche la section <em>Environment Variables</em> ou <em>Config Vars</em> et ajoute-les.</li>
                                    </ul>

                                    <p className="text-gray-300 mt-4 flex items-start gap-2">
                                        <svg
                                            className="w-5 h-5 text-yellow-500 mt-1 flex-shrink-0"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M8.257 3.099c.765-1.36 2.721-1.36 3.486 0l6.518 11.614c.75 1.338-.213 3.0-1.742 3.0H3.48c-1.53 0-2.492-1.662-1.742-3.0L8.257 3.1zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-2a1 1 0 01-1-1V7a1 1 0 112 0v3a1 1 0 01-1 1z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span>
    <strong>Important :</strong> comme ce sont des variables <code>NEXT_PUBLIC_</code>, elles seront accessibles
    dans ton code côté client (React).<br />
    C’est normal avec EmailJS, car la clé publique (<em>Public Key</em>) est conçue pour être exposée dans le front-end.
  </span>
                                    </p>


                                </section>


                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                                    <p className="text-gray-300 mb-6">
                                        Tu peux maintenant envoyer des e-mails directement depuis
                                        ton site, sans backend ni configuration complexe. Pour aller
                                        plus loin, personnalise tes templates ou ajoute des pièces
                                        jointes.
                                    </p>
                                    <Link
                                        href="/blog"
                                        className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition"
                                    >
                                        ← Retour au blog
                                    </Link>
                                    <Link href="/blog/emails" className=" ml-4 inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition">
                                        ← Retourner à la série
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
                            <Link href="#exemple" className="hover:text-white">6. Exemple dans un projet React/Next js</Link>
                            <Link href="#conclusion" className="hover:text-white">Conclusion</Link>
                        </nav>
                    </aside>
                </div>
            </div>
        </main>
    );
}
