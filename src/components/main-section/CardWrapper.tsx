import React from "react";
import { Card } from "../ui/card";

const CardWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return <Card className={`min-w-xs  md:min-w-sm p-6 mt-6 shadow-none ${className}`}>{children}</Card>;
};

export default CardWrapper;
