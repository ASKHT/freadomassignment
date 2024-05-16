import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { FaChevronUp } from "react-icons/fa6";
import { BiSolidMessageRounded } from "react-icons/bi";
import profile from "../assets/profile.webp";
import { FaChevronDown } from "react-icons/fa";
const CustomTabs = () => {
  const [value, setValue] = useState("2");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "42rem", typography: "body1" }}>
        <TabContext value={value}>
          <Box
            sx={{
    width: {
      xs: "100%", // Full width on extra small screens
      sm: "calc(100% - 1rem)", // Full width minus 1rem on small screens
      md: "calc(50% - 1rem)", // 50% width minus 1rem on medium screens
      lg: "42rem", // Fixed width of 42rem on large screens and above
    },
    typography: "body1"
  }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                justifyContent: "space-between",
                width: "100%", // Ensuring TabList takes full width
              }}
            >
              <Tab label="Overall Summary" value="1" />
              <Tab label="Guided Path Progress" value="2" />
              <Tab label="Assignment Progress" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1">Item One</TabPanel>
          <TabPanel value="2">
            <div className="md:w-[40rem] md:h-auto border-2 border-black flex flex-col pb-5 gap-4">
              <div className="flex pl-14 pt-14 gap-3 ">
                <div className="w-6 h-6 mt-24 rounded-full bg-blue-300"></div>
                <div className="md:w-[32rem] md:h-[24rem] shadow-sm shadow-slate-200 border-2 border-gray-100 pt-7 ">
                  <div className="flex items-center text-[10px] justify-evenly">
                    <div className="flex flex-col">
                      <p className="font-extrabold">Assigned on</p>
                      <p className="text-base font-bold">06 Dec 2023</p>
                    </div>
                    <div className="w-1 h-20 bg-gray-200 rounded-xl "></div>
                    <div className="text-[10px] flex flex-col gap-1">
                      <p className="font-extrabold text-[12px]">Unit Name</p>
                      <div className="flex flex-col">
                        <p>Unit Description-lorem epsum can do it</p>
                        <p>has been assigned to you</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="md:w-[5rem] md:h-[20px] rounded-xl bg-green-300  border-gray-300 border-4"></div>
                      <div className="md:w-[5rem] md:h-[20px] border-2 border-green-300 text-green-300 text-center">
                        completed
                      </div>
                    </div>
                    <FaChevronUp className="text-2xl text-gray-300" />
                  </div>
                  <div className="text-[12px] font-extrabold pl-5">
                    <p>Due by</p>
                    <p>16 Dec 2023</p>
                  </div>
                  <div className="flex flex-col h-[50%] justify-around">
                    <div className="flex items-center w-[90%] justify-between pl-5">
                      <BiSolidMessageRounded />
                      <p>Task1-Any task</p>
                      <div className="w-[8rem] h-[20px] rounded-xl bg-green-300  border-gray-300 border-4"></div>
                      <div className="flex -space-x-4 rtl:space-x-reverse pl-6 ">
                        <img
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={profile}
                          alt=""
                        />
                        <img
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={profile}
                          alt=""
                        />
                        <img
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={profile}
                          alt=""
                        />
                        <img
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={profile}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex items-center w-[90%] justify-between pl-5">
                      <BiSolidMessageRounded />
                      <p>Task1-Any task</p>
                      <div className="w-[8rem] h-[20px] rounded-xl bg-green-300  border-gray-300 border-4"></div>
                      <div className="flex -space-x-4 rtl:space-x-reverse pl-6 ">
                        <img
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={profile}
                          alt=""
                        />
                        <img
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={profile}
                          alt=""
                        />
                        <img
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={profile}
                          alt=""
                        />
                        <img
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={profile}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="flex items-center w-[90%] justify-between pl-5">
                      <BiSolidMessageRounded />
                      <p>Task1-Any task</p>
                      <div className="w-[8rem] h-[20px] rounded-xl bg-green-300  border-gray-300 border-4"></div>
                      <div className="flex -space-x-4 rtl:space-x-reverse pl-6 ">
                        <img
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={profile}
                          alt=""
                        />
                        <img
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={profile}
                          alt=""
                        />
                        <img
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={profile}
                          alt=""
                        />
                        <img
                          className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                          src={profile}
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center pl-12 w-[100%] gap-5">
                 <div  className="w-6 h-6 rounded-full bg-blue-300"></div>
                   <div className="md:w-[32rem] md:h-[9rem] shadow-lg border-2 border-gray-100">
                           <div className="flex items-center text-[10px] justify-evenly pt-3">
                    <div className="flex flex-col">
                      <p className="font-extrabold">Assigned on</p>
                      <p className="text-base font-bold">06 Dec 2023</p>
                    </div>
                    <div className="w-1 h-20 bg-gray-200 rounded-xl "></div>
                    <div className="text-[10px] flex flex-col gap-1">
                      <p className="font-extrabold text-[12px]">Unit Name</p>
                      <div className="flex flex-col">
                        <p>Unit Description-lorem epsum can do it</p>
                        <p>has been assigned to you</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="w-[5rem] h-[20px] rounded-xl bg-green-300  border-gray-300 border-4"></div>
                      <div className="w-[5rem] h-[20px] border-2 border-green-300 text-green-300 text-center">
                        completed
                      </div>
                    </div>
                    <FaChevronDown className="text-2xl text-gray-300" />
                  </div>
                  <div className="text-[12px] font-extrabold pl-5 ">
                    <p>Due by</p>
                    <p>16 Dec 2023</p>
                  </div>
                   </div>
              </div>
              <div className="flex items-center pl-12 w-[100%] gap-5">
                 <div  className="w-6 h-6 rounded-full bg-blue-300"></div>
                   <div className="md:w-[32rem] md:h-[9rem] shadow-lg border-2 border-gray-100">
                           <div className="flex items-center text-[10px] justify-evenly">
                    <div className="flex flex-col">
                      <p className="font-extrabold">Assigned on</p>
                      <p className="text-base font-bold">06 Dec 2023</p>
                    </div>
                    <div className="w-1 h-20 bg-gray-200 rounded-xl "></div>
                    <div className="text-[10px] flex flex-col gap-1">
                      <p className="font-extrabold text-[12px]">Unit Name</p>
                      <div className="flex flex-col">
                        <p>Unit Description-lorem epsum can do it</p>
                        <p>has been assigned to you</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="w-[5rem] h-[20px] rounded-xl bg-green-300  border-gray-300 border-4"></div>
                      <div className="w-[5rem] h-[20px] border-2 border-green-300 text-green-300 text-center">
                        completed
                      </div>
                    </div>
                    <FaChevronDown className="text-2xl text-gray-300" />
                  </div>
                  <div className="text-[12px] font-extrabold pl-5">
                    <p>Due by</p>
                    <p>16 Dec 2023</p>
                  </div>
                   </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value="3">Item Three</TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default CustomTabs;
