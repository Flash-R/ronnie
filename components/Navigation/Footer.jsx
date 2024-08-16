import { Facebook, Google, LinkedIn, Twitter } from '@mui/icons-material'
import Link from 'next/link'
import React from 'react'

function Footer() {
    const date = new Date();
    const Year = date.getFullYear();
  return (
    <div className='flex flex-row justify-between w-[940px] my-5 px-8 py-5 bg-black '>
        <div className="copyright">
            <hr />
            <h4 className="font-bold text-white">All Right reserved  &copy;  Tumwesigye Ronnie | {Year}</h4>
           
        </div>
        <div className="socials flex flex-row gap-3">
            <Link href={"/"}>
                <Google fontSize='medium' color='error' />
            </Link>
            <Link href={"/"}>
                <Twitter fontSize='medium' color="primary"/>
            </Link>
            <Link href={"/"}>
                <LinkedIn fontSize='medium' color="primary"/>
            </Link>
        </div>
    </div>
  )
}

export default Footer