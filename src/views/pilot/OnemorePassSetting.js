import React, { useEffect } from 'react';

const OnemorePassSetting = () => {

    const MemberElements = () => {
        return (
            <>
              
            </>
        )
    }

    useEffect(() => {});

    return (
        <>
          <section id='hero' className='d-flex align-items-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1' data-aos="fade-up" data-aos-delay="200">
                                <h1><span style={{ color: 'rgb(253, 142, 77)' }}>Hi-Pass</span></h1>
                                <h2 style={{ marginTop: '15px' }}>
                                    <span style={{ fontFamily: 'Jost', textTransform: 'uppercase', fontWeight: 'bold' }}>HIPASS</span>와 함께 간편 로그인을 구현해보세요<br />
                                </h2>
                                <div className='d-flex justify-content-center justify-content-lg-start'>
                                    <a  className="btn-get-started scrollto" href='/pilot/setting'>하이패스 설정 (최초 1회)</a>
                                    <a  className="btn-get-started scrollto" href="#download">비밀번호 없는 로그인</a>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 hero-img' data-asos="zoom-in" data-aos-delay="200">
                                <img src={require('../../assets/img/program/IDEA.png').default} className='img-fluid animated' alt=''></img>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default OnemorePassSetting;