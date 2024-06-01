import { ButtonProps, VariantSize } from "../types/ButtonTypes";

export const renderSize = (size: ButtonProps['size']): VariantSize => {
    switch (size) {
      case "lg":
        return {
          height: "38px",
          paddingInline: "16px",
          paddingBlock: "5px",
          fontSize: "16px"
        };
      case "md":
        return {
          height: "34px",
          paddingInline: "14px",
          paddingBlock: "4px",
          fontSize: '14px'
        };
      case "sm":
        return {
          height: "30px",
          paddingInline: "14px",
          paddingBlock: "3px",
          fontSize: '14px'
        };
      default:
        return {
          height: "34px",
          paddingInline: "14px",
          paddingBlock: "4px",
          fontSize: "14px"
        };
    }
  };
  