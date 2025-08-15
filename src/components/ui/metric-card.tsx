"use client";
import { METRICS } from "@/types/constants";
import Image from "next/image";
import { useEffect, useState } from "react";

const MetricCard = ({ metric, index }: { metric: METRICS; index: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const timer = setInterval(() => {
        setFade(true);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % metric.image.length);
          setFade(false);
        }, 750);
      }, 5000);
      return () => clearInterval(timer);
    }, 0);

    return () => clearTimeout(startTimer);
  }, [metric.image.length, index]);

  return (
    <div className="rounded-2xl h-[280px] relative overflow-hidden bg-black">
      <Image
        src={metric.image[currentIndex]}
        alt={metric.title}
        className={`w-full h-full rounded-2xl object-cover absolute inset-0 transition-opacity duration-750 ${
          fade ? "opacity-50" : "opacity-100"
        }`}
        width={500}
        height={300}
        priority
      />

      <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-[linear-gradient(183.45deg,rgba(0,0,0,0.05)_41.18%,rgba(0,0,0,0.6)_100.3%)]"></div>

      <div className="absolute bottom-6 left-6 text-white">
        <p className="text-sm font-medium">{metric.metric}</p>
        <h3 className="text-lg font-semibold">{metric.title}</h3>
      </div>

      <div className="absolute bottom-2 w-full flex justify-center gap-2">
        {metric.image.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setFade(true);
              setTimeout(() => {
                setCurrentIndex(i);
                setFade(false);
              }, 300);
            }}
            className={`h-2 w-2 rounded-full transition-all duration-300 cursor-pointer ${
              i === currentIndex ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};
export default MetricCard;
