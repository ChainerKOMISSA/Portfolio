import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItems } from '@/data'
import { InfiniteMovingCards } from './ui/InfiniteCards2'
import { FaReact, FaLaravel, FaPhp, FaCss3Alt, FaNodeJs, FaPython, FaBootstrap, FaHtml5 } from "react-icons/fa";
import { SiMysql, SiFlask, SiDjango, SiSqlite, SiMongodb, SiNextdotjs, SiTailwindcss } from "react-icons/si";
import { BiLogoJavascript, BiLogoPostgresql } from "react-icons/bi";

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map(({ id, title, description, className, img, imgClassName, titleClassName, spareImg }) => (
          <BentoGridItem
            id={id}
            key={id}
            title={title}
            description={description}
            className={className}
            img={img}
            imgClassName={imgClassName}
            titleClassName={titleClassName}
            spareImg={spareImg}
          />
        ))
        }
      </BentoGrid>
      <InfiniteMovingCards
        items={[
          { quote: "Python", name: "Python", title: "Python", image : <FaPython/>, color : "text-yellow-400", logo : ""},
          { quote: "Flask", name: "Flask", title: "Flask", image : <SiFlask/>, color : "", logo : ""},
          { quote: "React JS", name: "React JS", title: "React JS" , image : <FaReact/>, color : "text-blue-400", logo : ""},
          { quote: "Next JS", name: "Next JS", title: "Next JS" , image : <SiNextdotjs/>, color : "text-white", logo : "/nextjs.png"},
          { quote: "Node JS", name: "Node JS", title: "Node JS" , image : <FaNodeJs/>, color : "text-green-600", logo : "/nextjs.png"},
          { quote: "HTML", name: "HTML", title: "HTML" , image : <FaHtml5/>, color : "text-orange-600", logo : ""},
          { quote: "CSS", name: "CSS", title: "CSS" , image : <FaCss3Alt/>, color : "text-blue-500", logo : "/css3.png"},
          { quote: "Tailwind CSS", name: "Tailwind CSS", title: "Tailwind CSS" , image : <SiTailwindcss/>, color : "text-aqua", logo : "/css3.png"},
          { quote: "Javascript", name: "Javascript", title: "Javascript" , image : <BiLogoJavascript/>, color : "text-yellow-400", logo : "/javascript.png"},
          { quote: "Php", name: "Php", title: "Php" , image : <FaPhp/>, color : "text-purple", logo : "/javascript.png"},
          { quote: "Laravel", name: "Laravel", title: "Laravel" , image : <FaLaravel/>, color : "text-red-600", logo : "/javascript.png"},
          { quote: "Bootstrap", name: "Bootstrap", title: "Bootstrap" , image : <FaBootstrap/>, color : "text-purple", logo : ""},
          { quote: "MySQL", name: "MySQL", title: "MySQL" , image : <SiMysql/>, color : "text-blue-500", logo : ""},
          { quote: "MongoDB", name: "MongoDB", title: "MongoDB" , image : <SiMongodb/>, color : "text-green-600", logo : ""},
          { quote: "PostgreSQL", name: "PostgreSQL", title: "PostgreSQL" , image : <BiLogoPostgresql/>, color : "text-blue-700", logo : ""},
        ]}
        pauseOnHover
        direction='left'
        speed='slow'
        className=""
      />
    </section>
  )
}

export default Grid