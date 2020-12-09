import React, { Component } from 'react';
import { Container } from 'reactstrap';
export default class SearchEmployee extends Component {
    constructor() {
        super()
        this.iptsearch = React.createRef();
        this.Oniptsearch = this.Oniptsearch.bind(this)
        this.state = { employees: [] }
    }
    Oniptsearch() {
        var txtsearch = this.iptsearch.current.value
        fetch(`api/search/getemployees/${txtsearch}`).then(x => x.json())
            .then(x => {
                //alert(JSON.stringify(x))
                this.state.employees = x;
                this.setState(this.state)
            })

    }
    render() {
        return (
            <Container>
                <div className="form-group">
                    <h1 style={{ color: "blue" }}>Employee Search</h1>
                    <hr />
                </div>
                <div className="form-group">
                    <label style={{ color: "blue", fontSize: 20 }}>Search</label>
                    <input className="form-control" onChange={this.Oniptsearch} ref={this.iptsearch} />
                </div>
                <div>
                    <table className="table table-striped">

                        {
                            this.state.employees.map((emp, idx) => {
                                return (
                                    <tr>
                                        <td>{emp.name}</td>
                                        <td>{emp.family}</td>
                                    </tr>
                                )
                            })
                        }

                    </table>
                </div>
            </Container>
        );
    }
}