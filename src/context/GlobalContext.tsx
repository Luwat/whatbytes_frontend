"use client";

import React, { useState, createContext, useRef } from "react";
export interface UpdateType {
  id: string;
  title: string;
  value: string;
  ref: React.RefObject<HTMLInputElement | null>
}
interface contextTypeProps {
  updates: UpdateType[];
  changeValues: (id: string, event: any) => void;
  updateValues: () => void;
  error: string,
  updatedRank: string,
  updatedPercentile: string,
  updatedScore: string,
}


export const GlobalContext = createContext<contextTypeProps>({
  updates: [],
  changeValues: () => {},
  updateValues: () => {},
    error: "",
    updatedRank: "",
    updatedPercentile: "",
    updatedScore: "",
});

export default function GlobalContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const rank = useRef<HTMLInputElement>(null);
  const percentile = useRef<HTMLInputElement>(null);
  const score = useRef<HTMLInputElement>(null);

  const initialUpdates = [
    { id: "1", title: "Rank", value: "1", ref: rank},
    { id: "2", title: "Percentile", value: "30", ref: percentile},
    { id: "3", title: "Current Score (out of 15)", value: "10", ref: score},
  ];
  const [updates, setUpdates] = useState<UpdateType[]>(initialUpdates);
  const [updatedRank, setUpdatedRank] = useState("1");
  const [updatedPercentile, setUpdatedPercentile] = useState("30");
  const [updatedScore, setUpdatedScore] = useState("10");
  const [error, setError] = useState("");

  const changeValues = (id: string, event: any) => {
    setUpdates((prevUpdates) => {
      const updatedValues = [...prevUpdates];
      const updatedValueIndex = updatedValues.findIndex(
        (item) => item.id === id
      );
      const updatedValue = { ...updatedValues[updatedValueIndex] };
      if (updatedValue.value === "" && updatedValue.title === "Rank") {
        setError(`required | ${updatedValue.title} should be a number`);
      }
      if (updatedValue.value === "" && updatedValue.title === "Percentile") {
        setError(`required | ${updatedValue.title} 0-100`);
      }

      if (updatedValue.title === "Rank" && Number(updatedValue.value) > 0) {
        setUpdatedRank(updatedValue.value)
      } else if (
        updatedValue.title === "Percentile" &&
        Number(updatedValue.value) > 0 &&
        Number(updatedValue.value) <= 100
      ) {
        setUpdatedPercentile(updatedValue.value);
      } else if (
        updatedValue.title.includes("Score") &&
        Number(updatedValue.value) > 0
      ) {
        setUpdatedScore(updatedValue.value);
      }
      return prevUpdates.map((update) =>
        update.id === id ? { ...update, value: event.target.value } : update
      );
    });
  };

  const updateValues = () => {
    setUpdatedRank(rank.current!.value)
    setUpdatedPercentile(percentile.current!.value)
    setUpdatedScore(score.current!.value)
  };

  const contextValues = {
    updates,
    changeValues,
    updateValues,
    error,
    updatedRank,
    updatedPercentile,
    updatedScore
  }

  return (
    <GlobalContext.Provider value={contextValues}>
      {children}
    </GlobalContext.Provider>
  );
}
