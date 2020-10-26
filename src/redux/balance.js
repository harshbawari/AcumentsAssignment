import * as ActionTypes from './ActionTypes';

export const balance = (state = {
    balance: 0
}, action) => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return { ...state, balance: balance + action.payload };

        case ActionTypes.DECREMENT:
            return { ...state, balance: balance + action.payload };

        case ActionTypes.DONATE:
            return { ...state, balance: action.payload };

        default:
            return state;
    }
}