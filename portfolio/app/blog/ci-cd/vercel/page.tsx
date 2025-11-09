import Link from "next/link";
import { IoIosArrowRoundBack } from "react-icons/io";
import CodeBlock from "@/app/blog/ui/CodeBlock";

export default function BlogPage() {
  return (
    <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Bouton retour */}
      <Link
        href="/blog/ci-cd"
        className="inline-block px-4 py-2 w-14 bg-black-100 border-2 border-indigo-950 hover:bg-indigo-950 text-white rounded-lg transition"
      >
        <IoIosArrowRoundBack />
      </Link>

      <div className="relative mx-auto my-10 flex max-w-7xl flex-col">
        <header className="w-full px-4 md:px-8 py-6">
          <h1 className="text-5xl font-bold text-slate-500 text-center">
            Comment fonctionne le CI/CD sur Vercel?
          </h1>
        </header>

        <div className="flex flex-col md:flex-row justify-between">
          <div className="relative flex-1 flex flex-col items-center justify-center">
            {/* Bordures décoratives */}
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
                {/* INTRODUCTION */}
                <section id="intro">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    1. Introduction
                  </h2>
                  <p className="text-gray-300">
                    Quand tu déploies ton application sur{" "}
                    <strong>Vercel</strong>, tu bénéficies automatiquement
                    d&apos;un système d&apos;intégration et de déploiement
                    continu, aussi appelé <strong>CI/CD</strong>.
                    <br />
                    <br />
                    Cela signifie que chaque fois que tu effectues un{" "}
                    <code className="text-blue-400">git push</code> sur ta
                    branche principale, Vercel détecte automatiquement le
                    changement, reconstruit ton application et la redéploie en
                    ligne sans que tu aies à faire quoi que ce soit.
                    <br />
                    <br />
                    🔁 En résumé : <strong>Push → Build → Deploy</strong>.
                    <br />
                    <br />
                    📸{" "}
                    <em>
                      (Image suggérée : schéma illustrant “GitHub → Vercel Build
                      → Nouveau site en ligne”)
                    </em>
                  </p>
                </section>

                {/* PREREQUIS */}
                <section id="prerequis">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    2. Prérequis
                  </h2>
                  <p className="text-gray-300 mb-3">
                    Avant de profiter du CI/CD intégré de Vercel, tu dois avoir
                    :
                  </p>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Un compte <span className="text-blue-400">Vercel</span>
                    </li>
                    <li>
                      Un dépôt hébergé sur{" "}
                      <span className="text-blue-400">GitHub</span>,{" "}
                      <span className="text-blue-400">GitLab</span> ou{" "}
                      <span className="text-blue-400">Bitbucket</span>
                    </li>
                    <li>
                      Une application web (Next.js, React, Angular, Vue, etc.)
                    </li>
                    <li>
                      Un accès à la branche principale du projet (souvent{" "}
                      <code className="text-blue-400">main</code> ou{" "}
                      <code className="text-blue-400">master</code>)
                    </li>
                  </ul><br/>
                  <p>
                    Pour apprendre comment déployer ton projet sur Vercel, je
                    t&apos;invite à consulter le tutoriel disponible {" "}
                    <a
                      href="http://localhost:3000/blog/deploiement-vercel"
                      className="text-blue-400 underline"
                    >
                      ici
                    </a>{" "}
                  </p>
                </section>

                {/* PIPELINE AUTOMATIQUE */}
                <section id="pipeline">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    3. Le pipeline CI/CD automatique de Vercel
                  </h2>
                  <p className="text-gray-300 mb-3">
                    Dès que tu connectes ton dépôt à Vercel, celui-ci met en
                    place un pipeline automatique :
                  </p>

                  <ul className="list-decimal list-inside text-gray-300 space-y-2">
                    <li>
                      <strong>Détection du changement :</strong> à chaque{" "}
                      <code>push</code> sur GitHub, Vercel reçoit une
                      notification.
                    </li>
                    <li>
                      <strong>Build automatique :</strong> Vercel exécute la
                      commande de build (par ex. <code>npm run build</code> ou{" "}
                      <code>ng build</code>).
                    </li>
                    <li>
                      <strong>Déploiement :</strong> une nouvelle version de ton
                      site est mise en ligne sur une URL unique.
                    </li>
                    <li>
                      <strong>Preview :</strong> si c&apos;est une pull request,
                      une version de prévisualisation est aussi générée
                      automatiquement.
                    </li>
                  </ul>

                  <p className="text-gray-300 mt-4">
                    Voici un aperçu du processus complet :
                  </p>

                  <CodeBlock
                    language="bash"
                    code={`# Exemple d'une intégration Vercel CI/CD
git add .
git commit -m "Amélioration du design"
git push origin main

# → Vercel détecte le push
# → Build du projet
# → Déploiement automatique en production`}
                  />

                  <p className="text-gray-300 mt-3">
                    Tout cela se fait sans fichier YAML, contrairement à GitHub
                    Actions : Vercel s&apos;occupe de tout automatiquement.
                    <br />
                    <br />
                    📸{" "}
                    <em>
                      (Image suggérée : pipeline illustré “Commit → Build →
                      Preview → Production”)
                    </em>
                  </p>
                </section>

                <section id="execution">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    4. Vérifier ton déploiement
                  </h2>
                  <p className="text-gray-300">Une fois ton push effectué :</p>
                  <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
                    <li>
                      Ouvre ton tableau de bord <strong>Vercel</strong>
                    </li>
                    <li>
                      Va dans ton projet puis dans l&apos;onglet{" "}
                      <strong>Deployments</strong>
                    </li>
                    <li>
                      Tu verras la nouvelle version de ton projet avec un statut{" "}
                      <span className="text-green-400">Ready</span> ({" "}<span className="text-red-400">Error</span> en cas d&apos;erreur {" "})
                    </li>
                  </ul>

                  <p className="text-gray-300 mt-4">
                    Tu peux même consulter les logs de build pour comprendre
                    chaque étape : installation, build, export, déploiement.
                    <br />
                    <br />
                    📸{" "}
                    <em>
                      (Image suggérée : capture d&apos;écran du dashboard Vercel
                      montrant un déploiement réussi)
                    </em>
                  </p>
                </section>

                <section id="tips">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    5. Astuces et bonnes pratiques
                  </h2>
                  <ul className="list-disc list-inside text-gray-300 space-y-2">
                    <li>
                      Utilise des{" "}
                      <strong>variables d&apos;environnement</strong> pour gérer
                      tes clés API et secrets.
                    </li>
                    <li>
                      Optimise ta commande de build pour réduire le temps de
                      déploiement.
                    </li>
                    <li>
                      Active les <strong>preview deployments</strong> pour
                      tester chaque pull request avant la mise en ligne.
                    </li>
                    <li>
                      Personnalise ton domaine dans les paramètres du projet
                      Vercel.
                    </li>
                    <li>
                      Surveille tes performances via l&apos;onglet{" "}
                      <strong>Analytics</strong>.
                    </li>
                  </ul>
                  <br />
                  <CodeBlock
                    language="bash"
                    code={`# Exemple : ajouter une variable d'environnement
vercel env add API_KEY production`}
                  />
                </section>

                {/* CONCLUSION */}
                <section id="conclusion">
                  <h2 className="text-2xl font-bold mb-4 text-white">
                    6. Conclusion
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Vercel fait du <strong>CI/CD</strong> automatiquement ! À
                    chaque push sur ta branche principale, ton application est
                    reconstruite et redéployée en quelques secondes.
                    <br />
                    <br />
                    Tu profites donc d&apos;un pipeline complet sans
                    configuration complexe, ni serveur à gérer.
                    <br />
                    <br />
                    Si tu veux aller plus loin, tu peux combiner Vercel avec{" "}
                    <strong>GitHub Actions</strong> pour ajouter des tests ou de
                    la validation avant le déploiement.
                    <br />
                    <br />
                    N&apos;hésite pas à explorer les autres articles de cette
                    série pour découvrir comment créer tes propres pipelines
                    CI/CD personnalisés avec différents outils !
                  </p>

                  <Link
                    href="/blog/ci-cd"
                    className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 py-2 rounded-md transition"
                  >
                    ← Retour à la série
                  </Link>
                  <Link
                    href="/blog"
                    className="inline-block bg-indigo-900 hover:bg-indigo-700 text-white text-sm px-4 ml-2 py-2 rounded-md transition"
                  >
                    ← Retour au blog
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
              <Link href="#prerequis" className="hover:text-white">
                2. Prérequis
              </Link>
              <Link href="#pipeline" className="hover:text-white">
                3. Le pipeline
              </Link>
              <Link href="#execution" className="hover:text-white">
                4. Vérifier le déploiement
              </Link>
              <Link href="#tips" className="hover:text-white">
                5. Astuces
              </Link>
              <Link href="#conclusion" className="hover:text-white">
                6. Conclusion
              </Link>
            </nav>
          </aside>
        </div>
      </div>
    </main>
  );
}
