"use client";
import { Montserrat } from "next/font/google";
// import { useRouter } from "next/navigation";
import AuthLogo from "@/components/Elements/AuthLogo";
import AuthTitle from "@/components/Elements/AuthTitle";
import JoinUsLink from "@/components/Elements/JoinUsLink";
import FormSignin from "@/components/Fragments/FormSignin";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import "rsuite/DatePicker/styles/index.css";
import Logo from "../../../public/Logo_Color.png";
import Wave from "../../../public/image/wave.png";
import AuthCode, { AuthCodeRef } from "react-auth-code-input";
import Button from "@/components/Elements/Button";
import { jwtDecode } from "jwt-decode";
import { verification } from "@/utils/auth";
import { useRouter } from "next/navigation";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const page = () => {
  const { toast } = useToast();
  const [otp, setOtp] = useState<string>("");
  const router = useRouter();
  const AuthInputRef = useRef<AuthCodeRef>(null);
  const [decode, setDecode] = useState<
    | {
        email: string;
        iat: number;
        exp: number;
      }
    | string
  >(
    localStorage.getItem("userVerification")
      ? jwtDecode(localStorage.getItem("userVerification") || "")
      : ""
  );

  useEffect(() => {
    if (!decode) {
      router.back();
    }
  }, []);
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
              <AuthTitle text="Verification Account." />
              <div className="text-sm px-1">
                <p>Enter the 6 digit OTP code has been sent to</p>
                <span className="font-bold">
                  {typeof decode === "string" ? "" : decode.email}
                </span>
              </div>
              <form
                onSubmit={(e) =>
                  verification({
                    toast,
                    axios,
                    e,
                    url: process.env.NEXT_PUBLIC_BACKEND_URL,
                    router,
                    data: {
                      otp: Number(otp),
                      email: typeof decode === "string" ? "" : decode.email,
                    },
                  })
                }
              >
                <AuthCode
                  autoFocus={true}
                  onChange={(value) => setOtp(value)}
                  ref={AuthInputRef}
                  containerClassName="flex gap-3 w-full justify-center py-5"
                  inputClassName="w-16 py-3 px-3 text-center rounded-lg"
                  allowedCharacters="numeric"
                />
                <p className="text-sm py-2 text-blue-500">Resend Code</p>
                <Button
                  text="Submit"
                  isCheck={otp?.length == 6 ? true : false}
                />
              </form>

              {/* <FormSignin /> */}
              {/* <JoinUsLink
                href="/signup"
                title="Don't have an account?"
                text="Sign Up"
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
