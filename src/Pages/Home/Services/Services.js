import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import skinCareTreatement from '../../../Icon/Group 1374.png';
import antiAgeFaceTreatment from '../../../Icon/Group 1373.png';
import hairCoolStyling from '../../../Icon/Group 1372.png';
import './Services.css';
const services = [
    {
        name : 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid reiciendis incidunt sequi veritatis error ad numquam repellendus. In, eius!',
        img:  skinCareTreatement

    },
    {
        name : 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid reiciendis incidunt sequi veritatis error ad numquam repellendus. In, eius!',
        img:  antiAgeFaceTreatment

    },
    {
        name : 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquid reiciendis incidunt sequi veritatis error ad numquam repellendus. In, eius!',
        img:  hairCoolStyling

    },
]
const Services = () => {

  /*   const [ services, setServices] = useState([]);
     
    useEffect(()=>{
      fetch(`./services.json`)
      .then(res => res.json())
      .then(data => setServices(data));
    },[]) */
    return (
        <div >
             <h2 className="text-start p-5 pb-2">Our Services:</h2>
         <div className="service-container p-5">
         {
               services.map( service => <Service
                service ={service}
                key ={service.name}
              
               >

               </Service>)
             }

         </div>
        </div>
    );
    /* return (
        <div>
            <h2>This is services</h2>
        </div>
    ); */
};

export default Services;