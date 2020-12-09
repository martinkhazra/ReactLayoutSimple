import { Alert } from 'bootstrap';
import React, { Component } from 'react';
import { Container } from 'reactstrap';
export default class InsertDepartment extends Component {
    constructor() {
        super()
        this.sltcity = React.createRef();
        this.OnCityName = this.OnCityName.bind(this)
        this.state = { cities: [] }
        fetch('/api/cityname/CityInfo').then(x => x.json())
            .then(x => {
                this.state.cities = x;
                this.setState(this.state)
            })
    }

    //cityname
    OnCityName() {
        //var id = event.target.value
        var CityId = this.sltcity.current.value
        

    }
    render() {
        return (
            <Container>
                <form action="/api/Department/InsertDepartment" method="post">
                    <h1 style={{ color: "green" }}>Insert Department</h1>
                    <hr />
                    <div className="form-group">
                        <label style={{ color: "blue", fontSize: 20 }}>Department </label>
                        <input className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                        <label style={{ color: "blue", fontSize: 20 }}>City </label>

                        <select onChange={this.OnCityName}
                            className="form-control"
                            name="cityid" ref={this.sltcity}  >
                            <option value="-1"> --Select City--</option >
                            {
                                this.state.cities.map((d, idx) => {
                                    return (
                                        <option value={d.id}>{d.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <button className="brn btn-success">Add</button>
                </form>
            </Container>
        );
    }

}