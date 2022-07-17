export interface BookingRequest {
    createBookingFlightSpecs: CreateBookingFlightSpecs
    bookingContact: BookingContact;
  }

interface CreateBookingFlightSpecs {
    travellerSpecs: TravellerSpecs
    flightProductSpecs: FlightProductSpecs
}

interface FlightProductSpecs {
    departureFlightId: String
    returnFlightId: String
    seatClass: String
    adultCount: Number
    childCount: Number
    infantCount: Number
}

interface TravellerSpecs {
    adultFormData: TravelerDataForm[]
    childFormData: TravelerDataForm[]
    infantFormData: TravelerDataForm[]
}

interface TravelerDataForm {
    title: String
    firstName: String
    lastName: String
    dob: DateOfBirth
    nationality: String
}

interface DateOfBirth {
    day: Number
    month: Number
    year: Number
}

interface BookingContact {
    firstName: String
    lastName: String
    phoneNumber: String
    email: String
}

export interface CreateBookingResponse {
    amount: number;
    currency: string;
    clientSecret: string;
}
  
