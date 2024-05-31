import { FloatingLabel } from "flowbite-react";
import React, { useState } from "react";
import { IoEyeOffSharp } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";
import Button from "../Elements/Button";
import { SignIn } from "@/utils/auth";
import axios from "axios";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";

const FormSignin = () => {
  const router = useRouter();
  const { toast } = useToast();
  const [show, setShow] = useState<boolean>(false);
  const [data, setData] = useState<{ email: string; password: string }>({
    email: "",
    password: "",
  });
  return (
    <>
      <form
        className="flex flex-col gap-2 pt-5 pb-3"
        onSubmit={(e) =>
          SignIn({
            e,
            data,
            axios,
            url: process.env.NEXT_PUBLIC_BACKEND_URL,
            toast,
            router,
          })
        }
      >
        <FloatingLabel
          variant="outlined"
          label="Email"
          type="email"
          onChange={(e) => {
            setData((prevData) => ({
              ...prevData,
              email: e.target.value,
            }));
            setData((updatedData) => {
              return updatedData;
            });
          }}
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

        <Button
          isCheck={data.email && data.password ? true : false}
          text="Submit"
        />
      </form>
    </>
  );
};

export default FormSignin;
