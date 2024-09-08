import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { FloatingDock } from "./ui/FloatingDock";
import { SiGitlab } from "react-icons/si";


const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Prêt à faire passer <span className="text-purple">votre présence numérique</span> au niveau supérieur ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi aujourd'hui et discutons de la manière dont je peux vous aider à atteindre vos objectifs.
        </p>
        <a href="mailto:essikomissa@gmail.com" target="_blank">
          <MagicButton
            title="Envoyez un mail"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light text-white-200">
          Copyright © {new Date().getFullYear()} Essi Chainer KOMISSA ZOTSU
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {/* {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))} */}
          <FloatingDock
            items={socialMedia.map((info) => ({
              title: info.title, 
              icon: info.id === 1 ? <FaGithub /> : info.id === 2 ? <FaLinkedin /> :info.id === 4? <SiGitlab/> : <FaWhatsapp />,
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