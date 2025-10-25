"use client";
import React from "react";
import { StickyScroll } from "./ui/StickyScrollReaveal";
import Image from "next/image";
import { FaReact, FaLaravel, FaPhp, FaCss3Alt, FaPython, FaBootstrap, FaHtml5, FaJava  } from "react-icons/fa";
import { SiMysql, SiFlask, SiMongodb } from "react-icons/si";
import { BiLogoJavascript, BiLogoAngular, BiLogoTypescript } from "react-icons/bi";


const content = [
    {
        title: `Stagiaire développeuse full stack Java <br>
        <small>Février - Août 2025<span></small>`,
        description: (
            <div>
                Stage de fin de formation pour l&apos;obtention du diplôme de Master en Entrepreneuriat Technologique : 
                développement d&apos;application avec gestion de projet informatique.<br/>
                Découverte et utilisation de plusieurs outils tels que : Bitbucket, Sourcetree, Jenkins, Sonar, Bruno, etc.<br /><br />
                <small><em>Groupe Covéa (MMA) - Le Mans, France</em></small><br />
                <BiLogoAngular  className="text-red-500 inline-block mx-1" />
                <BiLogoTypescript className="text-blue-500 inline-block mx-1"/>
                <FaJava  className="text-orange-500 inline-block mx-1" />
                <FaCss3Alt className="text-blue-500 inline-block mx-1" />
                <FaHtml5 className="text-orange-600 inline-block mx-1" />
            </div>
        ),
        content: (
            <div className="h-full w-full bg-white flex items-center justify-center text-white">
                <Image
                    src="/Logo_MMA.jpg"
                    width={300}
                    height={300}
                    className="h-full w-full object-contain"
                    alt="Axians"
                    onClick={() => window.open("https://www.vinci-energies.ma/que-faisons-nous/nos-marques/axians/", "_blank")}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        ),
    },
    {
        title: `Stagiaire développeuse d'applications <br>
        <small>Mars - Août 2024<span></small>`,
        description: (
            <div>
                Stage de fin de formation pour l&apos;obtention du diplôme de Master en Informatique et Systèmes. <br />
                Découverte et utilisation de plusieurs outils tels que : TinyMCE, TomSelect, Tabler.io, etc.<br /><br />
                <small><em>Axians Maroc - Casablanca, Maroc</em></small><br />
                <FaHtml5 className="text-orange-600 inline-block mx-1" />
                <FaCss3Alt className="text-blue-500 inline-block mx-1" />
                <FaPhp className="text-purple inline-block mx-1" />
                <BiLogoJavascript className="text-yellow-400 inline-block mx-1" />
                <SiMysql className="text-blue-500 inline-block mx-1" />
            </div>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/logo-axians-vinci.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="Axians"
                    onClick={() => window.open("https://www.vinci-energies.ma/que-faisons-nous/nos-marques/axians/", "_blank")}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        ),
    },
    {
        title: `Développeuse d'applications <br>
        <small>Décembre 2023 - Janvier 2024<span></small>`,
        description: (
            <div>
                Conception et développement d&apos;une application web à caractère confidentiel dans une équipe de 4 développeurs.<br />
                Découverte et utilisation de plusieurs packages ReactJS et Javascript tels que : reactpdf, sweetalert2, papaparse, xlsx, jspdf, etc.<br /><br />
                <small><em>Centre National de Traitement des Données - Lomé, Togo</em></small><br />
                <FaReact className="text-blue-500 inline-block mx-1" />
                <FaPython className="text-yellow-400 inline-block mx-1" />
                <SiFlask className="text-white inline-block mx-1" />
                <FaBootstrap className="text-purple inline-block mx-1" />
                <SiMysql className="text-blue-500 inline-block mx-1" />
            </div>
        ),
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Image
                    src="/ceni.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="CENI TOGO"
                    onClick={() => window.open("https://www.cenitogo.tg/", "_blank")}
                    style={{ cursor: 'pointer' }}
                />
            </div>
        ),
    },
    {
        title: `Intervenante en informatique<br>
        <small>Octobre 2022 - Décembre 2023<span></small>`,
        description: (
            <div>
                Conception et développement de sites web. <br />
                Conception et développement d&apos;une application web de partage de fichiers.<br />
                Conception et développement d&apos;un site web destiné à collecter des fonds pour des réalisations en milieu rural.<br /><br />
                <small><em>ETTIAM & INNOVE CORP - Lomé, Togo</em></small><br />
                <FaHtml5 className="text-orange-600 inline-block mx-1" />
                <FaCss3Alt className="text-blue-500 inline-block mx-1" />
                <FaBootstrap className="text-purple inline-block mx-1" />
                <FaPython className="text-yellow-400 inline-block mx-1" />
                <SiFlask className="text-white inline-block mx-1" />
                <FaReact className="text-blue-500 inline-block mx-1" />
                <BiLogoJavascript className="text-yellow-400 inline-block mx-1" />
                <SiMysql className="text-blue-500 inline-block mx-1" />
            </div>
        ),
        content: (
            <div className="h-full w-full bg-white flex items-center justify-center text-white">
                <Image
                    src="/favicon.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="ETTIAM"
                    // onClick={() => window.open("https://www.cenitogo.tg/", "_blank")}
                    // style={{ cursor: 'pointer' }}
                />
            </div>
        ),
    },
    {
        title: `Stagiaire développeuse d'applications <br>
        <small>Octobre 2022 - Décembre 2023<span></small>`,
        description: (
            <div>
                Stage de fin de formation pour l&apos;obtention du diplôme de licence en Ingénierie des Travaux Informatiques. <br />
                Conception et développement d&apos;un outil d&apos;analyse prédictive pour l&apos;équipe marketing : TarzanBI. Cet outil a permis à l&apos;équipe marketing d&apos;identifier les produits à promouvoir selon les villes .<br /><br />
                <small><em>Tarzan Express - Lomé, Togo</em></small><br />
                <BiLogoJavascript className="text-yellow-400 inline-block mx-1" />
                <FaLaravel className="text-red-600 inline-block mx-1" />
                <FaPhp className="text-purple inline-block mx-1" />
                <FaPython className="text-yellow-400 inline-block mx-1" />
                <SiFlask className="text-white inline-block mx-1" />
                <SiMongodb className="text-green-600 inline-block mx-1" />
            </div>
        ),
        content: (
            <div className="h-full w-full bg-white flex items-center justify-center text-white">
                <Image
                    src="/tarzan.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="TARZAN EXPRESS"
                    // onClick={() => window.open("https://www.cenitogo.tg/", "_blank")}
                    // style={{ cursor: 'pointer' }}
                />
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <section id="experience">
            <div className="py-20 w-full">
                <h1 className="heading">
                    Mes expériences <span className="text-purple"> professionnelles</span>
                </h1>
                <div className="p-10">
                    <StickyScroll content={content} />
                </div>
            </div>
        </section>
    );
}
