import axios from 'axios';

export const FETCH_START = 'FETCH_START';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const getFact = () => {
    return (dispatch => {
        dispatch(fetchStart());
        axios.get('https://catfact.ninja/fact')
            .then(res => {
                dispatch(fetchSuccess(res.data.fact));
            })
            .catch(error => {
            
             })
    });
}

export const fetchStart = () => {
    return { type: FETCH_START };
}

export const fetchSuccess = fact => {
    return { type: FETCH_SUCCESS, payload: fact };
}