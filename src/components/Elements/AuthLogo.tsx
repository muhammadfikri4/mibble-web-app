import Image from "next/image";
import React from "react";

const AuthLogo = (props: { source: string; alt: string }) => {
  const { source, alt } = props;
  return (
    <>
      <Image
        src={source}
        width={50}
        height={50}
        alt={alt}
        className="absolute top-3 object-cover"
      />
    </>
  );
};

export default AuthLogo;
