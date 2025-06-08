import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";

export default function BlogPage() {
    const configCode = `
const nodemailer = require("nodemailer");
require("dotenv").config();

async function main() {
  // Création du transporteur SMTP
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  // Définition du contenu de l'email
  const mailOptions = {
    from: '"Flowzy Support" <support@flowzy.app>',
    to: "destinataire@example.com",
    subject: "Hello depuis Node.js",
    text: "Bonjour ! Ceci est un email envoyé avec Node.js et Nodemailer.",
    html: "<p>Bonjour !<br/>Ceci est un <b>email</b> envoyé avec <i>Node.js</i> et <b>Nodemailer</b>.</p>"
  };

  // Envoi
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Email envoyé :", info.messageId);
  } catch (error) {
    console.error("Erreur lors de l'envoi :", error);
  }
}

main();                                      
    `;
    const indexCode = `
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.mailtrap.io',
    port: 2525,
    auth: {
      user: 'VOTRE_UTILISATEUR',
      pass: 'VOTRE_MOT_DE_PASSE'
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'votre@adresse.com',
      subject: \`Message de \${name}\`,
      text: message,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
`;
    const formCode = `
import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Envoi en cours...');

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });

    const data = await res.json();
    setStatus(data.success ? 'Message envoyé' : 'Erreur');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        onChange={handleChange}
        required
        className="w-full p-2 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Votre email"
        onChange={handleChange}
        required
        className="w-full p-2 rounded"
      />
      <textarea
        name="message"
        placeholder="Votre message"
        rows="5"
        onChange={handleChange}
        required
        className="w-full p-2 rounded"
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Envoyer
      </button>
      <p>{status}</p>
    </form>
  );
}
`;

    return (
        <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Link
                href="/blog/emails"
                className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition"
            >
                <IoIosArrowRoundBack />
            </Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                {/* Header */}
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">
                        Envoyer un mail avec NodeMailer
                    </h1>
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
                            <div className="w-full space-y-16">
                                <section id="intro">
                                    <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
                                    <p className="text-gray-300">
                                        Pour envoyer un mail avec JavaScript côté serveur, il suffit d&apos;utiliser
                                        un langage comme <code className="text-blue-400">Node.js</code> capable de communiquer avec un serveur SMTP.
                                        Une des solutions les plus simples et efficaces pour cela est <code className="text-blue-400">Nodemailer</code>,
                                        un module léger et très populaire, sans dépendances externes.
                                    </p><br/>
                                    <p className="text-gray-300">
                                        Avant de commencer, assures-toi d&apos;avoir :
                                    </p>
                                    <ul className="list-disc list-inside text-gray-300">
                                        <li>Node.js installé sur ton ordinateur (version 14+ recommandée)</li>
                                        <li>Un compte sur un service SMTP </li>
                                    </ul><br/>
                                    <p className="text-gray-300">
                                        Tu peux te servir de ce <a className="text-blue-400 underline" href="https://mailtrap.io/fr/blog/setup-smtp-server/" target="_blank">tutoriel</a> pour
                                        le service SMTP.
                                    </p>
                                </section>

                                <section id="installation">
                                    <h2 className="text-2xl font-bold mb-4 text-white">2. Installation</h2>
                                    <p className="text-gray-300">
                                        Dans le terminal dans ton projet, lance la commande :
                                    </p>
                                    <div className="bg-black-200 text-sm text-white p-4 rounded-md font-mono">
                                        npm install nodemailer dotenv
                                    </div>
                                    <p className="text-gray-300 mt-2">
                                        <code className="text-blue-400">dotenv</code> va te permettre de gérer tes idenifiants de
                                        manière sécurisée.
                                    </p>
                                    <p className="text-gray-300 mt-2">
                                        Crées ensuite le fichier <code className="text-blue-400">.env</code> avec les données suivantes :
                                    </p>
                                    <div className="bg-black-200 text-sm text-white p-4 rounded-md font-mono">
                                        SMTP_HOST=smtp.servicesmtp.com<br/>
                                        SMTP_PORT=port<br/>
                                        SMTP_USER=nom_utilisateur<br/>
                                        SMTP_PASS=mot_de_passe
                                    </div>
                                    <p className="text-gray-300 mt-2">
                                        Tu dois adapter les infos selon le service SMTP que tu utilises.
                                        Si tu utilises ES Modules, tu peux aussi ajouter :
                                        <code className="text-blue-400">&quot;type&quot;: &quot;module&quot;</code> dans ton <code className="text-blue-400">package.json</code>.
                                    </p>
                                </section>

                                <section id="configuration">
                                    <h2 className="text-2xl font-bold mb-4 text-white">3. Configurer Nodemailer</h2>
                                    <p className="text-gray-300">
                                        Si tu utilises un projet existant, tu as déjà un fichier <code className="text-blue-400">index.js</code>.
                                        Dans ce fichier, tu dois importer <code className="text-blue-400">nodemailer</code> et l&apos;utiliser comme suit :
                                    </p>
                                    <CodeBlock code={configCode}/>
                                </section>

                                <section id="test">
                                <h2 className="text-2xl font-bold mb-4 text-white">4. Lancer l&apos;envoi de mail</h2>
                                <p className="text-gray-300">
                                    Dans ton terminal, lance la commande:
                                </p>
                                <div className="bg-black-200 text-sm text-white p-4 rounded-md font-mono">
                                    node index.js
                                </div>
                                <p className="text-gray-300 mt-2">
                                    Tu devrais voir dans la console :
                                </p>
                                <div className="bg-black-200 text-sm text-white p-4 rounded-md font-mono">
                                    Email envoyé : &lt;avec l&apos;identifiant_unique&gt;
                                </div>
                                <p className="text-gray-300 mt-2">
                                    et tu recevras un email dans ta boîte de test.
                                </p>
                            </section>

                                <section id="exemple">
                                    <h2 className="text-2xl font-bold mb-4 text-white">5. Exemple dans un formulaire</h2>
                                    <p className="text-gray-300">
                                        Dans ton fichier index.js :
                                    </p>
                                    <CodeBlock code={indexCode}/>
                                    <p className="text-gray-300 mt-4">
                                        Ensuite, crée une page contact.js avec un formulaire :
                                    </p>
                                    <CodeBlock code={formCode}/>
                                </section>

                            <section id="personnalisation">
                                <h2 className="text-2xl font-bold mb-4 text-white">6. Personnalisation et mise en production</h2>
                                <ul className="list-disc list-inside text-gray-300 space-y-2">
                                    <li>Personnalise le <code className="text-blue-400">to</code>, <code className="text-blue-400">subject</code> et <code className="text-blue-400">html</code> pour envoyer des confirmations
                                        de commandes, des formulaires de contact, etc.</li>
                                    <li>Utilise un service SMTP en production Gmail, SendGrid, Mailgun, Mailtrap, etc.</li>
                                </ul>
                            </section>

                            <section id="best-practices">
                                <h2 className="text-2xl font-bold mb-4 text-white">7. Bonnes pratiques</h2>
                                <ul className="space-y-2">
                                    <li className="flex items-start space-x-2">
                                        <svg className="w-4 h-4 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Utiliser .env te permettra de cacher tes identifiants</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg className="w-4 h-4 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Ne pas exposer tes infos SMTP côté client pour plus de sécurité</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg className="w-4 h-4 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Valider les champs du formulaire côté serveur pour plus de sécurité</span>
                                    </li>
                                    <li className="flex items-start space-x-2">
                                        <svg className="w-4 h-4 text-green-600 mt-1" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                                        </svg>
                                        <span>Gérer les erreurs d’envoi proprement te permettra d&apos;identifier rapidement la source de ton erreur.</span>
                                    </li>
                                </ul>
                            </section>

                            <section id="conclusion">
                                <h2 className="text-2xl font-bold mb-4 text-white">Conclusion</h2>
                                <p className="text-gray-300 mb-6">
                                    Avec seulement quelques lignes de code, tu peux envoyer des mails grâce à Node.js et Nodemailer !
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


                    {/* Sidebar TOC */}
                    <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
                        <h3 className="text-lg font-semibold text-white mb-4">Sommaire</h3>
                        <nav className="flex flex-col gap-2 text-sm text-gray-400">
                            <Link href="#intro" className="hover:text-white">1. Introduction</Link>
                            <Link href="#installation" className="hover:text-white">2. Installation</Link>
                            <Link href="#configuration" className="hover:text-white">3. Configurer NodeMailer</Link>
                            <Link href="#test" className="hover:text-white">4. Lancer l&apos;envoi de mail</Link>
                            <Link href="#exemple" className="hover:text-white">5. Exemple dans un formulaire</Link>
                            <Link href="#personnalisation" className="hover:text-white">6. Personnalisation et mise en production</Link>
                            <Link href="#best-practices" className="hover:text-white">7. Bonnes pratiques</Link>
                            <Link href="#conclusion" className="hover:text-white">Conclusion</Link>
                        </nav>
                    </aside>
            </div>
        </div>
</main>
);
}
