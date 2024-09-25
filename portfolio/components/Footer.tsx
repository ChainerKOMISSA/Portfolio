import { FaLocationArrow } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { socialMedia } from "@/data";
import MagicButton from "./ui/MagicButton";
import { FloatingDock } from "./ui/FloatingDock";
import { SiGitlab } from "react-icons/si";
import { SparklesPreview } from "./ui/FooterSparkles";
import { SparklesCore } from "./ui/Sparkles";


const Footer = () => {
  // return (
  //   <footer className="w-full pt-20 pb-10" id="contact">
  //     <div >
  //       <SparklesCore
  //         id="tsparticlesfullpage"
  //         background="transparent"
  //         minSize={0.6}
  //         maxSize={1.4}
  //         particleDensity={100}
  //         className="w-full h-full"
  //         particleColor="#FFFFFF"
  //       />
  //     </div>
  //     <div className="flex flex-col items-center">
  //       <h1 className="heading lg:max-w-[45vw]">
  //         Prêt à faire passer <span className="text-purple">votre présence numérique</span> au niveau supérieur ?
  //       </h1>
  //       <p className="text-white-200 md:mt-10 my-5 text-center">
  //         Contactez-moi et discutons de la manière dont je peux vous aider à atteindre vos objectifs.
  //       </p>
  //       <a href="mailto:essikomissa@gmail.com" target="_blank">
  //         <MagicButton
  //           title="Envoyez un mail"
  //           icon={<FaLocationArrow />}
  //           position="right"
  //         />
  //       </a>
  //     </div>
  //     <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
  //       <p className="md:text-base text-sm md:font-normal font-light text-white-200">
  //         Copyright © {new Date().getFullYear()} Essi Chainer KOMISSA ZOTSU
  //       </p>

  //       <div className="flex items-center md:gap-3 gap-6">
  //         <FloatingDock
  //           items={socialMedia.map((info) => ({
  //             title: info.title,
  //             icon: info.id === 1 ? <FaGithub /> : info.id === 2 ? <FaLinkedin /> : info.id === 4 ? <SiGitlab /> : <FaWhatsapp />,
  //             href: info.link,
  //             target: "_blank"
  //           }))}
  //         />
  //       </div>
  //     </div>

  //   </footer>
  // );

  return (
    <footer className="w-full pt-20 pb-10 relative" id="contact">
      {/* Les particules couvrent tout le footer */}
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute top-0 left-0 w-full h-full z-0"
        particleColor="#FFFFFF"
      />

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Prêt à faire passer <span className="text-purple">votre présence numérique</span> au niveau supérieur ?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contactez-moi et discutons de la manière dont je peux vous aider à atteindre vos objectifs.
        </p>
        <a href="mailto:essikomissa@gmail.com" target="_blank">
          <MagicButton
            title="Envoyez un mail"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
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