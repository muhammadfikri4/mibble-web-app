import { ReactNode } from "react";

export interface ButtonProps {
    primary?: boolean;
    secondary?: boolean;
    success?: boolean;
    danger?: boolean;
    size?: "sm" | "md" | "lg";
    children?: ReactNode;
  }
  
 export interface VariantSize {
      height?:string,
      paddingInline?:string,
      paddingBlock?:string,
      fontSize?:string
  }