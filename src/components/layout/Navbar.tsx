"use client";
import { constants } from "@/constants";
import { NavbarProps } from "@/types/components";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = ({ setOpenBudgeting, setOpenCalendar }: NavbarProps) => {
  const [showUser, setShowUser] = useState(false);
  return (
    <nav className="z-20 fixed top-0 left-0 w-screen h-16 md:h-20 bg-[#191919] flex items-center justify-between md:px-10 px-4">
      <Image
        src={"/images/logo.svg"}
        alt="Myxellia"
        width={150}
        height={26}
        className="max-md:hidden"
        priority
      />
      <Image
        src={"/images/logo-small.svg"}
        alt="Myxellia"
        width={100}
        height={100}
        className="md:hidden w-6 h-6"
        priority
      />
      <div className="flex items-center gap-2.5 md:gap-4">
        {constants.MAIN_NAV_TABS.map((tab) => (
          <button
            key={tab}
            className="cursor-pointer"
            onClick={() => {
              if (tab === "/icons/calendar.svg") {
                setOpenCalendar(true);
              }
              if (tab === "/icons/calculator.svg") {
                setOpenBudgeting(true);
              }
            }}
          >
            <Image
              src={tab}
              alt={`${tab.slice(6)} icon`}
              width={100}
              height={100}
              className="md:w-6 md:h-6 w-5 h-5"
              priority
            />
          </button>
        ))}
        <button
          onClick={() => setShowUser(!showUser)}
          className="bg-white cursor-pointer md:w-10 md:h-10 w-7.5 h-7.5 rounded-full flex items-center justify-center font-medium md:text-2xl"
        >
          D
        </button>
      </div>
      <div
        className={`shadow absolute md:right-10 right-4 p-4 rounded-md bg-white md:top-18 top-14 md:w-[300px] w-[200px] transition-opacity duration-300 ${
          !showUser && "opacity-0 pointer-events-none"
        }`}
      >
        <div className="w-full rounded-md p-2.5 bg-[#F5F5F5] flex items-center gap-2">
          <button className="bg-green-700 text-white md:w-10 md:h-10 w-7.5 h-7.5 rounded-full flex items-center justify-center font-medium md:text-2xl">
            D
          </button>
          <div className="flex flex-col">
            <h1 className="font-bold text-[#191919] text-sm">
              {"Dylan Frank"}
            </h1>
            <p className="text-xs text-[#606060]">{"dylan96@mail.com"}</p>
          </div>
        </div>
        {constants.USER_ACTIONS.map((action) => (
          <div
            key={action.title}
            className="flex items-center gap-4 my-2 border-b border-black/10 py-3 px-1 last:border-none last:!pb-0"
          >
            <action.icon
              color={action.title === "Logout" ? "#ec0000" : "black"}
              size={20}
            />
            <p
              className={`text-sm font-medium ${
                action.title === "Logout" && "text-[#ec0000]"
              }`}
            >
              {action.title}
            </p>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
