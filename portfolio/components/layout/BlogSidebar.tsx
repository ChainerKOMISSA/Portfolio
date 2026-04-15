"use client";
import { HiCode, HiBookOpen, HiCollection, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const navItems = [
    { label: "Templates de code", icon: HiCode, anchor: "#templates" },
    { label: "Tutoriels", icon: HiBookOpen, anchor: "#tutoriels" },
    { label: "Ressources / Outils", icon: HiCollection, anchor: "#ressources" },
];

export default function BlogSidebar({ collapsed, onToggle }: {
    collapsed: boolean;
    onToggle: () => void;
}) {
    return (
        <aside className={`fixed top-0 left-0 h-full z-40 flex flex-col
      bg-black-100 border-r border-white/5
      transition-all duration-300 ease-in-out
      ${collapsed ? "w-16" : "w-56"}`}
        >
            {/* Toggle button */}
            <div className={`flex items-center border-b border-white/5 min-h-[64px] px-4
        ${collapsed ? "justify-center" : "justify-between"}`}
            >
                {!collapsed && (
                    <span className="text-black-100 font-semibold text-sm tracking-wide truncate">
            Mon Blog
          </span>
                )}
                <button
                    type="button"
                    onClick={onToggle}
                    className="p-1.5 rounded-md text-white/40 hover:text-white hover:bg-white/10 transition"
                >
                    {collapsed ? <HiChevronRight size={16} /> : <HiChevronLeft size={16} />}
                </button>
            </div>

            {/* Nav */}
            <nav className="flex-1 px-2 py-4 space-y-1">
                {navItems.map(({ label, icon: Icon, anchor }) => (
<a
                    key={anchor}
                    href={anchor}
                    className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm
              text-white/50 hover:text-white hover:bg-white/8 transition-all
              ${collapsed ? "justify-center px-2" : ""}`}
                    >
                    <Icon size={18} className="shrink-0" />
                {!collapsed && <span className="truncate">{label}</span>}
        </a>
))}
</nav>
</aside>
);
}