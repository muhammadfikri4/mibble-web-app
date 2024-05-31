import React from "react";
import { Dialog, DialogTrigger } from "../ui/dialog";
import ModalSignup from "./ModalSignup";

const DialogSignup = (props: { position: string }) => {
  const { position } = props;
  return (
    <>
      <Dialog>
        {position == "signup" ? (
          <>
            <DialogTrigger className=" bg-[#1d9bf0] hover:bg-[#41a5e7] duration-300 text-white font-bold py-[7px] rounded-[20px] sm:w-80 w-96 hover:bg-primary-dark">
              Create Account
            </DialogTrigger>
          </>
        ) : (
          <>
            <DialogTrigger>
              <button className="text-blue-600 opacity-85 hover:opacity-100">
                Sign up
              </button>
            </DialogTrigger>
          </>
        )}

        <ModalSignup />
      </Dialog>
    </>
  );
};

export default DialogSignup;
