import React, { Component } from 'react';
import { Container } from 'reactstrap';
export default class InsertEmployee extends Component {
    constructor() {
        super()
        this.sltcountries = React.createRef();
        this.sltcities = React.createRef();
        this.state = { selectedimage: "" }
        this.onImageChange = this.onImageChange.bind(this);
        this.onCountryOption = this.onCountryOption.bind(this);
        this.onCitiesoption = this.onCitiesoption.bind(this);
        this.state = { departments: [], positions: [], countries: [], cities: [] }

        fetch('/api/country/GetCountries').then(x => x.json())
            .then(x => {
                this.state.countries = x;
                this.setState(this.state)
            })

        //fetch('/api/department/GetDepartmentInfo').then(x => x.json())
        //    .then(x => {
        //        this.state.departments = x;
        //        this.setState(this.state)
        //    })
        fetch('/api/position/GetPositionInfo').then(x => x.json())
            .then(x => {
                this.state.positions = x;
                this.setState(this.state)


            })
    }
    onImageChange(event) {
        let reader = new FileReader();
        reader.onloadend = x => {
            this.state.selectedimage = x.target.result;
            this.setState(this.state);
        };
        reader.readAsDataURL(event.target.files[0])
    }
    //Country Name
    onCountryOption() {

        var CountryId = this.sltcountries.current.value

        fetch(`api/city/Getcities/${CountryId}`).then(x => x.json())
            .then(x => {
                this.state.cities = x;
                this.setState(this.state)
            })
    }
    //City Name
    onCitiesoption() {
        var CityId = this.sltcities.current.value
        //alert(CityId)
        fetch(`api/department/GetDepartment/${CityId}`).then(x => x.json())
            .then(x => {
                this.state.departments = x;
                this.setState(this.state)
            })
    }
    render() {
        return (
            <Container>
                <form action="/api/Employee/InsertEmployee"
                    encType="multipart/form-data"
                    method="post">
                    <h1 style={{ color: "green" }}>Employee Registration</h1>
                    <hr />

                    <div className="form-group">
                        <label style={{ color: "blue", fontSize: 20 }}>Country </label>

                        <select onChange={this.onCountryOption} className="form-control" ref={this.sltcountries} >
                            < option value="-1"> --Select Country--</option >

                            {
                                this.state.countries.map((d, idx) => {
                                    return (
                                        <option value={d.id}>{d.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label style={{ color: "blue", fontSize: 20 }}
                            >City </label>

                        <select onChange={this.onCitiesoption} name="cityid"
                            className="form-control" ref={this.sltcities}  >
                            < option > --Select Cities--</option >
                            {
                                this.state.cities.map((d, idx) => {
                                    return (
                                        <option value={d.id}>{d.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>

                    <div className="form-group">
                        <label style={{ color: "blue", fontSize: 20 }}>Departmant </label>

                        <select className="form-control" name="departmentId" >
                            < option > --Select Department--</option >
                            {
                                this.state.departments.map((d, idx) => {
                                    return (
                                        <option value={d.id}>{d.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label style={{ color: "blue", fontSize: 20 }}>Employee Name </label>
                        <input className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                        <label style={{ color: "blue", fontSize: 20 }}>Employee Family </label>
                        <input className="form-control" name="family" />
                    </div>
                    <div className="form-group">
                        <label style={{ color: "blue", fontSize: 20 }}>Salary </label>
                        <input className="form-control" name="salary" />
                    </div>
                    <div className="form-group">
                        <label style={{ color: "blue", fontSize: 20 }}>Mobile </label>
                        <input className="form-control" name="mobile" />
                    </div>
                    <div className="form-group">
                        <label style={{ color: "blue", fontSize: 20 }}>Position </label>
                        <select className="form-control" name="positionId">
                            < option > --Select Employee Position--</option >
                            {
                                this.state.positions.map((pos, idx) => {

                                    return (
                                        <option value={pos.id}>{pos.name}</option>

                                    )
                                })
                            }
                        </select>

                    </div>
                    <div className="custom-file">
                        <input onChange={this.onImageChange} className="custom-file-input" type="file" name="image" />
                        <label className="custom-file-label" style={{ color: "blue", fontSize: 20 }}>Image </label>
                    </div>
                    <div className="form-group" style={{ marginTop: "30px" }}>
                        <img width="80" height="80"
                            style={{ borderRadius: "50%" }} src={this.state.selectedimage} />
                    </div>
                    <hr />
                    <button className="btn btn-success">Add Employee</button>

                </form>
            </Container>
        );
    }
}