import React from "react";
import Image from "next/image";
import CardWrapper from "./CardWrapper";
import UpdateScoreModal from "./UpdateScoreModal";

const TestSummaryCard = () => {
  return (
    <CardWrapper>
      <div className="sm:flex align-center gap-3">
        <div className="flex justify-center items-center">
          <Image
            src={"https://i.postimg.cc/J4wsZRYv/HTML5-Logo-256.png"}
            alt="html image"
            width={20}
            height={20}
            className="size-6 sm:size-8 md:size-8"
          />
        </div>
        <div>
          <h2 className="font-bold md:text-lg">Hyper Text Markup Language</h2>
          <p className="text-xs">
            Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021
          </p>
        </div>
        <div className="flex justify-center items-center">
          <UpdateScoreModal />
        </div>
      </div>
    </CardWrapper>
  );
};

export default TestSummaryCard;
