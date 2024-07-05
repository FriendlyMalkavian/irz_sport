import React from 'react'
import { Carousel } from 'react-bootstrap'
import PhotoInfo from './vault/PhotoInfo';

import '../App.css';
function CarouselBox({photoInfo}) {

    const photoKeys = Object.keys(PhotoInfo[photoInfo]);
    return (
        <Carousel>
            {photoKeys.map((key) => (
                <Carousel.Item key={key}>
                    <img
                        className='d-block rounded mx-auto img-fluid'
                        src={PhotoInfo[photoInfo][key].src}
                        alt={PhotoInfo[photoInfo][key].title}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
export default CarouselBox