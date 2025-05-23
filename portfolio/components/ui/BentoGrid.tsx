import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaGithub, FaWordpress } from "react-icons/fa";
import { SiPostman, SiIntellijidea, SiBruno, SiSourcetree } from "react-icons/si";
import { BiLogoFigma } from "react-icons/bi";
import { VscVscode } from "react-icons/vsc";
import { FaLocationArrow } from "react-icons/fa6";

import Image from "next/image";

import { cn } from "@/lib/utils";


import { BackgroundGradientAnimation } from "./GradientBg";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { AnimatedTooltip } from "./AnimatedTooltip";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["ReactJS", "NodeJS"];
  const rightLists = ["Python", "NextJS"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "essikomissa@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  const outils = [
    {
      id: 1,
      name: "Git/Github",
      designation: "",
      image: <FaGithub className="text-yellow-500 h-20 w-20" />,
    },
    {
      id: 2,
      name: "Figma",
      designation: "",
      image: <BiLogoFigma className="text-green-500 h-20 w-20" />
    },
    {
      id: 3,
      name: "VS Code",
      designation: "",
      image: <VscVscode className="text-blue-500 h-20 w-20" />
    },
    {
      id: 4,
      name: "Postman",
      designation: "",
      image: <SiPostman className="text-orange-500 h-20 w-20" />
    },
    {
      id: 5,
      name: "Wordpress",
      designation: "",
      image: <FaWordpress className="text-blue-500 h-20 w-20" />,
    }
    /*,
    {
      id: 6,
      name: "Bruno",
      designation: "",
      image: <SiBruno className="text-orange-500 h-20 w-20" />,
    }
    ,
    {
      id: 7,
      name: "Sourcetree",
      designation: "",
      image: <SiSourcetree className="text-blue-700 h-20 w-20" />,
    }*/
  ];

  return (
    <div
      className={cn(
        // remove p-4 rounded-3xl dark:bg-black dark:border-white/[0.2] bg-white  border border-transparent, add border border-white/[0.1] overflow-hidden relative
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              width={500}
              height={300}
              className={cn(imgClassName, "object-cover object-center ")}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${id === 5 && "w-full opacity-80"
            } `}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              width={500}
              height={300}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div>
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          {/* change the order of the title and des, font-extralight, remove text-xs text-neutral-600 dark:text-neutral-300 , change the text-color */}
          <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
            {description}
          </div>
          {/* add text-3xl max-w-96 , remove text-neutral-600 dark:text-neutral-300*/}
          {/* remove mb-2 mt-2 */}
          <div
            className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
          >
            {title}
          </div>

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit -right-3 lg:-right-2">
              <div className="flex flex-row items-center justify-center mb-2 mt-5 w-full">
                <AnimatedTooltip items={outils} />
              </div>
            </div>
          )}
          {id === 2 && (
            <div className="mt-5 relative">
              {/* button border magic from tailwind css buttons  */}
              {/* add rounded-md h-8 md:h-8, remove rounded-full */}
              {/* remove focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 */}
              {/* add handleCopy() for the copy the text */}
              <div
                className={`absolute -bottom-5 right-0 ${copied ? "block" : "block"
                  }`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                {/* <Lottie options={defaultOptions} height={200} width={400} /> */}
              </div>

              {/* <MagicButton
                title={copied ? "Email copié" : "Envoyez moi un mail!"}
                icon={<IoCopyOutline />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              /> */}
              <a href="mailto:essikomissa@gmail.com" target="_blank">
                <MagicButton
                  title="Envoyez moi un mail"
                  icon={<FaLocationArrow />}
                  position="left"
                />
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};