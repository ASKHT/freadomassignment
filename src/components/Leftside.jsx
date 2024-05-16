import React from 'react'
import profile from "../assets/profile.webp"
import { MdEditSquare } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
const Leftside = ({Setshowmodal}) => {
    const modalopen =()=>{
             Setshowmodal("show")
    }
  return (
    <div className='flex flex-col gap-5 md:items-center'>
        <div className="md:w-[25rem] md:h-[15rem] shadow-md shadow-slate-30000 rounded-lg border-2 border-slate-100 flex justify-center flex-col items-center gap-3 pt-4 pb-2">
            <img src={profile} alt="profile_picture" className="w-[5rem] h-[5rem] rounded-full "/>
             <p className='text-lg font-bold'>Teacher's Name</p>
             <p className='text-md font-bold text-slate-400'>School Name</p>
            <div className='flex justify-between w-[95%] bg-gray-100 rounded-md h-12 items-center pl-3 pr-3'>
                <div className='flex items-center gap-1 '>
                      <MdEditSquare  className='text-xl text-purple-600 '/>
                      <p className='text-xl font-bold'>Grade 3</p>
                </div>
                <button className="relative h-[29px] w-[8rem] bg-purple-500 text-white font-bold rounded-lg">Section<span className="absolute right-0 top-0 bottom-0 flex items-center pr-2 text-white">
                        <FaChevronDown />
                    </span></button>
            </div>
        </div>

        <div className="md:w-[25rem] md:h-[15rem] shadow-xl shadow-slate-30000 rounded-lg border-2 border-slate-100 flex  flex-col gap-3 pt-4 pb-5">
            <div className='w-[90%] flex justify-between items-center'>
                <div className='flex gap-3 items-center pl-5'>
                    <MdGroups className='text-4xl'/>
                    <p className='font-bold'>MY STUDENTS</p>
                </div>
               <p onClick={modalopen} className='cursor-pointer hover:text-red-500 hover:font-bold'>View All</p>
            </div>
            <div className="flex -space-x-4 rtl:space-x-reverse pl-6 ">
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile} alt=""/>
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile} alt=""/>
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile} alt=""/>
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile} alt=""/>
                   
            </div>
            <div className='w-[90%] flex justify-between items-center pt-3'>
                <div className='flex gap-3 items-center pl-5'>
                    <MdGroups className='text-4xl'/>
                    <p className='font-bold'>MY WATCHLIST</p>
                </div>
               <p onClick={modalopen} className='cursor-pointer hover:text-red-500 hover:font-bold'>View All</p>
            </div>
            <div className="flex -space-x-4 rtl:space-x-reverse pl-6">
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile} alt=""/>
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile} alt=""/>
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile} alt=""/>
                    <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src={profile} alt=""/>
                   
            </div>
        </div>
    </div>
  )
}

export default Leftside