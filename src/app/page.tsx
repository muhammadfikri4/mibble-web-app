"use client";
import ModalSignup from "@/components/Fragments/ModalSignup";
import { Dialog } from "@/components/ui/dialog";
import React, { useEffect, useState } from "react";
// import Home from "../page";
import { GrClose } from "react-icons/gr";
import Image from "next/image";
import Logo from "../../public/Logo_Color.png";
import { Montserrat } from "next/font/google";
import { Datepicker, FloatingLabel } from "flowbite-react";
import { useRouter } from "next/navigation";
import { DatePicker } from "rsuite";
import "rsuite/DatePicker/styles/index.css";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import { log } from "console";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const page = () => {
  const router = useRouter();
  const [isCheck, setIsCheck] = useState<boolean>(false);
  useEffect(() => {
    router.push("/login");
  }, []);
  return (
    <>
      <div></div>
    </>
  );
};

export default page;
