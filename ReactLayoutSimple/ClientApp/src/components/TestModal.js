import React, { Component } from 'react';
import { Container } from 'reactstrap';

import { Modal } from 'reactstrap'

export default class TestModal extends Component {

    render() {
        return (

            <Modal show={true}>
                <Modal.Header>Header</Modal.Header>
                <Modal.Body>Body</Modal.Body>
                <Modal.Footer>Footer</Modal.Footer>
            </Modal>


        );
    }
}
