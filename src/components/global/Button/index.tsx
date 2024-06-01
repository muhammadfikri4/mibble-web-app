import React from "react";
import { ButtonProps } from "./types";
import { renderSize } from "./config";

const Button: React.FC<ButtonProps> = ({
  danger,
  primary,
  secondary,
  size,
  success,
  children,
}) => {
  const { height, paddingBlock, paddingInline, fontSize } = renderSize(size);

  const renderVariant = () => {
    if (primary) {
      return (
        <button
          className="bg-primary-default hover:bg-primary-hover active:bg-primary-active rounded-md text-white active:outline active:outline-3 active:outline-primary active:outline-offset-[0.5px] active:shadow-primary box-border duration-200"
          style={{ height, paddingBlock, paddingInline, fontSize }}
        >
          {children}
        </button>
      );
    } else if (success) {
      return (
        <button
          className="bg-success-default hover:bg-success-hover active:bg-success-active rounded-md text-white active:outline active:outline-3 active:outline-success active:outline-offset-[0.5px] active:shadow-success box-border duration-200"
          style={{ height, paddingBlock, paddingInline, fontSize }}
        >
          {children}
        </button>
      );
    } else if (danger) {
      return (
        <button
          className="bg-danger rounded-md text-white active:outline active:outline-3 active:outline-danger active:outline-offset-[0.5px] active:shadow-danger box-border duration-200"
          style={{ height, paddingBlock, paddingInline, fontSize }}
        >
          {children}
        </button>
      );
    }
  };

  return <>{renderVariant()}</>;
};

export default Button;
