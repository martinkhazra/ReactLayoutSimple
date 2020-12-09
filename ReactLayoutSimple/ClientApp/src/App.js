import React, { Component, createRef } from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import InsertEmployee from './components/InsertEmployee';
import ListEmployee from './components/ListEmployee';
import SearchEmployee from './components/SearchEmployee';
import InsertDepartment from './components/InsertDepartment';
import InsertPosition from './components/InsertPosition';
import TestModal from './components/TestModal';
//import  Default from './components/Default';

export default class App extends Component {

    render() {
        return (
            <div>
                <BrowserRouter>
                   
                    <Layout>
                       
                        <Route path='/home' component={Home} />
                        <Route path='/insertemployee' component={InsertEmployee} />
                        <Route path='/listemployee' component={ListEmployee} />
                        <Route path='/searchemployee' component={SearchEmployee} />
                        <Route path='/insertdepartment' component={InsertDepartment} />
                        <Route path='/insertposition' component={InsertPosition} />
                        <Route path='/testmodal' component={TestModal} />
                        
                    </Layout>
                </BrowserRouter>
              
            </div>
        );
    }
}
