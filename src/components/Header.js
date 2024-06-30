import React, {Component} from "react";
import { Nav, Container, NavLink, Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import logo from './logo.svg'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Actual from "../pages/Actual";
import Archive from "../pages/Archive";
import Admin from "../pages/Admin";
import Sport1 from "../pages/result/Sport1.js";
import Sport2 from "../pages/result/Sport2.js";
import Sport3 from "../pages/result/Sport3.js";
import Sport4 from "../pages/result/Sport4.js";
import Sport5 from "../pages/result/Sport5.js";
import Sport6 from "../pages/result/Sport6.js";
import Archive2018 from "../pages/archive/Archive2018.js";
import Archive2019 from "../pages/archive/Archive2019.js";
import Archive2020 from "../pages/archive/Archive2020.js";
import Archive2021 from "../pages/archive/Archive2021.js";
import Archive2022 from "../pages/archive/Archive2022.js";
import Archive2023 from "../pages/archive/Archive2023.js";

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

            <Router>
                <Routes>
                    <Route exact path="/" element={<Home/>} />
                    <Route exact path="/actual" element={<Actual/>} />
                    <Route exact path="/archive" element={<Archive/>} />
                    <Route exact path="/admin" element={<Admin/>} />
                    <Route exact path="/actual/1" element={<Sport1/>} />
                    <Route exact path="/actual/2" element={<Sport2/>} />
                    <Route exact path="/actual/3" element={<Sport3/>} />
                    <Route exact path="/actual/4" element={<Sport4/>} />
                    <Route exact path="/actual/5" element={<Sport5/>} />
                    <Route exact path="/actual/6" element={<Sport6/>} />
                    <Route exact path="/archive/2018" element={<Archive2018/>} />
                    <Route exact path="/archive/2019" element={<Archive2019/>} />
                    <Route exact path="/archive/2020" element={<Archive2020/>} />
                    <Route exact path="/archive/2021" element={<Archive2021/>} />
                    <Route exact path="/archive/2022" element={<Archive2022/>} />
                    <Route exact path="/archive/2023" element={<Archive2023/>} />
                </Routes>
            </Router>
            </>
        )
    }
}
