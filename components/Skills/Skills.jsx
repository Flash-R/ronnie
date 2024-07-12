import React from 'react'
import SingleSkill from './SingleSkill'
import { VscArrowCircleRight } from 'react-icons/vsc'
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import { FaFigma, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaConnectdevelop, FaCss3, FaDatabase, FaElementor, FaHtml5, FaLaravel, FaNodeJs, FaPhp, FaReact, FaWordpress } from 'react-icons/fa6';
import { SiAdobeillustrator, SiSpringboot } from "react-icons/si";
import { TbSql } from "react-icons/tb";

function Skills() {
  return (
    <div className='px-8 my-10 py-5 flex flex-col items-center'>
         <h1 className='text-4xl font-bold mb-8 flex flex-row gap-5'> <VscArrowCircleRight/> My Dev Skils</h1>
        <div className="flex flex-row gap-5 flex-wrap justify-center px-2 md:px-20">
            <SingleSkill txt={"Next.js"}>
                <RiNextjsFill size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"JavaScript"}>
                <IoLogoJavascript size={"30px"}/>
            </SingleSkill>
            <SingleSkill txt={"Node Js"}>
                <FaNodeJs size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"JAVA "}>
                <FaJava size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"PHP"}>
                <FaPhp size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"SpringBoot"}>
                <SiSpringboot size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Laravel"}>
                <FaLaravel size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"React"}>
                <FaReact size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"HTML"}>
                <FaHtml5 size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"CSS"}>
                <FaCss3 size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Tailwind"}>
                <RiTailwindCssLine size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Bootstrap"}>
                <FaBootstrap size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Wordpress"}>
                <FaWordpress size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Elementor"}>
                <FaElementor size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Figma"}>
                <FaFigma size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Illustrator"}>
                <SiAdobeillustrator size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Data Structures"}>
                <FaConnectdevelop size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"SQL"}>
                <TbSql size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Data Structures"}>
                <FaConnectdevelop size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Database Design"}>
                <FaDatabase size={"30px"} />
            </SingleSkill>
      </div>
    </div>
  )
}

export default Skills
