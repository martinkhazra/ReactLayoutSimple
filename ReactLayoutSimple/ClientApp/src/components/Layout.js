import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
export default class Layout extends Component {
    render() {
        return (
            <Container>
                <Container>
                    <header>
                        <Navbar className="navbar-expand-sm bg-dark navbar-toggleable-sm
                             border-bottom box-shadow mb-3">
                            <NavbarBrand tag={Link} to='/home'>
                                HEDCO
                            </NavbarBrand>
                            <ul className="navbar-nav flex-grow">
                                <NavItem>
                                    <NavLink tag={Link} to='/home'>
                                        Home
                                    </NavLink>
                                </NavItem>
                                <NavItem >
                                    <NavLink tag={Link} to='/insertemployee'>
                                        Register Employee
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/listemployee'>
                                        Employee Archive Info
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/searchemployee'>
                                        Employee Search
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/insertdepartment'>
                                        Insert Department
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} to='/insertposition'>
                                        Insert Position
                                    </NavLink>
                                </NavItem>
                            </ul>
                        </Navbar>
                    </header>
                </Container>
                <Container>
                    {this.props.children}
                </Container>
                <Container className="bg-secondary text-center">
                    <h>Copyright @2020 by HEDCO Group</h>
                </Container>

            </Container>

        )
    }

}