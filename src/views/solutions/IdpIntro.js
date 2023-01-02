import React, { useEffect } from 'react';
import DownloadButton from '../../components/button/DownloadButton';

const IdpIntro = () => {
    
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
                                <h1><span style={{ color: 'rgb(253, 142, 77)' }}>정확한 지능형 문서 처리 플랫폼</span></h1>
                                <h2 style={{ marginTop: '15px' }}>Human-in-the-Loop를 기반으로 인공지능 활용을 극대화하여 자동화분야에서 회사와 고객을 위해 더 나은 결과를 창출하고 있습니다
                                </h2>
                                <div className='d-flex justify-content-center justify-content-lg-start'>
                                    <DownloadButton lang='다운로드' filename='하이퍼사이언스 솔루션 소개.pdf' url='https://innohifront.s3.ap-northeast-2.amazonaws.com/WebContent/views/%5B%EB%B6%99%EC%9E%84+2%5D+%ED%9A%8C%EC%82%AC+%EC%86%8C%EA%B0%9C%EC%9E%90%EB%A3%8C(Hyperscience).pdf'/>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos="zoom-in" data-aos-delay="200">
                                <img src={require('../../assets/img/solutions/idp/idp_main.png').default} className='img-fluid animated' alt=''></img>
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
                            <h2>플랫폼 주요 기능</h2>
                            <p style={{ fontSize: '18px', textAlign: 'center' }}>다양한 기능을 통해 정확한 정보를 추출 후 비즈니스 결과를 이끌어냅니다</p>
                        </div>
                        <div className="row">
                        <div className="col-xl-2 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/idp/1.png').default} className="img-fluid" alt=""></img>
                                <br /><br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>검증 및 변환</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>간편한 다운스트림 수집을 위해 추출된 데이터를 검증하고 변환하는 간단한 규칙을 추가합니다</p>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/idp/2.png').default} className="img-fluid" alt=""></img>
                                <br /><br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>연결 및 연동</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>추출 후 결과를 풍부하게 하기 위해 API/DB 연결을 통해 타사 데이터를 가져옵니다</p>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/idp/3.png').default} className="img-fluid" alt=""></img>
                                <br /><br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>검토 및 승인</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>지식 근로자 작업에 맞춤화된 사용자 지정 인간 감독 인터페이스를 제공합니다</p>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/idp/4.png').default} className="img-fluid" alt=""></img>
                                <br /><br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>자연어 처리</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>감정 분석을 통해 사용자 의도를 파악합니다</p>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/idp/5.png').default} className="img-fluid" alt=""></img>
                                <br /><br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>노선</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>문서를 다른 팀 또는 다운스트림 시스템으로 라우팅합니다</p>
                            </div>
                        </div>

                        <div className="col-xl-2 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/idp/6.png').default} className="img-fluid" alt=""></img>
                                <br /><br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>비즈니스 규칙 구성</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>비즈니스 프로세스의 모든 위치에서 논리적 비즈니스 규칙을 인코딩합니다</p>
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
                        <h2>산업별 사례</h2>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/idp/10.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>의료 및 생명 과학</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>연구실 요청 양식</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>의료기기 주문 양식</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>처방전 (Prescription Forms)</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/idp/11.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>금융 서비스</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>모기지 전처리 (Mortgage)</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>계좌 개설 (Account Opening)</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>계정 서비스 (Account Servicing)</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/idp/12.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>운송 및 물류</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>선하증권 (Bills of lading)</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>배달 영수증 및 전표</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>상업 송장 (Commercial invoices)</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>운송장 (Waybills)</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <img src={require('../../assets/img/solutions/idp/13.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#!" onClick={preventClick}>공공기관</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>개인 및 법인세 문서</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>지원 또는 대출 신청</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>장애 혜택 신청</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>배경 조사/통관 신청</p>
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
                        <h2>하이퍼사이언스 플랫폼</h2>
                        <p style={{ fontSize: '18px', textAlign: 'center' }}>업계 최고의 ML로 구동되는 하이퍼사이언스 플랫폼은 강력하고 유연하여 입력에서 실행 가능한 데이터에 이르기까지 모든 유형의 문서 프로세스를 쉽게 자동화할 수 있습니다</p>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/solutions/idp/documents-input.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>입력</h4>
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>하이퍼사이언스 플랫폼의 직관적인 UI를 통해 사용자는 정형, 반정형, 비정형 양식 및 필기 텍스트를 포함한 모든 문서 유형의 처리를 쉽게 설정하고 관리할 수 있습니다</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/solutions/idp/classification.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>분류 및 추출</h4>
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>모든 문서 유형을 정확하게 분류하여 많은 양의 문서 변형을 쉽고 빠르게 관리합니다. 또한 최대 99.5%의 정확도로 복잡한 문서에서 데이터를 추출합니다. 사용자는 원하는 정확도 수준을 설정할 수도 있습니다</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/solutions/idp/extraction1.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>동작 및 통합</h4>
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>하이퍼사이언스를 통해 사용자는 비즈니스 결과를 이끌어내고 맞춤형 워크플로를 통해 추출된 데이터를 라우팅하여 유효성 검사, 강화, 사례 대조, 키워드 검색 또는 고급 자연어 처리를 적용할 수 있습니다</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/solutions/idp/extraction3.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>인사이트</h4>
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>자동화 및 정확도 수준, 처리량 또는 사용 정보와 같은 즉시 사용 가능한 보고서를 통해 기계 및 수동 데이터 추출 성능에 대한 가시성을 확보하십시오</p>
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
            <StartupSourcingElements />
            {contourElements}
            {ServiceElements}
        </>
    );

}

export default IdpIntro;