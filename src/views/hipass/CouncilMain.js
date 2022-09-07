import React, { useEffect } from 'react';

import * as CouncilCommon from '../council/CouncilCommon'
import CouncilCarousel from '../council/CouncilCarousel'

const CouncilMain = () => {

  const HeroElements = () => {
    tokenVefi();
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

  const tokenVefi = () => {
    const qs = getQueryStringObject();
    const username = qs.username; 
    const access_token = qs.access_token; 

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer 6f1810263bbf08a347e9a9d5bbeb456e373e6470afdfb70ba3ebc6cd14131f16");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"user_id":username,"access_token":access_token});

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://interface-api.ompasscloud.com/v1/ompass/token-verification", requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result)
        CouncilCommon.changeName(username);
      })
      .catch(error => console.log('error', error));

  }

  const getQueryStringObject = () => {
    var a = window.location.search.substr(1).split('&');
    if (a == "") return {};
    var b = {};
    for (var i = 0; i < a.length; ++i) {
        var p = a[i].split('=', 2);
        if (p.length == 1)
            b[p[0]] = "";
        else
            b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
    }
    return b;
}

  useEffect(() => {
    CouncilCommon.headerGrid();

  })

  return (
    <>
      <HeroElements />
      <CouncilCarousel type='operation'/>
      <CouncilCarousel type='startup'/>
    </>
  )


}

export default CouncilMain;



