import React, {Component} from 'react'
import { CarouselItem } from 'react-bootstrap'
import { Carousel } from 'react-bootstrap'
import sport1Img from "../assets/sport1.jpg"
import sport2Img from "../assets/sport2.jpg"
import sport3Img from "../assets/sport3.jpg"

import '../App.css';
export default class CarouselBox extends Component {
    render(){
        return(
            <Carousel>
                <CarouselItem>
                    <img
                        className='d-block rounded mx-auto img-fluid '
                        src={sport1Img}
                        alt="Sport1"
                    />
                </CarouselItem>
                <CarouselItem>
                    <img
                        className='d-block rounded mx-auto img-fluid'
                        src={sport2Img}
                        alt="Sport2"
                    />
                </CarouselItem>
                <CarouselItem>
                    <img
                        className='d-block rounded mx-auto img-fluid'
                        src={sport3Img}
                        alt="Sport3"
                    />
                </CarouselItem>
            </Carousel>
        )
    }
}