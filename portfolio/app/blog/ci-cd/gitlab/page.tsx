import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";

export default function BlogPage() {
    return (
        <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <Link
               href="/blog/ci-cd"
                className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition"
            >
                <IoIosArrowRoundBack />
            </Link>
            <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
                <header className="w-full px-4 md:px-8 py-6">
                    <h1 className="text-5xl font-bold text-slate-500 text-center">
                       CI/CD avec GitLab : du push au déploiement automatique
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
                                        <span className="text-blue-400">PayPal Checkout</span> dans
                                        une application Next.js/React. PayPal fournit un SDK
                                        JavaScript qui permet d’ajouter un bouton de paiement
                                        sécurisé et de gérer les transactions en quelques lignes de
                                        code.
                                    </p>
                                </section>

                                {/* SETUP */}
                                <section id="setup">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        2. Configuration et installation
                                    </h2>
                                    <p className="text-gray-300">
                                        Pour tester, tu as besoin d’un compte PayPal Developer sur <a href="https://developer.paypal.com" className="underline text-blue-400" target="_blank">developer.paypal.com</a>.
                                        Tu pourras y créer une application Sandbox et obtenir un{" "}
                                        <code className="text-blue-400">client_id</code>.
                                    </p>
                                    <p className="text-gray-300 mt-4">Installe ensuite le SDK PayPal React :</p>
                                    <CodeBlock
                                        language="bash"
                                        code={`npm install @paypal/react-paypal-js`}
                                    />
                                </section>

                                {/* COMPOSANT */}
                                <section id="composant">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        3. Créer un bouton PayPal
                                    </h2>
                                    <p className="text-gray-300">
                                        Crée un composant{" "}
                                        <code className="text-blue-400">PayPalButton.js</code> :
                                    </p>
                                    <CodeBlock
                                        language="jsx"
                                        code={`import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function PayPalButton() {
  return (
    <PayPalScriptProvider options={{ "client-id": "YOUR_CLIENT_ID" }}>
      <PayPalButtons
        style={{ layout: "vertical" }}
        createOrder={(data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: { value: "10.00" } // Montant du paiement
              },
            ],
          });
        }}
        onApprove={(data, actions) => {
          return actions.order.capture().then((details) => {
            alert(\`Transaction réussie par \${details.payer.name.given_name}\`);
          });
        }}
      />
    </PayPalScriptProvider>
  );
}`}
                                    />
                                </section>

                                {/* EXEMPLE */}
                                <section id="exemple">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        4. Utiliser le bouton dans ta page
                                    </h2>
                                    <p className="text-gray-300">
                                        Tu peux maintenant importer ton composant et afficher le
                                        bouton de paiement :
                                    </p>
                                    <CodeBlock
                                        language="jsx"
                                        code={`import PayPalButton from "@/components/PayPalButton";

export default function CheckoutPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white">
      <h1 className="text-3xl mb-6">Paiement avec PayPal</h1>
      <PayPalButton />
    </div>
  );
}`}
                                    />
                                </section>

                                {/* CONCLUSION */}
                                <section id="conclusion">
                                    <h2 className="text-2xl font-bold mb-4 text-white">
                                        Conclusion
                                    </h2>
                                    <p className="text-gray-300 mb-6">
                                        Tu as maintenant un bouton PayPal entièrement fonctionnel
                                        dans ton app React/Next.js.
                                        Pour la mise en production, pense à utiliser ton{" "}
                                        <span className="text-blue-400">client_id Live</span> et non
                                        celui de Sandbox.
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
    );
}