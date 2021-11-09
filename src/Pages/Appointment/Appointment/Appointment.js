import React from 'react';
 
import Navigation from '../../Shared/Navigation/Navigation';
import AvailableAppointments from '../AvailableAppointments/AvailableAppointments';
/* import BookingModal from '../BookingModal/BookingModal'; */



const Appointment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <AvailableAppointments></AvailableAppointments>
             
        </div>
    );
};

export default Appointment;