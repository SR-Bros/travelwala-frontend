import { UsernamePassword, SignInResponse } from "./SignInService.types";
import axios, { AxiosResponse } from "axios";
import { axiosConfig } from "../config";

class SignInService {
  static async login(
    usernamePassword: UsernamePassword
  ): Promise<AxiosResponse<SignInResponse>> {
    return axios.post(`/login`, usernamePassword, {
      ...axiosConfig()
    });
  }
}

export default SignInService;