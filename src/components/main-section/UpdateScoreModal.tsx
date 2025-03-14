"use client";

import React, { useContext } from "react";
import {
  Dialog,
  DialogContent,
  DialogClose,
  DialogFooter,
  DialogTrigger,
  DialogTitle,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { GlobalContext, UpdateType } from "@/context/GlobalContext";

const UpdateScoreModal = () => {
  const { error, setError, updates, changeValues, updateValues } = useContext(GlobalContext);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-[#132277] hover:bg-[#13285F] px-6 py-4">
          Update
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg h-[60vh]">
        <div className="flex w-full justify-between">
          <DialogTitle className="font-bold">Update Score</DialogTitle>
          <Image
            src={"https://i.postimg.cc/J4wsZRYv/HTML5-Logo-256.png"}
            alt="HTML 5"
            width={24}
            height={24}
            className="size-6"
          />
        </div>
        <div className="flex flex-col justify-center space-x-2 gap-5">
          {updates.map((update: UpdateType) => {
            const newUpdate = updates[Number(update.id) - 1]

            if (newUpdate.value === "" && newUpdate.title === "Rank") {
              setError(`Required | ${newUpdate.title} must be number`)
            }

            if (newUpdate.value === "" && newUpdate.title === "Percentile") {
              setError(`Required | ${newUpdate.title} 0 - 200`)
            }

            if (newUpdate.value === "" && newUpdate.title.includes("Score")) {
              setError(`Required | Score 0 - 15`)
            }
            
            
            return (
            <div
              key={update.id}
              className="flex justify-between gap-5 space-x-5 w-full"
            >
              <p className="flex gap-2 items-center">
                <span>{update.id}</span>
                <Label htmlFor={update.title}>
                  Update your <strong>{update.title}</strong>
                </Label>
              </p>
              <p>
              <Input
                className={`w-36 border font-bold border-[#132277] shadow-none ${(updates[Number(update.id) - 1].value === "") && 'border-red-600'}`}
                ref={update.ref}
                id={update.title}
                value={update.value}
                onChange={(event) => changeValues(update.id, event)}
              />
              {updates[Number(update.id) - 1].value === "" && <span className="text-red-600 text-xs text-center w-full">{error}</span>}
              </p>
            </div>
          )})}
        </div>
        <DialogFooter className="sm:justify-end">
          <DialogClose asChild>
            <Button
              type="button"
              className="text-[#132277] bg-white border border-[#132277] hover:bg-white hover:text-[#13285F]"
            >
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
          <Button
            type="submit"
            className="bg-[#132277] hover:bg-[#13285F]"
            onClick={updateValues}
          >
            Save <ArrowRight />
          </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateScoreModal;
