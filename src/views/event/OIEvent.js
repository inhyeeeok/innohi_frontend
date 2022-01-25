import React, { useEffect } from 'react';


//import * as event from '../event/EventElements';
import * as common from '../../components/common/BreadCrumbs';

const OIEvent = () => {


    useEffect(() => {
    });

    return (
        <>
            <main id="main">
                {common.BreadCrumbsElements}
                {/* {event.PortfolioElements} */}
            </main>
        </>
    );
}

export default OIEvent;