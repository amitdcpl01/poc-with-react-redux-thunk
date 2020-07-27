import { FETCH_CURRENT_RELEASES, FETCH_PAST_RELEASES, FETCH_ALL_LOCATIONS, CART_COUNT } from '../actions/types';

const initialState = {
    presentReleases: [], //Holds the array of current releases in the current page
    presentReleasesCount: 0, //Holds the total number current releases
    pastReleases: [], //Holds the array of previous releases in the current page
    pastReleasesCount: 0, //Holds the total number previous releases
    availableLocations: [],  //Holds the array of locations currently available
    quantity: 0,
    offerdata: [], //Holds the array of offers data
    CartItemCount: 0
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case FETCH_CURRENT_RELEASES:
            return { ...state, presentReleases: payload.data, presentReleasesCount: payload.count }

        case FETCH_PAST_RELEASES:
            return { ...state, pastReleases: payload.data, pastReleasesCount: payload.count }

        case FETCH_ALL_LOCATIONS:
            return { ...state, availableLocations: payload }

        case CART_COUNT:
            return {
                CartItemCount: state.CartItemCount + 1
            }

        default:
            return state
    }
}
