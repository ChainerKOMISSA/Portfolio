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
                        Intégration Stripe Checkout
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
                                    <p className="text-gray-300">
                                        Dans ce tutoriel, nous allons intégrer{" "}
                                        <span className="text-blue-400">Stripe Checkout</span> dans
                                        une application Next.js/React. Stripe permet de gérer les
                                        paiements sécurisés (cartes bancaires, Apple Pay, Google
                                        Pay...) avec seulement quelques lignes de code.
                                    </p>
                                </section>

                                {/* SETUP */}
                                <section id="setup">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        2. Configuration et installation
                                    </h2>
                                    <h4 className="text-xl font-semibold text-white mt-6">
                                        a. Créer un compte Stripe
                                    </h4>
                                    <p className="text-gray-300">
                                        Inscris-toi sur{" "}
                                        <a
                                            href="https://dashboard.stripe.com/register"
                                            target="_blank"
                                            className="underline text-blue-400"
                                        >
                                            Stripe Dashboard
                                        </a>{" "}
                                        et récupère tes clés API :
                                    </p>
                                    <ul className="list-disc list-inside text-gray-300 mt-2">
                                        <li>
                                            <code className="text-blue-400">clé publique</code> →
                                            utilisée côté client
                                        </li>
                                        <li>
                                            <code className="text-blue-400">clé secrète</code> →
                                            utilisée côté serveur
                                        </li>
                                    </ul>

                                    <h4 className="text-xl font-semibold text-white mt-6">
                                        b. Installer les librairies Stripe
                                    </h4>
                                    <CodeBlock
                                        language="bash"
                                        code={`npm install @stripe/stripe-js stripe`}
                                    />

                                    <h4 className="text-xl font-semibold text-white mt-6">
                                        c. Créer ton fichier .env.local
                                    </h4>
                                    <p className="text-gray-300 mb-4">
                                        À la racine de ton projet, crée un fichier <code>.env.local</code> avec les éléments suivants :
                                    </p>
                                    <CodeBlock
                                        language="bash"
                                        code={`NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_xxxxx
STRIPE_SECRET_KEY=sk_test_xxxxx`}
                                    />

                                </section>

                                {/* API ROUTE */}
                                <section id="api">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        3. Créer une route API Checkout
                                    </h2>
                                    <p className="text-gray-300">
                                        Dans Next.js, crée une API route (par exemple{" "}
                                        <code>/app/api/checkout/route.js</code>) qui génère une
                                        session Stripe Checkout :
                                    </p>
                                    <CodeBlock
                                        language="javascript"
                                        code={`import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: "Produit Test" },
            unit_amount: 2000, // prix en cents (20.00 USD)
          },
          quantity: 1,
        },
      ],
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}`}
                                    />
                                </section>

                                {/* BOUTON */}
                                <section id="composant">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        4. Créer un bouton Stripe
                                    </h2>
                                    <p className="text-gray-300">
                                        Crée un composant{" "}
                                        <code className="text-blue-400">StripeButton.js</code> :
                                    </p>
                                    <CodeBlock
                                        language="jsx"
                                        code={`"use client";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

export default function StripeButton() {
  const handleClick = async () => {
    const res = await fetch("/api/checkout", { method: "POST" });
    const data = await res.json();

    const stripe = await stripePromise;
    await stripe.redirectToCheckout({ sessionId: data.id });
  };

  return (
    <button
      onClick={handleClick}
      className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
    >
      Payer
    </button>
  );
}`}
                                    />
                                </section>

                                {/* EXEMPLE */}
                                <section id="exemple">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        5. Utiliser le bouton dans une page
                                    </h2>
                                    <CodeBlock
                                        language="jsx"
                                        code={`import StripeButton from "@/components/StripeButton";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-3xl mb-6">Paiement avec Stripe</h1>
      <StripeButton />
    </div>
  );
}`}
                                    />
                                </section>

                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        Conclusion
                                    </h2>
                                    <p className="text-gray-300 mb-6">
                                        Tu as maintenant un paiement Stripe fonctionnel.
                                        Pour la production, utilise ta{" "}
                                        <span className="text-blue-400">clé Live</span> et configure
                                        bien tes variables d&apos;environnement sur ton hébergeur.
                                    </p>
                                    <Link
                                        href="/blog"
                                        className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition"
                                    >
                                        ← Retour au blog
                                    </Link>
                                    <Link
                                        href="/blog/paiements"
                                        className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 ml-2 py-2 rounded-md transition"
                                    >
                                        ← Retour à la playlist
                                    </Link>
                                </section>
                            </div>
                        </div>
                    </div>

                    {/* SIDEBAR */}
                    <aside className="hidden md:block w-64 ml-8 sticky top-20 h-fit">
                        <h3 className="text-lg font-semibold text-white mb-4">Sommaire</h3>
                        <nav className="flex flex-col gap-2 text-sm text-gray-400">
                            <Link href="#intro" className="hover:text-white">
                                1. Introduction
                            </Link>
                            <Link href="#setup" className="hover:text-white">
                                2. Configuration
                            </Link>
                            <Link href="#api" className="hover:text-white">
                                3. API Checkout
                            </Link>
                            <Link href="#composant" className="hover:text-white">
                                4. Bouton Stripe
                            </Link>
                            <Link href="#exemple" className="hover:text-white">
                                5. Exemple d&apos;utilisation
                            </Link>
                            <Link href="#conclusion" className="hover:text-white">
                                Conclusion
                            </Link>
                        </nav>
                    </aside>
                </div>
            </div>
        </main>
    );
}