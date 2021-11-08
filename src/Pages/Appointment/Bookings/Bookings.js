import React , { useState }  from 'react';
import {Button,CardGroup,Card} from 'react-bootstrap';
 
import BookingModal from '../BookingModal/BookingModal'; 
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons'; */
import './Bookings.css'


/* service component */
const  Bookings = ({ booking}) => {
    const {img,name,description } = booking ;
   /*  const url = `/service/${id}`; */
  /*  const [openBooking, setBookingOpen] = useState(false);
   const handleBookingOpen = () => setBookingOpen(true);
   const handleBookingClose = () => setBookingOpen(false); */
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
    return (
       
        <>
            <div className="single-service">
              {/* card group added */}
            <CardGroup >
  <Card  className=" ">
    <Card.Img variant="top" src={img} className="  p-5"  width="450" height="350" />
    <Card.Body>
      <Card.Title className="fs-2">   {name}</Card.Title>
       
      < p className="text-start"> {description}</p>
      <div>
      <Button onClick={handleShow} >   Book Now</Button>  
      </div>
    </Card.Body>
      
    
    
      
    
  </Card>
  </CardGroup>
    </div>
    <BookingModal
    booking={booking}
    show={show}
    handleClose ={handleClose}
    ></BookingModal> 
            
       </>
        
    );
};
/* exporting service component */
export default  Bookings;