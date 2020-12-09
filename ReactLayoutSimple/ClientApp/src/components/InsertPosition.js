import React, { Component } from 'react';
import { Container } from 'reactstrap';
export default class InsertPosition extends Component {
    render() {
        return (
            <Container>
                <form action="/api/Position/InsertPosition" method="post">
                    <h1 style={{ color: "violet" }}>Insert Position</h1>
                    <hr />
                    <div className="form-group">
                        <label style={{ color: "blue", fontSize: 20 }}>Employee Position</label>
                        <input className="form-control" name="name" />
                    </div>
                    <button className="btn btn-success">Add</button>
                </form>
            </Container>
            
            );
    }
}