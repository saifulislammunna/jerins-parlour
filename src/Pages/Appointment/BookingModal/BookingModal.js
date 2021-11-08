 import React  from 'react';
import { Button, Form, Modal  } from 'react-bootstrap';

const BookingModal = ({show,handleClose,booking}) => {
   
const  {name} = booking;
  return (
    <>
  

      <Modal show={show} onHide={handleClose}>
         
        <Modal.Body> 
        <Form>
  <Form.Group className="mb-3" controlId="formBasicText">
    
    <Form.Control type="text" placeholder="" />
     
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Enter email" />
     
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Enter email" />
     
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Enter email" />
     
  </Form.Group>

   
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
        </Modal.Body>
        
      </Modal>
    </>
    );
};

export default BookingModal;