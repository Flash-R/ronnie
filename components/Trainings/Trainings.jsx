import Image from 'next/image'
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
        <div className='flex flex-row items-center'>
            <div className="traningPic">
                <Image src="/training.jpg" width={700} height={500} />
            </div>
            <div className="traningPic">
                <h1 className='text-2xl font-bold'>Trainings</h1>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
                                title={<a href="https://ant.design">{item.title}</a>}
                                description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                            />
                        </List.Item>
                    )}
                />
            </div>
        </div>
    )
}

export default Trainings
