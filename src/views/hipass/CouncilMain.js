import React, { useEffect } from 'react';

import * as CouncilCommon from '../council/CouncilCommon'
import CouncilCarousel from '../council/CouncilCarousel'

const CouncilMain = () => {

  const HeroElements = () => {
    return (
      <section id='hero' className='d-flex align-items-center' >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1' data-aos="fade-up" data-aos-delay="200">
            <h1><span style={{ color: 'rgb(253, 142, 77)' }}>INNOHI </span>협의체</h1>
            <h2>오픈이노베이션 레터와 스타트업 찾기 등 <br />INNOHI의 여러가지 소식들을 이곳에서 확인해보세요</h2>
          </div>
          <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos="zoom-in" data-aos-delay="200">
            <img src={require('../../assets/img/intro/histroy/travel.jpg').default} className='img-fluid animated' alt=''></img>
          </div>
        </div>
      </div>
    </section>
    )
  }

  useEffect(() => {
    CouncilCommon.headerGrid();
    // popUpCheck();
    // affiliateCheck(user);
    // CouncilCommon.eventLogOut(signOut);
    // CouncilCommon.changeName(CouncilCommon.usernameCheck(user));
  })

  return (
    <>
      {/* <ModalElements /> */}
      <HeroElements />
      <CouncilCarousel type='operation'/>
      <CouncilCarousel type='startup'/>
    </>
  )


}

export default CouncilMain;



