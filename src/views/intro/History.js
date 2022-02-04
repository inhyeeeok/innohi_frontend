import React, { useEffect } from 'react';

import * as intro from './IntroElements';
import SwiperComponents from '../../components/swipers/Swiper';

const History = () => {

    useEffect(() => {
        SwiperComponents();
    })

    return (
        <>
            <main id="main">
                {intro.TestimonialElements}
            </main>
        </>
    );
}

export default History;
