import React, { useEffect } from 'react';

import SwiperComponents from '../../components/swipers/Swiper';

import * as event from '../event/EventElements';
import * as breadcrumbs from '../../components/common/BreadCrumbs';

const Event = () => {

    useEffect(() => {
        SwiperComponents();
        //      test();
    })

    return (
        <>
            <main id="main">
                {breadcrumbs.BreadCrumbsElements}
                {event.PortfolioElements}
            </main>
        </>
    );
}

export default Event;