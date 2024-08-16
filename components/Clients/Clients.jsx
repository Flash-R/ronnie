import Image from "next/image"
import { VscArrowCircleRight } from 'react-icons/vsc'

const Clients = () =>{

    return (
        <div className="flex flex-col items-center my-10">
            <div className="flex flex-row gap-5 my-5 justify-center flex-wrap">
                <Image src={"/mbonye.jpeg"} className="w-20" width={200} height={300} alt={"Profile"}/>
                <Image src={"/mbonye.jpeg"} className="w-20" width={200} height={300} alt={"Profile"}/>
                <Image src={"/mbonye.jpeg"} className="w-20" width={200} height={300} alt={"Profile"}/>
                <Image src={"/mbonye.jpeg"} className="w-20" width={200} height={300} alt={"Profile"}/>
                <Image src={"/mbonye.jpeg"} className="w-20" width={200} height={300} alt={"Profile"}/>
            </div>
        </div>
    )
}

export default Clients