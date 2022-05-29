import Context from "./Context";
import {useReducer} from "react";
import reducer, {passengerState} from "./reducer";

function Provider({children}) {
    const [state, dispatch] = useReducer(reducer, passengerState);
    return (
        <Context.Provider value={[state, dispatch]}>
            {children}
        </Context.Provider>
    )
}

export default Provider