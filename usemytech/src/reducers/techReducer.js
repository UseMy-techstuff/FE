import {SET_TOKEN} from './actions/techAction';

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
                stuff: []
            }
        default:
            return state;
    }
};