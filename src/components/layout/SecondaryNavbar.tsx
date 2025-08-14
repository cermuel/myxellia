"use client";
import { constants } from "@/constants";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const SecondaryNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed md:top-20 top-16 left-0 w-screen h-12 md:h-16 bg-[#FFF] border border-[#F4F4F5] flex items-center justify-between md:px-10 px-4">
      <ul className="flex items-center gap-1 md:gap-2 h-full w-full">
        {constants.SECONDARY_NAV_TABS.map((tab, index: number) => {
          const active = pathname === tab.url;
          return (
            <li
              className={`${
                active ? "bg-[#F5F5F5]" : "hover:bg-[#F5F5F5]"
              } cursor-pointer md:h-9 group md:rounded-md rounded-full w-6 h-6 md:w-[170px] flex items-center justify-center gap-2 transition-all duration-300`}
              key={index}
            >
              <Image
                src={tab.icon}
                alt={`${tab.icon.slice(6)} icon`}
                width={100}
                height={100}
                className="md:w-5 md:h-5 w-3 h-3"
                priority
              />
              <span
                className={`text-[#191919] max-md:hidden text-sm ${
                  active
                    ? "font-semibold"
                    : "group-hover:font-semibold transition-all duration-300"
                }`}
              >
                {tab.title}
              </span>
            </li>
          );
        })}
        <div className="flex-1 h-full xl:w-00px] flex items-center">
          <div className="w-full bg-[#F5F5F5] h-[65%] xl:h-[75%] border border-[#E4E4E4] rounded-xl flex gap-2 px-2 md:px-4 items-center overflow-x-hidden max-md:ml-4">
            <Image
              src={"/icons/search.svg"}
              alt={`search icon`}
              width={100}
              height={100}
              className="xl:w-5 xl:h-5 w-4 h-4"
              priority
            />
            <input
              type="text"
              className="flex-1 outline-none truncate max-sm:text-xs max-xl:text-sm"
              placeholder="Search listings, users here..."
            />
          </div>
        </div>
      </ul>
    </nav>
  );
};

export default SecondaryNavbar;
