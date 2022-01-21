export const BlogElements =
    <section id="blog" className="blog" style={{padding:'60px 0 20px 0'}}>
        <div className="container" data-aos="fade-up">
            <div className="section-title" style={{marginBottom:'20px'}}>
                <h2>스타트업 아카이브</h2>
                <p>스타트업 & 지원기관의 투자라운딩 소식, 모집 소식,주요 뉴스 등 최신정보(DB)를 검색하고,구독과 알림을 통해 연결성을 강화합니다.
                    <br />그간 Inno H.I.가 구축해 온 글로벌  Startup 정보를 확인하실 수 있습니다.
                </p>
            </div>

            <div className="row">
                <div id="entry" className="col-lg-8 entries">

                </div>

                <div className="col-lg-4">
                    <div className="sidebar">
                        <h3 className="sidebar-title">검색</h3>

                        <div className="sidebar-item search-form">
                            <form action="">
                                <input type="text"></input>
                                 <button type="submit"><i className="bi bi-search"></i></button>
                            </form>
                        </div>

                        <h3 className="sidebar-title">분류</h3>
                        <div className="sidebar-item categories">
                            <ul>
                                <li><a href="/">IoT <span>(25)</span></a></li>
                                <li><a href="/">데이터분석 <span>(12)</span></a></li>
                                <li><a href="/">AI <span>(5)</span></a></li>
                                <li><a href="/">플랫폼서비스 <span>(22)</span></a></li>
                                <li><a href="/">지속가능성 <span>(8)</span></a></li>
                                <li><a href="/">VR <span>(14)</span></a></li>
                                <li><a href="/">핀테크 <span>(5)</span></a></li>
                                <li><a href="/">자율주행 <span>(14)</span></a></li>
                                <li><a href="/">모빌리티 <span>(4)</span></a></li>
                                <li><a href="/">업무자동화 <span>(6)</span></a></li>
                                <li><a href="/">로보틱스 <span>(4)</span></a></li>
                                <li><a href="/">네트워크 <span>(3)</span></a></li>
                            </ul>
                        </div>

                        <h3 className="sidebar-title">Tags</h3>
                        <div className="sidebar-item tags">
                            <ul>
                                <li><a href="/">의료</a></li>
                                <li><a href="/">NEXT RISE</a></li>
                                <li><a href="/">BATCH9</a></li>
                                <li><a href="/">물류</a></li>
                                <li><a href="/">APAC SUMMIT</a></li>
                                <li><a href="/">SUMMER SUMMIT</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    ;

export const ArticleElements = (Data) => {
    return (
        Data.map((v, i) => {
            return (
                <article className="entry">

                    <div className="entry-img">
                        <img src="" alt="" className="img-fluid"></img>
                    </div>

                    <h2 className="entry-title">
                        <a href={'/startupDetail/'+ v.S_NO}>{v.S_MAIN_SERVICE}. <span style={{ color: 'rgb(253, 142, 77)' }}>{v.S_NAME}</span></a>
                    </h2>

                    <div className="entry-meta">
                        <ul>
                            <li className="d-flex align-items-center"><i className="bi bi-person"></i> <div>{v.S_EMPLOYEE_NUM}</div></li>
                            <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <div>{v.S_RESEARCHED_TIME}</div></li>
                            <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <div>{v.S_TECH_TYPE}</div></li>
                        </ul>
                    </div>

                    <div className="entry-content">
                        <p>{v.S_SERVICE_DETL}</p>
                    </div>

                </article>
            )
        })
    )
} 

export const page =
    <div className="blog-pagination">
        <ul className="justify-content-center">
            <li><a href="/">1</a></li>
            <li className="active"><a href="/">2</a></li>
            <li><a href="/">3</a></li>
        </ul>
    </div>
    ;

export const sd = '2'
    ;