import React, { useEffect } from 'react';

import {IntroElements, testimonialElements, ecoElements} from '../intro/IntroElements';
import SwiperComponents from '../../components/swipers/Swiper';

// import test from "../../components/Test";

const Intro = () => {

    useEffect(() => {
        SwiperComponents();
        //      test();
    })

    return (
        <>
            <main id="main">
                {IntroElements}
                {testimonialElements}
                {ecoElements}
            </main>
        </>
    );
}

export default Intro;
