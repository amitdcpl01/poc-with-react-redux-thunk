import React from 'react';
import { connect } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { Link, Route } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { getAllSavedOfferCount } from '../../actions';

class OfferList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnabled: true,
      airpotdata: JSON.parse(sessionStorage.getItem('selectedItem'))
    };
  }

  componentDidMount() {
    // this.props.loadOffers();
    //this.props.callSavedOfferCount();
  };

  saveOffer = (props) => {
    // code for increase the cart count at top
    const airpotdata = this.state.airpotdata;
    sessionStorage.setItem('savedOffer', JSON.stringify(airpotdata));
    this.setState({ isEnabled: false });
    const data = JSON.parse(sessionStorage.getItem('SavedOfferData'));
    data.push({ airpotdata });
    sessionStorage.setItem("SavedOfferData", JSON.stringify(data));
    //this.props.callSavedOfferCount();
    //connect to store
     //props.callSavedOfferCount();
  }

  render() {
    //const isEnabled = true;
    const airpotdata = this.state.airpotdata;
    return (
      <div>
      <div className="page-top-space">
        <h6>Location</h6>
        <h2 className="font-green offer-top-space">{airpotdata.airport}, {airpotdata.IATA_code}</h2>
        <p>To accept this offer please follow the steps below. If you have a contracted price, the <br />contracted price will supersede the offer provided.</p>
        <h6>Volume</h6>
        <h2 className="font-green">10000 LT</h2>
        <div className="divider-line"></div>
        <br />
        <h1 className="font-green">Our Ad Hoc Offer</h1><br />
        <h6>Total Unit Cost*</h6>
        <h2 className="font-green">0.94831 GBP/LT</h2>
        <br />
        <p>Overview</p>
        <div>
          <Table className="full-width table-align">
            <thead class="">
              <tr>
                <th colSpan="3"> <div className="font-green inline-display"><div className="offer-first-col">Pricing Basic</div><span className="offer-second-col">Differential</span><span>Total of Mandatory taxes, duties and fees</span></div></th>
              </tr>
            </thead>
            <tbody>
              <tr class="">
                <td className="offer-border-td offer-first-col-td">Prior month working day average of Platts Cargque CIF <br />NWE ARA high quotations <br /> 0.35872 GBP/LT <br />(*Price Index is valid from 2020-Apr-01 to 2020-Apr-31 )</td>
                <td className="offer-border-td offer-second-col-td">0.57953<br />GBP/LT</td>
                <td className="offer-border-td ">0.01006<br />GBP/LT</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="divider-line"></div>

        <div class="card font-green card-margin">
          <h5 class="card-header">
            <a class="d-block font-green">
              <i class="fa fa-chevron-down pull-right"></i>
            Fueling and location details
        </a>
          </h5>
        </div>

        <div class="card font-green card-margin">
          <h5 class="card-header">
            <a class="d-block">
              <i class="fa fa-chevron-down pull-right"></i>
           Financial breakdown
        </a>
          </h5>
        </div>
        <br />

        <div className="clear-both">
          <button type="button" class="btn btn-success dropdown-toggle alignleft">Download Offer</button>
          <button type="button" class="btn btn-success alignright">Accept Offer  <i class="fa fa-chevron-right pull-right icon-top-space"></i></button>
          <span class="alignright cancel-link">
           { this.state.isEnabled && <Nav class="cancel-back-to-home"> <Link class="font-green font-bold" to="/">Cancel</Link></Nav>}
           { !this.state.isEnabled && <Nav class="cancel-back-to-home"> <Link class="font-green font-bold" to="/">Back to Home</Link></Nav>}
          </span>
        </div>
        <div className="clear-both"><p class="alignright"> and create fuel release</p>
        </div>
        <br />
        <div></div>
        <div> <button type="button" class="btn btn-success" disabled={!this.state.isEnabled} onClick={this.saveOffer} >Save Offer <i class="fa fa-shopping-cart"></i></button> </div>
        <div className="divider-line"></div>
        <p>NOTE: Prices, duties, taxes and fees cited in this message are valid on the day of issuance and therefore subject to change without notice. The duties, taxes and fees information contained in this message is purely for information purposes and provided as a guide only. This price is quoted using the IATA exchange rate on the month of pricing to calculate duties, taxes and fees information, and invoicing may be based on a different exchange rate (i.e. ECB), and or the rate on the day the invoice is generated. For further information on duties, taxes and fees, please refer to the Air BP Duties, Taxes and Fees available on www.airbp.com, alternatively please contact your Account Manager. Air BP makes no representation or warranty in respect of any of the information on duties, taxes and fees contained in this message, nor as to the availability or specification of fuel at any location on any given date. The information contained in this quotation is confidential to Air BP. You must not distribute any such information. <br /><br /> Please also note that the value of the Pricing basis quoted (PB) is provided strictly as a guide and for information purposes only, to assist you should you require it. The PB refers to the current averages using best relevant information currently available and BP does not in any way guarantee the accuracy of the PB when and if used as it may no longer be applicable in the time frame when the uplift takes place. In all cases, the differential amount as cited in these documents, shall be the contracted amount to appear in the invoice and settled as agreed.</p>
        <br />
        <p>Privacy Statement</p><br />
        <div className="">
          <footer class="page-footer font-small footer-style">
            <div class="footer-copyright text-center py-3">Legal information   |   Privacy statement </div>
          </footer>
        </div>
      </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   count: state.count
// });

const mapStateToProps = state => {
  return {
    state: state
  }
};

// const mapDispatchToProps = {
//   //loadOffers
// };
const mapDispatchToProps = {
  callSavedOfferCount: getAllSavedOfferCount
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OfferList);