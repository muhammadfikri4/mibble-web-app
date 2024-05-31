import React from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const AuthTitle = (props: { text: string }) => {
  const { text } = props;
  return (
    <>
      <h1 className={`text-2xl font-semibold ${montserrat.className} mt-12`}>
        {text}
      </h1>
    </>
  );
};

export default AuthTitle;
