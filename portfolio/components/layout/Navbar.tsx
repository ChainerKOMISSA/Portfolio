import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiCode, HiBookOpen, HiCollection } from "react-icons/hi";

const navItems = [
    { label: "Templates", icon: HiCode, href: "/blog/templates" },
    { label: "Tutoriels", icon: HiBookOpen, href: "/blog/tutoriels" },
    { label: "Ressources", icon: HiCollection, href: "/blog/ressources" },
];

export default function Navbar({ sidebarCollapsed }: { sidebarCollapsed: boolean }) {
    const pathname = usePathname();

    return (
        <header
            className={`fixed top-0 right-0 z-30 h-16 flex items-center px-6
        bg-[#0a0a0f]/80 backdrop-blur-md border-b border-white/5
        transition-all duration-300
        ${sidebarCollapsed ? "left-16" : "left-56"}`}
        >
            {/* Nav links */}
            <nav className="flex items-center gap-1">
                {navItems.map(({ label, icon: Icon, href }) => {
                    const isActive = pathname === href;
                    return (
                        <Link
                            key={href}
                            href={href}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition
                ${isActive
                                ? "text-white"
                                : "text-white/50 hover:text-white"
                            }`}
                        >
                            <Icon size={15} />
                            <span>{label}</span>
                            {isActive && (
                                <span className="ml-1 h-1 w-1 rounded-full bg-violet-400 inline-block" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* Search à droite — optionnel */}
            <div className="ml-auto">
                <input
                    type="text"
                    placeholder="Rechercher..."
                    className="bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white/60
            placeholder:text-white/30 focus:outline-none focus:border-violet-500/50 w-48 transition"
                />
            </div>
        </header>
    );
}