import React from 'react'
import { Carousel } from 'react-bootstrap'
import PhotoInfo from './vault/PhotoInfo';

import '../App.css';
function CarouselBox(props) {

    const photoKeys = Object.keys(PhotoInfo[props]);
    return (
        <Carousel>
            {photoKeys.map((key) => (
                <Carousel.Item key={key}>
                    <img
                        className='d-block rounded mx-auto img-fluid'
                        src={PhotoInfo[props][key].src}
                        alt={PhotoInfo[props][key].title}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
export default CarouselBox