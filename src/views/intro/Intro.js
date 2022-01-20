import React, { useEffect } from 'react';

import * as intro from '../intro/IntroElements';
import * as common from '../../components/common/BreadCrumbs'
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
                {common.BreadCrumbsElements}
                {intro.IntroElements}
                {intro.testimonialElements}
                {intro.ecoElements}
                {intro.faqElements}
            </main>
        </>
    );
}

export default Intro;
