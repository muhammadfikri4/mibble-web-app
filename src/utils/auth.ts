import { AxiosInstance, AxiosResponse } from "axios";
import { NextRouter, Router } from "next/router";
import { FormEvent } from "react";

interface Params {
  e: FormEvent<any>;
  data: Record<string, any>;
  axios: AxiosInstance;
  url: string | undefined;
  toast: any;
  router: any;
}
interface ParamsVerification {
  e: FormEvent<any>;
  data: {
    otp: number;
    email: string;
  };
  axios: AxiosInstance;
  url: string | undefined;
  toast: any;
  router: any;
}

const SignIn = async (param: Params) => {
  const { e, data, axios, url, toast, router } = param;
  e.preventDefault();
  try {
    const res = await axios.post(`${url}/v1/user/signin`, data, {
      withCredentials: true,
    });
    // console.log(res);
    router.push("/home");
  } catch (error: any) {
    if (error) {
      toast({
        variant: "destructive",
        description: error.response.data.message,
      });
    }
  }
};

const SignUp = async (param: Params) => {
  const { e, data, axios, url, toast, router } = param;
  e.preventDefault();
  try {
    const res: AxiosResponse = await axios.post(`${url}/v1/user/signup`, data, {
      withCredentials: true,
    });
    router.push("/verification-user");
    localStorage.setItem("userVerification", res.data.emailVerification);
  } catch (error: any) {
    if (error) {
      toast({
        variant: "destructive",
        description: error.response.data.message,
      });
    }
  }
};

const verification = async (param: ParamsVerification) => {
  const { e, data, axios, url, toast, router } = param;
  e.preventDefault();
  try {
    const res = await axios.post(`${url}/v1/user/verification`, data, {
      withCredentials: true,
    });
    // console.log(res);
    toast({
      description: res.data.message,
    });
    router.push("/login");
    localStorage.removeItem("userVerification");
  } catch (error: any) {
    toast({
      variant: "destructive",
      description: error.response.data.message,
    });
  }
};

export { SignIn, SignUp, verification };
