import React, { useEffect } from 'react';

import * as main from './MainElements';

import SwiperComponents from '../../components/swipers/Swiper';

const Main = () => {

  useEffect(() => {
    SwiperComponents();
})

  return (
    <>
      {main.heroElements}
      <main id='main'>
        {/* {main.cliensElements} */}
        {/* {main.refElements} */}
        {main.serviceElements}
        {main.clientsElements}
        {main.clientsElements}
        {main.joinNewsletterElements}
      </main>

    </>
  ); 

}

export default Main;
