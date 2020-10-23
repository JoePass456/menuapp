import React from 'react';
import './App.css';
import { Row, Col, DropdownItem } from 'reactstrap';

function Display(props) {

    let itemDisplay = [];

    // if menu not loaded, shows loading message
    if (props.items.length === 0) {

        itemDisplay.push(
            <h4 key='1'>Loading...</h4>
        );

    } else {
        //Shows the menu
        if (props.current.start != null) {

            for (let x = props.current.start; x <= props.current.end; x++) {
                let halves = props.items[x].description.split('with');
                let price = '$' + Math.round(halves[0].length / 2) + '.' + halves[1].length;
                itemDisplay.push(<li key={x}><h4>{halves[0]} - {price}</h4><p>- with{halves[1]}</p></li>);
            }

        } else {
            //Shows the "about us" screen
            itemDisplay.push(
                <li key="1">
                    <h4>Our Mission:</h4>
                    <p>Whether you're a Storm Trooper or a Sith Lord, you deserve to be treated to a great meal!</p>
                </li>
            )
            itemDisplay.push(
                <li key="2">
                    <h4>Our Location:</h4>
                    <p>Right next to the viewport on deck 120, we offer a beautiful view of whatever 
                    planet we are currently threating with annihilation!</p>
                </li>
            )
            itemDisplay.push(
                <li key="3">
                    <h4>Our Hours:</h4>
                    <p>Oppressing the galaxy is a full time job, so we are open X hours* a day!</p>
                    <p>* X is set equal to the number of hours per rotation of the current local planet.</p>
                </li>
            )

        }
    }


    return (

        <div>
            <Row>
                <Col className="text-center ">
                    <h2>{props.current.sub}</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ul>
                        {itemDisplay}
                    </ul>
                </Col>
            </Row>
        </div>
    )
}

export default Display