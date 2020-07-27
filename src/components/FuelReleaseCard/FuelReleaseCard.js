import React, { useState } from 'react'
import './FuelReleaseCard.css'
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'


function FuelReleaseCard(props) {

  const [open, setOpen] = useState(false)
  const toggleClicked = e => {
    setOpen(!open)
  }
    return (
        <Card>
            <Card.Header>
            {props.details.flightNumber || '-'}
            <a className="collapsible-header header-collapse">
              <FontAwesomeIcon icon={open?faChevronUp:faChevronDown} onClick={toggleClicked}/>
            </a>
            </Card.Header>
            <Card.Body>
            <div className={open?'d-none':'homeCard__bottom d-flex flex-row flex-nowrap'} >
                <div className="homeCard__left">
                  <h2 className="homeCard__left--info">
                    <i className="fuelstation"></i> {props.details.location.iataCode} { props.details.destination ? "-- " + props.details.destination : ''}
                  </h2>
                </div>
                <div className="homeCard__center d-flex flex-column flex-nowrap">

                  <div className="homeCard__center__info d-flex flex-row flex-nowrap">
                    <p className="homeCard__center__info--time">
                      <b>Arriving:</b> {props.details.estArrivalTime}
                    </p>
                    <p className="homeCard__center__info--code">
                      <b>Aircraft Registration:&nbsp;</b> {props.details.aircraftRegistration || "-"}</p>
                  </div>

                  <div className="homeCard__center__info">
                    <p className="homeCard__center__info--time">
                      <b>Departing:</b> {props.details.estDepartureTime}
                    </p>
                    <p className="homeCard__center__info--code">
                      <b>Volume:</b> {props.details.estUpliftVolume ? props.details.estUpliftVolume+' '+props.details.estUpliftMeasure : 'Pilots Request'}</p>
                  </div>

                </div>
                <div className="homeCard__right">

                  <div className="homeCard__center__info">
                      <b>Status:&nbsp;{props.details.status}</b>
                  </div>
                </div>
              </div>
              <div className={open?null:'d-none'}>

              <div className="panel-collapse" id="collapsible-card-body2-{{$index}">
              <div className="home-card panel-body">

                <div className="home-card__right">
                  <div className="home-card__right--location">
                    <div className="home-card__right--location--box">
                      <div className="home-card__right--location--box__small-box">
                        <h4>Location</h4>
                        <h4 className="home-card__right__title">
                          <span className="home-card__right__title--info">
                            <i className="fuelstation"></i> {props.details.location.iataCode}
                          </span>
                          <i className="flighticon"></i>
                          <span className="home-card__right__title--info">{props.details.destination}
                          </span>
                        </h4>
                      </div>
                      <h4 className="home-card__right--header" ng-show="props.details.status != 'unavailable'">
                        <a className="home-card__  v--header--edit" ng-click="vm.editFuelrelease(card)" ng-show="props.details.status != 'cancelled'" analytics-on
                           analytics-event="Start edit fuel release" analytics-category="Fuel Release">
                          <i className="fa fa-edit"></i>
                        </a>
                        <p className="home-card__right--header__edit_delete" ng-click="vm.editFuelrelease(card)" ng-show="props.details.status != 'cancelled'">Edit Release</p>
                        <a data-target="cancelFuelRequest" className="home-card__right--header--delete" modal ng-click="vm.markForDelete(card)"
                            ng-show="props.details.status != 'cancelled'">
                          <i className="fa fa-trash"></i><span className="home-card__right--header__edit_delete" >Cancel Release</span>
                        </a>

                        
                      </h4>
                    </div>
                    <div className="home-card__right--location--contact">
                      <span className="home-card__right--location--contact--header">Fueling location contacts:</span>
                      <div ng-repeat="contact in props.details.location.contactDetails.LocationDetailValues track by $index">
                        {/* <span className="home-card__right--location--contact--header">{props.contact.value.split(' ').length > 1 ? props.contact.value.split(' ')[0] : ''}</span>
                        <span className="home-card__right--location--contact--info">{props.contact.value.split(' ')[props.contact.value.split(' ').length-1]}</span> */}
                      </div>
                    </div>

                  </div>
                  <div className="home-card__right--time_status">
                    <div className="home-card__right--time_status--left">
                      <div className="home-card__right--time_status__time">
                        <h4>Time & Date</h4>
                        <h4 className="home-card__right--time_status__time__details">
                          <span className="home-card__right--time_status__time__details--arr">Arriving:&nbsp;
                            <span className="home-card__right--time_status__time__details--info"> {props.details.estArrivalTime}
                            </span>
                          </span>

                          <span className="home-card__right--time_status__time__details--dep">Departing:&nbsp;
                            <span className="home-card__right--time_status__time__details--info"> {props.details.estDepartureTime}
                            </span>
                          </span>

                          <span className="home-card__right--time_status__time__details--req">Requested Fueling date:&nbsp;
                            <span ng-if="props.details.refuellingTime" className="home-card__right--time_status__time__details--info refuellingDate">&nbsp; &nbsp; {props.details.refuellingDate }
                            </span>
                            <span ng-if="!props.details.refuellingTime" className="home-card__right--time_status__time__details--info">&nbsp; &nbsp;-</span>
                          </span>

                          <span className="home-card__right--time_status__time__details--req">Requested Fueling time:&nbsp;
                            <span ng-if="props.details.refuellingTime" className="home-card__right--time_status__time__details--info refuellingTime">&nbsp; &nbsp; {props.details.refuelTime}
                            </span>
                            <span ng-if="!props.details.refuellingTime" className="home-card__right--time_status__time__details--info">&nbsp; &nbsp;-</span>
                          </span>


                        </h4>
                      </div>
                    </div>
                    <div className="home-card__right--time_status--right">
                      <div className="home-card__right--time_status__status">
                        <h4>Status</h4>
                        <h4 className="home-card__right--time_status__status__air--right sts">
                          <span className="sts__box">
                            <span className="sts__box--grade sts__box--grade__present--{props.details.status}">{props.details.status === 'unavailable'?'Please contact the Air BP Out of Hours team':props.details.status}</span>
                            <span className="sts__box__box">
                              <span className="sts__box__box--reference">Reference Number: {props.details.referenceNumber}</span>
                              <span className="sts__box__box--create">Created: {props.details.createdAt }</span>
                              <span className="sts__box__box--create" ng-show="props.details.updatedAt">Updated: {props.details.updatedAt }</span>
                            </span>
                          </span>
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="home-card__right--fuel_aircraft">
                  <div className="home-card__right--fuel_aircraft--left">
                    <div className="home-card__right--fuel_aircraft__fuel">
                      <h4>Fuel</h4>

                      <span className="home-card__right--fuel_aircraft__fuel--title">Volume:&nbsp;
                        <span className="home-card__right--fuel_aircraft__fuel--info"> {props.details.estUpliftVolume ? props.details.estUpliftVolume+' '+props.details.estUpliftMeasure : 'Pilots Request'}</span>
                      </span>


                      <span className="home-card__right--fuel_aircraft__fuel--title__type">Type:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <div className="home-card__right--fuel_aircraft__fuel--lines_f"></div>
                        <div className="home-card__right--fuel_aircraft__fuel--lines_l"></div>
                        <div className="home-card__right--fuel_aircraft__fuel--type"> {props.details.fuelGrade || "-"}</div>
                      </span>


                      <span className="home-card__right--fuel_aircraft__fuel--title">Delivery:&nbsp;
                        <span className="home-card__right--fuel_aircraft__fuel--info">Level 1</span>
                      </span>

                      <span className="home-card__right--fuel_aircraft__fuel--title" nkg-show="props.details.intoPlaneLabel && !vm.isUsaLoc">Into Plane Agent:&nbsp;
                        <span className="home-card__right--fuel_aircraft__fuel--info">{props.details.intoPlaneValue}</span>
                      </span>
                      {/* <span className="home-card__right--fuel_aircraft__fuel--title" ng-show="props.details.intoPlaneLabel && vm.isUsaLoc">{props.details.intoPlaneLabel}:&nbsp;
                        <span className="home-card__right--fuel_aircraft__fuel--info">No into-plane Agent</span>
                      </span> */}

                    </div>
                  </div>
                  <div className="home-card__right--fuel_aircraft--right">
                    <div className="home-card__right--fuel_aircraft__aircraft">
                      <h4>Aircraft</h4>

                      <span className="home-card__right--fuel_aircraft__aircraft--title">Type:&nbsp;
                        <span className="home-card__right--fuel_aircraft__aircraft--info"> {props.details.aircraftType || "-"}</span>
                      </span>

                      <span className="home-card__right--fuel_aircraft__aircraft--title">Aircraft Registration:&nbsp;
                        <span className="home-card__right--fuel_aircraft__aircraft--info"> {props.details.aircraftRegistration || "-"}</span>
                      </span>

                      <span className="home-card__right--fuel_aircraft__aircraft--title">Operator:&nbsp;
                        <span className="home-card__right--fuel_aircraft__aircraft--info"> {props.details.flightOperator}</span>
                      </span>

                    </div>
                  </div>
                </div>

                

                <div className="home-card__right--notes">
                  <h4>Notes</h4>
                  <span className="home-card__right--notes__info">{props.details.additionalDetails || "-"}</span>
                </div>

                </div></div>

              </div>
            </Card.Body>
        </Card>
    )
}

export default FuelReleaseCard
