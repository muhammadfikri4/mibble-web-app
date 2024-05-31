"use client";
import React, { useEffect, useState } from "react";

import Logo from "../../../public/Logo_Color.png";

// home
import { GoHome } from "react-icons/go";
import { GoHomeFill } from "react-icons/go";

// message
import { PiChatsFill } from "react-icons/pi";
import { PiChatsLight } from "react-icons/pi";

// mark
import { IoBookmarkOutline } from "react-icons/io5";
import { IoBookmark } from "react-icons/io5";

// setting
import { AiOutlineSetting } from "react-icons/ai";
import { AiFillSetting } from "react-icons/ai";

// search
import { IoSearchOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

// profile
import { IoPersonOutline } from "react-icons/io5";
import { IoPerson } from "react-icons/io5";
import Link from "next/link";
import { jwtDecode } from "jwt-decode";
import { getProfile } from "@/utils/user";
import axios from "axios";

const Sidebar = () => {
  const [profile, setProfile] = useState<any>();

  useEffect(() => {
    getProfile({
      axios,
      url: process.env.NEXT_PUBLIC_BACKEND_URL,
      jwtDecode,
      setProfile,
    });
  }, []);
  return (
    <>
      <nav className="w-72 h-screen bg-slate-100 pl-5 py-3 flex flex-col justify-between">
        <div className="px-3">
          <img
            src={Logo.src}
            alt="Mibble"
            title="Mibble"
            className="w-12 h-12 object-cover"
          />
        </div>
        <ul className="flex flex-col gap-5">
          <li>
            <Link
              href="/"
              className="flex items-center gap-5 hover:bg-slate-300 hover:rounded-xl w-max px-3 py-2"
            >
              <GoHome className="text-3xl" />
              <p className="text-lg pt-1">Home</p>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-5 hover:bg-slate-300 hover:rounded-xl w-max px-3 py-2"
            >
              <IoSearchOutline className="text-3xl" />
              <p className="text-lg pt-1">Search</p>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-5 hover:bg-slate-300 hover:rounded-xl w-max px-3 py-2"
            >
              <PiChatsLight className="text-3xl" />

              <p className="text-lg pt-1">Message</p>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-5 hover:bg-slate-300 hover:rounded-xl w-max px-3 py-2"
            >
              <IoBookmarkOutline className="text-3xl" />

              <p className="text-lg pt-1">Bookmark</p>
            </Link>
          </li>

          <li>
            <Link
              href="/"
              className="flex items-center gap-5 hover:bg-slate-300 hover:rounded-xl w-max px-3 py-2"
            >
              <IoPersonOutline className="text-3xl" />

              <p className="text-lg pt-1">Profile</p>
            </Link>
          </li>
          <li>
            <Link
              href="/"
              className="flex items-center gap-5 hover:bg-slate-300 hover:rounded-xl w-max px-3 py-2"
            >
              <AiOutlineSetting className="text-3xl" />

              <p className="text-lg pt-1">Setting</p>
            </Link>
          </li>
        </ul>
        <div className="py-5 px-3 flex items-center gap-5 hover:bg-slate-300 cursor-pointer w-max rounded-xl">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/portofolio-web-47662.appspot.com/o/handsome-bearded-guy-posing-against-white-wall_273609-20597.avif?alt=media&token=22434554-2587-479c-a7a3-24d20326267a"
            alt="pp"
            className="w-12 h-12 object-cover rounded-full"
          />
          <div className="flex flex-col text-sm gap-1">
            <p>{profile?.fullName}</p>
            <p>{profile?.email}</p>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
