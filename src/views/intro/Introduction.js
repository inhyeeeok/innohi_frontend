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
                {intro.contourElements}
                {intro.IntroAddElements}
                {intro.contourElements}
                {intro.TrinityElements}                
                {intro.contourElements}
                {intro.TestimonialElements}
            </main>
        </>
    );
}

export default Introduction;
