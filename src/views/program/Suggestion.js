import React, { useEffect } from 'react';

const Suggestion = () => {

    const serviceElements =
    <>
        <section id="services" className="services section-bg" style={{ marginTop: '61px' }}>
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>협업제안</h2>
              <p style={{ fontSize: '18px'}}>한진그룹과 협업하고 싶은 분야/주제에 대해 자유롭게 제안하실 수 있습니다</p>
            </div>

            <div className="row">
              <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div className="icon-box" style={{ textAlign : 'center'}}>
                  <img src={require('../../assets/img/program/contact_1_bg.png').default} className="img-fluid" style={{ width: "80%"}} alt=""></img>
                  <h4 style={{ textAlign: 'center', fontSize:'22px', fontWeight:'bold', marginTop:'10px'  }}>다양한 산업분야 진출기반 마련</h4>
                  <p style={{ textAlign: 'center', fontSize: '16px', marginTop:'5px' }}>물류, 항공, IT, 의료 등  다양한 분야에 진출, 활약하고 있는 한진그룹과 함께하실 수 있습니다.</p>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div className="icon-box" style={{ textAlign : 'center'}}>
                  <img src={require('../../assets/img/program/스타트업-생태계_2_bg.png').default} className="img-fluid" style={{ width: "80%"}} alt=""></img>
                  <h4 style={{ textAlign: 'center', fontSize:'22px', fontWeight:'bold', marginTop:'10px'  }}>사업 시너지 효과 창출</h4>
                  <p style={{ textAlign: 'center', fontSize: '16px', marginTop:'5px' }}> 멘토링, 사업화 연계 등 한진그룹과 협력, 교류 활동을 통해 성장하실 수 있습니다.</p>
                </div>
              </div>

              <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                <div className="icon-box" style={{ textAlign : 'center'}}>
                  <img src={require('../../assets/img/program/DFS_4_bg.png').default} className="img-fluid" style={{ width: "80%"}} alt=""></img>
                  <h4 style={{ textAlign: 'center', fontSize:'22px', fontWeight:'bold', marginTop:'10px'  }}>ICT기술 전문성 바탕의 PoC 검증 제공</h4>
                  <p style={{ textAlign: 'center', fontSize: '16px', marginTop:'5px' }}> ICT분야 전문성을 바탕으로 제품/서비스의 우수성을 검증하며 성공적 협업을 달성합니다.</p>
                </div>
              </div>
            </div>

            <br /> <br />
            <div className='d-flex justify-content-center justify-content-start'>
              <a href='https://forms.gle/bm1Cniym3XFxSuzD9'><div className='btn-get-started scrollto'>협업 제안하기</div></a>
            </div>

          </div>
        </section>

        {/* <section id="services" className="services section">
          <div className="container" data-aos="fade-up">
            <iframe
              src='https://forms.gle/bm1Cniym3XFxSuzD9'
              style={{ height: '1000px', width: '100%' }} title="oi-newsletter">
            </iframe>
          </div>
        </section> */}
    </>
    ;

    useEffect(() => {

    });

    return (
        <>
        {serviceElements}
        </>
    );

}

export default Suggestion;