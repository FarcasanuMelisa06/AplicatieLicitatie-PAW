import {Component} from "react";
import "./App.css";
import "./ProductList";
import {Navbar, NavbarBrand} from 'reactstrap';
import { Nav, Form, FormControl } from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class AppNavbar extends Component {
    constructor(props) {
        super(props);
        this.state = {isOpen: false};
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (

            <Navbar className="app-navbar" dark expand="md">
                <Nav.Item><Nav.Link className="colorWhite Home" href="/">Home</Nav.Link></Nav.Item>

                <Form className="form-center">
                    <FormControl type="text"
                                 placeholder="Search"
                                 className="" />
                </Form>

                <Nav className="ml-auto">
                    <Nav.Item ><Nav.Link className="colorWhite" href="/products/new">Add product</Nav.Link></Nav.Item>
                    <Nav.Item ><Nav.Link className="colorWhite" href="/productEdit">Edit</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="colorWhite" href="/register">Register</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link className="colorWhite" href="/login">Sign in</Nav.Link></Nav.Item>
                </Nav>
            </Navbar>
        );
    }

}