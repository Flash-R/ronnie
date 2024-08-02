import { Avatar, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material';
import Image from 'next/image'
import { VscArrowCircleRight } from 'react-icons/vsc'
import React from 'react'

const data = [
    {
        title: 'Data Analytics Zero to Pandas',
        trainer: 'Jovian'
    },
    {
        title: 'Good Manufacturing practices for cosmetic industry US ISO 22716:2001 and manufacturing skills for skin care products and detergents',
        trainer: 'Pearl Limited'
    },
    {
        title: `General requirements for competence of testing and calibration
              laboratory ISO/IEC 17025:2017 and soil and water analysis`,
        trainer: 'Times Analytics Laboratory'
    },
    {
        title: `ISO 45001:2018 – Principles of occupational health and safety
                management system`,
        trainer: "Alison"
    },
];

function Trainings() {
    return (
        <div className='relative flex flex-row items-center w-full px-8 my-24'>
            <div className="traningPic">
                <Image src="/training.jpg" width={700} height={500} />
            </div>
            <div className="traningPic relative w-1/2 -left-30 p-3">
            <h1 className='text-4xl font-bold mb-8 flex flex-row gap-5'> <VscArrowCircleRight/> Trainings</h1>
                <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    {data.map((item, index)=>(
                        <ListItem key={index}>
                            <ListItemText primary={item.title} secondary={item.trainer} />
                        </ListItem>
                    ))}
                    
                </List>
            </div>
        </div>
    )
}

export default Trainings
