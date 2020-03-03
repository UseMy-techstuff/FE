import {SET_TOKEN, TOKEN_AQUIRED, GET_USER, ALL_STUFF, SET_ERROR, GET_STUFF, USER_STUFF} from './actions/techAction';

const initialState ={
    isLoading: false,
    userStuff: [],
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
        case USER_STUFF:
            console.log(action.payload)
            return {
              ...state,
              isLoading: false,
              userStuff: action.payload,
              error: ""
            };
        case GET_STUFF:
            return{
                ...state,
                isLoading: true
            };
        case ALL_STUFF:
            return {
                ...state,
                isLoading: false,
                stuff: action.payload,
                error: ''
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