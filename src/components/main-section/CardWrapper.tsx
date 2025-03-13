import React from "react";
import { Card } from "../ui/card";

const CardWrapper = ({ children }: { children: React.ReactNode }) => {
  return <Card className="p-6 m-6 shadow-none">{children}</Card>;
};

export default CardWrapper;
