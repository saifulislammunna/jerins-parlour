import { init } from 'ityped';
import React, { useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'
import img from '../../../Image/beautiful-young-asian-woman-touching-her-clean-face-with-fresh-healthy-skin-isolated-white-wall-beauty-cosmetics-facial-treatment-concept 1.png'
const Banner = () => {
    const textRef = useRef();
    useEffect(() => {

        init(textRef.current, {
            showCursor: true,
            backDelay: 1500,
            backSpeed: 70,
             strings: [' Women.']
        })
    })

    return (
        <div className="background-image flexible-container d-flex">
        <div className="left-container  half-width p-5">
             <div className="text-container">
                 <h1 className="fs-1 fw-bold banner-text  " >Beauty Saloon, <br />
                 For Every  <h3 className="text-animation fs-1 banner-text"> <span  ref={textRef}></span></h3> </h1>
                 

                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quibusdam dolores ea facere perspiciatis quisquam commodi neque qui unde ipsa.</p>

                 <Button className="btn">Get An Appointment </Button>
             </div>
        </div>
        <div className="right-container half-width ">
             <div className="img-container ">
                 <img className="d-block w-100"  src= {img} alt="" />
             </div>
        </div>
    </div>

  
    );
};

export default Banner;