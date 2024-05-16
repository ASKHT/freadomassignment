import React from 'react'
import profile from "../../assets/profile.webp"
const Card = () => {
  return (
    <div className="md:w-[25rem] md:h-[15rem] shadow-md border-2 border-purple-400 rounded-xl ">
        <div className="flex flex-col gap-4 justify-center items-center pt-5 ">
             <img  src={profile} alt="profileimage" className="md:w-[6rem] md:h-[6rem] rounded-full"/>
             <p className="text-xl font-extrabold">kashish Jain</p>
             <div className="flex gap-10">
                <div className="flex flex-col">
                    <p className='text-lg font-bold text-purple-500'>125 </p>
                    <p>Streaks </p>
                </div>
                <div className="flex flex-col">
                    <p className='text-lg font-bold text-purple-500'>125 </p>
                    <p>Streaks </p>
                </div>
                <div className="flex flex-col">
                    <p className='text-lg font-bold text-purple-500'>125 </p>
                    <p>Streaks </p>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Card