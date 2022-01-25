export const BreadCrumbsElements =
    <>
        <section id="breadcrumbs" className="breadcrumbs" style={{ background: "#ffffff" }}>
            <div className="container">

            </div>
        </section>
    </>
    ;

export const PortfolioElements =
    <section id="portfolio" className="portfolio">
        <div className="container" data-aos="fade-up">

            <div className="section-title">
                <h2>세미나 및 컨퍼런스</h2>
                <p>스타트업 & 지원기관의 투자라운딩 소식, 모집 소식,주요 뉴스 등 최신정보(DB)를 검색하고,구독과 알림을 통해 연결성을 강화합니다.</p>
            </div>

            <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <li data-filter="*" className="filter-active">전체</li>
                <li data-filter=".filter-ing">진행중</li>
                <li data-filter=".filter-come">예정</li>
                <li data-filter=".filter-finish">마감</li>
            </ul>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                <div className="col-lg-4 col-md-6 portfolio-item filter-ing">
                    <div className="portfolio-img"><img src={require('../../assets/img/clients/kal.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>APAC SUMMIT 2021</h4>
                        <p>2021.11.01~2021.12.31</p>
                        <a href="eventDetail.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-ing">
                    <div className="portfolio-img"><img src={require('../../assets/img/clients/kal.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>SUMMER SUMMIT</h4>
                        <p>2021.11.01~2021.12.31</p>
                        <a href="eventDetail.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-ing">
                    <div className="portfolio-img"><img src={require('../../assets/img/clients/kal.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>App 2</h4>
                        <p>App</p>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-come">
                    <div className="portfolio-img"><img src={require('../../assets/img/clients/kal.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>Card 2</h4>
                        <p>Card</p>
                        <a href="https://www.kcomeup.com/part/part_sign.jsp" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-finish">
                    <div className="portfolio-img"><img src={require('../../assets/img/clients/kal.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>Web 3</h4>
                        <p>Web</p>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><i className="bx bx-link"></i></a>
                    </div>
                </div>

            </div>

        </div>
    </section>
    ;

export const test =
    <>
    </>
    ;
