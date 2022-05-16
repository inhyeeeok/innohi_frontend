import { useQuery, gql } from '@apollo/client';
import SwiperComponents from '../../components/swipers/Swiper';
import React, { useEffect } from 'react';

const CouncilCarousel = (param) => {

    const selectTodo = gql`
    query listInnohis {
        listNoticeData {
                items {
                    id
                    bno
                    content
                    description
                    regDate
                    sendDate
                    title
                }
        }

        listNewsletterData {
                items {
                    id
                    bno
                    content
                    regDate
                    sendDate
                    title
                }
        }

        listStartupArchiveData (limit: 500) {
            items {
              id
              category_L
              city
              category_S
              country
              employeeNum
              estbYear
              investRound
              logoLink
              moneyRaised
              name
              service
              no
            }
          }
    }
  `;

    const { loading, data } = useQuery(selectTodo);

    const CarouselMainElements = () => {

        const listNewsletterData = ((data.listNewsletterData.items)?.slice(0)).sort(function (a, b) { return b.bno - a.bno }).slice(0, 2);
        const listNoticeData = ((data.listNoticeData.items)?.slice(0)).sort(function (a, b) { return b.bno - a.bno }).slice(0, 2);

        return (
            <>
                <section id="about" className="about" style={{ background: '#f3f5fa' }}>
                    <div className="container" data-aos="fade-up">
                        <div className="row">
                            <div className="section-title col-sm-6">
                                <h2 style={{ textTransform: 'capitalize' }}><a href='/council/announce'><span style={{ color: '#37517e' }}>운영 현황</span>    <span style={{ fontSize: '24px' }}>+</span></a></h2>
                                <div style={{ background: '#FFFFFF', marginTop: '10px' }}>
                                    <div className='row'>
                                        <div className="col-xl-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                            <a href={'/council/announce/detail/' + Number(listNoticeData[0].bno)}>
                                                <div className="icon-box" style={{ padding: '10px' }}>
                                                    <img src={require('../../assets/img/council/announce/' + Number(listNoticeData[0].bno) + '/' + listNoticeData[0].content).default} className="img-fluid" style={{ width: '50%' }} alt=""></img>
                                                    <p style={{ color: '#000000' }}>{listNoticeData[0].title}</p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div style={{ background: '#FFFFFF', marginBottom: '10px' }}>
                                        <div className='row'>
                                            <div className="col-xl-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                                <a href={'/council/announce/detail/' + Number(listNoticeData[1].bno)}>
                                                    <div className="icon-box" style={{ padding: '10px' }}>
                                                        <img src={require('../../assets/img/council/announce/' + Number(listNoticeData[1].bno) + '/' + listNoticeData[1].content).default} className="img-fluid" style={{ width: '50%' }} alt=""></img>
                                                        <p style={{ color: '#000000' }}>{listNoticeData[1].title}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="section-title col-sm-6">
                                <h2 style={{ textTransform: 'capitalize' }}><a href='/council/oi'><span style={{ color: '#37517e' }}>이노하이 레터</span>    <span style={{ fontSize: '24px' }}>+</span></a></h2>
                                <div>
                                    <div style={{ background: '#FFFFFF', marginTop: '10px' }}>
                                        <div className='row'>
                                            <div className="col-xl-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                                <a href={'/council/oi/detail/' + Number(listNewsletterData[0].bno)}>
                                                    <div className="icon-box" style={{ padding: '10px' }}>
                                                        <img src={require('../../assets/img/council/oi/newsletter_main_page.png').default} className="img-fluid" style={{ width: '50%' }} alt=""></img>
                                                        <p style={{ color: '#000000' }}>{listNewsletterData[0].title}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ background: '#FFFFFF', marginBottom: '10px' }}>
                                        <div className='row'>
                                            <div className="col-xl-12 col-md-12 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                                <a href={'/council/oi/detail/' + Number(listNewsletterData[1].bno)}>
                                                    <div className="icon-box" style={{ padding: '10px' }}>
                                                        <img src={require('../../assets/img/council/oi/newsletter_main_page.png').default} className="img-fluid" style={{ width: '50%' }} alt=""></img>
                                                        <p style={{ color: '#000000' }}>{listNewsletterData[1].title}</p>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }

    const CarouselStartupElements = () => {

        const listStartupArchiveData = ((data.listStartupArchiveData.items)?.slice(0)).sort(function (a, b) { return b.no - a.no }).slice(0, 5);

        const ListRendering = () => {
            return (
                listStartupArchiveData.map((i) => {
                    return (
                        <div className="swiper-slide" key={i.no}><a href={'../../council/archive/detail/' + i.no}><img src={i.logoLink} className="img-fluid" style={{ width: "320px", height: "200px" }} alt=""></img></a></div>
                    )
                })
            )
        }

        return (
            <section id="clients" className="clients" style={{ background: '#f3f5fa' }}>
                <div className="container" data-aos="fade-up">
                    <header className="header-font">
                        <h2><a href='/council/archive'><span style={{ color: '#37517e' }}>이런 스타트업은 어때요?</span>    <span style={{ fontSize: '24px' }}>+</span></a></h2>
                    </header>

                    <div className="clients-slider swiper">
                        <div className="swiper-wrapper align-items-center">
                            <ListRendering />
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>

                </div>
            </section>
        )
    }

    useEffect(() => {
        SwiperComponents();
      })

    if (loading) {
        return (<><p></p></>)
    } else {
        if (param.type === 'operation') {
            return (
                <CarouselMainElements />
            )
        } else {
            return (
                <CarouselStartupElements />
            )
        }
    }

}

export default CouncilCarousel;