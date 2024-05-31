"use client";
import { Dialog } from "@/components/ui/dialog";
import React, { useState } from "react";
import Home from "../page";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import Logo from "../../../public/Logo_Color.png";
import { Datepicker, FloatingLabel } from "flowbite-react";
import { DatePicker } from "rsuite";
import "rsuite/DatePicker/styles/index.css";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { log } from "console";
import Wave from "../../../public/image/wave.png";
import { SignUp } from "@/utils/auth";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import FormSignup from "@/components/Fragments/FormSignup";
import AuthLogo from "@/components/Elements/AuthLogo";
import { Montserrat } from "next/font/google";
import AuthTitle from "@/components/Elements/AuthTitle";
import PrivacyPolicy from "@/components/Elements/PrivacyPolicy";
import JoinUsLink from "@/components/Elements/JoinUsLink";

const page = () => {
  const [isCheck, setIsCheck] = useState<boolean>(false);

  return (
    <>
      <div
        className={`grid grid-cols-1 place-items-center content-center h-screen w-screen  bg-no-repeat bg-center bg-[length:100%]`}
        style={{
          backgroundImage: `url('${Wave.src}')`,
        }}
      >
        <div className="w-full h-full backdrop-blur-[6px] flex justify-center items-center">
          <div className="bg-white sm:w-[500px] sm:min-w-20 sm:h-max sm:min-h-20 w-screen h-screen sm:rounded-xl relative py-8 border border-[rgba(0,0,0,.3)]">
            <div className="flex justify-center">
              <AuthLogo source={Logo.src} alt="Logo" />
            </div>

            <div className="px-5">
              <AuthTitle text="Create Your Account." />
              <FormSignup isCheck={isCheck} />
              <div className="flex justify-center items-center gap-[15px]">
                <Checkbox
                  onCheckedChange={() => setIsCheck(!isCheck)}
                  className="rounded-[4px]"
                />
                <PrivacyPolicy />
              </div>

              <JoinUsLink
                text="Sign In"
                href="/login"
                title="Already have an account?"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
