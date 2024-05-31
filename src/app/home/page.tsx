import React from "react";

import Sidebar from "@/components/Fragments/Sidebar";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-[900px] h-max">
        <div className="w-full h-48 border border-b-[rgba(0,0,0,.1)] border-x-transparent border-t-transparent px-5 py-2">
          <div className="flex items-center gap-2">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/portofolio-web-47662.appspot.com/o/handsome-bearded-guy-posing-against-white-wall_273609-20597.avif?alt=media&token=22434554-2587-479c-a7a3-24d20326267a"
              alt="pp"
              className="w-16 h-16 rounded-full object-cover"
            />
            <input
              type="text"
              className="w-full border-0 outline-0 focus:border-0 focus:outline-0 border-[0,0,0,0]"
            />
          </div>
        </div>
      </div>
      <div className="w-48 h-screen bg-slate-100 px-2">
        <div className="w-full h-20 bg-blue-600"></div>
      </div>
    </div>
  );
};

export default page;
