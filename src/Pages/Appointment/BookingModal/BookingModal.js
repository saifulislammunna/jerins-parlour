 import React  from 'react';
import { Button, Form, Modal  } from 'react-bootstrap';

const BookingModal = ({show,handleClose,booking}) => {
   
const  {name} = booking;

const handleBookingSubmit = e =>  {
     alert('submiting');
    //  collect data from the form

    // send data to the server
 

     handleClose();
     e.preventDefault();
}
  return (
    <>
  

      <Modal show={show} onHide={handleClose}>
         
        <Modal.Body> 
        <Form onSubmit={ handleBookingSubmit }>
  <Form.Group className="mb-3" controlId="formBasicText">
    
    <Form.Control disabled type="text" placeholder= {name}/>
    
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicText">
    
    <Form.Control type="text" placeholder="Your Name" />
     
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Control type="email" placeholder="Enter email" />
     
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicNumber">
    
    <Form.Control type="number" placeholder="Phone Number" />
     
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