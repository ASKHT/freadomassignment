import React from "react";
import { IoBook } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
const Rightside = () => {
  return (
    <div className="relative flex flex-col h-screen gap-14 md:items-center">
      <div className="md:w-[20rem] md:h-[40rem] shadow-sm border-gray-100 bg-gradient-to-br from-purple-700 via-pink-400 to-orange-400 rounded-lg pb-10">
        <div className="flex justify-center pt-2 pl-20">
          <IoBook className="text-2xl text-white flex " />
        </div>
        <div className="flex flex-col gap-8 pl-12 pt-10">
          <p className="text-2xl text-white font-extrabold">Due Today</p>
          <div className="flex flex-col">
            <p className="text-sm text-white font-semibold">Assignment1</p>
            <p className="text-sm text-white font-semibold">
              Lorem epsum check 1
            </p>
            <p className="text-sm text-white font-semibold">
              loreme epsum check 2
            </p>
          </div>
          <div className="w-[7rem] h-[2rem] bg-white text-purple-400  text-center font-bold">
            View
          </div>
        </div>
      </div>
      <div className="relative md:w-[20rem] md:h-[50rem] shadow-sm border-gray-100 bg-white border-2 flex flex-col justify-start pb-8">
        <div className="flex items-center pt-4 pl-4 gap-2">
          <FaInfoCircle className="text-xl" />
          <p className="text-black text-lg font-bold">Assignments</p>
        </div>
        <div>
          <div className="flex w-[90%] justify-between pt-7 pl-4">
            <p className="w-14 h-7 bg-orange-200 text-orange-400 font-bold rounded-lg text-center">
              Event
            </p>
            <p className="text-gray-400 text-sm font-bold">44/100</p>
          </div>
          <div className="flex flex-col pl-4 pt-4">
            <p className="text-sm font-extrabold">
              Monthly Talent Show Postpond
            </p>
            <p className="text-gray-400">There is a test which is check</p>
            <p className="text-gray-400">Determine</p>
          </div>
          <div className="border-b border-gray-300"></div>{" "}
          {/* Gray underline */}
          <div className="flex w-[90%] justify-between pt-7 pl-4">
            <p className="w-16 h-7 bg-blue-200 text-blue-400 font-bold rounded-lg text-center">
              Holiday
            </p>
            <p className="text-gray-400 text-sm font-bold">44/100</p>
          </div>
          <div className="flex flex-col pl-4 pt-4">
            <p className="text-sm font-extrabold">
              Monthly Talent Show Postpond
            </p>
            <p className="text-gray-400">There is a test which is check</p>
            <p className="text-gray-400">Determine</p>
          </div>
          <div className="border-b border-gray-300"></div>{" "}
          {/* Gray underline */}
          <div className="flex w-[90%] justify-between pt-7 pl-4">
            <p className="w-14 h-7 bg-orange-200 text-orange-400 font-bold rounded-lg text-center">
              Event
            </p>
            <p className="text-gray-400 text-sm font-bold">44/100</p>
          </div>
          <div className="flex flex-col pl-4 pt-4">
            <p className="text-sm font-extrabold">
              Monthly Talent Show Postpond
            </p>
            <p className="text-gray-400">There is a test which is check</p>
            <p className="text-gray-400">Determine</p>
          </div>
        </div>
      <div className="fixed right-14 bottom-4 h-[5rem] w-[5rem] rounded-full bg-blue text-white text-7xl font-bold flex items-center justify-center pb-3 bg-purple-600">
   +
  </div>
      </div>
    </div>
  );
};

export default Rightside;
