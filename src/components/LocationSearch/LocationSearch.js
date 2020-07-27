import React, { useState, useEffect } from 'react'
import { getAllLocations } from '../../actions';
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import Styled from 'styled-components';
import history from '../../history';
import Table from 'react-bootstrap/Table';

const ListWrapper = Styled.div`
    z-index: 10;
    width: 100%;
    height: 38px;
`
const List = Styled.ul`
    width: 100%;
    height: 400px;
    overflow: scroll;
    border-bottom: none;
    background: white;
    color: rgba(43,43,43,1.0);
    font-size: 16px;
    margin: 1px 0;
    box-shadow: 0 0 4px 0 rgba(193,193,193,0.5);
`

const ListItem = Styled.li`
    color: black;
    :hover {
        background: #ccc;
        cursor: pointer;
    }
`

function LocationSearch(props) {
    const [searchText, setSearchText] = useState('');
    const [offerText, setOfferText] = useState('');
    const [showList, setShowList] = useState(false);
    const [filteredLocations, setFilteredLocations] = useState(props.state.availableLocations);

    const filterOut = (val, index) => {
        return val.IATA_code.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
            || val.country.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
            || val.airport.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
            || val.city.toLowerCase().indexOf(searchText.toLowerCase()) >= 0
    }
    const typed = () => {
        setFilteredLocations(props.state.availableLocations.filter(filterOut))
    }

    const buttonClicked = e => {
        console.log(props.state.availableLocations);
        //alert(searchText);
        history.push('/offer');

    }
    const itemSelected = (e, item) => {
        console.log(item);
        setSearchText(item.airport + ', ' + item.city + ', ' + item.country + ', ' + item.IATA_code);
        //setOfferText(item.airport + ', ' + item.IATA_code);
        //store selected data in session
        sessionStorage.setItem('selectedItem', JSON.stringify(item));
    }


    const savedData = JSON.parse(sessionStorage.getItem("SavedOfferData"));
    const renderTableData = () => {
        return savedData.map((item, index) => {
            const { _id, city, IATA_code, country, airport } = item.airpotdata; //destructuring

            return (
                <tr class="table-font">
                    <td className="border-td"></td>
                    <td className="border-td"></td>
                    <td className="border-td">{airport} , {IATA_code}</td>
                </tr>
            )
        })
    }

    useEffect(() => {
        (async () => {
            setFilteredLocations(await props.callFetchAllLocations());
        })();
        const savedOffer = JSON.parse(sessionStorage.getItem('savedOffer'));
        if (savedOffer) {
            setOfferText(savedOffer.airport + ', ' + savedOffer.IATA_code);
        }
    }, []);

    return (
        <div>
            <div className="justify-content-center d-flex flex-column search-box-style">
                <div className="align-self-center">Where do you need Ad Hoc Fuel?</div>
                <div className="justify-content-center d-flex">
                    <input className="w-50 mr-2" value={searchText}
                        placeholder="Search for locations"
                        onFocus={e => setShowList(true)}
                        onBlur={e => setShowList(false)}
                        onKeyUp={e => { typed(); }}
                        onChange={e => setSearchText(e.target.value)}></input>
                    <Button className="w-20" onClick={buttonClicked}>Go</Button>
                </div>
                <div className="align-self-center">
                    <ListWrapper>
                        <List className="list-group" style={{ display: showList ? 'block' : 'none', width: 610 }}>
                            {filteredLocations.map(item =>
                                <ListItem key={item.IATA_code} className="list-group-item" onMouseDown={(e) => itemSelected(e, item)}>
                                    {item.airport + ', ' + item.city + ', ' + item.country + ', ' + item.IATA_code}
                                </ListItem>
                            )}
                        </List>
                    </ListWrapper>
                </div>
            </div>

            <div className="divider-line"></div>
            <div>
                <Table className="full-width" >
                    <tbody>
                        <tr class="table-font font-gray">
                            <td className="border-td font-green">Current fuel releases</td>
                            <td className="border-td font-green">Past fuel releases</td>
                            <td className="border-td font-green">Saved Offers <span class="fa fa-shopping-cart cart-font"></span></td>
                        </tr>
                        {/* <tr class="table-font">
                            <td className="border-td"></td>
                            <td className="border-td"></td>
                            <td className="border-td">{offerText}</td>
                        </tr> */}
                        {renderTableData()}
                    </tbody>
                </Table>
            </div>

            <footer class="page-footer font-small footer-style">
                <div class="footer-copyright text-center py-3">Legal information   |   Privacy statement </div>
            </footer>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        state: state
    }
};

const mapDispatchToProps = {
    callFetchAllLocations: getAllLocations
};


export default connect(mapStateToProps, mapDispatchToProps)(LocationSearch);
