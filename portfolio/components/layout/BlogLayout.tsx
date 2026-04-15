"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function BlogLayout({ children }: { children: React.ReactNode }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div className="flex min-h-screen bg-[#0a0a0f]">
            <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />

            <div className={`flex flex-col flex-1 transition-all duration-300 ${collapsed ? "ml-16" : "ml-56"}`}>
                <Navbar sidebarCollapsed={collapsed} />

                {/* Décale le contenu sous la navbar fixe */}
                <main className="mt-16 min-h-screen p-10 flex flex-col overflow-hidden sm:px-10 px-5">
                    {children}
                </main>
            </div>
        </div>
    );
}