import { FETCH_ORDERS } from '../actions/types';

let INITIAL_STATE = {
    orders: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_ORDERS:
            let tempOrders = action.data;
            return { ...state, orders: tempOrders };
        default:
            return state;
    }
}
