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
                <h2>Event</h2>
                <p>이런 이벤트들도 놓치지 마세요!</p>
            </div>

            <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                <li data-filter="*" className="filter-active">전체</li>
                <li data-filter=".filter-ing">진행중</li>
                <li data-filter=".filter-come">예정</li>
                <li data-filter=".filter-finish">마감</li>
            </ul>

            <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                <div className="col-lg-4 col-md-6 portfolio-item filter-come">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLScB_r-XIOR0H9I6HxdrwIE4MFqWmP7ho1lOsT_ijsAOmCcMlQ/viewform">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/2022_pnp_summer_summit.jpg').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>2022 PnP Summer Summit</h4>
                        <p>2022.06.14 ~ 2022.06.16</p>
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLScB_r-XIOR0H9I6HxdrwIE4MFqWmP7ho1lOsT_ijsAOmCcMlQ/viewform" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-come">
                    <a href="https://www.plugandplaytechcenter.com/events/web-30-and-big-data-in-healthcare/">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/PnP_Web3_and_Big_Data_in_Healthcare.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>PnP Web 3.0 빅데이터</h4>
                        <p>2022.05.18</p>
                        <a href="https://www.plugandplaytechcenter.com/events/web-30-and-big-data-in-healthcare/" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-come">
                    <a href="http://wiznet.ai/aiexpo/index/">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/2022_ai_expo_korea.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>AI EXPO KOREA 2.0</h4>
                        <p>2022.04.13~2022.04.15</p>
                        <a href="http://wiznet.ai/aiexpo/index/" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-come">
                    <a href="https://japan.plugandplaytechcenter.com/summit/summit-upcoming/">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/pnp_japan_summit_2022.jpg').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>PnP Japan Summit 2022</h4>
                        <p>2022.03.02~2022.03.22</p>
                        <a href="https://japan.plugandplaytechcenter.com/summit/summit-upcoming/" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-come">
                    <a href="https://www.youtube.com/watch?v=INK8oo-3_EQ&list=PLXtJv3Egd0bYk5tUolnu7mgSq7S8M5Ek6/">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/public_session_org.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>ICT분야 창업·벤처 지원사업 통합설명회</h4>
                        <p>2022.02.14</p>
                        <a href="https://www.youtube.com/watch?v=INK8oo-3_EQ&list=PLXtJv3Egd0bYk5tUolnu7mgSq7S8M5Ek6/" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                    </a>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-come">
                    <a href="https://startingpoint.imweb.me/Entrepreneurvillage">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/만반잘부.jpg').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>만반잘부 창업촌</h4>
                        <p>2022.02.10</p>
                        <a href="https://startingpoint.imweb.me/Entrepreneurvillage" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                    </a>
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
                    <a href="https://www.plugandplayapac.com/apac-summit">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/APAC SUMMIT 2021.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>APAC SUMMIT 2021</h4>
                        <p>2021.11.23~2021.11.25</p>
                        <a href="https://www.plugandplayapac.com/apac-summit" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-finish">
                    <a href="https://www.kcomeup.com/">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/comeup.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>Comeup</h4>
                        <p>2021.11.17~2021.11.19</p>
                        <a href="https://www.kcomeup.com/" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-finish">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/WINTER SUMMIT.png').default} className="img-fluid" alt=""></img></div>
                    <a href="https://www.plugandplaytechcenter.com/events/winter-summit-2021/">
                    <div className="portfolio-info">
                        <h4>WINTER SUMMIT</h4>
                        <p>2021.11.08~2021.11.18</p>
                        <a href="https://www.plugandplaytechcenter.com/events/winter-summit-2021/" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-finish">
                    <a href="https://www.nextrise.co.kr/">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/nextrise 2021.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>nextrise 2021</h4>
                        <p>2021.06.28~2021.06.29</p>
                        <a href="https://www.nextrise.co.kr/" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                    </a>
                </div>

                <div className="col-lg-4 col-md-6 portfolio-item filter-finish">
                    <a href="https://www.plugandplaytechcenter.com/summer-2021/">
                    <div className="portfolio-img"><img src={require('../../assets/img/insight/contest/SUMMER SUMMIT.png').default} className="img-fluid" alt=""></img></div>
                    <div className="portfolio-info">
                        <h4>SUMMER SUMMIT</h4>
                        <p>2021.06.14~2021.06.24</p>
                        <a href="https://www.plugandplaytechcenter.com/summer-2021/" className="details-link" title="More Details"><BiLink /></a>
                    </div>
                    </a>
                </div>

            </div>

        </div>
    </section>
    ;
