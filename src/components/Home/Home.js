import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Home.css';
import logo from './bribe.svg'

const Home = (props) => {
    return (
        <Row>
            <Col md={12}>
                <div className={'homeText'}>
                    <p>WELCOME TO RICHARD'S BROKERAGE</p>
                    <img src={logo} alt="Money changing hands" height="300"></img>
                </div>
            </Col>
        </Row>
    )
}

export default Home;