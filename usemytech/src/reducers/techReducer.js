import {SET_TOKEN, TOKEN_AQUIRED, GET_USER, GET_STUFF, SET_ERROR} from './actions/techAction';

const initialState ={
    isLoading: false,
    stuff: [],
    error: ''
}

export const techReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                isLoading: true,
            };
        case TOKEN_AQUIRED:
            return {
                ...state,
                isLoading: false
            }
        case GET_USER:
            return {
                ...state,
                isLoading: true
            };
        case GET_STUFF:
            return {
                ...state,
                isLoading: false,
                stuff: action.payload,
            }
        case SET_ERROR:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
};