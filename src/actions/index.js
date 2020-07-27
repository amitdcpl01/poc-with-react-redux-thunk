import { FETCH_CURRENT_RELEASES, FETCH_ALL_LOCATIONS, FETCH_PAST_RELEASES, CART_COUNT } from './types';
import axios from 'axios';
import location from '../components/data/location.json';


// This is an actionCreator which returns a thunk
export function getCurrentReleases(page) {
    // Below is the thunk function . It can run some logic(even async logic) as required.. and then interact 
    // with the store through dispatch
    return function(dispatch, getState) {
        axios.get(`http://adhoc24.air.bp.com/bin/downstream/adhoc/fuel-releases?airlineId=0000002&page=${page}&status=current`)
                .then(response => response.data)
                .then(json => dispatch({
                    type: FETCH_CURRENT_RELEASES,
                    payload: json
                }));
    }
}
export function getPastReleases(page) {
    return function(dispatch, getState) {
        axios.get(`http://adhoc24.air.bp.com/bin/downstream/adhoc/fuel-releases?airlineId=0000002&page=${page}&status=past`)
                .then(response => response.data)
                .then(json => dispatch({
                    type: FETCH_PAST_RELEASES,
                    payload: json
                }));
    }
}

export function getAllLocations() {
    return async function(dispatch, getState) {
        //let response = await fetch('http://adhoc24.air.bp.com/bin/downstream/adhoc/locations');
        //let response = await axios.get('http://adhoc24.air.bp.com/bin/downstream/adhoc/locations');
        //let response = await fetch('../components/data/location.json');
        const locationdata = require('../components/data/location.json');
        //debugger;
        //console.log(response);
        //response = response.data;
        dispatch({
                    type: FETCH_ALL_LOCATIONS,
                    payload: locationdata
                });
        return locationdata;        
    }
}

export function getAllSavedOfferCount(){
    return async function(dispatch, getState) {
        dispatch({
                    type: CART_COUNT,
                    payload: null
                });
       // return count;        
    }

}
