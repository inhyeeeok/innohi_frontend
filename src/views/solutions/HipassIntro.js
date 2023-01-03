import React, { useEffect } from 'react';
import DownloadButton from '../../components/button/DownloadButton';

const HipassIntro = () => {

    const StartupMainElements = () => {
        return (
            <>
                <section id='hero' className='d-flex align-items-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1' data-aos="fade-up" data-aos-delay="200">
                                <h1><span style={{ color: 'rgb(253, 142, 77)' }}>차세대 통합 인증 솔루션</span></h1>
                                <h2 style={{ marginTop: '15px' }}>지문, 음성, 얼굴 인식 등 다양한 생체인증 방식을 통해, 보다 편리하고 안전한 Passwordless방식의 로그인 서비스를 만나보세요.</h2>
                                <div className='d-flex justify-content-center justify-content-lg-start'>
                                    <DownloadButton lang='다운로드' filename='차세대 통합 인증 솔루션 상품 소개서.pdf' url='https://innohifront.s3.ap-northeast-2.amazonaws.com/WebContent/views/HIST+%E1%84%8C%E1%85%A1%E1%84%8E%E1%85%A6+%E1%84%89%E1%85%A9%E1%86%AF%E1%84%85%E1%85%AE%E1%84%89%E1%85%A7%E1%86%AB+HiPass+%E1%84%89%E1%85%A1%E1%86%BC%E1%84%91%E1%85%AE%E1%86%B7%E1%84%89%E1%85%A9%E1%84%80%E1%85%A2%E1%84%89%E1%85%A5.pdf' />
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos="zoom-in" data-aos-delay="200">
                                <img src={require('../../assets/img/solutions/hipass/hipass_main.png').default} className='img-fluid animated' alt='' style={{ width: '80%' }}></img>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }

    const IntroElements = () => {
        return (
            <>
                <section id="services" className="services section-bg">
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>시스템 프로세스</h2>
                            <p style={{ fontSize: '18px', textAlign: 'center' }}>Hi-Pass 솔루션은 지문, 음성, 얼굴인식 등 다양한 생체인증 방식을 통해 보안성과 편리성을 함께 제공하는 Passwordless 서비스를 구현합니다</p>
                        </div>

                        <div className="row">
                            <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box" style={{ textAlign: 'center' }}>
                                    <img src={require('../../assets/img/solutions/hipass/step1.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                    <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>1단계. 인증요청</h4>
                                    <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>사용자가 서버에 로그인 요청 시 서버는 사용자에게 인증 토큰을 전송하여 인증 요청합니다</p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-box" style={{ textAlign: 'center' }}>
                                    <img src={require('../../assets/img/solutions/hipass/step2.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                    <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>2단계. 인증 결과값</h4>
                                    <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>사용자는 선택형 인증(얼굴인식, 지문인식, PIN, 패턴, Windows Hello 로그인 등) 후 개인키가 저장된 단말 내 보안영역을 열고 전자서명 후 결과 값을 전달합니다</p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box" style={{ textAlign: 'center' }}>
                                    <img src={require('../../assets/img/solutions/hipass/step3.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                    <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>3단계. 인증 승인</h4>
                                    <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>서버는 사용자가 보낸 결과 값을 공개키로 검증하여 인증 승인합니다</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    const IntroElements2 = () => {
        return (
            <>
                <section id="about" className="about section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>특장점 및 타사 비교</h2>
                            <p style={{ fontSize: '18px', textAlign: 'center' }}>Hi-Pass 솔루션은 접속 단말에 대한 검증기능과 탈옥, 위변조 상황에 대한 검증기능을 탑재하여, 사용자의 안전한 로그인을 지원합니다.</p>
                        </div>
                        <div className='align-items-center justify-content-center' style={{ textAlign: "center" }} >
                            <img src={require('../../assets/img/solutions/hipass/hipass2.png').default} className='img-fluid' alt=''></img>
                        </div>
                    </div>
                </section>
            </>
        )
    }




    const externalServiceElements =
        <>
            <section id="services" className="services section-bg">
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>생체인증 솔루션 '하이패스'</h2>
                        <p style={{ fontSize: '18px', textAlign: 'center' }}>패스워드 방식의 불편함과 불안함을 해소하고 사용자의 편의성과 보안성을 동시에 제공합니다</p>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/solutions/hipass/7.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>고객중심의 유연성</h4>
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>다양한 인증수단 적용 및 통합 인증관리 기능을 제공합니다</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/solutions/hipass/6.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>시스템 보안성 강화</h4>
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>모바일 인증장치 내에서 탈옥,위변조 및 최신버전 여부 검증합니다</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/solutions/hipass/8.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>다양한 인증 수단 제공</h4>
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>안전한 공개키 기반으로 얼굴인식, 지문인식, PIN, 패턴, Windows Hello 로그인 등 다양한 최신 사용자 인증기술이 적용되었습니다</p>
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
            {externalServiceElements}
            {contourElements}
            <IntroElements />
            {contourElements}
            <IntroElements2 />
        </>
    );

}

export default HipassIntro;