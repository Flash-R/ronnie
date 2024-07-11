import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Hero() {
    return (
        <div className='w-full flex flex-row items-center justify-between py-5 px-8 bg-black text-white'>
            <div className="bio relative w-1/2">
                <h2 className='text-5xl font-bold mb-2'>Tumwesigye Ronnie</h2>
                <h4 className='text-xl mb-3'>Full Stack Developer | Data Analyst | Chemist</h4>
                <p>
                    Dynamic and goal-oriented, I am Tumwesigye Ronnie, a dedicated
                    professional with a robust background in Science Technology Chemistry.
                    With a track record of delivering excellence within timelines, I bring
                    forth strong teamwork ethics and effective leadership skills to any
                    endeavor. My commitment to precision and accuracy is complemented
                    by a keen ability to breakdown challenges while maintaining attention to
                    detail. Additionally, I possess proficient programming skills in Java, PHP,
                    React, Next.js, and Python, Nodejs, JavaScript, Tailwind alongside adept data analysis capabilities
                    with excel, Python and PowerBI.

                </p>
                <Link href="/resume">Hire Me</Link>
            </div>
            <div className="image relative w-1/2 flex flex-row justify-center">
                <Image src="/ron.png" width={512} height={12} className=''/>
            </div>
        </div>
    )
}

export default Hero
