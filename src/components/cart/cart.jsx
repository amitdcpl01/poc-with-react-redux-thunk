import React from "react";
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { Link, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import Home from '../../containers/Home/Home';


function CartDetails() {
    //const airpotdata = JSON.parse(sessionStorage.getItem('selectedItem'));
    const savedData =  JSON.parse(sessionStorage.getItem("SavedOfferData"));
    const renderTableData = () => {
        return savedData.map((item, index) => {
           const { _id, city, IATA_code, country, airport} = item.airpotdata; //destructuring
           
        return (
            <tr class="font-green table-font">
            {/* <td>{index}{JSON.parse(sessionStorage.getItem('savedOffer')) ? JSON.parse(sessionStorage.getItem('savedOffer')).IATA_code : ''}</td> */}
            <td>{ IATA_code ? IATA_code: ''}</td>
            <td>0.9843 GBP/LT</td>
            <td>2020-Apr-30</td>
        </tr>
        )
         })
    }


    return (
        <div>
            <Nav >
                <Link class="font-gray-bold" to="/">Home</Link> <span className="font-gray-bold">  <span className="font-green font-bold"> > </span> My Cart</span>
            </Nav>
            <Route
                path="/"
                component={Home}
                exact
            />

            <div className="divider-line-top"></div>
            <h2 className="font-green">My Cart</h2>
            <div className="divider-line"></div>
            <div>
                <Table bordered>
                    <thead class="thead-light table-font header-font-size">
                        <tr>
                            <th colSpan="3"> <span className="font-gray">Saved Offers</span></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="table-font font-gray">
                            <td>Current offers</td>
                            <td>Pricing Details</td>
                            <td>Expiry Date</td>
                        </tr>
                        {/* <tr class="font-green table-font">
                            <td>1. {JSON.parse(sessionStorage.getItem('savedOffer')) ? JSON.parse(sessionStorage.getItem('savedOffer')).IATA_code : ''}</td>
                            <td>0.9843 GBP/LT</td>
                            <td>2020-Apr-30</td>
                        </tr> */}
                        {renderTableData()}
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

// function mapStateToProps(state) {
//     // return {
//     //    // cartValue: state.mainReducer.cart,
//     // }
// }

// function mapDispatchToProps(){

// }

// // const CartDetails = connect(mapStateToProps, mapDispatchToProps)(CartDetails);
// export default connect(mapStateToProps, mapDispatchToProps)(CartDetails);

export default CartDetails;
