import React, { useEffect } from 'react';

import SwiperComponents from '../../components/swipers/Swiper';

import * as event from '../event/EventElements';

const Event = () => {

    useEffect(() => {
        SwiperComponents();
        //      test();
    })

    return (
        <>
            <main id="main">
                {event.BreadCrumbsElements}
                {event.PortfolioElements}
            </main>
        </>
    );
}

export default Event;