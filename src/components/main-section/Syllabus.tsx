import React from "react";
import CardWrapper from "./CardWrapper";
import { Progress } from "../ui/progress";

const syllabusProgress = [
  {
    label: "HTML Tools, Forms, History",
    progress: 80,
    barColor: "[&>*]:bg-[#3A7DF4] bg-[#EAF2FE]",
    textColor: " text-[#3A7DF4]"
  },
  {
    label: "Tags & References in HTML",
    progress: 60,
    barColor: "[&>*]:bg-[#FF8339] bg-[#EAF2FE]",
    textColor: " text-[#FF8339]"
  },
  {
    label: "Tables & References in HTML",
    progress: 24,
    barColor: "[&>*]:bg-[#FA5352] bg-[#EAF2FE]",
    textColor: " text-[#FA5352]"
  },
  {
    label: "Tables & CSS Basics",
    progress: 96,
    barColor: "[&>*]:bg-[#28C064] bg-[#EAF2FE]",
    textColor: " text-[#28C064]"
  },
];

const Syllabus = () => {
  return (
    <CardWrapper className="py-8 md:mr-3">
      <div>
        <h3 className="mb-8 font-bold">Syllabus Wise Analysis</h3>
        <ul className="flex flex-col  gap-8">
          {syllabusProgress.map((progress) => (
            <li key={progress.label}>
              <p className="mb-3">{progress.label}</p>
              <div className="flex items-center gap-8">
                <Progress
                  value={progress.progress}
                  max={100}
                  className={`${progress.barColor} [&>*]:rounded-full`}
                />
                <span className={progress.textColor}>{progress.progress}%</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CardWrapper>
  );
};

export default Syllabus;
