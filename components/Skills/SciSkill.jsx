import React from 'react'
import { VscArrowCircleRight } from 'react-icons/vsc'
import { RiNextjsFill, RiTailwindCssLine } from "react-icons/ri";
import { FaFigma, FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaBootstrap, FaConnectdevelop, FaCss3, FaDatabase, FaElementor, FaHtml5, FaLaravel, FaNodeJs, FaPhp, FaReact, FaWordpress } from 'react-icons/fa6';
import { SiAdobeillustrator, SiSpringboot } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import SingleSkill from './SingleSkill';

function SciSkill() {
  return (
    <div className='px-8 my-10 py-5 flex flex-col items-center'>
         <h1 className='text-4xl font-bold mb-8 flex flex-row gap-5'> <VscArrowCircleRight/> My Other Skils</h1>
        <div className="flex flex-row gap-5 flex-wrap justify-center px-2 md:px-20">
            <SingleSkill txt={"Problem Solving"}>
                <RiNextjsFill size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Communication"}>
                <IoLogoJavascript size={"30px"}/>
            </SingleSkill>
            <SingleSkill txt={"Analytical Thinking"}>
                <FaNodeJs size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Column Chromatography "}>
                <FaJava size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Thin Layer Chromatography"}>
                <FaPhp size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"General Laboratory Practice"}>
                <SiSpringboot size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"General MAnufacturing Practice"}>
                <FaLaravel size={"30px"} />
            </SingleSkill>
            <SingleSkill txt={"Cosmetic Formulation"}>
                <FaReact size={"30px"} />
            </SingleSkill>
      </div>
    </div>
  )
}

export default SciSkill
