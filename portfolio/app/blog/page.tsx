import Link from "next/link";

export default function BlogPage() {
    return (
        <main className="min-h-screen p-10 bg-black-100 flex flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <h1 className="text-4xl font-bold">Bienvenue sur mon blog 📝</h1>
            <p className="mt-4">Des articles à venir bientôt...</p><br/>
            <Link
                href="/"
                className="inline-block px-4 py-2 w-48 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
            >
                ← Retour à l&apos;accueil
            </Link>
        </main>
    );
}