import React from 'react';
import {Container} from 'react-bootstrap';
import map from '../../assets/images/map.jpg'
import classes from './ride.module.css'
import {Col, Row} from 'react-bootstrap';

export const Ride = (props) => {

    const closest = (ride, station_code) => {
        return ride
            .station_path
            .reduce(function (prev, curr) {
                return Math.abs(curr - station_code) < Math.abs(prev - station_code)
                    ? curr
                    : prev;
            });
    };

    return (
        <Container fluid className={classes.Con}>
            <div className={classes.Ride}>
                <Row>

                    <Col xl={4} lg={6} className="p-3">
                        <img className={classes.Rideimg} src={map} alt="map"/>
                    </Col>
                    <Col xl={8} lg={6} className="p-3">
                        <div>
                            <p>
                                <span className={classes.Line}>Ride Id
                                </span>: {props.ride.id}
                            </p>
                            <p>
                                <span className={classes.Line}>Origin Station
                                </span>: {props.ride.origin_station_code}
                            </p>
                            <p>
                                <span className={classes.Line}>station_path
                                </span>: {JSON.stringify(props.ride.station_path)}
                            </p>
                            <p>
                                <span className={classes.Line}>
                                    {new Date().getDate()}th Feb 2022{" "} {`${new Date().getHours()}:${new Date().getMinutes()}`}
                                </span>

                            </p>
                            <p>
                                <span className={classes.Line}>Distance
                                </span>: {closest(props.ride, props.station_code) - props.station_code}
                            </p>
                        </div>
                    </Col>

                </Row>
            </div>
        </Container>
    );
};

export default Ride;