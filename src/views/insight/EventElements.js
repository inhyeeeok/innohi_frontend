import { BiLink } from "react-icons/bi";

export const BreadCrumbsElements =
    <>
        <section id="breadcrumbs" className="breadcrumbs" style={{ background: "#ffffff" }}>
            <div className="container">

            </div>
        </section>
    </>
    ;

export const PortfolioElements =
    <section id="portfolio" className="portfolio section-bg" style={{ marginTop: '61px' }}>
        <div className="container" data-aos="fade-up">

            <div className="section-title">
                <h2>세미나 및 컨퍼런스</h2>
                <p>이런 프로그램들도 놓치지 마세요!</p>
            </div>

            <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <li data-filter="*" className="filter-active">전체</li>
                <li data-filter=".filter-ing">진행중</li>
                <li data-filter=".filter-come">예정</li>
                <li data-filter=".filter-finish">마감</li>
            </ul>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                <div className="col-lg-4 col-md-6 portfolio-item filter-come">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/PnP_Web3_and_Big_Data_in_Healthcare.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>PnP Web 3.0 빅데이터</h4>
                        <p>2022.05.18</p>
                        <a href="https://www.plugandplaytechcenter.com/events/web-30-and-big-data-in-healthcare/" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-come">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/만반잘부.jpg').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>만반잘부 창업촌</h4>
                        <p>2021.02.10</p>
                        <a href="https://startingpoint.imweb.me/Entrepreneurvillage" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                </div>

                {/* <div className="col-lg-4 col-md-6 portfolio-item filter-ing">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/만반잘부.jpg').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>SUMMER SUMMIT</h4>
                        <p>2021.11.01~2021.12.31</p>
                        <a href="eventDetail.html" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                </div> */}

                <div className="col-lg-4 col-md-6 portfolio-item filter-finish">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/APAC SUMMIT 2021.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>APAC SUMMIT 2021</h4>
                        <p>2021.11.01~2021.12.31</p>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-finish">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/comeup.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>Comeup</h4>
                        <p>2021.11.01~2021.12.31</p>
                        <a href="https://www.kcomeup.com/" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-finish">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/nextrise 2021.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>nextrise 2021</h4>
                        <p>2021.11.01~2021.12.31</p>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-finish">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/SUMMER SUMMIT.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>SUMMER SUMMIT</h4>
                        <p>2021.11.01~2021.12.31</p>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-finish">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/WINTER SUMMIT.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>WINTER SUMMIT</h4>
                        <p>2021.11.01~2021.12.31</p>
                        <a href="portfolio-details.html" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                </div>

            </div>

        </div>
    </section>
    ;
