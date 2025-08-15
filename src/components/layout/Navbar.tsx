import { constants } from "@/constants";
import { NavbarProps } from "@/types/components";
import Image from "next/image";
import React from "react";

const Navbar = ({ setOpenBudgeting, setOpenCalendar }: NavbarProps) => {
  return (
    <nav className="z-10 fixed top-0 left-0 w-screen h-16 md:h-20 bg-[#191919] flex items-center justify-between md:px-10 px-4">
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
        <p className="bg-white md:w-10 md:h-10 w-7.5 h-7.5 rounded-full flex items-center justify-center font-medium md:text-2xl">
          D
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
