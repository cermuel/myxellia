import { constants } from "@/constants";
import { BudgetingProps } from "@/types/components";
import Image from "next/image";
import React from "react";

const Budgeting = ({ open, setIsOpen }: BudgetingProps) => {
  return (
    <div
      className={`w-screen h-screen fixed top-0 left-0 bg-black/50 flex items-center justify-center z-100 max-md:px-5 ${
        !open && "!hidden delay-300 translate-all"
      }`}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-[440px] rounded-[10px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full bg-[#0C2841] p-8 pb-0 rounded-t-[10px]">
          <div className="relative w-full rounded-t-xl bg-[#061520] h-[200px] flex items-center justify-center overflow-hidden">
            <Image
              src={"/icons/calculator-outlined.svg"}
              alt="calculator icon"
              width={80}
              height={80}
              className="z-10"
            />
            <Image
              src={"/images/budget-bg.png"}
              alt="budget bg"
              width={380}
              height={826}
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
        </div>
        <div className="w-full bg-white py-5 px-10 rounded-b-[10px] space-y-4">
          {constants.BUDGET_DETAILS.map((budget) => (
            <div className="flex items-center gap-2" key={budget.text}>
              <Image
                src={budget.icon}
                alt={`${budget.icon.slice(6)} icon`}
                width={24}
                height={24}
                className="w-6 aspect-square"
              />
              <div className="flex flex-col gap-1">
                <h1 className="font-bold text-[#191919]">{budget.title}</h1>
                <p className="text-xs text-[#606060]">{budget.text}</p>
              </div>
            </div>
          ))}
          <button className="w-full bg-[#18181B] rounded-full text-white font-medium h-11 cursor-pointer">
            Create Budget
          </button>
        </div>
      </div>
    </div>
  );
};

export default Budgeting;
