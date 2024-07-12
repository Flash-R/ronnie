import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { VscArrowCircleRight } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa6";
import { ImLab } from "react-icons/im";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiChemicalTank } from "react-icons/gi";



function What_i_do() {
    return (
        <div className='px-8 py-5'>
            <h1 className='text-4xl font-bold mb-3 flex flex-row gap-5'> <VscArrowCircleRight/> What i do</h1>
            <div className="cards flex flex-row gap-4 items-center mt-9">
                <Card className='w-1/3'>
                    <CardContent>
                        <FaLaptopCode size={'50px'} />
                        <h3 className='text-2xl font-bold mb-2'>Full Stack Development</h3>
                        <p>
                            Knowledgable in both front-end and back-end development, I have developed
                            a strong foundation in the technologies of JavaScript, React, Next.js, Python,
                            PHP, SQL, NodeJs, Java, SpringBoot, Laravel, Tailwind, CSS.
                        </p>
                    </CardContent>
                </Card>
                <Card className='w-1/3'>
                    <CardContent>
                        <ImLab size={'50px'} />
                        <h3 className='text-2xl font-bold mb-2'>Analytical Chemistry</h3>
                        <p>
                            Next.js is a popular React framework developed by Vercel that enables 
                            developers to create fast and scalable web applications with server-side 
                            rendering (SSR) and static site generation (SSG) ertrtretret ertertret tertret terte
                        </p>
                    </CardContent>
                </Card>
                <Card className='w-1/3'>
                    <CardContent>
                        <BsGraphUpArrow size={'50px'} />
                        <h3 className='text-2xl font-bold mb-2'>Data Analysis</h3>
                        <p>
                            Next.js is a popular React framework developed by Vercel that enables 
                            developers to create fast and scalable web applications with server-side 
                            rendering (SSR) and static site generation (SSG)
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div className="cards flex flex-row gap-4 items-center mt-9">
                <Card className='w-1/3'>
                    <CardContent>
                        <MdOutlineDesignServices size={'50px'} />
                        <h3 className='text-2xl font-bold mb-2'>UI Design</h3>
                        <p>
                            I design user interfaces for websites, mobile applications, and web applications.
                            Using Figma, Adobe InDesign, I create user interfaces that are visually appealing and easy to use.
                        </p>
                    </CardContent>
                </Card>
                <Card className='w-1/3'>
                    <CardContent>
                        <GiChemicalTank size={'50px'} />
                        <h3 className='text-2xl font-bold mb-2'>Experimental Designs</h3>
                        <p>
                            Designing Science Technology Engineering and Mathematics (STEM) experiments for students in low secondary
                            level, advanced high school and university level. 
                        </p>
                    </CardContent>
                </Card>
                <Card className='w-1/3'>
                    <CardContent>
                        <GiChemicalTank size={'50px'} />
                        <h3 className='text-2xl font-bold mb-2'>Natural Products</h3>
                        <p>
                            Identifying the chemical structures of natural products is a critical step in the development of
                            new drugs and materials it is done Using techniques like TLC, Column and NMR.
                        </p>
                    </CardContent>
                </Card>
            </div>

        </div>
    )
}

export default What_i_do
