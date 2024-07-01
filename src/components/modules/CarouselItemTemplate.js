import React, { Component } from 'react';
import { CarouselItem } from 'react-bootstrap';
import sportImage from '../../assets/sport1.jpg'

export default class CarouselItemTemplate extends Component {
    render() {
        const { data } = this.props;
        return (
            <CarouselItem>
                <img
                    src={sportImage}
                    alt={data.title}
                />
            </CarouselItem>
        );
    }
}