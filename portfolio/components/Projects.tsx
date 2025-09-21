import { FaWordpress, FaReact, FaNodeJs, FaLaravel, FaPhp, FaCss3Alt, FaPython, FaBootstrap } from "react-icons/fa";
import { SiMysql,SiFlask, SiMongodb, SiTailwindcss } from "react-icons/si";
import { BiLogoJavascript, BiLogoTypescript, BiLogoAngular } from "react-icons/bi";

import { HoverEffect } from "./ui/CardHoverEffect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
  {
    id:1,
    title: "APPLIED",
    description:
      "Développement en cours.\nApplication de gestion des candidatures. Centralisation des offres, génération de CV et lettre de motivation adaptés à chaque offre, suivi des statuts, filtres et recherche rapide pour une organisation facile.",
    link: "https://applied-eight.vercel.app/home",
    image: "/applied.png",
    icons: [<BiLogoTypescript className="text-blue-500 rounded-full" key="typescript" />, <BiLogoJavascript className="rounded-full text-yellow-400" key="javascript"/>, <SiTailwindcss className="rounded-full text-white" key="tailwindcss"/>],
  },
  {
    id:2,
    title: "RBNET MAROC",
    description:
      "Site web de présentation de l'entreprise RBNET Maroc. Présentation des services de l'entreprise.",
    link: "https://www.rbnetmaroc.com/",
    image: "/rbnet.png",
    icons: [<FaWordpress className="text-blue-400 rounded-full" key="wordpress" />],
  },
  {
    id:3,
    title: "PRO CROWNED",
    description:
      "Site web de présentation de services pour un particulier. Intégration de Tutor LMS pour la gestion des cours. Création de questionnaires.",
    link: "https://pro-crowned.com/",
    image: "/pro.png",
    icons: [<FaWordpress className="text-blue-400 rounded-full" key="wordpress" />],
  },
  {
    id:4,
    title: "STOCKLY",
    description:
      "Application web de gestion de boutique. Gestion et suivi du stock, du personnel, des commandes et des livraisons. Statistiques en temps réel.",
    link: "https://github.com/ChainerKOMISSA/Stockly",
    image: "/logo stockly 2.png",
    icons: [<FaReact className="text-blue-400 rounded-full" key="react"/>, <BiLogoJavascript className="rounded-full text-yellow-400" key="javascript"/>, <FaNodeJs className="rounded-full text-green-600" key="nodejs"/>, <SiMysql className="text-blue-500" key="mysql"/>],
  },
  {
    id:5,
    title: "CMS BETHEDA",
    description:
      "Application de gestion de centre médical. Gestion de carnet médical, vente de produits pharmaceutiques, gynécologie, analyses médiciales.",
    link: "https://github.com/ChainerKOMISSA/CLS-BETHESDA",
    image: "/portfolio-2-2.jpg",
    icons: [<FaLaravel className="text-red-600" key="laravel"/>, <FaPhp className="rounded-full text-purple" key="php"/>, <SiMysql className="text-blue-500" key="mysql"/>],
  },
  {
    id:6,
    title: "EASY TRAVEL",
    description:
      "Application mobile d'achat de tickets de voyages. Conception de la partie mobile et intégration à une API existante.",
    link: "https://youtu.be/YQvYps2Te4E",
    image: "/logo2.png",
    icons: [<FaReact className="rounded-full text-purple" key="react"/>, <FaNodeJs className="rounded-full text-green-600" key="nodejs"/>, <FaCss3Alt className="text-blue-500" key="css"/>],
  },
  {
    id:7,
    title: "MY POCKET ENGLISH",
    description:
      "Application mobile d'apprentissage de l'anglais. Règles de grammaire, conjugaison, vocabulaire. Quizzes interactifs à la fin des leçons.",
    link: "",
    image: "/logopocket.png",
    icons: [<FaReact className="rounded-full text-purple" key="react"/>, <FaNodeJs className="rounded-full text-green-600" key="nodejs"/>, <FaCss3Alt className="text-blue-500" key="css"/>, <SiMysql className="text-blue-500" key="mysql"/>],
  },
  {
    id:8,
    title: "SHARE HUB",
    description:
      "Application web de partage de fichiers en ligne. Utilisable en entreprise, organisation.",
    link: "https://github.com/ChainerKOMISSA/ShareHub",
    image: "/sharehub-2.png",
    icons: [<FaPython className="rounded-full text-yellow-400" key="python"/>, <SiFlask className="text-white" key="flask"/>, <FaBootstrap className="rounded-full text-purple" key="bootstrap"/>, <SiMysql className="text-blue-500" key="mysql"/>],
  }
  // {
  //   title: "ETTIAM",
  //   description:
  //     "Site web de présentation de l'entreprise ETTIAM. Présentation des services de l'entreprise.",
  //   link: "https://ettiam.com/",
  //   image: "/portfolio-1-1.png",
  //   icons: [<FaHtml5 className="text-orange-600" key="html"/>, <FaCss3Alt className="text-blue-500" key="css"/>, <FaBootstrap className="rounded-full text-purple" key="bootstrap"/>],
  // },
  // {
  //   title: "INNOVE CORP",
  //   description:
  //     "Site web de présentation de l'entreprise INNOVE CORP. Présentation des services de l'entreprise.",
  //   link: "https://innove-corp.com/",
  //   image: "/portfolio-3-3.png",
  //   icons: [<FaHtml5 className="text-orange-600" key="html"/>, <FaCss3Alt className="text-blue-500" key="css"/>, <FaBootstrap className="rounded-full text-purple" key="bootstrap"/>],
  // },
];
