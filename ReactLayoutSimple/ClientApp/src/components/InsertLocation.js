import { extend } from 'jquery';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
export default class InsertLocation extends Component {

    render() {
        return (

            <Container>
                <div>
                    <form action="api/Country/InsertLocation" method="post">
                        <div className="form-group">
                            <label style={{ color: "blue", fontSize: 20 }}>Country Name</label>
                            <iput className="form-control" name="name" />
                        </div>
                        <button className="btn btn-success">+Add Country</button>
                    </form>
                </div>
                <hr/>
                <div>
                    <form action="api/City/InsertLocation" method="post">
                        <div className="form-group">
                            <label style={{ color: "blue", fontSize: 20 }}>City Name</label>
                            <iput className="form-control" name="name" />
                        </div>
                        <button className="btn btn-success">+Add City</button>
                    </form>
                </div>

            </Container>
        );
    }
}
