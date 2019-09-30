import React, {} from 'react';
import {
    UncontrolledCarousel
} from 'reactstrap';

const items = [
    {
        key: 0,
        id: 1,
        src: 'https://placeimg.com/800/400/arch',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
      key: 1,
        id: 2,
        src: 'https://placeimg.com/801/400/arch',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        key: 2,
        id: 3, 
        src: 'https://placeimg.com/799/400/arch',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];

const CarouselDefault = () => <UncontrolledCarousel items={items}/>;


export default CarouselDefault;
