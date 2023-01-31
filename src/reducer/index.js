import data from "../data/facts";

const initialState = {
    fact: data,
    loading: false,
    error: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default reducer;