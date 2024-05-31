import React from "react";

const Button = (props: {
  text: string;
  isCheck: boolean;
}) => {
  const { text, isCheck } = props;
  return (
    <>
      <button
        disabled={!isCheck}
        className={`${
          isCheck
            ? "bg-[#323284] hover:bg-[#3e3ec9] duration-300"
            : "bg-slate-300 cursor-not-allowed"
        } w-full py-2 rounded-lg text-white font-semibold`}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
