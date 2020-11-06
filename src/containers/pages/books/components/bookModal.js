import { Modal, Button } from 'react-bootstrap';
import React from "react";

function BookModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header>
        <Modal.Title id="contained-modal-title-vcenter">
          Book {props.book.title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={props.book.thumbnailURL}/>
        <p className="long-description">{props.book.longDescription}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onClose}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}


export default BookModal;
