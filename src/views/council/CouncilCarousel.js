import { useQuery, gql } from '@apollo/client';

const CouncilCarousel = () => {

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
        }
  `;

    const { loading, data } = useQuery(selectTodo);
    // console.log(loading, data);

    const CarouselMainElements = () => {
        
        const listNewsletterData = ((data.listNewsletterData.items)?.slice(0)).sort(function (a, b) { return b.bno - a.bno }).slice(0, 2);
        const listNoticeData = ((data.listNoticeData.items)?.slice(0)).sort(function (a, b) { return b.bno - a.bno }).slice(0,2);

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
                                            <a href={'/council/announce/detail/'+ Number(listNoticeData[0].bno)}>
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
                                                <a href={'/council/announce/detail/'+ Number(listNoticeData[1].bno)}>
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
                                                <a href={'/council/oi/detail/'+ Number(listNewsletterData[0].bno)}>
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
                                                <a href={'/council/oi/detail/'+ Number(listNewsletterData[1].bno)}>
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

    if(loading) {
        return (<><p></p></>)
    }else {
        return (
            <CarouselMainElements />
        )
    }
  


}

export default CouncilCarousel;