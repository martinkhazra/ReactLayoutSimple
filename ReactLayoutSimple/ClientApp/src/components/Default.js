import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Home from './Home';
export default class Default extends Component {
    render() {
        return (
            <Container>
                <div className="form-group">
                    <Home />
                </div>
            </Container>
        );
    }
}