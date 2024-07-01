import React, {Component} from "react";
import { Nav, Container, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import logo from './logo.svg'


export default class Header extends Component{
    render(){
        return(
            <>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
                <Container>
                    <NavbarBrand href="/">
                        <img
                            src={logo}
                            height="60"
                            width="150"
                            className="d-inline-block allign-top"
                            alt="logo"
                        />
                    </NavbarBrand>
                    <NavbarToggle aria-controls="responsive-navbar-nav" />
                    <NavbarCollapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <NavLink href="/"> Главная</NavLink>
                            <NavLink href="/actual"> Текущие Соревнования</NavLink>
                            <NavLink href="/archive"> Архив</NavLink>
                            <NavLink href="/admin"> Админка</NavLink>
                        </Nav>
                    </NavbarCollapse>
                </Container>
            </Navbar>

            
            </>
        )
    }
}
