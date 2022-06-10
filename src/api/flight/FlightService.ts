import { FlightCriteria, FlightResponse } from "./FlightService.types";
import axios, { AxiosResponse } from "axios";
import { axiosConfig } from "../config";

class FlightService {
  static async search(
    flightCriteria: FlightCriteria
  ): Promise<AxiosResponse<FlightResponse[]>> {
    return axios.post(`/flights/search`, flightCriteria, {
      ...axiosConfig(),
    });
  }
}

export default FlightService;
