import React, { useEffect } from 'react';
import DownloadButton from '../../components/button/DownloadButton';

const StartupSourcing = () => {
    
    const preventClick = (e) => {
        e.preventDefault();
        return false;
    }

    const StartupMainElements = () => {
        return (
            <>
                <section id='hero' className='d-flex align-items-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1' data-aos="fade-up" data-aos-delay="200">
                                <h1><span style={{ color: 'rgb(253, 142, 77)' }}>프로그램 소개</span></h1>
                                <h2 style={{ marginTop: '15px' }}>
                                    <span style={{ fontFamily: 'Jost', textTransform: 'uppercase', fontWeight: 'bold' }}>INNOHI</span>와 함께 오픈이노베이션을 만들어보세요<br />
                                </h2>
                                <div className='d-flex justify-content-center justify-content-lg-start'>
                                    <DownloadButton lang='다운로드' filename='한진 오픈이노베이션 소개.pdf' url='https://innohifront.s3.ap-northeast-2.amazonaws.com/WebContent/views/%ED%95%9C%EC%A7%84+%EC%98%A4%ED%94%88%EC%9D%B4%EB%85%B8%EB%B2%A0%EC%9D%B4%EC%85%98+%EC%86%8C%EA%B0%9CPPT_innohi+%EC%97%85%EB%A1%9C%EB%93%9C(PDF).pdf'/>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos="zoom-in" data-aos-delay="200">
                                <img src={require('../../assets/img/program/IDEA.png').default} className='img-fluid animated' alt=''></img>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }

    const StartupSourcingElements = () => {
        return (
            <>
                <section id="services" className="services section-bg">
                    <div className='container'>
                        <div className="section-title">
                            <h2>스타트업 소싱</h2>
                            <p style={{ fontSize: '18px', textAlign: 'center' }}>체계적이고 명확한 프로세스를 통해 최적의 스타트업을 소싱하실 수 있도록 돕습니다.</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box" style={{ padding: '10px' }}>
                                    <img src={require('../../assets/img/program/Startup_Sourcing_1.png').default} className="img-fluid" style={{ width: '100%' }} alt=""></img>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box" style={{ padding: '10px' }}>
                                    <img src={require('../../assets/img/program/Startup_Sourcing_2.png').default} className="img-fluid" style={{ width: '100%' }} alt=""></img>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box" style={{ padding: '10px' }}>
                                    <img src={require('../../assets/img/program/Startup_Sourcing_3.png').default} className="img-fluid" style={{ width: '100%' }} alt=""></img>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box" style={{ padding: '10px' }}>
                                    <img src={require('../../assets/img/program/Startup_Sourcing_4.png').default} className="img-fluid" style={{ width: '100%' }} alt=""></img>
                                </div>
                            </div>
                        </div>
                        {/* <div className='row'>
                            <div className='col-lg  hero-img' data-aos="zoom-in" data-aos-delay="200">
                                <img src={require('../../assets/img/program/Startup_Sourcing_Infographic_2nd_Resize.png').default} className='img-fluid' alt=''></img>
                            </div>
                        </div> */}
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
                        <h2>산업별 사례</h2>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <img src={require('../../assets/img/program/startup-archive_3_bg.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>의료</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Contactless service (비접촉 생체 신호 감지 기술)</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>VR service (가상 현실 교육 서비스)</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <img src={require('../../assets/img/program/startup-archive_1_bg.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>항공</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Data Analysis (영업 / 마케팅)</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>VR Service (승무원 훈련)</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <img src={require('../../assets/img/program/startup-archive_2_bg.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>물류</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Fulfillment (물류 자동화)</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Last Mile Delivery (배송 최적화)</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Smart Logistics (차세대 물류 기술)</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <img src={require('../../assets/img/program/startup-archive_6_bg.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>여행</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Commerce Tour (소비자 경험 향상)</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Mobility Service (여행 모빌리티 서비스)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        ;

    const externalServiceElements =
        <>
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>대외협력</h2>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/program/startup-eco_5.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>스타트업 생태계 활성화</h4>
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>정부부처, 유관기관과의 협업을 통해 국내외 스타트업 생태계 활성화에 기여합니다.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/program/DFS_5.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>한진-스타트업과의 동반성장</h4>
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>스타트업과 동반성장을 통해 환경, 사회적 책임, 지속가능한 발전 등 ESG가치를 실현합니다.</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/program/startup-eco_6.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>파트너십을 통한 변화와 혁신선도</h4>
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>디지털 전환을 위한 파트너십 구축으로 변화와 혁신을 선도합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
        ;

    const contourElements =
        <section id="about" className="about section-bg" style={{ padding: '0px' }}>
            <div className="container" data-aos="fade-up" >
                <div>
                    <hr></hr>
                </div>
            </div>
        </section>
        ;


    useEffect(() => {

    });

    return (
        <>
            <StartupMainElements />
            <StartupSourcingElements />
            {contourElements}
            {externalServiceElements}
            {contourElements}
            {ServiceElements}
        </>
    );

}

export default StartupSourcing;