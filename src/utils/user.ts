import { AxiosInstance } from "axios";
import { JwtPayload } from "jwt-decode";

const getProfile = async (param: {
  axios: AxiosInstance;
  jwtDecode: any;
  setProfile: (value: any) => void;
  url: string | undefined;
}) => {
  const { axios, jwtDecode, setProfile, url } = param;
  try {
    const res = await axios.get(`${url}/v1/user/profile`, {
      withCredentials: true,
    });
    const decode = jwtDecode(res.data.accessToken);
    setProfile(decode);
  } catch (error) {
    console.log(error);
  }
};

export { getProfile };
