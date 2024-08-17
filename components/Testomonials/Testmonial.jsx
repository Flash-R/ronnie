"use client"
import Image from 'next/image'
import { VscArrowCircleRight } from 'react-icons/vsc'
import { RiNextjsFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import SingleSkill from '../Skills/SingleSkill'
import Link from 'next/link';
import Carousel from 'react-material-ui-carousel';


const Testimonial = () => {
    const completeTestimonial = [
        {
            Name: "Sarah Johnson",
            Img: "mbonye.jpeg",
            Company: "Tech Innovations Ltd.",
            Testimonial: `Working with Tumwesigye Ronnie has been a game-changer for our team. His expertise in Science Technology Chemistry and his programming prowess have consistently delivered outstanding results. Ronnie’s attention to detail and commitment to excellence make him an invaluable asset to any project. His leadership and collaborative approach have significantly enhanced our productivity.`
        },
        {
            Name: "Michael O'Connor",
            Img: "mbonye.jpeg",
            Company: "GreenChem Solutions",
            Testimonial: `Ronnie’s ability to tackle complex challenges in Science Technology Chemistry is truly impressive. His technical skills in programming and data analysis have brought a fresh perspective to our projects, leading to more efficient processes and innovative solutions. He is a dedicated professional who always goes above and beyond to ensure success.`
        },
        {
            Name: "Linda Martinez",
            Img: "mbonye.jpeg",
            Company: "BrightCode Systems",
            Testimonial: `Tumwesigye Ronnie’s blend of scientific knowledge and programming expertise has been instrumental in driving our projects forward. His leadership qualities and teamwork ethics are second to none. Ronnie’s precise and thorough approach to problem-solving has consistently delivered high-quality results, making him a valued member of our team.`
        },
        {
            Name: "David Kim",
            Img: "mbonye.jpeg",
            Company: "DataCraft Analytics",
            Testimonial: `Collaborating with Ronnie has been a pleasure. His proficiency in programming languages like Java, Python, and JavaScript, coupled with his data analysis skills, has significantly enhanced our project outcomes. Ronnie’s meticulous attention to detail and his ability to lead and inspire others set him apart as a top-notch professional.`
        },
        {
            Name: "Emily Thompson",
            Img: "mbonye.jpeg",
            Company: "ChemTech Industries",
            Testimonial: `Ronnie’s dedication to his work is evident in every project he undertakes. His strong background in Science Technology Chemistry, along with his programming and data analysis skills, has been invaluable to our company. Ronnie’s leadership and commitment to excellence have consistently led to successful project completions, and I highly recommend him.`
        }
    ];
    return (
        <div className='relative flex flex-col w-3/4 justify-center mx-auto my-24'>
            <h1 className='text-4xl font-bold mb-8 flex flex-row gap-5'> <VscArrowCircleRight /> Testimonials</h1>
            <Carousel>
                {
                    completeTestimonial.map((item, i) => <Item key={i} item={item}/>)
                }
            </Carousel>
        </div>
    )
}

const Item = (props) => {
    return (
        <div className="content flex flex-col gap-2 items-center justify-center px-2 md:px-10">
            <div className="img relative">
                <Image src="/mbonye.jpeg" className='rounded-lg' width={150} height={150} />
            </div>
            <div className="relative w-full p-3 text-center">
                <div className="items-center">
                    <h2 className="text-3xl font-bold pt-2">{props.item.Name}</h2>
                    <h2 className="text-2xl font-bold ">{props.item.Company}</h2>
                </div>
                <p>
                    {props.item.Testimonial}
                </p>
            </div>
        </div>
    )
}

export default Testimonial