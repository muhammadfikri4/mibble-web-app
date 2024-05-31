import Link from "next/link";
import React from "react";

const JoinUsLink = (props: { href: string; text: string; title: string }) => {
  const { href, text, title } = props;
  return (
    <>
      <div className="flex items-center mt-2 text-sm gap-1.5">
        <p className="opacity-80">{title}</p>
        <Link href={href} className="text-blue-600 hover:text-blue-400">
          {text}
        </Link>
      </div>
    </>
  );
};

export default JoinUsLink;
