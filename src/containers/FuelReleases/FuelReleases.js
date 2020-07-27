import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import FuelReleaseCard from '../../components/FuelReleaseCard/FuelReleaseCard';
import { FETCH_CURRENT_RELEASES, FETCH_PAST_RELEASES } from '../../actions/types';
import { Button, Tab, Tabs } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination'
import PageItem from 'react-bootstrap/PageItem'
import { getCurrentReleases, getPastReleases } from '../../actions/index';
import Table from 'react-bootstrap/Table';

function FuelReleases(props) {

    const [presentPage, setPresentPage] = useState(1)
    const [pastPage, setPastPage] = useState(1)
    useEffect(()=>props.callFetchCurrentReleases(presentPage),props.state.presentReleases.length);
    useEffect(()=>props.callFetchPastReleases(pastPage),props.state.pastReleases.length);
    
    const pageClicked = (present, page) => {
        present?props.callFetchCurrentReleases(page):props.callFetchPastReleases(pastPage);
        present?setPresentPage(page):setPastPage(page);
    }
    return (
        <div>
            <br/>
            {/* <Tabs defaultActiveKey="current" className="justify-content-center">
                <Tab eventKey="current" title="Current Fuel Releases">
                    { props.state.presentReleases.map(item => 
                        <FuelReleaseCard key={item.fuelReleaseId} details={item}/>)
                    }
                
                    <Pagination className="justify-content-center">
                    {
                        [...Array(Math.ceil(props.state.presentReleasesCount/10))].map((_, i) => {
                            return <PageItem onClick={e=> pageClicked(true,i+1)}>{i+1}</PageItem>;
                        })
                    }
                    </Pagination>
                </Tab>
                <Tab eventKey="past" title="Past Fuel Releases">
                    { props.state.pastReleases.map(item => 
                        <FuelReleaseCard key={item.fuelReleaseId} details={item}/>)
                    }

                    <Pagination className="justify-content-center">
                    {
                        [...Array(Math.ceil(props.state.pastReleasesCount/10))].map((_, i) => {
                            return <PageItem onClick={e=>{ pageClicked(false,i+1); }}>{i+1}</PageItem>;
                        })
                    }
                    </Pagination>
                </Tab>

                <Tab  eventKey="offer" title="Saved Offers" > <span class="fa fa-shopping-cart cart-font"></span></Tab>
                
            </Tabs> */}
            {/* <Button variant='primary' onClick={props.callFetchCurrentReleases}>Get Releases Now</Button> */}
            {/* <div className="divider-line"></div>
            <div>
                <Table className="full-width" >
                    <tbody>
                        <tr class="table-font font-gray">
                            <td className="border-td">Current fuel releases</td>
                            <td className="border-td">Past fuel releases</td>
                            <td className="border-td">Saved Offers <span class="fa fa-shopping-cart cart-font"></span></td>
                        </tr>
                        <tr class="table-font">
                            <td className="border-td"></td>
                            <td className="border-td"></td>
                            <td className="border-td">Bardufoss Airpot, BDU</td>
                        </tr>
                    </tbody>
                </Table>
            </div> */}

        </div>
    )
}


const mapStateToProps = state => {
    return {
        state : state
    }
};

const mapDispatchToProps = {
    callFetchCurrentReleases: getCurrentReleases,
    callFetchPastReleases: getPastReleases
};
// const mapDispatchToProps = dispatch => {
//     return {
//         onClickCurrentButton : () => callAction(dispatch),
//         onClickPastButton : () => dispatch({type: FETCH_PAST_RELEASES})
//     }
// };

export default connect(mapStateToProps, mapDispatchToProps)(FuelReleases);
