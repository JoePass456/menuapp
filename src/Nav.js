import React from 'react';
import './App.css';
import { Row, Col, Button } from 'reactstrap';

function Nav(props) {    

    let navBar = props.menus.map(function (subMenu, index) {
        if (index !== props.current) {
            return (
                <Button onClick={props.clickMenuButton.bind(this, index)} key={index} type="button" className="btn btn-sm m-1">{subMenu.sub}</Button>
            )
        } else {
            return <Button key={index} type="button" className="btn btn-outline-danger btn-sm m-1">{subMenu.sub}</Button>
        }
    })

    return (
        <Row>
            <Col className="text-center ">
                {navBar}
            </Col>
        </Row>
    )
}

export default Nav