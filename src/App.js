import React from 'react';
import './App.css';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import Nav from './Nav.js';
import Display from './Display.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentMenu: 0,
      itemArray: [],
    }

    this.menus = [
      {
        sub: 'About us',
        start: null,
        end: null
      },
      {
        sub: 'Appetizers',
        start: 0,
        end: 7
      }, {
        sub: 'Lunch',
        start: 8,
        end: 15
      }, {
        sub: 'Main Course',
        start: 16,
        end: 31
      }, {
        sub: 'Sides',
        start: 32,
        end: 39
      }, {
        sub: 'Desserts',
        start: 40,
        end: 43
      }
    ]   
  }

  componentDidMount() {
    //if local storage is empty..
    if (!localStorage.getItem('menuData')) {
      
      //Make API call..
      const url = 'https://entree-f18.herokuapp.com/v1/menu/25';
      function makeFirstCall() {
        return axios.get(url);
      }
      function makeSecondCall() {
        return axios.get(url);
      }

      //and when data comes back, copy to storage and state
      var self = this;
      Promise.all([makeFirstCall(), makeSecondCall()])
        .then(function (results) {
          const firstData = results[0].data.menu_items;
          const secondData = results[1].data.menu_items;
          const menuData = firstData.concat(secondData);
          localStorage.setItem('menuData', JSON.stringify(menuData));
          self.setState({itemArray: menuData});
        });

    //else if local storage has content.. set state    
    } else {      
      this.setState({itemArray: JSON.parse(localStorage.getItem('menuData'))});
    }    
  }

  //click handler for nav - changes current menu state
  clickMenuButton = (index) => {
    this.setState({ currentMenu: index });
  }

  render() {

    return (
      <Container>
        <Row>
          <Col className="text-center border bg-secondary">
            <h1>Joe's DeathStar Bistro</h1>
          </Col>
        </Row>
        <Nav current={this.state.currentMenu} menus={this.menus} clickMenuButton={this.clickMenuButton} />
        <Display current={this.menus[this.state.currentMenu]} items={this.state.itemArray} />
      </Container>
    );
  }
}

export default App;
