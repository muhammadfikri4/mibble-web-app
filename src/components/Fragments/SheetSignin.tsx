import React from "react";
import { Sheet, SheetTrigger } from "../ui/sheet";
import SheetContentSignin from "./SheetContentSignin";

const SheetSignin = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <button className="border border-[#9e9e9e] text-[#1d9bf0] font-bold py-[7px] rounded-[20px] sm:w-80 w-96 hover:bg-[#e9e9e9] duration-300">
            Sign In
          </button>
        </SheetTrigger>
        <SheetContentSignin />
      </Sheet>
    </>
  );
};

export default SheetSignin;
