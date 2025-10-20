import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { FloatingDock } from "./ui/FloatingDock";
import { SiGitlab } from "react-icons/si";
import { SparklesCore } from "./ui/Sparkles";
import {Label} from "@/app/admin/ui/Label";
import {Input} from "@/app/blog/ui/Input"
import React, {useRef} from "react";
import {cn} from "@/lib/utils";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const LabelInputContainer = ({
                                 children,
                                 className,
                             }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex w-full flex-col space-y-2", className)}>
            {children}
        </div>
    );
};



const Footer = () => {
    const form = useRef<HTMLFormElement>(null);

    const handleSubmit = (e?: React.FormEvent) => {
        e?.preventDefault();
        if(!form.current) return;
        if (
            !process.env.NEXT_PUBLIC_SERVICE_ID ||
            !process.env.NEXT_PUBLIC_TEMPLATE_ID ||
            !process.env.NEXT_PUBLIC_PUBLIC_KEY
        ) {
            toast.error("Configuration incorrecte : variables d'environnement manquantes.");
            return;
        }

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_SERVICE_ID,
            process.env.NEXT_PUBLIC_TEMPLATE_ID,
            form.current!,
            process.env.NEXT_PUBLIC_PUBLIC_KEY
        ).then((result) => {
            toast.success("Email envoyé!");
            form.current?.reset();
        }).catch((error) => {
            toast.error('Erreur :', error.text);
        });
    }

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={10}
        className="absolute top-0 left-0 w-full h-full z-0"
        particleColor="#FFFFFF"
      />
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
        />
        <div className="relative z-10 flex flex-col md:flex-row items-start justify-between gap-10 max-w-7xl mx-auto">
            <div className="flex-1">
                <h1 className="text-5xl font-bold text-left">
                    Prêt à faire passer <span className="text-purple">votre présence numérique</span> au niveau supérieur ?
                </h1>
                <p className="text-white-200 md:mt-10 my-5 text-left">
                    Contactez-moi et discutons de la manière dont je peux vous aider à atteindre vos objectifs.
                </p>
            </div>

            <div className="flex-1 w-full">
                <form ref={form} onSubmit={handleSubmit} className="bg-gray-900 p-6 rounded-lg shadow-lg space-y-4">
                    <LabelInputContainer>
                        <Label htmlFor="name" className="block text-white mb-1">Nom</Label>
                        <Input id="name" name="name" placeholder="Votre nom" type="text" required />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="email" className="block text-white mb-1">Email</Label>
                        <Input id="email" name="email" placeholder="Votre adresse mail" type="text" required />
                    </LabelInputContainer>
                    <LabelInputContainer>
                        <Label htmlFor="message" className="block text-white mb-1">Message</Label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Votre message"
                            rows={4}
                            required
                            className="w-full p-2 rounded bg-zinc-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple"
                        />
                    </LabelInputContainer>
                    <MagicButton
                        title="Envoyez"
                        icon={<FaLocationArrow />}
                        position="right"
                        type="submit"
                    />
                </form>
            </div>
        </div>


        <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light text-white-200">
          Copyright © {new Date().getFullYear()} Essi Chainer KOMISSA ZOTSU
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          <FloatingDock
            items={socialMedia.map((info) => ({
              title: info.title,
              icon: info.id === 1 ? <FaGithub /> : info.id === 2 ? <FaLinkedin /> : info.id === 4 ? <SiGitlab /> : <FaWhatsapp />,
              href: info.link,
              target: "_blank"
            }))}
          />
        </div>
      </div>

    </footer>
  );
};

export default Footer;