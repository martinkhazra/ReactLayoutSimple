import React, { Component } from 'react';
import { Container } from 'reactstrap';
export default class ListEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { employees: [] }

        fetch('/api/employee/getemployees').then(x => x.json())
            .then(x => {
                this.state.employees = x;
                this.setState(this.state);
                this.DeleteButton = this.DeleteButton.bind(this)
            })
    }
    DeleteButton(id) {
        this.state.employees.forEach((x, idx) => {
            if (x.id === id) {
                if (window.confirm(`Are you sure to delete the ${x.name} ${x.family}?`) === false) return;
                fetch(`/api/employee/DeleteEmployee/${id}`, { method: 'delete' })
                    .then(x => x.json())
                    .then(x => {
                        if (x === true) {
                            this.state.employees.forEach((x, idx) => {
                                if (x.id === id) {
                                    this.state.employees.splice(idx, 1);
                                    this.setState(this.state.employees);
                                    return;
                                }
                            })
                        } else {
                            alert('Error on employee deletion.')
                        }
                    })
                return;
            }
        })

    }

    render() {
        return (
            <Container className="themed-container">
                <div className="form-group">
                    <h1 style={{ color: "blue" }}>Employee List</h1>
                    <hr />
                    <table className="table table-borderd table-striped">
                        <thead>
                            <tr>
                                <td style={{ fontWeight: "bold" }}>Id</td>
                                <td style={{ fontWeight: "bold" }}>Name</td>
                                <td style={{ fontWeight: "bold" }}>Family</td>
                                <td style={{ fontWeight: "bold" }}>Salary</td>
                                <td style={{ fontWeight: "bold" }}>Mobile</td>
                                <td style={{ fontWeight: "bold" }}>Position</td>
                                <td style={{ fontWeight: "bold" }}>Department</td>
                                <td style={{ fontWeight: "bold" }}>Image</td>
                                <td style={{ fontWeight: "bold" }}>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.employees.map((emp, ind) => {
                                    return (
                                        <tr>
                                            <td style={{ textDecorationLine: "underline" }}>{emp.id}</td>
                                            <td>{emp.name}</td>
                                            <td>{emp.family}</td>
                                            <td>{emp.salary}</td>
                                            <td>{emp.mobile}</td>
                                            <td>{emp.positionname}</td>
                                            <td>{emp.departmentname}</td>
                                            <td>
                                                <img width="50" height="50" src={emp.img} />
                                            </td>
                                            <td>
                                                <button className="btn btn-danger" onClick={() => (this.DeleteButton(emp.id))} >Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Container>
        );
    }
}