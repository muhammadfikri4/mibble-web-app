import React from "react";

const ButtonOutlined = (props: { text: string }) => {
  const { text } = props;
  return (
    <button className="border border-[rgba(0,0,0,.4)] duration-200 bg-white hover:bg-[#eeeeee] w-full p-[7px] px-[20px] rounded-full font-bold text-center text-[15px] text-black">
      {text}
    </button>
  );
};

export default ButtonOutlined;
