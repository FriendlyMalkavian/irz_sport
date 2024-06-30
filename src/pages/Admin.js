import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container'; // Импортируем контейнер Bootstrap

export default class Admin extends Component {
    render() {
        return (
            <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
                <Form className='w-50'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Admin Login</Form.Label>
                        <Form.Control type="login" placeholder="Enter login" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Admin Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className="mb-3" variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        );
    }
}