import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";

export default function BlogPage() {
    return (
        <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Link
                href="/blog/paiements"
                className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition"
            >
                <IoIosArrowRoundBack />
            </Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">
                        Intégration Stripe Checkout avec React/Next.js
                    </h1>
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

                                {/* INTRO */}
                                <section id="intro">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        1. Introduction
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Stripe est une plateforme de paiement en ligne qui permet aux entreprises et aux particuliers
                                        d&apos;accepter et de gérer des paiements sur internet. On peut le voir un peu comme un
                                        intermédiaire sécurisé entre un client qui paye et l&apos;entreprise qui reçoit l&apos;argent.
                                        Dans ce tutoriel, nous allons apprendre à intégrer{" "}
                                        <span className="text-blue-400 font-semibold">Stripe Checkout</span> dans
                                        une application React/Next.js pour accepter des paiements en ligne de manière sécurisée.
                                    </p>

                                    <p className="text-gray-300 mb-4">
                                        Stripe propose deux méthodes principales pour intégrer les paiements :
                                    </p>

                                    <h4 className="text-white font-semibold mb-2">
                                        1. Stripe Checkout
                                    </h4>
                                    <p className="text-gray-300 mb-2">
                                        Il s&apos;agit d&apos;une page de paiement hébergée par Stripe et prête à l&apos;emploi. Ses caractéristiques :
                                    </p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                                        <li>Configuration rapide avec juste quelques lignes de code</li>
                                        <li>Sécurité gérée entièrement par Stripe</li>
                                        <li>Interface multilingue et responsive automatique</li>
                                        <li>Supporte cartes bancaires, Apple Pay, Google Pay, etc.</li>
                                        <li>Parfait pour démarrer rapidement</li>
                                    </ul>

                                    <h4 className="text-white font-semibold mb-2 mt-4">
                                        2. Stripe Elements / Payment Element
                                    </h4>
                                    <p className="text-gray-300 mb-2">
                                        C&apos;est un ensemble de composants UI personnalisables intégrés dans ton site. Ses caractéristiques :
                                    </p>
                                    <ul className="list-disc list-inside text-gray-300 space-y-1 ml-2">
                                        <li>Personnalisation totale de l&apos;interface</li>
                                        <li>Plus de contrôle sur l&apos;expérience utilisateur</li>
                                        <li>Utilisateur reste sur ton site</li>
                                        <li>Plus complexe à implémenter</li>
                                        <li>Recommandé pour des besoins avancés</li>
                                    </ul>
                                </section>

                                {/* SETUP */}
                                <section id="setup">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        2. Configuration et installation
                                    </h2>

                                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                                        a. Créer un compte Stripe
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Pour commencer, nous allons créer un compte sur <a
                                        href="https://dashboard.stripe.com/register"
                                        target="_blank"
                                        className="underline text-blue-400 hover:text-blue-300"
                                    >
                                        Stripe Dashboard
                                    </a>.
                                    </p>
                                    <h4 className="text-lg font-semibold text-white mt-6 mb-3">
                                        Récupérer les clés API
                                    </h4>
                                    <p className="text-gray-300 mb-4">
                                        Stripe utilise deux types de clés pour sécuriser les transactions :
                                    </p>

                                    <h5 className="text-gray-300 font-semibold mb-2">
                                        La clé publique (Publishable Key)
                                    </h5>
                                    <p className="text-gray-300 mb-4">
                                        Elle commence par <code className="text-blue-400">pk_test_</code> en mode test ou <code className="text-blue-400">pk_live_</code> en production
                                        et est utilisée côté <strong>client</strong>. Elle va nous permettre d&apos;initialiser Stripe.js dans notre application.
                                    </p>
                                    <h5 className="text-gray-300 font-semibold mb-2 mt-6">
                                        La clé secrète (Secret Key)
                                    </h5>
                                    <p className="text-gray-300 mb-4">
                                        Elle commence par <code className="text-blue-400">sk_test_</code> en mode test ou <code className="text-blue-400">sk_live_</code> en production
                                        et est utilisée côté <strong>serveur</strong>. Eelle va nous permettre de créer des sessions de paiement et d&apos;effectuer des opérations sensibles.
                                    </p>
                                    <div className="bg-neutral-900 rounded-lg p-4 mb-6">
                                        <p className="text-gray-300 mb-2">
                                            <strong>Pour récupérer les clés :</strong>
                                        </p>
                                        <ol className="list-decimal list-inside text-gray-300  space-y-1 ml-2">
                                            <li>Connecte-toi à votre Dashboard Stripe</li>
                                            <li>Active le &quot;Mode Test&quot; en haut à droite </li>
                                            <li>Vas dans <strong>Développeurs</strong> puis <strong>Clés API</strong></li>
                                            <li>Copiez votre &quot;Clé publique&quot; et votre &quot;Clé secrète&quot;</li>
                                        </ol>
                                        <p className="text-gray-300 text-sm mt-3">
                                            En mode test, il est possible de simuler des paiements sans débiter de vraies cartes.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">
                                        b. Installer les librairies Stripe
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Nous allons installer deux packages npm essentiels :
                                    </p>

                                    <div className="bg-black-100/50 rounded-lg p-4 mb-4">
                                        <ul className="space-y-3 text-sm text-gray-300">
                                            <li>
                                                <code className="text-blue-400 font-semibold">@stripe/stripe-js</code> →
                                                Librairie côté client pour charger Stripe.js et rediriger vers le checkout
                                            </li>
                                            <li>
                                                <code className="text-blue-400 font-semibold">stripe</code> →
                                                SDK Node.js pour interagir avec l'API Stripe côté serveur (créer des sessions, webhooks, etc.)
                                            </li>
                                        </ul>
                                    </div>

                                    <p className="text-gray-300 mb-2">
                                        Dans votre terminal, à la racine de votre projet Next.js/React, exécutez :
                                    </p>
                                    <CodeBlock
                                        language="bash"
                                        code={`npm install @stripe/stripe-js stripe`}
                                    />

                                    <p className="text-gray-400 text-sm mt-2">
                                        💡 Si vous utilisez Yarn : <code>yarn add @stripe/stripe-js stripe</code>
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">
                                        c. Configurer les variables d'environnement
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Pour sécuriser vos clés API, nous allons les stocker dans un fichier <code className="text-blue-400">.env.local</code>.
                                        Ce fichier ne sera jamais committé dans Git (ajoutez-le au <code>.gitignore</code>).
                                    </p>

                                    <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mb-4">
                                        <p className="text-yellow-200 text-sm">
                                            ⚠️ <strong>Important :</strong> Dans Next.js, les variables préfixées par <code className="text-yellow-300">NEXT_PUBLIC_</code>
                                            sont accessibles côté client. Les autres sont exclusivement côté serveur.
                                        </p>
                                    </div>

                                    <p className="text-gray-300 mb-2">
                                        À la racine de votre projet (même niveau que <code>package.json</code>), créez un fichier <code className="text-blue-400">.env.local</code> :
                                    </p>
                                    <CodeBlock
                                        language="bash"
                                        code={`# Clé publique Stripe (accessible côté client)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxx

# Clé secrète Stripe (uniquement côté serveur - NE JAMAIS exposer)
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx`}
                                    />

                                    <div className="bg-gray-800 rounded-lg p-4 mt-4">
                                        <p className="text-gray-300 text-sm mb-2">
                                            📝 <strong>Bonnes pratiques :</strong>
                                        </p>
                                        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-2">
                                            <li>Remplacez <code>xxxxx</code> par vos vraies clés copiées depuis Stripe Dashboard</li>
                                            <li>Vérifiez que <code>.env.local</code> est bien dans votre <code>.gitignore</code></li>
                                            <li>Redémarrez votre serveur Next.js après avoir modifié le fichier .env</li>
                                            <li>En production, configurez ces variables sur votre plateforme d'hébergement (Vercel, Netlify, etc.)</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* API ROUTE */}
                                <section id="api">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        3. Créer une API Route pour Stripe Checkout
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Maintenant que notre environnement est configuré, nous allons créer une <strong>API route</strong> côté serveur
                                        qui génère une session de paiement Stripe. Cette étape est cruciale car elle permet de garder votre clé secrète
                                        en sécurité côté serveur.
                                    </p>

                                    <div className="bg-indigo-950/30 border border-indigo-900 rounded-lg p-4 mb-6">
                                        <h4 className="text-white font-semibold mb-2">🧠 Comprendre le flux de paiement :</h4>
                                        <ol className="list-decimal list-inside text-gray-300 text-sm space-y-2 ml-2">
                                            <li>L'utilisateur clique sur "Payer" dans votre interface React</li>
                                            <li>Votre frontend appelle cette API route avec les détails du produit</li>
                                            <li>L'API crée une <strong>session Checkout</strong> sur Stripe (côté serveur sécurisé)</li>
                                            <li>Stripe retourne un <code>session.id</code> unique</li>
                                            <li>Votre frontend redirige l'utilisateur vers la page Checkout Stripe</li>
                                            <li>L'utilisateur paie sur la page Stripe (hébergée et sécurisée)</li>
                                            <li>Stripe redirige l'utilisateur vers votre <code>success_url</code> ou <code>cancel_url</code></li>
                                        </ol>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        📁 Structure du fichier
                                    </h3>
                                    <p className="text-gray-300 mb-2">
                                        Dans Next.js 13+ (App Router), créez le fichier suivant :
                                    </p>
                                    <div className="bg-gray-800 rounded-lg p-3 mb-4">
                                        <code className="text-blue-400">app/api/checkout/route.js</code>
                                    </div>

                                    <p className="text-gray-400 text-sm mb-4">
                                        💡 Si vous utilisez le Pages Router (Next.js 12 et antérieur), créez plutôt : <code>pages/api/checkout.js</code>
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        💻 Code de l'API Route
                                    </h3>
                                    <CodeBlock
                                        language="javascript"
                                        code={`import { NextResponse } from "next/server";
import Stripe from "stripe";

// Initialisation de Stripe avec votre clé secrète
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  try {
    // Création d'une session Checkout
    const session = await stripe.checkout.sessions.create({
      // Méthodes de paiement acceptées
      payment_method_types: ["card"],
      
      // Mode de paiement : "payment" (paiement unique) ou "subscription" (abonnement)
      mode: "payment",
      
      // Produits à acheter
      line_items: [
        {
          price_data: {
            currency: "usd", // Devise (usd, eur, gbp, etc.)
            product_data: { 
              name: "Produit Test", // Nom du produit
            },
            unit_amount: 2000, // Prix en CENTIMES (2000 = 20.00 USD)
          },
          quantity: 1, // Quantité
        },
      ],
      
      // URL de redirection après paiement réussi
      success_url: "http://localhost:3000/success",
      
      // URL de redirection si l'utilisateur annule
      cancel_url: "http://localhost:3000/cancel",
    });

    // Retourne l'ID de session au client
    return NextResponse.json({ id: session.id });
  } catch (err) {
    // Gestion des erreurs
    console.error("Erreur Stripe:", err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}`}
                                    />

                                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                                        🔍 Explication détaillée du code
                                    </h3>

                                    <div className="space-y-4">
                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                1. Imports et initialisation
                                            </h4>
                                            <CodeBlock
                                                language="javascript"
                                                code={`import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);`}
                                            />
                                            <p className="text-gray-300 text-sm mt-2">
                                                On importe le SDK Stripe et on l'initialise avec notre clé secrète stockée dans les variables d'environnement.
                                            </p>
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                2. payment_method_types
                                            </h4>
                                            <CodeBlock
                                                language="javascript"
                                                code={`payment_method_types: ["card"]`}
                                            />
                                            <p className="text-gray-300 text-sm mt-2">
                                                Définit les méthodes de paiement acceptées. Options courantes :
                                            </p>
                                            <ul className="list-disc list-inside text-gray-400 text-sm ml-4 mt-2">
                                                <li><code>"card"</code> → Cartes bancaires classiques</li>
                                                <li><code>"apple_pay"</code> → Apple Pay</li>
                                                <li><code>"google_pay"</code> → Google Pay</li>
                                                <li><code>"klarna"</code> → Paiement différé Klarna</li>
                                            </ul>
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                3. mode
                                            </h4>
                                            <CodeBlock
                                                language="javascript"
                                                code={`mode: "payment"`}
                                            />
                                            <p className="text-gray-300 text-sm mt-2">
                                                Deux valeurs possibles :
                                            </p>
                                            <ul className="list-disc list-inside text-gray-400 text-sm ml-4 mt-2">
                                                <li><code>"payment"</code> → Paiement unique (e-commerce, achat simple)</li>
                                                <li><code>"subscription"</code> → Abonnement récurrent (mensuel, annuel...)</li>
                                            </ul>
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                4. line_items (articles)
                                            </h4>
                                            <CodeBlock
                                                language="javascript"
                                                code={`line_items: [
  {
    price_data: {
      currency: "usd",
      product_data: { name: "Produit Test" },
      unit_amount: 2000, // 20.00 USD en centimes
    },
    quantity: 1,
  },
]`}
                                            />
                                            <p className="text-gray-300 text-sm mt-2">
                                                Liste des produits à vendre. Points importants :
                                            </p>
                                            <ul className="list-disc list-inside text-gray-400 text-sm ml-4 mt-2">
                                                <li><code>currency</code> → Code ISO de la devise (eur, usd, gbp...)</li>
                                                <li><code>unit_amount</code> → Prix en <strong>centimes</strong> (2000 = 20.00 €)</li>
                                                <li><code>quantity</code> → Nombre d'unités</li>
                                            </ul>
                                            <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-3 mt-3">
                                                <p className="text-yellow-200 text-xs">
                                                    ⚠️ <strong>Piège courant :</strong> Le montant doit TOUJOURS être en centimes !
                                                    Pour 50€, mettez <code>5000</code>, pas <code>50</code>.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                5. URLs de redirection
                                            </h4>
                                            <CodeBlock
                                                language="javascript"
                                                code={`success_url: "http://localhost:3000/success",
cancel_url: "http://localhost:3000/cancel"`}
                                            />
                                            <p className="text-gray-300 text-sm mt-2">
                                                Après le paiement, Stripe redirige automatiquement l'utilisateur :
                                            </p>
                                            <ul className="list-disc list-inside text-gray-400 text-sm ml-4 mt-2">
                                                <li><code>success_url</code> → Si le paiement réussit</li>
                                                <li><code>cancel_url</code> → Si l'utilisateur annule</li>
                                            </ul>
                                            <p className="text-yellow-200 text-xs mt-3">
                                                💡 En production, remplacez <code>http://localhost:3000</code> par votre vraie URL (ex: <code>https://monsite.com</code>)
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                                        📝 Exemple avec plusieurs produits
                                    </h3>
                                    <p className="text-gray-300 mb-2">
                                        Si vous voulez vendre plusieurs articles dans le même panier :
                                    </p>
                                    <CodeBlock
                                        language="javascript"
                                        code={`line_items: [
  {
    price_data: {
      currency: "eur",
      product_data: { 
        name: "Formation React Avancé",
        description: "Cours complet avec certificat"
      },
      unit_amount: 9900, // 99.00 EUR
    },
    quantity: 1,
  },
  {
    price_data: {
      currency: "eur",
      product_data: { 
        name: "Ebook JavaScript",
      },
      unit_amount: 1500, // 15.00 EUR
    },
    quantity: 2, // Achète 2 exemplaires
  },
]`}
                                    />

                                    <div className="bg-gray-800 rounded-lg p-4 mt-6">
                                        <p className="text-gray-300 text-sm mb-2">
                                            ✅ <strong>Checkpoint :</strong> À ce stade, vous devriez avoir :
                                        </p>
                                        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-2">
                                            <li>Un fichier <code>app/api/checkout/route.js</code> créé</li>
                                            <li>Vos clés Stripe configurées dans <code>.env.local</code></li>
                                            <li>Une compréhension du flux de création de session</li>
                                        </ul>
                                    </div>
                                </section>

                                {/* BOUTON */}
                                <section id="composant">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        4. Créer un composant React pour déclencher le paiement
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Maintenant que notre API est prête, créons un composant React qui permet à l'utilisateur
                                        de lancer le processus de paiement. Ce composant va appeler notre API, récupérer l'ID de session,
                                        puis rediriger l'utilisateur vers la page Stripe Checkout.
                                    </p>

                                    <div className="bg-indigo-950/30 border border-indigo-900 rounded-lg p-4 mb-6">
                                        <h4 className="text-white font-semibold mb-2">🔄 Flux du composant :</h4>
                                        <ol className="list-decimal list-inside text-gray-300 text-sm space-y-2 ml-2">
                                            <li>L'utilisateur clique sur le bouton "Payer"</li>
                                            <li>Le composant appelle <code>POST /api/checkout</code></li>
                                            <li>L'API retourne un <code>session.id</code></li>
                                            <li>Stripe.js redirige vers la page de paiement avec cet ID</li>
                                            <li>L'utilisateur complète le paiement sur Stripe</li>
                                        </ol>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        📁 Créer le fichier du composant
                                    </h3>
                                    <p className="text-gray-300 mb-2">
                                        Créez un nouveau fichier pour votre composant :
                                    </p>
                                    <div className="bg-gray-800 rounded-lg p-3 mb-4">
                                        <code className="text-blue-400">components/StripeButton.js</code>
                                    </div>
                                    <p className="text-gray-400 text-sm mb-4">
                                        💡 Vous pouvez aussi le placer dans <code>app/components/</code> selon votre structure de projet.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        💻 Code du composant
                                    </h3>
                                    <CodeBlock
                                        language="jsx"
                                        code={`"use client"; // Directive Next.js pour composant client

import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

// Chargement de Stripe avec la clé publique
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function StripeButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    
    try {
      // Appel de notre API pour créer la session
      const res = await fetch("/api/checkout", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();

      // Vérification des erreurs
      if (data.error) {
        console.error("Erreur:", data.error);
        alert("Erreur lors de la création du paiement");
        setLoading(false);
        return;
      }

      // Récupération de l'instance Stripe
      const stripe = await stripePromise;

      // Redirection vers Stripe Checkout
      const { error } = await stripe.redirectToCheckout({ 
        sessionId: data.id 
      });

      if (error) {
        console.error("Erreur Stripe:", error);
        alert(error.message);
      }
    } catch (err) {
      console.error("Erreur:", err);
      alert("Une erreur est survenue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={loading}
      className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 
                 disabled:bg-gray-500 disabled:cursor-not-allowed transition"
    >
      {loading ? "Chargement..." : "Payer avec Stripe"}
    </button>
  );
}`}
                                    />

                                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                                        🔍 Explication ligne par ligne
                                    </h3>

                                    <div className="space-y-4">
                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                1. Directive "use client"
                                            </h4>
                                            <CodeBlock
                                                language="jsx"
                                                code={`"use client";`}
                                            />
                                            <p className="text-gray-300 text-sm mt-2">
                                                Dans Next.js 13+ (App Router), cette directive indique que ce composant s'exécute côté client
                                                (navigateur). C'est nécessaire car on utilise des hooks React (<code>useState</code>) et des
                                                événements utilisateur (<code>onClick</code>).
                                            </p>
                                            <p className="text-gray-400 text-xs mt-2">
                                                ℹ️ Si vous utilisez le Pages Router, vous n'avez pas besoin de cette ligne.
                                            </p>
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                2. Chargement de Stripe.js
                                            </h4>
                                            <CodeBlock
                                                language="jsx"
                                                code={`const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);`}
                                            />
                                            <p className="text-gray-300 text-sm mt-2">
                                                <code>loadStripe()</code> charge la librairie Stripe.js de manière asynchrone. On utilise
                                                notre clé <strong>publique</strong> (préfixée <code>NEXT_PUBLIC_</code> pour être accessible côté client).
                                            </p>
                                            <ul className="list-disc list-inside text-gray-400 text-sm ml-4 mt-2">
                                                <li>La Promise est créée <strong>une seule fois</strong> au chargement du module</li>
                                                <li>Stripe.js est ensuite mis en cache par le navigateur</li>
                                                <li>Cela optimise les performances</li>
                                            </ul>
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                3. État de chargement
                                            </h4>
                                            <CodeBlock
                                                language="jsx"
                                                code={`const [loading, setLoading] = useState(false);`}
                                            />
                                            <p className="text-gray-300 text-sm mt-2">
                                                Un état React pour suivre si le paiement est en cours. Cela permet de :
                                            </p>
                                            <ul className="list-disc list-inside text-gray-400 text-sm ml-4 mt-2">
                                                <li>Désactiver le bouton pendant le traitement</li>
                                                <li>Afficher un texte "Chargement..." pour informer l'utilisateur</li>
                                                <li>Éviter les clics multiples accidentels</li>
                                            </ul>
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                4. Appel de l'API
                                            </h4>
                                            <CodeBlock
                                                language="jsx"
                                                code={`const res = await fetch("/api/checkout", { 
  method: "POST",
  headers: { "Content-Type": "application/json" },
});
const data = await res.json();`}
                                            />
                                            <p className="text-gray-300 text-sm mt-2">
                                                On appelle notre API route créée précédemment avec <code>fetch()</code>. L'API nous retourne
                                                un objet JSON contenant <code>&#123; id: "session_xxx..." &#125;</code>.
                                            </p>
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                5. Redirection vers Stripe Checkout
                                            </h4>
                                            <CodeBlock
                                                language="jsx"
                                                code={`const stripe = await stripePromise;
const { error } = await stripe.redirectToCheckout({ 
  sessionId: data.id 
});`}
                                            />
                                            <p className="text-gray-300 text-sm mt-2">
                                                C'est la magie ! <code>redirectToCheckout()</code> redirige automatiquement l'utilisateur
                                                vers la page de paiement Stripe hébergée. L'utilisateur quitte temporairement votre site
                                                pour aller sur <code>checkout.stripe.com</code>.
                                            </p>
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                6. Gestion des erreurs
                                            </h4>
                                            <CodeBlock
                                                language="jsx"
                                                code={`try {
  // ... code
} catch (err) {
  console.error("Erreur:", err);
  alert("Une erreur est survenue");
} finally {
  setLoading(false); // Toujours réinitialiser le loading
}`}
                                            />
                                            <p className="text-gray-300 text-sm mt-2">
                                                On entoure tout dans un <code>try/catch</code> pour gérer les erreurs potentielles
                                                (réseau, Stripe, etc.). Le <code>finally</code> garantit que le bouton redevient cliquable
                                                même en cas d'erreur.
                                            </p>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                                        🎨 Personnalisation du bouton
                                    </h3>
                                    <p className="text-gray-300 mb-2">
                                        Voici quelques variantes de design pour votre bouton :
                                    </p>
                                    <CodeBlock
                                        language="jsx"
                                        code={`// Version avec icône et loader animé
import { CreditCard } from "lucide-react";

<button
  onClick={handleClick}
  disabled={loading}
  className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 
             text-white px-8 py-4 rounded-xl font-semibold shadow-lg
             hover:from-indigo-700 hover:to-purple-700 
             disabled:opacity-50 disabled:cursor-not-allowed 
             transition-all duration-300"
>
  <span className="flex items-center gap-2">
    {loading ? (
      <>
        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" 
                  stroke="currentColor" strokeWidth="4" fill="none" />
          <path className="opacity-75" fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
        </svg>
        Traitement en cours...
      </>
    ) : (
      <>
        <CreditCard className="w-5 h-5" />
        Payer maintenant
      </>
    )}
  </span>
</button>`}
                                    />

                                    <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mt-6">
                                        <p className="text-yellow-200 text-sm">
                                            💡 <strong>Astuce UX :</strong> Pendant le chargement, évitez que le bouton change de taille.
                                            Utilisez une largeur fixe ou <code>min-w-[200px]</code> pour maintenir la stabilité visuelle.
                                        </p>
                                    </div>
                                </section>

                                {/* EXEMPLE */}
                                <section id="exemple">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        5. Utiliser le composant dans votre application
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Maintenant que notre composant est prêt, intégrons-le dans une page de notre application.
                                        Voici un exemple complet d'une page de checkout.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        📄 Exemple : Page de paiement simple
                                    </h3>
                                    <p className="text-gray-300 mb-2">
                                        Créez un fichier <code className="text-blue-400">app/checkout/page.js</code> :
                                    </p>
                                    <CodeBlock
                                        language="jsx"
                                        code={`import StripeButton from "@/components/StripeButton";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      {/* En-tête */}
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Finaliser votre achat
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Paiement sécurisé via Stripe
        </p>

        {/* Récapitulatif produit */}
        <div className="bg-gray-700 rounded-lg p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-semibold">Produit Test</span>
            <span className="text-2xl font-bold text-green-400">20,00 €</span>
          </div>
          <p className="text-gray-400 text-sm">
            Formation complète React avec certificat
          </p>
        </div>

        {/* Informations de sécurité */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
          </svg>
          <span>Paiement 100% sécurisé par Stripe</span>
        </div>

        {/* Bouton de paiement */}
        <StripeButton />

        {/* Mentions légales */}
        <p className="text-xs text-gray-500 text-center mt-6">
          En poursuivant, vous acceptez nos conditions générales de vente.
        </p>
      </div>
    </div>
  );
}`}
                                    />

                                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">
                                        🛒 Exemple avancé : Page de panier e-commerce
                                    </h3>
                                    <p className="text-gray-300 mb-2">
                                        Pour un cas plus réaliste avec plusieurs produits :
                                    </p>
                                    <CodeBlock
                                        language="jsx"
                                        code={`"use client";

import { useState } from "react";
import StripeButton from "@/components/StripeButton";

export default function CartPage() {
  const [cartItems] = useState([
    { id: 1, name: "Formation React", price: 99, quantity: 1 },
    { id: 2, name: "Ebook JavaScript", price: 15, quantity: 2 },
  ]);

  const total = cartItems.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Votre panier</h1>

        {/* Liste des produits */}
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          {cartItems.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-4 border-b border-gray-700 last:border-0">
              <div>
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-gray-400 text-sm">Quantité: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p className="text-xl font-bold">{item.price * item.quantity} €</p>
                <p className="text-gray-400 text-sm">{item.price} € x {item.quantity}</p>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center pt-6 border-t-2 border-indigo-600 mt-6">
            <span className="text-2xl font-bold">Total</span>
            <span className="text-3xl font-bold text-green-400">{total} €</span>
          </div>
        </div>

        {/* Bouton de paiement */}
        <StripeButton />
      </div>
    </div>
  );
}`}
                                    />

                                    <h3 className="text-xl font-semibold text-white mt-8 mb-3">
                                        ✅ Créer les pages de succès et d'annulation
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        N'oubliez pas de créer les pages vers lesquelles Stripe redirige après le paiement !
                                    </p>

                                    <h4 className="text-lg font-semibold text-white mb-2">
                                        Page de succès (<code>app/success/page.js</code>)
                                    </h4>
                                    <CodeBlock
                                        language="jsx"
                                        code={`import Link from "next/link";

export default function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
        {/* Icône de succès */}
        <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-green-400">
          Paiement réussi !
        </h1>
        <p className="text-gray-300 mb-8">
          Merci pour votre achat. Un email de confirmation vous a été envoyé.
        </p>

        <Link 
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  );
}`}
                                    />

                                    <h4 className="text-lg font-semibold text-white mt-6 mb-2">
                                        Page d'annulation (<code>app/cancel/page.js</code>)
                                    </h4>
                                    <CodeBlock
                                        language="jsx"
                                        code={`import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="max-w-md w-full bg-gray-800 rounded-2xl shadow-2xl p-8 text-center">
        {/* Icône d'annulation */}
        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold mb-4 text-orange-400">
          Paiement annulé
        </h1>
        <p className="text-gray-300 mb-8">
          Votre paiement a été annulé. Aucun montant n'a été débité.
        </p>

        <div className="flex gap-4 justify-center">
          <Link 
            href="/checkout"
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg transition"
          >
            Réessayer
          </Link>
          <Link 
            href="/"
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}`}
                                    />

                                    <div className="bg-gray-800 rounded-lg p-4 mt-6">
                                        <p className="text-gray-300 text-sm mb-2">
                                            📁 <strong>Structure complète de votre projet :</strong>
                                        </p>
                                        <CodeBlock
                                            language="plaintext"
                                            code={`mon-projet/
├── app/
│   ├── api/
│   │   └── checkout/
│   │       └── route.js         ← API pour créer la session
│   ├── checkout/
│   │   └── page.js              ← Page de paiement
│   ├── success/
│   │   └── page.js              ← Page de succès
│   └── cancel/
│       └── page.js              ← Page d'annulation
├── components/
│   └── StripeButton.js          ← Composant bouton
├── .env.local                    ← Vos clés Stripe
└── package.json`}
                                        />
                                    </div>
                                </section>

                                {/* TESTS ET PRODUCTION */}
                                <section id="tests">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        6. Tester votre intégration
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Avant de passer en production, testons notre intégration avec les cartes de test Stripe.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        💳 Cartes bancaires de test
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        En mode test, Stripe fournit des numéros de cartes factices pour simuler différents scénarios :
                                    </p>

                                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                        <table className="w-full text-sm">
                                            <thead>
                                            <tr className="border-b border-gray-700">
                                                <th className="text-left py-2 text-blue-400">Numéro de carte</th>
                                                <th className="text-left py-2 text-blue-400">Scénario</th>
                                            </tr>
                                            </thead>
                                            <tbody className="text-gray-300">
                                            <tr className="border-b border-gray-700">
                                                <td className="py-2"><code>4242 4242 4242 4242</code></td>
                                                <td className="py-2">✅ Paiement réussi</td>
                                            </tr>
                                            <tr className="border-b border-gray-700">
                                                <td className="py-2"><code>4000 0025 0000 3155</code></td>
                                                <td className="py-2">🔐 Authentification 3D Secure requise</td>
                                            </tr>
                                            <tr className="border-b border-gray-700">
                                                <td className="py-2"><code>4000 0000 0000 9995</code></td>
                                                <td className="py-2">❌ Carte insuffisamment provisionnée</td>
                                            </tr>
                                            <tr>
                                                <td className="py-2"><code>4000 0000 0000 0002</code></td>
                                                <td className="py-2">❌ Carte refusée</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="bg-indigo-950/30 border border-indigo-900 rounded-lg p-4 mb-6">
                                        <p className="text-gray-300 text-sm mb-2">
                                            💡 <strong>Informations à utiliser avec les cartes de test :</strong>
                                        </p>
                                        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-2">
                                            <li><strong>Date d'expiration :</strong> N'importe quelle date future (ex: 12/25)</li>
                                            <li><strong>CVC :</strong> N'importe quel code à 3 chiffres (ex: 123)</li>
                                            <li><strong>Code postal :</strong> N'importe quel code postal valide</li>
                                        </ul>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                                        🧪 Processus de test complet
                                    </h3>
                                    <ol className="list-decimal list-inside text-gray-300 space-y-3">
                                        <li>
                                            <strong>Démarrez votre serveur de développement :</strong>
                                            <CodeBlock language="bash" code={`npm run dev`} />
                                        </li>
                                        <li>
                                            <strong>Accédez à votre page de checkout :</strong>
                                            <div className="bg-gray-700 rounded p-2 mt-2">
                                                <code className="text-blue-400">http://localhost:3000/checkout</code>
                                            </div>
                                        </li>
                                        <li>
                                            <strong>Cliquez sur le bouton "Payer"</strong> et observez la redirection vers Stripe
                                        </li>
                                        <li>
                                            <strong>Remplissez le formulaire</strong> avec une carte de test (ex: 4242 4242 4242 4242)
                                        </li>
                                        <li>
                                            <strong>Validez le paiement</strong> et vérifiez la redirection vers <code>/success</code>
                                        </li>
                                        <li>
                                            <strong>Vérifiez dans le Dashboard Stripe</strong> (section "Paiements") que la transaction apparaît
                                        </li>
                                    </ol>

                                    <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mt-6">
                                        <p className="text-yellow-200 text-sm mb-2">
                                            🐛 <strong>Problèmes courants et solutions :</strong>
                                        </p>
                                        <ul className="space-y-3 text-sm">
                                            <li>
                                                <strong className="text-yellow-300">❌ Erreur "Invalid API Key" :</strong>
                                                <p className="text-gray-300 ml-4 mt-1">
                                                    Vérifiez que vos clés dans <code>.env.local</code> sont correctes et que vous avez redémarré le serveur.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-yellow-300">❌ Le bouton ne redirige pas :</strong>
                                                <p className="text-gray-300 ml-4 mt-1">
                                                    Ouvrez la console du navigateur (F12) pour voir les erreurs. Vérifiez que <code>NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY</code> est bien défini.
                                                </p>
                                            </li>
                                            <li>
                                                <strong className="text-yellow-300">❌ Erreur 500 sur /api/checkout :</strong>
                                                <p className="text-gray-300 ml-4 mt-1">
                                                    Vérifiez les logs du serveur. Assurez-vous que <code>STRIPE_SECRET_KEY</code> est correcte et que le package <code>stripe</code> est installé.
                                                </p>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                {/* PRODUCTION */}
                                <section id="production">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        7. Passer en production
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Une fois vos tests validés, voici comment déployer votre intégration Stripe en production.
                                    </p>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        🔐 Étape 1 : Activer votre compte Stripe
                                    </h3>
                                    <div className="bg-gray-800 rounded-lg p-4 mb-6">
                                        <ol className="list-decimal list-inside text-gray-300 text-sm space-y-2">
                                            <li>Connectez-vous au <strong>Stripe Dashboard</strong></li>
                                            <li>Cliquez sur "Activer votre compte" en haut</li>
                                            <li>Complétez les informations requises :
                                                <ul className="list-disc list-inside ml-6 mt-2 text-gray-400">
                                                    <li>Informations sur votre entreprise (SIRET, adresse...)</li>
                                                    <li>Informations bancaires pour recevoir les paiements</li>
                                                    <li>Documents légaux si demandés (KYC)</li>
                                                </ul>
                                            </li>
                                            <li>Attendez la validation de Stripe (généralement 24-48h)</li>
                                        </ol>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        🔑 Étape 2 : Récupérer vos clés de production
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Une fois votre compte activé, récupérez vos clés <strong>Live</strong> (production) :
                                    </p>
                                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                        <ol className="list-decimal list-inside text-gray-300 text-sm space-y-2">
                                            <li>Dans le Dashboard, <strong>désactivez le mode Test</strong> (bouton toggle en haut à droite)</li>
                                            <li>Allez dans <strong>Développeurs → Clés API</strong></li>
                                            <li>Copiez vos clés Live :
                                                <ul className="list-disc list-inside ml-6 mt-2 text-gray-400">
                                                    <li><code className="text-blue-400">pk_live_...</code> → Clé publique</li>
                                                    <li><code className="text-red-400">sk_live_...</code> → Clé secrète</li>
                                                </ul>
                                            </li>
                                        </ol>
                                    </div>

                                    <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 mb-6">
                                        <p className="text-red-200 text-sm">
                                            ⚠️ <strong>ATTENTION :</strong> Les clés Live permettent de traiter de vrais paiements avec de vraies cartes.
                                            Ne les exposez JAMAIS publiquement et ne les committez JAMAIS dans Git !
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        🚀 Étape 3 : Configurer les variables d'environnement en production
                                    </h3>
                                    <p className="text-gray-300 mb-4">
                                        Selon votre plateforme d'hébergement, voici comment configurer vos variables :
                                    </p>

                                    <div className="space-y-4">
                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2 flex items-center gap-2">
                                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z"/>
                                                </svg>
                                                Vercel
                                            </h4>
                                            <ol className="list-decimal list-inside text-gray-300 text-sm space-y-1 ml-2">
                                                <li>Allez dans votre projet → <strong>Settings → Environment Variables</strong></li>
                                                <li>Ajoutez vos variables :
                                                    <CodeBlock
                                                        language="bash"
                                                        code={`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxxxx
STRIPE_SECRET_KEY=sk_live_xxxxx`}
                                                    />
                                                </li>
                                                <li>Redéployez votre application</li>
                                            </ol>
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                🌐 Netlify
                                            </h4>
                                            <ol className="list-decimal list-inside text-gray-300 text-sm space-y-1 ml-2">
                                                <li>Site settings → <strong>Build & deploy → Environment</strong></li>
                                                <li>Cliquez sur "Add variable"</li>
                                                <li>Ajoutez vos clés Stripe Live</li>
                                                <li>Redéployez</li>
                                            </ol>
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                🐳 Docker / VPS
                                            </h4>
                                            <p className="text-gray-300 text-sm mb-2">
                                                Créez un fichier <code>.env</code> sur votre serveur ou passez les variables au démarrage :
                                            </p>
                                            <CodeBlock
                                                language="bash"
                                                code={`docker run -e NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_xxx \\
           -e STRIPE_SECRET_KEY=sk_live_xxx \\
           votre-image`}
                                            />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                                        🔗 Étape 4 : Mettre à jour les URLs de redirection
                                    </h3>
                                    <p className="text-gray-300 mb-2">
                                        Dans votre API route, remplacez les URLs localhost par vos vraies URLs :
                                    </p>
                                    <CodeBlock
                                        language="javascript"
                                        code={`// Avant (développement)
success_url: "http://localhost:3000/success",
cancel_url: "http://localhost:3000/cancel",

// Après (production)
success_url: "https://votresite.com/success",
cancel_url: "https://votresite.com/cancel",`}
                                    />

                                    <div className="bg-indigo-950/30 border border-indigo-900 rounded-lg p-4 mt-4">
                                        <p className="text-gray-300 text-sm mb-2">
                                            💡 <strong>Astuce :</strong> Utilisez une variable d'environnement pour l'URL de base :
                                        </p>
                                        <CodeBlock
                                            language="javascript"
                                            code={`// .env.local
NEXT_PUBLIC_BASE_URL=http://localhost:3000

// .env.production (ou variables Vercel/Netlify)
NEXT_PUBLIC_BASE_URL=https://votresite.com

// Dans votre API route
success_url: \`\${process.env.NEXT_PUBLIC_BASE_URL}/success\`,
cancel_url: \`\${process.env.NEXT_PUBLIC_BASE_URL}/cancel\`,`}
                                        />
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                                        ✅ Checklist avant le lancement
                                    </h3>
                                    <div className="bg-gray-800 rounded-lg p-4">
                                        <ul className="space-y-2 text-sm">
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-400 mt-1">☐</span>
                                                <span className="text-gray-300">Compte Stripe activé et vérifié</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-400 mt-1">☐</span>
                                                <span className="text-gray-300">Clés Live configurées dans les variables d'environnement</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-400 mt-1">☐</span>
                                                <span className="text-gray-300">URLs de redirection mises à jour avec votre domaine</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-400 mt-1">☐</span>
                                                <span className="text-gray-300">Test effectué avec une vraie carte en production</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-400 mt-1">☐</span>
                                                <span className="text-gray-300">Mentions légales et CGV à jour sur votre site</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-400 mt-1">☐</span>
                                                <span className="text-gray-300">Webhooks configurés (optionnel, voir section suivante)</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="text-green-400 mt-1">☐</span>
                                                <span className="text-gray-300">Plan de gestion des litiges et remboursements en place</span>
                                            </li>
                                        </ul>
                                    </div>
                                </section>

                                {/* WEBHOOKS */}
                                <section id="webhooks">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        8. Aller plus loin : Webhooks (Optionnel)
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Les webhooks permettent à Stripe de notifier votre serveur en temps réel lorsqu'un événement se produit
                                        (paiement réussi, échec, remboursement...). C'est essentiel pour synchroniser votre base de données.
                                    </p>

                                    <div className="bg-indigo-950/30 border border-indigo-900 rounded-lg p-4 mb-6">
                                        <h4 className="text-white font-semibold mb-2">🤔 Pourquoi utiliser les webhooks ?</h4>
                                        <p className="text-gray-300 text-sm mb-3">
                                            Les redirections (<code>success_url</code>) ne sont pas fiables à 100% car l'utilisateur peut :
                                        </p>
                                        <ul className="list-disc list-inside text-gray-400 text-sm space-y-1 ml-2">
                                            <li>Fermer son navigateur avant la redirection</li>
                                            <li>Perdre sa connexion internet</li>
                                            <li>Ne jamais revenir sur votre site</li>
                                        </ul>
                                        <p className="text-gray-300 text-sm mt-3">
                                            Les webhooks garantissent que vous êtes <strong>toujours</strong> notifié du paiement,
                                            même si l'utilisateur disparaît.
                                        </p>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        📡 Créer un endpoint webhook
                                    </h3>
                                    <p className="text-gray-300 mb-2">
                                        Créez un fichier <code className="text-blue-400">app/api/webhooks/route.js</code> :
                                    </p>
                                    <CodeBlock
                                        language="javascript"
                                        code={`import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

export async function POST(req) {
  const body = await req.text();
  const signature = req.headers.get("stripe-signature");

  let event;

  try {
    // Vérification de la signature Stripe
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Webhook signature verification failed:", err.message);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  // Traitement des événements
  switch (event.type) {
    case "checkout.session.completed":
      const session = event.data.object;
      console.log("Paiement réussi:", session.id);
      
      // TODO: Enregistrer la commande dans votre base de données
      // TODO: Envoyer un email de confirmation
      // TODO: Débloquer l'accès au produit
      
      break;

    case "payment_intent.payment_failed":
      const paymentIntent = event.data.object;
      console.log("Paiement échoué:", paymentIntent.id);
      
      // TODO: Notifier l'utilisateur de l'échec
      
      break;

    default:
      console.log(\`Événement non géré: \${event.type}\`);
  }

  return NextResponse.json({ received: true });
}`}
                                    />

                                    <h3 className="text-xl font-semibold text-white mt-6 mb-3">
                                        🔧 Configurer le webhook dans Stripe
                                    </h3>
                                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                                        <ol className="list-decimal list-inside text-gray-300 text-sm space-y-2">
                                            <li>Allez dans <strong>Développeurs → Webhooks</strong></li>
                                            <li>Cliquez sur "Ajouter un endpoint"</li>
                                            <li>URL de l'endpoint : <code className="text-blue-400">https://votresite.com/api/webhooks</code></li>
                                            <li>Sélectionnez les événements à écouter :
                                                <ul className="list-disc list-inside ml-6 mt-2 text-gray-400">
                                                    <li><code>checkout.session.completed</code></li>
                                                    <li><code>payment_intent.succeeded</code></li>
                                                    <li><code>payment_intent.payment_failed</code></li>
                                                </ul>
                                            </li>
                                            <li>Copiez le <strong>Signing secret</strong> généré</li>
                                            <li>Ajoutez-le dans vos variables d'environnement :
                                                <CodeBlock
                                                    language="bash"
                                                    code={`STRIPE_WEBHOOK_SECRET=whsec_xxxxxxxxxxxxx`}
                                                />
                                            </li>
                                        </ol>
                                    </div>

                                    <div className="bg-yellow-900/20 border border-yellow-700 rounded-lg p-4 mb-6">
                                        <p className="text-yellow-200 text-sm">
                                            💡 <strong>Développement local :</strong> Pour tester les webhooks en local, utilisez le
                                            <a href="https://stripe.com/docs/stripe-cli" target="_blank" className="underline ml-1">Stripe CLI</a>
                                            qui crée un tunnel sécurisé vers votre localhost.
                                        </p>
                                    </div>
                                </section>

                                {/* CONSEILS */}
                                <section id="conseils">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        9. Bonnes pratiques et astuces
                                    </h2>

                                    <div className="space-y-4">
                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                💰 Gestion des prix dynamiques
                                            </h4>
                                            <p className="text-gray-300 text-sm mb-2">
                                                Au lieu de coder les prix en dur, passez-les en paramètre :
                                            </p>
                                            <CodeBlock
                                                language="javascript"
                                                code={`// Dans votre API route
export async function POST(req) {
  const { items } = await req.json(); // Récupère les produits depuis le client
  
  const line_items = items.map(item => ({
    price_data: {
      currency: "eur",
      product_data: { name: item.name },
      unit_amount: item.price * 100, // Conversion en centimes
    },
    quantity: item.quantity,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    line_items,
    success_url: \`\${process.env.NEXT_PUBLIC_BASE_URL}/success\`,
    cancel_url: \`\${process.env.NEXT_PUBLIC_BASE_URL}/cancel\`,
  });

  return NextResponse.json({ id: session.id });
}`}
                                            />
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                🎟️ Récupérer l'ID de session après paiement
                                            </h4>
                                            <p className="text-gray-300 text-sm mb-2">
                                                Stripe ajoute automatiquement <code>?session_id=xxx</code> à votre success_url.
                                                Vous pouvez le récupérer :
                                            </p>
                                            <CodeBlock
                                                language="jsx"
                                                code={`"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    if (sessionId) {
      // Appeler votre API pour récupérer les détails
      fetch(\`/api/order-details?session_id=\${sessionId}\`)
        .then(res => res.json())
        .then(data => setOrderDetails(data));
    }
  }, [sessionId]);

  return (
    <div>
      <h1>Paiement réussi !</h1>
      {orderDetails && (
        <p>Commande n°{orderDetails.orderNumber}</p>
      )}
    </div>
  );
}`}
                                            />
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                🔒 Sécurité : Valider les montants côté serveur
                                            </h4>
                                            <div className="bg-red-900/30 border border-red-700 rounded-lg p-3 mb-3">
                                                <p className="text-red-200 text-sm">
                                                    ⚠️ <strong>CRITIQUE :</strong> Ne faites JAMAIS confiance aux données envoyées par le client.
                                                    Un utilisateur malveillant pourrait modifier les prix dans le frontend.
                                                </p>
                                            </div>
                                            <CodeBlock
                                                language="javascript"
                                                code={`// ❌ MAUVAIS : Prix vient du client
export async function POST(req) {
  const { price } = await req.json(); // Dangereux !
  // L'utilisateur peut envoyer price: 1 au lieu de price: 9900
}

// ✅ BON : Prix défini côté serveur
const PRODUCTS = {
  "formation-react": { name: "Formation React", price: 9900 },
  "ebook-js": { name: "Ebook JavaScript", price: 1500 },
};

export async function POST(req) {
  const { productId } = await req.json();
  const product = PRODUCTS[productId];
  
  if (!product) {
    return NextResponse.json({ error: "Produit invalide" }, { status: 400 });
  }
  
  // Utilise le prix du serveur, pas celui du client
  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        currency: "eur",
        product_data: { name: product.name },
        unit_amount: product.price, // Prix sécurisé
      },
      quantity: 1,
    }],
    // ...
  });
}`}
                                            />
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                📧 Personnaliser les emails de Stripe
                                            </h4>
                                            <p className="text-gray-300 text-sm">
                                                Dans le Dashboard Stripe : <strong>Paramètres → Emails</strong>, vous pouvez personnaliser
                                                le logo, les couleurs et les messages des emails automatiques (confirmation, reçus...).
                                            </p>
                                        </div>

                                        <div className="bg-black-100/50 rounded-lg p-4">
                                            <h4 className="text-blue-400 font-semibold mb-2">
                                                🌍 Support multi-devises
                                            </h4>
                                            <CodeBlock
                                                language="javascript"
                                                code={`// Détection automatique de la devise selon la localisation
const getUserCurrency = (countryCode) => {
  const currencies = {
    FR: "eur",
    US: "usd",
    GB: "gbp",
    // ...
  };
  return currencies[countryCode] || "usd";
};

// Dans votre API
const currency = getUserCurrency(req.geo?.country || "US");`}
                                            />
                                        </div>
                                    </div>
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        🎉 Conclusion
                                    </h2>
                                    <p className="text-gray-300 mb-4">
                                        Félicitations ! Vous avez maintenant une intégration Stripe Checkout complète et fonctionnelle.
                                        Voici un récapitulatif de ce que vous avez appris :
                                    </p>

                                    <div className="bg-gradient-to-br from-indigo-950/50 to-purple-950/50 border border-indigo-800 rounded-lg p-6 mb-6">
                                        <h3 className="text-xl font-semibold text-white mb-4">✅ Ce que vous maîtrisez maintenant :</h3>
                                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                                            <div>
                                                <h4 className="text-blue-400 font-semibold mb-2">Configuration</h4>
                                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                                    <li>Créer un compte Stripe</li>
                                                    <li>Gérer les clés API (test/production)</li>
                                                    <li>Configurer les variables d'environnement</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-blue-400 font-semibold mb-2">Développement</h4>
                                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                                    <li>Créer une API route sécurisée</li>
                                                    <li>Implémenter un composant React</li>
                                                    <li>Gérer les redirections</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-blue-400 font-semibold mb-2">Production</h4>
                                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                                    <li>Tester avec des cartes factices</li>
                                                    <li>Déployer en production</li>
                                                    <li>Gérer les webhooks (optionnel)</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <h4 className="text-blue-400 font-semibold mb-2">Sécurité</h4>
                                                <ul className="list-disc list-inside text-gray-300 space-y-1">
                                                    <li>Valider les données côté serveur</li>
                                                    <li>Protéger les clés secrètes</li>
                                                    <li>Vérifier les signatures webhook</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-semibold text-white mb-3">
                                        🚀 Pour aller encore plus loin
                                    </h3>
                                    <div className="bg-gray-800 rounded-lg p-4 mb-6">
                                        <ul className="space-y-2 text-sm text-gray-300">
                                            <li>here</li></ul>
        </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
                        <h3 className="text-lg font-semibold text-white mb-4">Sommaire</h3>
                        <nav className="flex flex-col gap-2 text-sm text-gray-400">
                            <Link href="#intro" className="hover:text-white">
                                1. Introduction
                            </Link>
                            <Link href="#setup" className="hover:text-white">
                                2. Configuration
                            </Link>
                            <Link href="#composant" className="hover:text-white">
                                3. Créer un bouton PayPal
                            </Link>
                            <Link href="#exemple" className="hover:text-white">
                                4. Exemple d&apos;utilisation
                            </Link>
                            <Link href="#conclusion" className="hover:text-white">
                                Conclusion
                            </Link>
                        </nav>
                    </aside>
                </div>
            </div>
        </main>
    )};
