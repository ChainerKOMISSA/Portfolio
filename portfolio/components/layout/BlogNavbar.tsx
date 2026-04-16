"use client";
import { HiCode, HiBookOpen, HiCollection } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { IoIosArrowRoundBack } from "react-icons/io";
import React from "react";


const navItems = [
    { label: "Retourner au portfolio", icon: IoIosArrowRoundBack, anchor: "/" },
];

export default function BlogNavbar({ collapsed, search, onSearchChange, filterOpen, onFilterToggle, filterRef, selectedCategories, onToggleCategory }: {
    collapsed: boolean;
    search: string;
    onSearchChange: (val: string) => void;
    filterOpen: boolean;
    onFilterToggle: () => void;
    filterRef: React.RefObject<HTMLDivElement>;
    selectedCategories: string[];
    onToggleCategory: (cat: string) => void;
}) {
    return (
            <header
                className={"fixed top-0 right-0 z-30 h-16 py-2 flex items-center gap-6 px-6\n   " +
                    "     bg-black-100/80 backdrop-blur-md border-b border-white/5\n    " +
                    "    transition-all duration-300\n      " +
                    "  left-16"}
            >
                {/*<h3 className="text-xl font-bold">
                    Bienvenue sur <span className="text-purple">mon blog</span>
                </h3>*/}
            {/* Nav links */}
            <nav className="flex items-center gap-1">
                {navItems.map(({ label, icon: Icon, anchor }) => (
                    <a
                    key={anchor}
                    href={anchor}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm
                    text-white/50 hover:text-white hover:bg-white/8 transition"
                    >
                    <Icon size={15} />
                    <span>{label}</span>
        </a>
))}
</nav>

    {/* Searchbar déplacée depuis BlogPage */}
    <div className="ml-auto relative w-96">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40">
          <HiMagnifyingGlass size={14} />
        </span>
        <input
            type="text"
            placeholder="Rechercher..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-8 pr-3 py-1.5 rounded-lg text-sm bg-white/5
            border border-white/10 text-white/80 placeholder:text-white/30
            focus:outline-none focus:border-purple transition"
        />
    </div>
</header>
);
}