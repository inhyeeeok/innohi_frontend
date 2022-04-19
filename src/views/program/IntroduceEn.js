import React, { useEffect } from 'react';
import DownloadButton from '../../components/download/DownloadButton';

const IntroduceEn = () => {

    const preventClick = (e) => {
        e.preventDefault();
        return false;
    }

    const IntroduceEnMainElements = () => {
        return (
            <>
                <section id='hero' className='d-flex align-items-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1' data-aos="fade-up" data-aos-delay="200">
                                <h1><span style={{ color: 'rgb(253, 142, 77)' }}>Introducing <span style={{ fontFamily: 'Jost', textTransform: 'uppercase', fontWeight: 'bold' }}>INNOHI</span></span></h1>
                                <h2 style={{ marginTop: '15px' }}>
                                    <span style={{ fontFamily: 'Jost', textTransform: 'uppercase', fontWeight: 'bold' }}>INNOHI</span> is on your side to help accomplish Open Innovation for your goal<br />
                                </h2>
                                <div className='d-flex justify-content-center justify-content-lg-start'>
                                <DownloadButton lang='Download' filename='(ENG) HIST Open Innovation.pdf' url='https://innohifront.s3.ap-northeast-2.amazonaws.com/WebContent/views/(ENG)+HIST+Open+Innovation.pdf'/>
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos="zoom-in" data-aos-delay="200">
                                <img src={require('../../assets/img/program/IDEA.png').default} className='img-fluid animated' alt=''></img>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }

    const IntroduceEnElements = () => {
        return (
            <>
                <section id="services" className="services section-bg">
                    <div className='container'>
                        <div className="section-title">
                            <h2>Startup Sourcing</h2>
                            <p style={{ fontSize: '18px', textAlign: 'center' }}>With systematic and specific process <span style={{ fontFamily: 'Jost', textTransform: 'uppercase'}}>INNOHI</span> help you to source best startups to work with</p>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box" style={{ padding: '10px' }}>
                                    <img src={require('../../assets/img/program/Startup_Sourcing_EN_1.png').default} className="img-fluid" style={{ width: '100%' }} alt=""></img>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box" style={{ padding: '10px' }}>
                                    <img src={require('../../assets/img/program/Startup_Sourcing_EN_2.png').default} className="img-fluid" style={{ width: '100%' }} alt=""></img>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box" style={{ padding: '10px' }}>
                                    <img src={require('../../assets/img/program/Startup_Sourcing_EN_3.png').default} className="img-fluid" style={{ width: '100%' }} alt=""></img>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                <div className="icon-box" style={{ padding: '10px' }}>
                                    <img src={require('../../assets/img/program/Startup_Sourcing_EN_4.png').default} className="img-fluid" style={{ width: '100%' }} alt=""></img>
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
                        <h2>Sourcing Case by Industry</h2>
                    </div>

                    <div className="row">
                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box">
                                <img src={require('../../assets/img/program/startup-archive_3_bg.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#" onClick={preventClick}>Medical Service</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Contactless bio-signal detection</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>VR Training service</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box">
                                <img src={require('../../assets/img/program/startup-archive_1_bg.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#" onClick={preventClick}>Aviation</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Data Analysis Technology</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>VR Training Service</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box">
                                <img src={require('../../assets/img/program/startup-archive_2_bg.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#" onClick={preventClick}>Logistics</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Fulfillment Automation</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Last Mile Delivery</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Smart Logistics</p>
                            </div>
                        </div>

                        <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                            <div className="icon-box">
                                <img src={require('../../assets/img/program/startup-archive_6_bg.png').default} className="img-fluid" alt=""></img>
                                <br />
                                <h4 style={{ fontSize: '22px', fontWeight: 'bold' }}><a href="#" onClick={preventClick}>Travel & Hospitality</a></h4>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Impove User Experience</p>
                                <p style={{ fontSize: '16px', marginTop: ' 5px' }}>Travel Mobility Service</p>
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
                        <h2>vision</h2>
                    </div>

                    <div className="row">
                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/program/startup-eco_5.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>Activate Startup Environment</h4><br />
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>We contributes to revitalizing the startup ecosystem through cooperation with government ministries and related organizations</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/program/DFS_5.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>Co-Growth of Hanjin & Startups</h4><br />
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>Through shared growth with startups, We realize ESG values such as environment, social responsibility, and sustainable development</p>
                            </div>
                        </div>

                        <div className="col-xl-4 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                            <div className="icon-box" style={{ textAlign: 'center' }}>
                                <img src={require('../../assets/img/program/startup-eco_6.png').default} className="img-fluid" style={{ width: '70%' }} alt=""></img>
                                <h4 style={{ textAlign: 'center', fontSize: '22px', fontWeight: 'bold', marginTop: '10px' }}>Lead Change and Innovation through Partnerships</h4>
                                <p style={{ textAlign: 'center', fontSize: '16px', marginTop: '5px' }}>By building partnerships for digital transformation, We leads change and innovation </p>
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
            <IntroduceEnMainElements />
            <IntroduceEnElements />
            {contourElements}
            {externalServiceElements}
            {contourElements}
            {ServiceElements}
        </>
    );

}

export default IntroduceEn;