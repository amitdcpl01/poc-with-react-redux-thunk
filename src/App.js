import React from 'react';
import classes from './App.css';
import Home from './containers/Home/Home';
import { Nav, Navbar } from 'react-bootstrap';
import { Switch, Route, Link } from 'react-router-dom';
import MyAccount from './components/MyAccount/MyAccount';
import OfferList from './components/offer/offer';
import CartDetails from './components/cart/cart';
import Logo from './assets/images/air_bp.png';
import { connect } from 'react-redux';
import history from './history';

function App(props) {
  //debugger;
  //initiate the savedOffer as a blank array
  //if(props.count.CartItemCount && props.count.CartItemCount === 0){
  //sessionStorage.setItem('SavedOfferData', JSON.stringify([]));
  //}

  const handleClick =(event) =>{
    history.push('/cart');
  }

  return (
    <div className={classes.App}>
      <div className="navbar container">
        <Navbar.Brand href="/">
          <img
            src={Logo}
            width="130"
            className="d-inline-block align-top"
            alt="Adhoc logo"
          />
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav.Item><Nav.Link ><span class="font-green">What's New</span></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link ><span class="font-green">Contact Us</span></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link ><Link to="/myaccount"><span class="font-green">My Account</span></Link></Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link ><Link onClick={handleClick}><span class="fa fa-shopping-cart cart-font font-green"></span></Link></Nav.Link></Nav.Item>
  {/* <Nav.Item><Nav.Link ><Link to="/cart"><span class="fa fa-shopping-cart cart-font font-green"></span> {JSON.parse(sessionStorage.getItem('SavedOfferData')).length}</Link></Nav.Link></Nav.Item> */}
        </Nav>
      </div>
      <header></header>
      <div className="header-divider"><div className="container"><div className="text-align">Ad Hoc 24</div></div></div>
      <div className="container">
        <Switch>
          <Route path='/' exact component={Home}></Route>
          <Route path='/myaccount' component={MyAccount}></Route>
          <Route path='/offer' component={OfferList}></Route>
          <Route path='/cart' component={CartDetails}></Route>
        </Switch>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    count: state
  }
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


//export default App;
