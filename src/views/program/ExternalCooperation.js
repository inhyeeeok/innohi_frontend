import React, { useEffect } from 'react';

const ExternalCooperation = () => {

    const serviceElements =
    <>
      <section id="services" className="services section-bg" style={{marginTop: '61px'}}>
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

    useEffect(() => {

    });

    return (
        <>
        {serviceElements}
        </>
    );

}

export default ExternalCooperation;