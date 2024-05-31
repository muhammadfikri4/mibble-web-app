"use client";
import { Montserrat } from "next/font/google";
// import { useRouter } from "next/navigation";
import AuthLogo from "@/components/Elements/AuthLogo";
import AuthTitle from "@/components/Elements/AuthTitle";
import JoinUsLink from "@/components/Elements/JoinUsLink";
import FormSignin from "@/components/Fragments/FormSignin";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useState } from "react";
import "rsuite/DatePicker/styles/index.css";
import Logo from "../../../public/Logo_Color.png";
import Wave from "../../../public/image/wave.png";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const page = () => {
  return (
    <>
      <div
        className={`grid grid-cols-1 place-items-center content-center h-screen w-screen  bg-no-repeat bg-center bg-[length:100%]`}
        style={{
          backgroundImage: `url('${Wave.src}')`,
        }}
      >
        <div className="w-full h-full backdrop-blur-[6px] flex justify-center items-center">
          <div className="bg-white sm:w-[500px] sm:min-w-20 sm:h-max sm:min-h-20 w-screen h-screen sm:rounded-xl py-8 border border-[rgba(0,0,0,.3)]">
            <div className="flex justify-center">
              <AuthLogo source={Logo.src} alt="Logo" />
            </div>

            <div className="px-5 mt-3">
              <AuthTitle text="Sign In to Your Account." />

              <FormSignin />
              <JoinUsLink
                href="/signup"
                title="Don't have an account?"
                text="Sign Up"
              />
              <div className="text-[12px] flex items-center gap-5 py-4">
                <div className="w-4/5 h-[1px] rounded-xl bg-[rgba(0,0,0,.4)]"></div>
                <p>OR</p>
                <div className="w-4/5 h-[1px] rounded-xl bg-[rgba(0,0,0,.4)]"></div>
              </div>
              <div className="flex flex-col gap-3">
                <button className="w-full py-3 rounded-lg bg-transparent text-center border border-[rgba(0,0,0,.3)]">
                  Google Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
