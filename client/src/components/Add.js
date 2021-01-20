import React, { useState } from "react";
import { Button, ListGroup, Row, Col } from "react-bootstrap";
import axios from 'axios';

function Add() {
 const [name,setName]=useState('')
 const [email,setEmail]=useState('')
 const [pwd,setPwd]=useState('')

const handleSubmit=(e)=>{
  // e.preventDefault();
  let user = {name, email, pwd}
  console.log(user)
      axios.post('http://localhost:4000/api/users/', user)
      .then(res => console.log(res.data))
      .catch(err=>console.log(err,'error'));

    window.location = '/users';

}
  return (

    <form onSubmit={handleSubmit}>
      <Row className="mt-5" >
        <Col lg={3} md={2} sm={1} xs={1}></Col>
        <Col lg={6} md={8} sm={10} xs={10}>
          <ListGroup>
            <ListGroup.Item variant="primary" className="col-headers">
              Register New User
            </ListGroup.Item>
            <ListGroup.Item variant="light">
              <Row>
                <Col className="col-headers">Name</Col>
                <Col>
                  <input type="text" name='name' onChange={(e)=>setName(e.target.value)} />
                </Col>
              </Row>
              <Row>
                <Col className="col-headers">Email</Col>
                <Col>
                  <input type="text" name='email' onChange={(e)=>setEmail(e.target.value)} />
                </Col>
              </Row>
              <Row>
                <Col className="col-headers">Password</Col>
                <Col>
                  <input type="password" name='pwd' onChange={(e)=>setPwd(e.target.value)} />
                </Col>
              </Row>
              <Row className="my-2">
                <Col className="text-center">
                  <Button type='submit' variant="dark" size="md">
                    Register User
                  </Button>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={3} md={2} sm={1} xs={1}></Col>
      </Row>
    </form>
  );
}

export default Add;
