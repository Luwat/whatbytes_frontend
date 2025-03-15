import React from "react";
import CardWrapper from "./CardWrapper";
import { Progress } from "../ui/progress";

const syllabusProgress = [
  {
    label: "HTML Tools, Forms, History",
    progress: (
      <Progress
        value={80}
        max={100}
        className="[&>*]:bg-[#3A7DF4] bg-[#EAF2FE]"
      />
    ),
    percent: "80%",
  },
  {
    label: "Tags & References in HTML",
    progress: (
      <Progress
        value={60}
        max={100}
        className="[&>*]:bg-[#FF8339] bg-[#EAF2FE]"
      />
    ),
    percent: "60%",
  },
  {
    label: "Tables & References in HTML",
    progress: (
      <Progress
        value={24}
        max={100}
        className="[&>*]:bg-[#FA5352] bg-[#EAF2FE]"
      />
    ),
    percent: "24%",
  },
  {
    label: "Tables & CSS Basics",
    progress: (
      <Progress
        value={96}
        max={100}
        className="[&>*]:bg-[#28C064] bg-[#EAF2FE]"
      />
    ),
    percent: "96%",
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
                {progress.progress}
                <span>{progress.percent}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </CardWrapper>
  );
};

export default Syllabus;
