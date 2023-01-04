import React, { useEffect } from 'react';

const Member = () => {

    const MemberElements = () => {
        return (
            <>
                <section id="services" className="services section-bg" style={{ marginTop: '61px' }}>
                    <div className="container" data-aos="fade-up">

                        <div className="section-title">
                            <h2>구성원 소개</h2>
                            <p>inno H.I. 프로그램 및 스타트업 관련 궁금하신 사항은
                                문의 주시면  담당자가 연락드리도록 하겠습니다.</p>
                        </div>

                        <div className="row">
                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box">
                                    <img src={require('../../assets/img/contact/member/eh_kim.png').default} className="img-fluid" alt=""></img>
                                    <p><br /></p>
                                    <h4>김은희</h4>
                                    <p>Digital Architect</p>
                                    <p>디지털솔루션팀 팀장/부장</p>
                                    <p>HIST C&D 엔지니어</p>
                                    <p><br /></p>
                                    <p><br /></p>
                                    <h5>ehkim@hist.co.kr</h5>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                                <div className="icon-box">
                                    <img src={require('../../assets/img/contact/member/tbd.png').default} className="img-fluid" alt=""></img>
                                    <p><br /></p>
                                    <h4>인재를 찾습니다</h4>
                                    <p>신사업 투자 제안 및 제휴</p>
                                    <p><br /></p>
                                    <p><br /></p>
                                    <p><br /></p>
                                    <p><br /></p>
                                    <h5>job opening</h5>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                                <div className="icon-box">
                                    <img src={require('../../assets/img/contact/member/ih_kwon.png').default} className="img-fluid" alt=""></img>
                                    <p><br /></p>
                                    <h4>권인혁</h4>
                                    <p>Developer</p>
                                    <p>솔루션사업그룹 대리</p>
                                    <p>개발 및 PoC 수행 담당</p>
                                    <p><br /></p>
                                    <p><br /></p>
                                    <h5>ikwon@hist.co.kr</h5>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                                <div className="icon-box">
                                    <img src={require('../../assets/img/contact/member/tj_han.png').default} className="img-fluid" alt=""></img>
                                    <p><br /></p>
                                    <h4>한태준</h4>
                                    <p>Cordinator</p>
                                    <p>솔루션사업그룹 사원</p>
                                    <p>이노하이 운영 문의</p>
                                    <p><br /></p>
                                    <p><br /></p>
                                    <h5>than@hist.co.kr</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    useEffect(() => {});

    return (
        <>
            <MemberElements />
        </>
    );
}

export default Member;