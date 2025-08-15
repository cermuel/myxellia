import { OVERVIEW } from "@/types/constants";
import Image from "next/image";
import React from "react";

const OverviewCard = ({ icon, title, stats }: OVERVIEW) => {
  return (
    <div className="bg-white border border-[#E4E4E4] rounded-2xl overflow-hidden">
      <div className="rounded-t-2xl bg-[#F9FAFB] flex items-center justify-between border-b border-b-[#E4E4E4] p-4">
        <div className="flex items-center gap-2">
          <Image
            src={icon}
            alt={`${icon.slice(6)} icon`}
            width={100}
            height={100}
            className="md:w-5.5 w-4 aspect-square"
          />
          <span className="text-[#292929] text-sm font-medium">{title}</span>
        </div>
        <button className="flex items-center gap-1 text-xs text-[#4545FE] font-medium">
          <span>View all</span>
          <Image
            src={"/icons/chevron.svg"}
            alt={`chevron icon`}
            width={100}
            height={100}
            className="w-2 aspect-square"
          />
        </button>
      </div>
      <div className="p-4 flex items-center justify-between">
        {stats.map((stat) => (
          <div key={stat.value} className="flex-col space-y-2">
            <h4 className="text-sm font-medium text-[#525252]">{stat.title}</h4>
            <h2 className="text-[#141414] font-semibold text-2xl">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverviewCard;
