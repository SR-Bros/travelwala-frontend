import { UsernamePassword, UsernamePasswordResponse } from "./SignInService.types";
import axios, { AxiosResponse } from "axios";
import { axiosConfig } from "../config";

class SignInService {
  static async login(
    usernamePassword: UsernamePassword
  ): Promise<AxiosResponse<UsernamePasswordResponse>> {
    return axios.post(`/`, usernamePassword, {
      ...axiosConfig()
    });
  }
}

export default SignInService;