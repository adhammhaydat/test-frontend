import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export class FormModal extends Component {
  render() {
    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handelClose} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.props.handleUpdat}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>instrucrto</Form.Label>
                <Form.Control type="text" name="instructions" Value={this.props.infoModal.instructions} />

                <Form.Label>photo</Form.Label>
                <Form.Control type="text" name="photo" Value={this.props.infoModal.photo}/>
                <Form.Label>name</Form.Label>
                <Form.Control type="text" name="name" Value={this.props.infoModal.name}/>
              
                
                <Button type="submit">submit</Button>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.handelClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default FormModal;
