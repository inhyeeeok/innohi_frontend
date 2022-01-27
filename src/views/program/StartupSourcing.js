import React, { useEffect } from 'react';

const StartupSourcing = () => {
    // require('../../assets/img/sample.jpg').default
    const Tt222 = (title, tt3, tt2) => {
        return (
            <>
                <section id="services" className="services" style={{ backgroundColor: 'rgb(207 219 251)', marginTop: '61px'}}>
                    <div className='container'>
                        <div className="section-title">
                            <h2>스타트업 소싱</h2>
                            <p>체계적이고 명확한 프로세스를 통해 최적의 스타트업을 소싱하실 수 있도록 돕습니다.</p>
                        </div>
                        <div className='row'>
                            <div className='col-lg  hero-img' data-aos="zoom-in" data-aos-delay="200">
                                <img src={require('../../assets/img/program/프로그램 인포그래픽 시안_b_text.png').default} className='img-fluid' alt=''></img>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    const ServiceElements =
    <>
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>산업별 적용사례</h2>
                    <p>의료, 항공, 물류, 여행 등 각 산업 별 프로그램 적용사례를 소개합니다.</p>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <img src={require('../../assets/img/program/startup-archive_3.png').default} className="img-fluid" alt=""></img>
                                <h4><a href="/1">의료</a></h4>
                                <p>Contactless service (비접촉 생체 신호 감지 기술)</p>
                                <p>VR service (가상 현실 교육 서비스)</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <img src={require('../../assets/img/program/startup-archive_1.png').default} className="img-fluid" alt=""></img>
                                <h4><a href="/2">항공</a></h4>
                                <p>Data Analysis (영업 / 마케팅)</p>
                                <p>VR Service (승무원 훈련)</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                            <img src={require('../../assets/img/program/startup-archive_2.png').default} className="img-fluid" alt=""></img>
                                <h4><a href="/3">물류</a></h4>
                                <p>Fulfillment</p>
                                <p>Last Mile Delivery</p>
                                <p>Data Recognition</p>
                                <p>Big Data / AI</p>
                                <p>Data Access / Processing</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                        <div className="icon-box">
                            <img src={require('../../assets/img/program/startup-archive_6.png').default} className="img-fluid" alt=""></img>
                                <h4><a href="/4">여행</a></h4>
                                <p>Commerce Tour</p>
                                <p>Mobility Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    ;
      

    useEffect(() => {

    });

    return (
        <>
            <Tt222 />
            {ServiceElements}
        </>
    );

}

export default StartupSourcing;