import React, { useEffect } from 'react';

const Member = () => {

    const serviceElements =
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
                            <img src={require('../../assets/img/program/DFS_4.png').default} className="img-fluid" alt=""></img>
                                <h4>김은희</h4>
                                <p>디지털 아키텍트</p>
                                <p>전략사업부 디지털솔루션팀 솔루션사업그룹장</p>
                                <p>HIST C&D 엔지니어</p>
                                <p>AWS S.A</p>
                                <h5>ehkim@hist.co.kr</h5>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                        <div className="icon-box">
                        <img src={require('../../assets/img/program/DFS_4.png').default} className="img-fluid" alt=""></img>
                                <h4>강준수</h4>
                                <p>디지털 아키텍트</p>
                                <p>전략사업부 디지털솔루션팀 대리</p>
                                <p>스타트업 DFS, PnP 담당</p>
                                <p><br /></p>
                                <p><br /></p>
                                <h5>js.kang@hist.co.kr</h5>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                        <div className="icon-box">
                        <img src={require('../../assets/img/contact/member/test.jpg').default} className="img-fluid" alt=""></img>
                                <h4>권인혁</h4>
                                <p>디지털 아키텍트</p>
                                <p>전략사업부 디지털솔루션팀 대리</p>
                                <p><br /></p>
                                <p><br /></p>
                                <p><br /></p>
                                <h5>ikwon@hist.co.kr</h5>
                        </div>
                    </div>

                    <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                        <div className="icon-box">
                        <img src={require('../../assets/img/program/DFS_4.png').default} className="img-fluid" alt=""></img>
                                <h4>한태준</h4>
                                <p>디지털 아키텍트</p>
                                <p>전략사업부 디지털솔루션팀 사원</p>
                                <p>오픈 이노베이션 협의체 담당</p>
                                <p><br /></p>
                                <p><br /></p>
                                <h5>than@hist.co.kr</h5>
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

export default Member;