import React from 'react'


function SingleSkill({ txt,  children }) {
  return (
    <div className="skill flex flex-row gap-1 items-center border border-2 w-fit px-2 py-2
                    rounded-[40px] font-bold">
      { children }
      {txt}
    </div>
  )
}

export default SingleSkill
