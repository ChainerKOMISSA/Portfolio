import { FaGithub, FaLinkedin, FaWordpress, FaReact, FaNodeJs, FaLaravel, FaPhp, FaCss3Alt, FaPython, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { SiMysql, SiNextdotjs, SiFlask } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";

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
    title: "RBNET MAROC",
    description:
      "Site web de présentation de l'entreprise RBNET Maroc. Présentation des services de l'entreprise.",
    link: "https://www.rbnetmaroc.com/",
    image: "/rbnet.png",
    icons: [<FaWordpress className="text-blue-400 rounded-full" />],
  },
  {
    title: "PRO CROWNED",
    description:
      "Site web de présentation de services pour un particulier. Intégration de Tutor LMS pour la gestion des cours. Création de questionnaires.",
    link: "https://pro-crowned.com/",
    image: "/pro.png",
    icons: [<FaWordpress className="text-blue-400 rounded-full" />],
  },
  {
    title: "STOCKLY",
    description:
      "Application web de gestion de boutique. Gestion et suivi du stock, du personnel, des commandes et des livraisons. Statistiques en temps réel.",
    link: "",
    image: "/logo stockly 2.png",
    icons: [<FaReact className="text-blue-400 rounded-full"/>, <BiLogoJavascript className="rounded-full text-yellow-400"/>, <FaNodeJs className="rounded-full text-green-600"/>, <SiMysql className="text-blue-500"/>],
  },
  {
    title: "CMS BETHEDA",
    description:
      "Application de gestion de centre médical. Gestion de carnet médical, vente de produits pharmaceutiques, gynécologie, analyses médiciales.",
    link: "",
    image: "/portfolio-2-2.jpg",
    icons: [<FaLaravel className="text-red-600"/>, <FaPhp className="rounded-full text-purple"/>, <SiMysql className="text-blue-500"/>],
  },
  {
    title: "EASY TRAVEL",
    description:
      "Application mobile d'achat de tickets de voyages. Conception de la partie mobile et intégration à une API existante.",
    link: "https://youtu.be/YQvYps2Te4E",
    image: "/logo2.png",
    icons: [<FaReact className="rounded-full text-purple"/>, <FaNodeJs className="rounded-full text-green-600"/>, <FaCss3Alt className="text-blue-500"/>],
  },
  {
    title: "MY POCKET ENGLISH",
    description:
      "Application mobile d'apprentissage de l'anglais. Règles de grammaire, conjugaison, vocabulaire. Quizzes interactifs à la fin des leçons.",
    link: "/carousel4.png",
    image: "/logopocket.png",
    icons: [<FaReact className="rounded-full text-purple"/>, <FaNodeJs className="rounded-full text-green-600"/>, <FaCss3Alt className="text-blue-500"/>, <SiMysql className="text-blue-500"/>],
  },
  {
    title: "SHARE HUB",
    description:
      "Application web de partage de fichiers en ligne. Utilisable en entreprise, organisation.",
    link: "",
    image: "/sharehub-2.png",
    icons: [<FaPython className="rounded-full text-yellow-400"/>, <SiFlask className="text-white"/>, <FaBootstrap className="rounded-full text-purple"/>, <SiMysql className="text-blue-500"/>],
  },
  {
    title: "ETTIAM",
    description:
      "Site web de présentation de l'entreprise ETTIAM. Présentation des services de l'entreprise.",
    link: "",
    image: "portfolio-1-1.png",
    icons: [<FaHtml5 className="text-orange-600"/>, <FaCss3Alt className="text-blue-500"/>, <FaBootstrap className="rounded-full text-purple"/>],
  },
  {
    title: "INNOVE CORP",
    description:
      "Site web de présentation de l'entreprise INNOVE CORP. Présentation des services de l'entreprise.",
    link: "",
    image: "/portfolio-3-3.png",
    icons: [<FaHtml5 className="text-orange-600"/>, <FaCss3Alt className="text-blue-500"/>, <FaBootstrap className="rounded-full text-purple"/>],
  },
];
