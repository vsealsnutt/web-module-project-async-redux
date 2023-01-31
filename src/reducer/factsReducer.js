import { FETCH_START, FETCH_SUCCESS } from "../actions/factsActions";

const initialState = {
    fact: [],
    loading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_START:
            return {
                ...state,
                loading: true,
                error: ''
            };
        case FETCH_SUCCESS:
            return {
                ...state,
                loading: false,
                fact: action.payload,
                error: ''
            };
        default:
            return state;
    }
}

export default reducer;