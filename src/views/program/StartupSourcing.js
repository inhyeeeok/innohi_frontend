import React, { useEffect } from 'react';

const StartupSourcing = () => {
    const StartupSourcingElements = () => {
        return (
            <>
                <section id="services" className="services section-bg" style={{ marginTop: '61px'}}>
                    <div className='container'>
                        <div className="section-title">
                            <h2>스타트업 소싱</h2>
                            <p style={{fontSize:'18px', textAlign : 'center'}}>체계적이고 명확한 프로세스를 통해 최적의 스타트업을 소싱하실 수 있도록 돕습니다.</p>
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
                                <h4 style={{fontSize: '22px', fontWeight: 'bold'}}><a href="/1">의료</a></h4>
                                <p style={{fontSize: '16px', marginTop : ' 5px'}}>Contactless service (비접촉 생체 신호 감지 기술)</p>
                                <p style={{fontSize: '16px', marginTop : ' 5px'}}>VR service (가상 현실 교육 서비스)</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <img src={require('../../assets/img/program/startup-archive_1_bg.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{fontSize: '22px', fontWeight: 'bold'}}><a href="/2">항공</a></h4>
                                <p style={{fontSize: '16px', marginTop : ' 5px'}}>Data Analysis (영업 / 마케팅)</p>
                                <p style={{fontSize: '16px', marginTop : ' 5px'}}>VR Service (승무원 훈련)</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                            <img src={require('../../assets/img/program/startup-archive_2_bg.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{fontSize: '22px', fontWeight: 'bold'}}><a href="/3">물류</a></h4>
                                <p style={{fontSize: '16px', marginTop : ' 5px'}}>Fulfillment (물류 자동화)</p>
                                <p style={{fontSize: '16px', marginTop : ' 5px'}}>Last Mile Delivery( 배송 최적화)</p>
                                <p style={{fontSize: '16px', marginTop : ' 5px'}}>Data Access / Processing (물류 데이터 처리 및 가공)</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                        <div className="icon-box">
                            <img src={require('../../assets/img/program/startup-archive_6_bg.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{fontSize: '22px', fontWeight: 'bold'}}><a href="/4">여행</a></h4>
                                <p style={{fontSize: '16px', marginTop : ' 5px'}}>Commerce Tour (소비자 경험 향상)</p>
                                <p style={{fontSize: '16px', marginTop : ' 5px'}}>Mobility Service (여행 모빌리티 서비스)</p>
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
              <div className="icon-box" style={{ textAlign : 'center'}}>
                <img src={require('../../assets/img/program/startup-eco_5.png').default} className="img-fluid" style={{ width: '70%'}} alt=""></img>
                <h4 style={{ textAlign:'center', fontSize:'22px', fontWeight:'bold', marginTop:'10px' }}>스타트업 생태계 활성화</h4>
                <p style={{ textAlign:'center', fontSize: '16px', marginTop:'5px' }}>정부부처, 유관기관과의 협업을 통해 국내외 스타트업 생태계 활성화에 기여합니다.</p>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box" style={{ textAlign : 'center'}}>
                <img src={require('../../assets/img/program/DFS_5.png').default} className="img-fluid" style={{ width: '70%'}} alt=""></img>
                <h4 style={{ textAlign:'center', fontSize:'22px', fontWeight:'bold', marginTop:'10px' }}>한진-스타트업과의 동반성장</h4>
                <p style={{ textAlign:'center', fontSize: '16px', marginTop:'5px' }}>스타트업과 동반성장을 통해 환경, 사회적 책임, 지속가능한 발전 등 ESG가치를 실현합니다.</p>
              </div>
            </div>

            <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box" style={{ textAlign : 'center'}}>
                <img src={require('../../assets/img/program/startup-eco_6.png').default} className="img-fluid" style={{ width: '70%'}} alt=""></img>
                <h4 style={{ textAlign:'center', fontSize:'22px', fontWeight:'bold', marginTop:'10px' }}>파트너십을 통한 변화와 혁신선도</h4>
                <p style={{ textAlign:'center', fontSize: '16px', marginTop:'5px' }}>디지털 전환을 위한 파트너십 구축으로 변화와 혁신을 선도합니다.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
    ;

    const contourElements =
    <section id="about" className="about section-bg"  style={{ padding: '0px' }}>
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
            <StartupSourcingElements />
            {contourElements}
            {externalServiceElements}
            {contourElements}
            {ServiceElements}
        </>
    );

}

export default StartupSourcing;