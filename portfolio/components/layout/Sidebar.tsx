"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    HiCode,
    HiBookOpen,
    HiCollection,
    HiChevronLeft,
    HiChevronRight,
} from "react-icons/hi";

const navItems = [
    { label: "Templates de code", icon: HiCode, href: "/blog/templates" },
    { label: "Tutoriels", icon: HiBookOpen, href: "/blog/tutoriels" },
    { label: "Ressources / Outils", icon: HiCollection, href: "/blog/ressources" },
];

export default function Sidebar({ collapsed, onToggle }: {
    collapsed: boolean;
    onToggle: () => void;
}) {
    const pathname = usePathname();

    return (
        <aside
            className={`fixed top-0 left-0 h-full z-40 flex flex-col
        bg-[#0a0a0f] border-r border-white/5
        transition-all duration-300 ease-in-out
        ${collapsed ? "w-16" : "w-56"}`}
        >
            {/* Logo + toggle */}
            <div className="flex items-center justify-between px-4 py-5 border-b border-white/5 min-h-[64px]">
                {!collapsed && (
                    <span className="text-white font-semibold text-sm tracking-wide truncate">
            Mon Blog
          </span>
                )}
                <button
                    type="button"
                    onClick={onToggle}
                    className={`p-1.5 rounded-md text-white/40 hover:text-white hover:bg-white/10 transition
            ${collapsed ? "mx-auto" : "ml-auto"}`}
                >
                    {collapsed ? <HiChevronRight size={16} /> : <HiChevronLeft size={16} />}
                </button>
            </div>

            {/* Nav items */}
            <nav className="flex-1 px-2 py-4 space-y-1">
                {navItems.map(({ label, icon: Icon, href }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-all duration-150
                ${collapsed ? "justify-center px-2" : ""}
                ${isActive
                                ? "bg-violet-500/15 text-violet-400"
                                : "text-white/50 hover:text-white hover:bg-white/8"
                            }`}
                        >
                            <Icon size={18} className="shrink-0" />
                            {!collapsed && <span className="truncate">{label}</span>}
                        </Link>
                    );
                })}
            </nav>

            {/* Footer optionnel */}
            {!collapsed && (
                <div className="px-4 py-4 border-t border-white/5">
                    <p className="text-white/20 text-xs">essikomissa.me</p>
                </div>
            )}
        </aside>
    );
}