/* eslint-disable */ 

import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Navbar, Container, Nav} from 'react-bootstrap';
import { useState } from 'react';
// import coke from './assets/coke.jpeg'
// import hatban from './assets/hatban.jpeg'
// import udong from './assets/udong.jpeg'

import data from './data.js';


function App() {
  let [merchandise] = useState(data)


  return (
    <div className="App">
      <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand className="logo" href="#home">TaeToo's Market</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#Shop">Shop</Nav.Link>
            </Nav>
          </Container>
      </Navbar>
      <img className='main-image' src={process.env.PUBLIC_URL + '/assets/해변.jpeg'} width='100%'></img>
      <div className="container">
        <div className="row">
          <Merchan merchandise={merchandise}/>
          <Merchan merchandise={merchandise}/>
          <Merchan merchandise={merchandise}/>
        </div>
      </div>
    </div>
  );
}
function Merchan(props) {
  return(
    <div className="col-md-4">
      <img src={process.env.PUBLIC_URL + '/assets/coke.jpeg'} width="80%"/>
      <h4>{props.merchandise[0].title}</h4>
      <p>{props.merchandise[0].content}</p>
      <p>{props.merchandise[0].price}</p>
    </div>
  )
}  

export default App;
