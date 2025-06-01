"use client";

import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import MainContent from "./ui/MainContent";
import Sidebar from "./ui/Sidebar";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    /*useEffect(() => {
        if (status === "loading") return;
        if (!session) router.push("/auth/signin");
    }, [session, status, router]);

    if (status === "loading") return <p>Chargement...</p>;*/

    return (
        <div className="flex flex-col min-h-screen">
            {/*<Navbar />
            <div className="flex flex-1">
                <Sidebar />
                <MainContent />
            </div>
            <Footer />*/}
        </div>
    );
}