"use client"
import Image from 'next/image'
import { VscArrowCircleRight } from 'react-icons/vsc'
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import SingleSkill from '../Skills/SingleSkill'
import Link from 'next/link';
import Carousel from 'react-material-ui-carousel';


const Projects = () => {
    const completeProjects = [
        {
            Title: "Zoom Clone",
            Img: "zoom_clone.png",
            Link: "link",
            Desc: `Experience seamless and secure virtual meetings with our custom-built Zoom clone.
                    Designed with user-friendliness and robust functionality in mind, this platform
                    offers high-quality video and audio, real-time messaging, and effortless screen
                    sharing. It includes intuitive meeting scheduling, robust user authentication,
                    and a responsive UI that adapts to any device. Built using cutting-edge technologies,
                    our Zoom clone ensures a reliable and enjoyable communication experience for
                    business meetings, virtual classrooms, or casual catch-ups.`
        },
        {
            Title: "Financily",
            Img: "zoom_clone.png",
            Link: "link",
            Desc: `Personal Finance Tracker`
        }
    ];
    return (
        <div className='relative flex flex-col w-full px-8 my-24'>
            <h1 className='text-4xl font-bold mb-8 flex flex-row gap-5'> <VscArrowCircleRight /> My Projects</h1>
            <Carousel>
                {
                    completeProjects.map((item, i) => <Item key={i} item={item}/>)
                }
            </Carousel>
        </div>
    )
}

const Item = (props) => {
    return (
        <div className="content flex flex-row gap-2 items-center justify-center px-2 md:px-10">
            <div className="img relative w-1/2">
                <Image src="/training.jpg" width={700} height={500} />
            </div>
            <div className="relative w-1/2 p-3">
                <div className="flex flex-row justify-between items-center">
                    <h2 className="text-3xl font-bold py-4">{props.item.Title}</h2>
                    <Link href="https://github.com/Flash-R/zoom-clone" className="font-bold " target="_blank">View</Link>
                </div>
                <p>
                    {props.item.Desc}
                </p>
                <div className="technologies flex flex-row pt-3 gap-2 font-bold">

                    Next Js, React Js, Node Js, MongoDB, Streamio, Clerk
                </div>
            </div>
        </div>
    )
}

export default Projects