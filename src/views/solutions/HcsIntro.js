import React, { useEffect } from 'react';
import DownloadButton from '../../components/button/DownloadButton';
import SwiperComponents from '../../components/swipers/Swiper';

const HcsIntro = () => {

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
                                <h1><span style={{ color: 'rgb(253, 142, 77)' }}>기업의 성공적인 DT를 달성하기 위한 글로벌 No.1 Work OS</span></h1>
                                <h2 style={{ marginTop: '15px' }}>
                                미래형 WorkOS를 통해 보다 업무에 최적화되고 쾌적한 업무 공간을 제공하여 협업의 새로운 패러다임을 제시합니다
                                </h2>
                                <div className='d-flex justify-content-center justify-content-lg-start'>
                                    <DownloadButton lang='다운로드' filename='협업툴 SWIT 상품 소개서.pdf' url='https://innohifront.s3.ap-northeast-2.amazonaws.com/WebContent/views/221230_SWIT_%EC%83%81%ED%92%88+%EC%86%8C%EA%B0%9C%EC%84%9C_V0.2.pdf' />
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos="zoom-in" data-aos-delay="200">
                                <img src={require('../../assets/img/solutions/hcs/pretty-slide_4_0.png').default} className='img-fluid animated' alt=''></img>
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
                            <h2>협업툴의 새 표준 'Swit'</h2>
                            <p style={{ fontSize: '18px', textAlign: 'center' }}>직관적이면서도, 팀이 함께 일을 해내는 데 필요한 모든 기능을 갖추고 있습니다</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <img src={require('../../assets/img/solutions/hcs/connectivity.png').default} className="img-fluid" alt=""></img>
                                    <br />
                                    <h4 style={{ fontSize: '22px', fontWeight: 'bold', marginTop: ' 5px' }}><a href="#!" onClick={preventClick}>확장성</a></h4>
                                    <p style={{ fontSize: '16px', marginTop: ' 5px' }}>중소기업부터 대기업까지 조직의 규모와 형태를 고려하여, Swit 상에서 구현 및 확장 가능합니다</p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <img src={require('../../assets/img/solutions/hcs/interoperability.png').default} className="img-fluid" alt=""></img>
                                    <br />
                                    <h4 style={{ fontSize: '22px', fontWeight: 'bold', marginTop: ' 5px' }}><a href="#!" onClick={preventClick}>상호연동성</a></h4>
                                    <p style={{ fontSize: '16px', marginTop: ' 5px' }}>이메일, 화상회의, 캘린더, 문서 관리 등, 업무에 필요한 다양한 도구에 대한 완벽한 연동을 제공합니다</p>
                                </div>
                            </div>

                            <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <img src={require('../../assets/img/solutions/hcs/functionality.png').default} className="img-fluid" alt=""></img>
                                    <br />
                                    <h4 style={{ fontSize: '22px', fontWeight: 'bold', marginTop: ' 5px' }}><a href="#!" onClick={preventClick}>기능성</a></h4>
                                    <p style={{ fontSize: '16px', marginTop: ' 5px' }}>업무 관리부터 채팅까지, 조직원의 협업에 꼭 필요한 기능을 한 공간에 구현 가능합니다</p>
                                </div>
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
                        <h2>직접 체험해보세요</h2>
                        <p style={{ fontSize: '18px', textAlign: 'center' }}>직접 무료로 체험해보세요. 데스크톱과 모바일을 모두 지원합니다.</p>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/hcs/device_web_v2.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>웹 버전</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Chrome, Edge</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Safari, Firefox</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/hcs/device_app_v2.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>데스크톱 앱</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Mac</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Windows</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/hcs/device_mobile.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>모바일 앱</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>iOS</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Android</p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
        ;

    const TestimonialElements = () => {
        return (
            <section id="testimonials" className="testimonials2 section-bg">
                <div className="container" data-aos="fade-up">
                    <div className="section-title">
                        <h2>주요 기능</h2>
                        <p style={{ fontSize: '18px', textAlign: 'center' }}>채팅, 게시판, 파일 공유, 칸반보드, 간트차트, 캘린더, 그 외 수많은 협업 관련 모듈을 단순하면서도 세련된 하나의 앱에 과하지도 부족하지도 않게 담았습니다</p>
                    </div>

                    <div className="testimonials-slider2 swiper" data-aos="fade-up" data-aos-delay="200">
                        <div className="swiper-wrapper">

                            <div className="swiper-slide">
                                <div className="testimonial-item2">
                                    <div className="profile my-auto">
                                        <img src={require('../../assets/img/solutions/hcs/device_web_v2.png').default} className="testimonial-img" alt=""></img>
                                        <h3>채팅 및 업무 관리</h3>
                                    </div>
                                    <p>
                                        우리가 팀 협업을 위해 가장 자주 사용하는 두 기능, '채팅'과 '업무 관리'가 Swit 안에서 하나가 되었습니다. Swit과 함께 편리하게 협업하고, 매 시간을 의미 있게 사용하세요. 이제 여러분 팀의 무한한 잠재력을 발견할 때입니다
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item2">
                                    <div className="profile my-auto">
                                        <img src={require('../../assets/img/solutions/hcs/function2.png').default} className="testimonial-img" alt=""></img>
                                        <h3>업무도구 연동</h3>
                                    </div>
                                    <p>
                                        Google WorkSpace, Microsoft 365 등 다양한 업무도구를 연동하여 효율적으로 소통 및 활용이 가능합니다.
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item2">
                                    <div className="profile my-auto">
                                        <img src={require('../../assets/img/solutions/hcs/device_app_v2.png').default} className="testimonial-img" alt=""></img>
                                        <h3>타임라인·워크로드</h3>
                                    </div>
                                    <p>
                                        프로젝트 진행을 위한 세부 업무를 등록하고, 일정과 담당자를 지정하고, 이렇게 생성한 업무 카드들을 모든 참여 멤버가 쉽게 열람하도록 다양한 기준에 따라 정리할 수 있습니다
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item2">
                                    <div className="profile my-auto">
                                        <img src={require('../../assets/img/solutions/hcs/function1.png').default} className="testimonial-img" alt=""></img>
                                        <h3>업무·프로젝트</h3>
                                    </div>
                                    <p>
                                        프로젝트 진행을 위한 세부 업무를 등록하고, 일정과 담당자를 지정하고, 이렇게 생성한 업무 카드들을 모든 참여 멤버가 쉽게 열람하도록 다양한 기준에 따라 정리할 수 있습니다
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
        );
    }

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
        SwiperComponents();

    });

    return (
        <>
            <StartupMainElements />
            <StartupSourcingElements />
            {contourElements}
            {/* <ExternalServiceElements /> */}
            <TestimonialElements />
            {contourElements}
            {ServiceElements}
        </>
    );

}

export default HcsIntro;