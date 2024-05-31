import { FloatingLabel } from "flowbite-react";
import React, { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
import { SignUp } from "@/utils/auth";
import axios from "axios";
import { DatePicker } from "rsuite";
import Date from "../Elements/Date";
import Button from "../Elements/Button";
import { useRouter } from "next/navigation";
import { IoEyeOffSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";

const FormSignup = (props: { isCheck: boolean }) => {
  const { isCheck } = props;
  const router = useRouter();
  const { toast } = useToast();
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<{
    fullName: string;
    dateBirth: Date | null;
    email: string;
    password: string;
  }>({
    fullName: "",
    dateBirth: null,
    email: "",
    password: "",
  });
  return (
    <>
      <form
        className="flex flex-col gap-2 pt-5 pb-3"
        onSubmit={(e) =>
          SignUp({
            e,
            data,
            toast,
            axios,
            url: process.env.NEXT_PUBLIC_BACKEND_URL,
            router,
          })
        }
      >
        <FloatingLabel
          variant="outlined"
          label="Full Name"
          type="text"
          onChange={(e) => setData({ ...data, fullName: e.target.value })}
        />

        <Date
          defaultValue={data.dateBirth}
          onChange={(value) => setData({ ...data, dateBirth: value })}
        />
        <FloatingLabel
          variant="outlined"
          label="Email"
          type="email"
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
        <div className="flex w-full items-center">
          <div className="w-full">
            <FloatingLabel
              variant="outlined"
              label="Password"
              type={show ? "text" : "password"}
              autoComplete="off"
              onChange={(e) => {
                setData({ ...data, password: e.target.value });
              }}
            />
          </div>
          <div
            className="hover:bg-[#eeeeee] rounded-full p-2 ml-2 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            {show ? (
              <IoEyeOffSharp className="text-xl opacity-80" />
            ) : (
              <MdRemoveRedEye className="text-xl opacity-80" />
            )}
          </div>
        </div>
        {/* <FloatingLabel
          variant="outlined"
          label="Password"
          type="password"
          autoComplete="off"
          onChange={(e) => setData({ ...data, password: e.target.value })}
        /> */}
        <Button isCheck={isCheck} text="Sign Up" />
      </form>
    </>
  );
};

export default FormSignup;
