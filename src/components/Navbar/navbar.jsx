import React from 'react';
import Filter from "../Filter/filter";
import {Nav, Row, Col} from 'react-bootstrap'
import classes from './navbar.module.css';
import {useState, useEffect} from 'react';

import {Link} from 'react-router-dom'

const Navbar = (props) => {

    const [hide,
        setHide] = useState(true);

    function clickHandler() {
        setHide(!hide);
    }

    return (
        <Row className={classes.Nav}>
            <Col sm={5}>
                <Row>
                    <Col>
                        <Link to="/">
                            <p
                                className={`${classes.Navlink} props.view == "NearestRides" ? "active" : ""`}
                                href="/">Nearest rides</p>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/upcoming">
                            <p
                                className={`${classes.Navlink} props.view == "UpcomingRides" ? "active" : ""`}
                                href="/upcoming">Upcoming rides(4)</p>
                        </Link>
                    </Col>
                    <Col>
                        <Link to="/past">
                            <p
                                className={`${classes.Navlink} props.view == "PastRides" ? "active" : ""`}
                                href="/past">Past rides (3)</p>
                        </Link>
                    </Col>
                </Row>

            </Col>
            <Col md={{
                offset: 5,
                span: 2
            }}>
                <Filter onClick={clickHandler} hide={hide}/>
            </Col>
        </Row>
    );
};

export default Navbar;