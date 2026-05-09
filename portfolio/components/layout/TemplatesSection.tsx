import {BiArrowToRight} from "react-icons/bi";
import { IoCodeSlashOutline } from "react-icons/io5";
import {MdDesktopWindows, MdMenuBook} from "react-icons/md";
import {SiKubernetes} from "react-icons/si";


const TECH_COLORS: Record<string, string> = {
    nodejs: "bg-emerald-900/40 text-emerald-400",
    javascript: "bg-yellow-900/40 text-yellow-400",
    mongodb: "bg-emerald-900/40 text-emerald-400",
    express: "bg-slate-700/40 text-slate-300",
    react: "bg-sky-900/40 text-sky-400",
    typescript: "bg-blue-900/40 text-blue-400",
};

const CATEGORY_CONFIG: Record<string, { colors: string; icon: JSX.Element }> = {
    Templates: {
        colors: "bg-violet-500/25 border-violet-400/40 text-violet-300",
        icon: <IoCodeSlashOutline className="text-violet-400 w-4 h-4" />,
    },
    Quiz: {
        colors: "bg-sky-500/25 border-sky-400/40 text-sky-300",
        icon: <MdDesktopWindows className="text-sky-400 w-4 h-4" />,
    },
    Tutoriels: {
        colors: "bg-green-500/25 border-green-400/40 text-green-300",
        icon: <MdMenuBook className="text-green-400 w-4 h-4" />,
    },
    Serie: {
        colors: "bg-amber-500/25 border-amber-400/40 text-amber-300",
        icon: <SiKubernetes className=" text-amber-400 w-4 h-4" />,
    },
};

const DEFAULT_CATEGORY = {
    colors: "bg-slate-500/25 border-slate-400/40 text-slate-300",
    icon: <IoCodeSlashOutline className="text-slate-400 w-5 h-5" />,
};

function getCategoryConfig(category: string) {
    return CATEGORY_CONFIG[category] ?? DEFAULT_CATEGORY;
}


function getTechStyle(tech: string) {
    return TECH_COLORS[tech] ?? "bg-slate-700/40 text-slate-300";
}

function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
}

interface Article {
    id: number;
    title: string;
    desc: string;
    img?: string;
    date: string;
    category: string;
    link: string;
    technologies: string[];
}

interface Props {
    articles: Article[];
}

function FeaturedCard({ article }: { article: Article }) {
    const isExternal = article.link.startsWith("http");

    return (
<a href={article.link}
    target={isExternal ? "_blank" : "_self"}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className="bg-[#1a1d2e] rounded-2xl overflow-hidden flex flex-col hover:ring-1 hover:ring-violet-500/40 transition-all"
        >
    <div className="relative h-52 bg-gradient-to-br from-[#0d1b2e] via-[#1a2a4a] to-[#1a0d2e] overflow-hidden">
        {article.img ? (
            <img
                src={article.img}
                alt={article.title}
                className="w-full h-full object-cover opacity-80"
            />
        ) : (
            <NetworkSVG />
        )}
        <span
            className="absolute bottom-4 left-4 border text-[10px]
            font-bold tracking-widest px-3 py-1 rounded-full uppercase
            bg-green-500/25 border-green-400/40 text-green-300">
          {article.category}
        </span>
    </div>

    {/* Body */}
    <div className="px-5 py-4 flex flex-col gap-3 flex-1 bg-black-200">
        <h3 className="text-lg font-bold leading-snug text-white">
            {article.title}
        </h3>
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-2">
            {article.desc}
        </p>

        <div className="flex items-center justify-between mt-auto pt-2">
            <span className="text-xs text-slate-500">{formatDate(article.date)}</span>
            {article.technologies.length > 0 && (
                <div className="flex gap-1.5">
                    {article.technologies.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${getTechStyle(tech)}`}
                        >
                  {tech}
                </span>
                    ))}
                </div>
            )}
        </div>
    </div>
</a>
);
}

function SideCard({ article }: { article: Article }) {
    const isExternal = article.link.startsWith("http");
    const { colors, icon } = getCategoryConfig(article.category);


    return (
<a href={article.link}
    target={isExternal ? "_blank" : "_self"}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className="bg-black-200 rounded-2xl p-5 flex flex-col justify-between hover:ring-1 hover:ring-violet-500/40 transition-all">
    <div>
        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border ${colors}`}>
            {icon}
        </div>
    <h3 className="text-base font-bold leading-snug text-white mb-2">
        {article.title}
    </h3>
    <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
        {article.desc}
    </p>
</div>
    <div className="flex justify-between items-center mt-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">
          {article.category}
        </span>
            <span className="text-xs text-slate-500">{formatDate(article.date)}</span>
    </div>
</a>
);
}

function MiniCard({ article }: { article: Article }) {
    const isExternal = article.link.startsWith("http");
    const { colors, icon } = getCategoryConfig(article.category);

    return (
<a
        href={article.link}
    target={isExternal ? "_blank" : "_self"}
    rel={isExternal ? "noopener noreferrer" : undefined}
    className="bg-black-200 rounded-2xl p-4 flex flex-col hover:ring-1 hover:ring-violet-500/40 transition-all">
    <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 border ${colors}`}>
        {icon}
    </div>
    <div>
    <p className="text-sm font-bold text-white leading-snug mb-1">
        {article.title}
    </p>
    <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
        {article.desc}
    </p>
    </div>
    <div className="flex justify-between items-center mt-5">
        <span className="text-[11px] font-semibold tracking-widest uppercase text-slate-400">
          {article.category}
        </span>
        <span className="text-xs text-slate-500">{formatDate(article.date)}</span>
    </div>
</a>
);
}

function NetworkSVG() {
    return (
        <svg
            className="absolute inset-0 w-full h-full opacity-70"
            viewBox="0 0 480 220"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect width="480" height="220" fill="#0a1628" />
            <line x1="60" y1="40" x2="160" y2="100" stroke="#4f8ef7" strokeWidth="0.6" opacity="0.5" />
            <line x1="160" y1="100" x2="280" y2="60" stroke="#4f8ef7" strokeWidth="0.6" opacity="0.4" />
            <line x1="280" y1="60" x2="380" y2="120" stroke="#6366f1" strokeWidth="0.6" opacity="0.4" />
            <line x1="160" y1="100" x2="240" y2="160" stroke="#4f8ef7" strokeWidth="0.6" opacity="0.35" />
            <line x1="240" y1="160" x2="380" y2="120" stroke="#a78bfa" strokeWidth="0.6" opacity="0.4" />
            <circle cx="160" cy="100" r="4.5" fill="#4f8ef7" opacity="0.9" />
            <circle cx="280" cy="60" r="3.5" fill="#6366f1" opacity="0.8" />
            <circle cx="380" cy="120" r="4" fill="#a78bfa" opacity="0.9" />
            <circle cx="240" cy="160" r="3" fill="#4f8ef7" opacity="0.7" />
        </svg>
    );
}


export default function TemplatesSection({ articles }: Props) {
    const sorted = [...articles].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    const featured = sorted[0];
    const sideCard = sorted[1];
    const miniCards = sorted.slice(2, 5);

    if (!featured) return null;

    return (
        <section className="bg-black-100 text-white p-8 font-sans mt-10">
            <div className="flex justify-between items-start mb-7">
                <div>
                    <h2 className="text-2xl font-bold mb-1">Dernières Publications</h2>
                    <p className="text-sm text-slate-400">
                        Ce que j&apos;apprends, ce que j&apos;expérimente, ce que je partage.
                    </p>
                </div>
<a
                href="/blog/articles"
                className="flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-violet-400 whitespace-nowrap"
                >
                Tous les articles <BiArrowToRight size={14} />
            </a>
        </div>

    {/* Grille principale */}
    <div className="grid grid-cols-[1fr_280px] gap-4 mb-4">
        <FeaturedCard article={featured} />
        {sideCard && <SideCard article={sideCard} />}
    </div>

    {/* Mini cartes */}
    {miniCards.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
            {miniCards.map((article) => (
                <MiniCard key={article.id} article={article} />
            ))}
        </div>
    )}
</section>
);
}