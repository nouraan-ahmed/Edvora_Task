import React from 'react';
import userimage from '../../assets/images/user.jpg';
import {user} from '../../data/User';
import {Col, Row} from 'react-bootstrap';
import classes from './header.module.css';

const Header = () => {
    return (
        <header className={classes.Header}>
            <Row className='text-white'>
                <Col sm={10}>
                    <h1 className={classes.Brand}>Edvora</h1>
                </Col>
                <Col sm={2}>
                    <Row>
                        <Col>
                            <p className={classes.User}>{user.name}</p>
                        </Col>
                        <Col><img className={classes.Headerimg} src={userimage} alt="user"/></Col>
                    </Row>

                </Col>
            </Row>

        </header>
    );
};

export default Header;