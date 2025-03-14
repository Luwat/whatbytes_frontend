import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-28 w-full p-5 border-b">
      <div className="flex items-center">
        <Image
          src={"https://i.postimg.cc/gcVsypZn/Whatbytes-logo-2.png"}
          alt=""
          width={300}
          height={300}
          className="size-16"
        />
        <h1 className="text-4xl font-bold">WhatBytes</h1>
      </div>
        <Button variant={"outline"}>
          <Image
            src={"https://i.postimg.cc/gcVsypZn/Whatbytes-logo-2.png"}
            alt=""
            width={300}
            height={300}
            className="size-6 rounded-full bg-purple-400"
          />
          <p>Rahill Siddique</p>
        </Button>
    </header>
  );
};

export default Header;
