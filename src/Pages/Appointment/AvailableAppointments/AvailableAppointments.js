import React from 'react';
import skinCareTreatement from '../../../Icon/Group 1374.png';
import antiAgeFaceTreatment from '../../../Icon/Group 1373.png';
import hairCoolStyling from '../../../Icon/Group 1372.png';
import  Bookings from '../Bookings/Bookings';
 

const bookings = [
    {
        name : 'Skin Care Treatement',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid reiciendis incidunt sequi veritatis error ad numquam repellendus. In, eius!',
        img:  skinCareTreatement

    },
    {
        name : 'Anti Age Face Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid reiciendis incidunt sequi veritatis error ad numquam repellendus. In, eius!',
        img:  antiAgeFaceTreatment

    },
    {
        name : 'Hair Cool Styling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid reiciendis incidunt sequi veritatis error ad numquam repellendus. In, eius!',
        img:  hairCoolStyling

    },
]
const AvailableAppointments = () => {
    return (
        <div >
             <h2 className="text-start p-5 pb-2">Our Services:</h2>
         <div className="service-container p-5">
         {
               bookings.map( booking => < Bookings
                booking ={booking}
                key ={booking.name}
              
               >

               </ Bookings>)
             }

         </div>
        </div>
    );
};

export default AvailableAppointments;