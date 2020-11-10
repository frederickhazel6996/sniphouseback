import { FETCH_ORDERS, FETCH_BOOKING } from '../actions/types';

let INITIAL_STATE = {
    orders: [],
    booking: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_ORDERS:
            let tempOrders = action.data;
            return { ...state, orders: tempOrders };
        case FETCH_BOOKING:
            let tempBooking = action.data;
            return { ...state, booking: tempBooking };
        default:
            return state;
    }
}
