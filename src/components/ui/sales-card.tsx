"use client";
import React, { useEffect, useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ChartOptions,
  Chart,
} from "chart.js";
import type { SalesCardProps } from "@/types/components";
import Image from "next/image";
import ArrowCircleDown from "../shared/ArrowIcon";

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const SalesCard = ({
  chartLabels,
  chartDataSets,
  stats,
  dateRange,
}: SalesCardProps) => {
  const chartRef = useRef<Chart<"bar"> | null>(null);
  const [showStats, setShowStats] = useState(true);
  const [showChart, setShowChart] = useState(true);

  const chartData = {
    labels: chartLabels,
    datasets: chartDataSets.map((set) => ({
      ...set,
      barPercentage: 0.65,
      categoryPercentage: 0.55,
      borderRadius: 1,
    })),
  };

  const chartOptions: ChartOptions<"bar"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: {
        grid: { display: false },
        beginAtZero: true,
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10,
          callback: (tickValue: string | number) => `${tickValue}m`,
        },
      },
      x: { grid: { display: false } },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.resize();
    }
  }, [showStats, showChart]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      chartRef?.current?.resize();
    });
  }, []);

  return (
    <div className="border border-[#E4E4E4] lg:col-span-2 rounded-2xl bg-white">
      <div className="p-4">
        <div className="w-full flex justify-between items-start">
          <div>
            <h1 className="text-[#191919] text-lg font-semibold">
              Sales Overview
            </h1>
            <span className="text-[#606060] text-xs">
              Showing overview {dateRange}
            </span>
          </div>
          <button className="border border-[#D6D6D6] md:py-2 md:px-4 px-3 py-1 text-xs text-[#191919] font-medium rounded-full cursor-pointer">
            View Transactions
          </button>
        </div>

        <div className="w-full flex items-center justify-end gap-4 mt-3 text-sm">
          <button className="text-[#191919]">1 Week</button>
          <button className="text-[#191919]">1 Month</button>
          <button className="bg-[#F4F4F4] text-[#3D3D3D] rounded-lg px-3 py-1 font-medium">
            1 Year
          </button>
        </div>
      </div>

      <div className="w-full h-[1px] bg-[#E4E4E4]"></div>

      <div className="flex md:justify-between max-md:flex-wrap md:h-[250px] overflow-hidden">
        <div
          className={`transition-all duration-300 flex w-full pt-4 gap-2 pl-4 md:pl-2 overflow-x-hidden ${
            !showStats ? "max-w-full" : !showChart ? "max-w-0" : "max-w-[49%]"
          } max-md:!max-w-full`}
        >
          <div className="h-full flex items-center max-md:hidden">
            <button
              onClick={() => setShowChart(!showChart)}
              className="bg-[#F5F5F5] w-4.5 h-4.5 rounded-full flex items-center justify-center"
            >
              <Image
                src="/icons/arrow.svg"
                alt="arrow icon"
                width={4}
                height={10}
                className={`w-1 ${showChart ? "rotate-180" : ""}`}
              />
            </button>
          </div>
          <div className="w-full">
            <Bar ref={chartRef} data={chartData} options={chartOptions} />
          </div>
        </div>

        <div
          className={`flex p-4 pr-4 pl-2 gap-2 max-md:!shadow-none md:rounded-l-xl transition-all duration-300 w-full max-md:!max-w-full ${
            !showChart
              ? "max-w-full"
              : !showStats
              ? "max-w-0 !p-0 !pr-5 !pl-1"
              : "max-w-[49%]"
          }`}
          style={{ boxShadow: "-4px 0 1px -2px rgba(0,0,0,0.03)" }}
        >
          <div className="h-full flex items-center max-md:hidden">
            <button
              onClick={() => setShowStats(!showStats)}
              className="cursor-pointer bg-[#E4E4E4] w-4.5 h-4.5 rounded-full flex items-center justify-center"
            >
              <Image
                src="/icons/arrow.svg"
                alt="arrow icon"
                width={4}
                height={10}
                className={`w-1 ${showStats ? "" : "rotate-180"}`}
              />
            </button>
          </div>

          <div
            className={`delay-200 flex-1 grid md:grid-cols-2 gap-4 md:gap-2.5`}
          >
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="border border-[#E4E4E4] rounded-xl p-3 flex flex-col overflow-hidden"
              >
                <span
                  className={`text-lg font-bold ${
                    idx === 0
                      ? "text-[#4545FE]"
                      : idx === 1
                      ? "text-[#12B76A]"
                      : idx === 2
                      ? "text-[#14B8A6]"
                      : "text-[#F04438]"
                  }`}
                >
                  {stat.value}
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#3D3D3D] font-medium">
                    {stat.label}
                  </span>
                  <span
                    className={`text-xs flex items-center gap-1 ${
                      idx === 0
                        ? "text-[#4545FE]"
                        : idx === 1
                        ? "text-[#12B76A]"
                        : idx === 2
                        ? "text-[#14B8A6]"
                        : "text-[#F04438]"
                    } `}
                  >
                    <ArrowCircleDown
                      color={
                        idx === 0
                          ? "#4545FE"
                          : idx === 1
                          ? "#12B76A"
                          : idx === 2
                          ? "#14B8A6"
                          : "#F04438"
                      }
                    />
                    {Math.abs(stat.change)}%
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
