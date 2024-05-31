"use client";
import React, { useState } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import Logo from "../../../public/Logo_Color.png";
import { FloatingLabel } from "flowbite-react";
import Image from "next/image";
import { MdRemoveRedEye } from "react-icons/md";
import { IoEyeOffSharp } from "react-icons/io5";
import Button from "../Elements/Button";

const ModalSignup = () => {
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className="flex justify-center px-3">
      <DialogContent className="px-12 rounded-xl max-w-[400px] sm:w-[550px]">
        <DialogHeader>
          <DialogTitle>
            <div className="flex justify-center -mt-5 pb-4">
              <Image src={Logo.src} width={80} height={80} alt="Mibble" />
            </div>
            <h1 className="text-2xl font-bold">Create Your Account.</h1>
          </DialogTitle>
        </DialogHeader>
        <form>
          <FloatingLabel
            variant="outlined"
            label="Full Name"
            sizing="md"
            type="text"
          />
          <FloatingLabel
            variant="outlined"
            label="Email"
            sizing="md"
            type="email"
          />
          <div className="flex items-center gap-3">
            <div className="w-full">
              <FloatingLabel
                variant="outlined"
                label="Password"
                sizing="md"
                type={show ? "text" : "password"}
              />
            </div>
            <div
              className="hover:bg-[#f0f0f0] p-1.5 rounded-full flex items-center  cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? (
                <MdRemoveRedEye className="text-2xl" />
              ) : (
                <IoEyeOffSharp className="text-2xl" />
              )}
            </div>
          </div>
          <div className="py-3">
            <Button text="Sign Up" />
          </div>
        </form>
      </DialogContent>
    </div>
  );
};

export default ModalSignup;
