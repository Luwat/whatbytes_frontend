import React from "react";
// import { CardContent } from "../ui/card";
import Image from "next/image";
import CardWrapper from "./CardWrapper";
import UpdateScoreModal from "./UpdateScoreModal";

const TestSummaryCard = () => {
  return (
    <CardWrapper>
      <div className="flex align-center gap-3">
        <Image src={"https://i.postimg.cc/J4wsZRYv/HTML5-Logo-256.png"} alt="html image" width={300} height={300} className="size-12"/>
        <div>
          <h2 className="font-bold text-lg">Hyper Text Markup Language</h2>
          <p>Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>
        </div>
        <UpdateScoreModal />
      </div>
    </CardWrapper>
  );
};

export default TestSummaryCard;
