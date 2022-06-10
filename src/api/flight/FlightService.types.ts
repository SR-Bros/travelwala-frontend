export type FlightCriteria = {
  adultCount: number;
  childCount: number;
  infantCount: number;
  departureCity: string;
  departureDate: Date;
  arrivalCity: string;
  returnDate: Date;
  seatClass: string;
};

export type FlightResponse = {
  id: string;
  code: string;
  adultEconomicPrice: number;
  adultBusinessPrice: number;
  discountRate?: number | null;
  departureCity: string;
  arrivalCity: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: string;
  expectedArrivalTime?: string | null;
  occupiedEconomicSeats: number;
  occupiedBusinessSeats: number;
  plane: PlaneResponse;
  agency: AgencyResponse;
};

export type AgencyResponse = {
  id: string;
  code: string;
  name: string;
  childPriceRate: number;
};

export type PlaneResponse = {
  id: string;
  manufacturer: string;
  code: string;
  name: string;
  maximumEconomicCapacity: number;
  maximumBusinessCapacity: number;
};
