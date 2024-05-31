import React, { useState } from "react";
import {
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";
import { FloatingLabel } from "flowbite-react";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import Button from "../Elements/Button";
import { Link } from "lucide-react";
import ButtonOutlined from "../Elements/ButtonOutlined";
import FormSignin from "./FormSignin";
import DialogSignup from "./DialogSignup";

const SheetContentSignin = () => {
  return (
    <>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>Sign In</SheetTitle>
          <SheetDescription>
            Enter the email, and password associated with your account.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <FormSignin />
        </div>
        <SheetFooter className="grid grid-cols-1">
          <div className="w-full flex flex-col gap-2">
            <Button text={"Sign In"} />
            <ButtonOutlined text="Forgot Password" />
          </div>
          <SheetClose>
            <p className="text-sm text-[rgba(0,0,0,.80)] py-3">
              Don't have an account? <DialogSignup position="signin" />
            </p>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </>
  );
};

export default SheetContentSignin;
