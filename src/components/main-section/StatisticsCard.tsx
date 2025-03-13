import React from "react";
import CardWrapper from "./CardWrapper";

const contents = [
  { icon: "🏆", title: "1", text: "Your Rank" },
  { icon: "📋", title: "30%", text: "Percentile" },
  { icon: "✅", title: "10 / 15", text: "Correct Answers" },
];

const StatisticsCard = () => {
  return (
    <CardWrapper>
      <h1 className="font-bold text-xl">Quick Statistics</h1>
      <ul className="flex items-center gap-2 justify-around">
        {contents.map((content, index) => (
          <li key={content.title} className={`flex items-center gap-2 py-2 pr-6 ${index < contents.length -1 && 'border-r'}`}>
            <div className="size-12 rounded-full border border-[#F0F2F5] flex items-center justify-center bg-[#F4F6F8] m-3"><span>{content.icon}</span></div>
            <div>
              <h2 className="text-lg font-bold">{content.title}</h2>
              <p className="uppercase text-[#9197A0]">{content.text}</p>
            </div>
          </li>
        ))}
      </ul>
    </CardWrapper>
  );
};

export default StatisticsCard;
