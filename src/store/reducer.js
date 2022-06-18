import {ADD_ADULT, ADD_CHILD, ADD_INFANT, REMOVE_ADULT, REMOVE_CHILD, REMOVE_INFANT} from './constants'

const passengerState = {
    adult: 1,
    child: 0,
    infant: 0
}

function reducer(state, action) {
    switch (action.type) {
        case ADD_ADULT:
            state.adult++;
            return {
                ...state
            }
        case ADD_CHILD:
            state.child++;
            return {
                ...state
            }
        case ADD_INFANT:
            state.infant++;
            return {
                ...state
            }
        case REMOVE_ADULT:
            if (state.adult >= 2) {
                state.adult--;
            }
            return {
                ...state
            }
        case REMOVE_CHILD:
            if (state.child >= 1) {
                state.child--;
            }
            return {
                ...state
            }
        case REMOVE_INFANT:
            if (state.infant >= 1) {
                state.infant--;
            }
            return {
                ...state
            }
        default:
            break
    }
}


export {passengerState}
export default reducer