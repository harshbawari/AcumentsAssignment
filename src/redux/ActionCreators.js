import * as ActionTypes from './ActionTypes';

export const incrementBalance = (amount) => ({
    type: ActionTypes.INCREMENT,
    payload: amount
});

export const decrementBalance = (amount) => ({
    type: ActionTypes.INCREMENT,
    payload: amount
});