"use client";
import Image from "next/image";
import { Dispatch, useState } from "react";

interface CalendarProps {
  open: boolean;
  setIsOpen: Dispatch<boolean>;
}

export default function CalendarDrawer({ open, setIsOpen }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<number | null>(null);

  const monthName = currentDate.toLocaleString("default", { month: "long" });
  const year = currentDate.getFullYear();

  const daysInMonth = new Date(year, currentDate.getMonth() + 1, 0).getDate();
  const firstDayIndex = new Date(year, currentDate.getMonth(), 1).getDay();

  const prevMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, currentDate.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  return (
    <div
      className={`z-50 fixed top-16 md:top-20 right-0 md:h-[calc(100dvh-80px)] h-[calc(100dvh-64px)] w-full md:w-[350px] bg-[#0D0D0D] text-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between bg-[#171717] h-10 p-4">
        <div className="flex items-center gap-1">
          <button onClick={() => setIsOpen(false)} className="cursor-pointer">
            <Image
              src={"/icons/arrow-back.svg"}
              alt="arrow back icon"
              className=""
              width={20}
              height={20}
            />
          </button>
          <span className="font-semibold">Calendar</span>
        </div>
        <button onClick={() => setIsOpen(false)} className="cursor-pointer">
          <Image
            src={"/icons/close.svg"}
            alt="close icon"
            className=""
            width={12}
            height={12}
          />
        </button>
      </div>

      <div className="flex items-center justify-center gap-4 px-4 py-3">
        <button onClick={prevMonth} className="cursor-pointer">
          <Image
            src={"/icons/chevron-left.svg"}
            alt="chevron icon"
            className=""
            width={8}
            height={8}
          />
        </button>
        <span className="font-semibold w-40 text-center">
          {monthName} {year}
        </span>
        <button onClick={nextMonth} className="cursor-pointer">
          <Image
            src={"/icons/chevron-left.svg"}
            alt="chevron icon"
            className="rotate-180"
            width={8}
            height={8}
          />
        </button>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 text-center text-sm text-neutral-400 px-4">
        {["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"].map((day) => (
          <div key={day} className="py-2">
            {day}
          </div>
        ))}
      </div>

      {/* Days */}
      <div className="grid grid-cols-7 gap-1 px-4">
        {Array(firstDayIndex)
          .fill(null)
          .map((_, i) => (
            <div key={`empty-${i}`} />
          ))}
        {Array.from({ length: daysInMonth }, (_, i) => i + 1).map((day) => {
          const isSelected = selectedDate === day;
          const isToday =
            day === new Date().getDate() &&
            currentDate.getMonth() === new Date().getMonth() &&
            currentDate.getFullYear() === new Date().getFullYear();

          return (
            <button
              key={day}
              onClick={() => setSelectedDate(day)}
              className={`w-10 h-10 flex items-center justify-center rounded-full transition-colors ${
                isSelected
                  ? "bg-blue-600 text-white"
                  : isToday
                  ? "border border-blue-600 text-white"
                  : "text-neutral-300 hover:bg-neutral-800"
              }`}
            >
              {day}
            </button>
          );
        })}
      </div>
    </div>
  );
}
