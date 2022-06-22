import { ADD_ADULT, ADD_CHILD, ADD_INFANT, REMOVE_ADULT, REMOVE_CHILD, REMOVE_INFANT } from "./constants";

const initState = {
  passenger: {
    adult: 1,
    child: 0,
    infant: 0
  },
  airport: {
    from: "",
    to: ""
  },
  date: {
    departure: "",
    return: null
  }
}
const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_ADULT:
      return {
        ...state,
        passenger: {
          ...state.passenger,
          adult: state.passenger.adult + 1
        }
      }
    case ADD_CHILD:
      return {
        ...state,
        passenger: {
          ...state.passenger,
          child: state.passenger.child + 1
        }
      }
    case ADD_INFANT:
      return {
        ...state,
        passenger: {
          ...state.passenger,
          infant: state.passenger.infant + 1
        }
      }
    case REMOVE_ADULT:
      return {
        ...state,
        passenger: {
          ...state.passenger,
          adult: state.passenger.adult >= 2 ? state.passenger.adult - 1 : state.passenger.adult
        }
      }
    case REMOVE_CHILD:
      return {
        ...state,
        passenger: {
          ...state.passenger,
          child: state.passenger.child >= 1 ? state.passenger.child - 1 : state.passenger.child
        }
      }
    case REMOVE_INFANT:
      return {
        ...state,
        passenger: {
          ...state.passenger,
          infant: state.passenger.infant >= 1 ? state.passenger.infant - 1 : state.passenger.infant
        }
      }
    default:
      return state
  }
}

export default rootReducer;