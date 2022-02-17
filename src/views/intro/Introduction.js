import React, { useEffect } from 'react';

import * as intro from './IntroElements';

import SwiperComponents from '../../components/swipers/Swiper';


const Introduction = () => {

    useEffect(() => {
        SwiperComponents();
    })

    return (
        <>
            <main id="main">
                {intro.IntroElements}
                {intro.IntroAddElements}
                {intro.TestimonialElements}
                {intro.TrinityElements}
            </main>
        </>
    );
}

export default Introduction;
