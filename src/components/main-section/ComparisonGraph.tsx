"use client";

import React, { useContext } from "react";
import CardWrapper from "./CardWrapper";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Dot,
} from "recharts";
import { GlobalContext } from "@/context/GlobalContext";

const data = [
  { percentile: 0, students: 1 },
  { percentile: 10, students: 3 },
  { percentile: 30, students: 10 },
  { percentile: 50, students: 20 },
  { percentile: 70, students: 8 },
  { percentile: 90, students: 4 },
  { percentile: 100, students: 1 },
];


const ComparisonGraph = () => {
  const { updatedPercentile } = useContext(GlobalContext)
  return (
    <CardWrapper>
      <div>
        <h6 className="font-semibold">Comparison Graph</h6>
        <p className="text-sm text-gray-600 mt-1">
          <strong>You scored {updatedPercentile}% percentile</strong> which is lower than the
          average percentile 72% of all the engineers who took this assessment
        </p>
        <div className="mt-4 h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="percentile" />
              <YAxis hide />
              <Tooltip
                content={({ active, payload }) =>
                  (active && payload && payload.length) && (
                    <div className="bg-white p-2 shadow-md rounded text-xs">
                      <p>{`Percentile: ${payload[0].payload.percentile}`}</p>
                      <p className="text-blue-500">{`Students: ${payload[0].payload.students}`}</p>
                    </div>
                  )
                }
              />
              <Line
                type="monotone"
                dataKey="students"
                stroke="#6366F1"
                strokeWidth={1}
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  return (
                    <Dot
                      key={payload.percentile}
                      cx={cx}
                      cy={cy}
                      r={payload.percentile === updatedPercentile ? 6 : 3}
                      fill={
                        payload.percentile === updatedPercentile
                          ? "#6366F1"
                          : "#A5B4FC"
                      }
                    />
                  );
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </CardWrapper>
  );
};

export default ComparisonGraph;
