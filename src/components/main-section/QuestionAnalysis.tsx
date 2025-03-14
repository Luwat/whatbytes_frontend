"use client";

import React, { useContext } from "react";
import CardWrapper from "./CardWrapper";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import Image from "next/image";
import { GlobalContext } from "@/context/GlobalContext";

// Sample data: 10 correct, 5 incorrect
const COLORS = ["#6366F1", "#CBD5E1"];
const QuestionAnalysis = () => {
  const { updatedScore } = useContext(GlobalContext);
  const correctScore = Number(updatedScore)
  const incorrectScore = 15 - correctScore;
  const data = [
    { name: "Correct", value: correctScore },
    { name: "Incorrect", value: incorrectScore },
  ];
  return (
    <CardWrapper>
      <div>
        <div className="flex justify-between">
        <h6 className="font-semibold">Question Analysis</h6>
        <p className="text-blue-500 font-semibold text-lg">{updatedScore}/15</p>
        </div>
        {/* Description */}
        <p className="text-sm text-gray-600 mt-2">
          <strong>You scored {updatedScore} question correct out of 15.</strong> However it
          still needs some improvements
        </p>

        <div className="flex items-center justify-center mt-4">
          <div className="relative h-48 w-48 z-10">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={45}
                  outerRadius={70}
                  startAngle={-360}
                  endAngle={0}
                  paddingAngle={0}
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex items-center justify-center -z-10">
              <Image
                src="https://i.postimg.cc/DfPGPcBQ/direct-hit.png"
                alt="Target Icon"
                width={24}
                height={24}
                className="h-8 w-8"
              />
            </div>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default QuestionAnalysis;
