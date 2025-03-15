'use client';

import React from "react";
import CardWrapper from "./CardWrapper";
import { useContext } from "react";
import { GlobalContext } from "@/context/GlobalContext";


const StatisticsCard = () => {
  const { updatedRank, updatedPercentile, updatedScore } = useContext(GlobalContext)
  const contents = [
    { icon: "🏆", title: updatedRank, text: "Your Rank" },
    { icon: "📋", title: updatedPercentile, text: "Percentile" },
    { icon: "✅", title: `${updatedScore}/15`, text: "Correct Answers" },
  ];
  return (
    <CardWrapper>
      <h1 className="font-bold md:text-xl">Quick Statistics</h1>
      <ul className="sm:flex items-center gap-2 justify-around text-xs md:text-base">
        {contents.map((content, index) => (
          <li key={index} className={`flex items-center gap-2 py-2 md:pr-6 ${index < contents.length -1 && 'md:border-r'}`}>
            <div className="size-6 md:size-12 rounded-full border border-[#F0F2F5] flex items-center justify-center bg-[#F4F6F8] m-1 md:m-3"><span>{content.icon}</span></div>
            <div>
              <h2 className="md:text-lg font-bold">{content.title}</h2>
              <p className="uppercase text-xs md:text-base text-[#9197A0]">{content.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
};

export default StatisticsCard;
