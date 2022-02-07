import React, { useEffect } from 'react';
import { Link } from "react-router-dom";

const CouncilIntro = () => {

    const ServiceElements =
    <>
        <section id="services" className="services section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>협의체 공간</h2>
                    <p>이노하이가 구축 해놓은 다양한 정보를 확인 하실수 있어요!</p>
                    <p>협의체 관련 사항은 아래 연락처로 문의주시면 담당자가 답변드리겠습니다. SELHTDB@hist.co.kr </p>
                </div>

                <div className="row">
                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                        <div className="icon-box">
                            <img src={require('../../assets/img/coucil/intro/newsletter.png').default} className="img-fluid" alt=""></img>
                            <p><br></br></p>
                                <h4><a href="/1">운영 현황</a></h4>
                                <p>Contactless service (비접촉 생체 신호 감지 기술)</p>
                                <p>VR service (가상 현실 교육 서비스)</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                            <img src={require('../../assets/img/coucil/intro/newsletter.png').default} className="img-fluid" alt=""></img>
                            <p><br></br></p>
                                <h4><a href="/2">오픈이노베이션 레터</a></h4>
                                <p>협의체 대상으로 Monthly로 발행하는 뉴스레터 에요</p>
                                <p>그룹사 내에서 이루어지는 다양한 정보를 받아 보실수 있어요.</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                            <img src={require('../../assets/img/program/startup-archive_2.png').default} className="img-fluid" alt=""></img>
                                <h4><a href="/3">스타트업 찾기</a></h4>
                                <p>Fulfillment</p>
                                <p>Last Mile Delivery</p>
                                <p>Data Recognition</p>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                        <div className="icon-box">
                            <img src={require('../../assets/img/program/startup-archive_6.png').default} className="img-fluid" alt=""></img>
                                <h4><a href="/4">발굴 내역</a></h4>
                                <p>Commerce Tour</p>
                                <p>Mobility Service</p>
                        </div>
                    </div>
                        <Link to='/council/main'>
                            <div>
                                <br></br>
                                <button >협의체 로그인</button>
                            </div>
                        </Link>
                    
                </div>
            </div>
        </section>
    </>
    ;
      

    useEffect(() => {

    });

    return (
        <>
            {ServiceElements}
        </>
    );

}

export default CouncilIntro;