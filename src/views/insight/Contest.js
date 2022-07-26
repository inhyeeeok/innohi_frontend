import React, { useEffect } from 'react';
import AOS from "aos";
import Isotope from 'isotope-layout'
import { BiLink } from "react-icons/bi";
import * as DateFunction from '../../components/common/DateFunction';
import { useQuery, gql } from '@apollo/client';

const Contest = () => {

    const selectTodo = gql`
        query listInnohis {
            listEventData {
                items {
                    endDate
                    id
                    img
                    item
                    link
                    startDate
                }
        }
        }
    `;

    const eventFunction = () => {
        const select = (el, all = false) => {
            el = el.trim()
            if (all) {
                return [...document.querySelectorAll(el)]
            } else {
                return document.querySelector(el)
            }
        }

        /**
     * Easy event listener function
     */
        const on = (type, el, listener, all = false) => {
            let selectEl = select(el, all)
            if (selectEl) {
                if (all) {
                    selectEl.forEach(e => e.addEventListener(type, listener))
                } else {
                    selectEl.addEventListener(type, listener)
                }
            }
        }

        let portfolioContainer = select('.portfolio-container');

        if (portfolioContainer) {
            let portfolioIsotope = new Isotope(portfolioContainer, {
                itemSelector: '.portfolio-item'
            });

            let portfolioFilters = select('#portfolio-flters li', true);

            on('click', '#portfolio-flters li', function (e) {
                e.preventDefault();
                portfolioFilters.forEach(function (el) {
                    el.classList.remove('filter-active');
                });
                this.classList.add('filter-active');

                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                portfolioIsotope.on('arrangeComplete', function () {
                    AOS.refresh()
                });
            }, true);
        }

    }

    setTimeout(() => { eventFunction() }, 500);

    const { loading, data } = useQuery(selectTodo);
    // console.log(error)
    // console.log(data)
    // console.log(loading)

    const arrOrder = (key) => {
        return (a, b) => {
            if (a[key] < b[key]) {
                return 1;
            } else if (a[key] > b[key]) {
                return -1;
            }
            return 0;
        }
    }

    const ClassificationData = () => {
        let ingData = [];
        let comeData = [];
        let finishData = [];

        const today = DateFunction.getToday('yyyymmdd');

        if (loading) {
            return false;

        } else {
            
            data.listEventData.items.map((i) => {
                if (today < i.startDate) {      //예정 today() < startdate 
                    return comeData.push(i);
                } else if (i.endDate < today) { // 마감 endate < today()
                    return finishData.push(i);
                } else {                        // 진행중 startdate <= today() <= enddate
                    return ingData.push(i);
                }
            })

            

            ingData.sort(arrOrder('startDate'));
            comeData.sort(arrOrder('startDate'));
            finishData.sort(arrOrder('startDate'));

            console.log(finishData);

            const GridF = (param) => {

                return param.dataSet.map(i => {
                    const betweenDate = `${i.startDate.substr(0, 4)}.${i.startDate.substr(4, 2)}.${i.startDate.substr(6, 2)} ~ ${i.endDate.substr(0, 4)}.${i.endDate.substr(4, 2)}.${i.endDate.substr(6, 2)}`

                    return (
                        <div className={param.classValue} key={i.item}>
                            <a href={i.link}>
                                <div className="portfolio-img"><img src={require(`../../assets/img/${i.img}`).default} className="img-fluid" alt=""></img></div>
                                <div className="portfolio-info">
                                    <h4>{i.item}</h4>
                                    <p>{betweenDate}</p>
                                    <a href={i.link} className="details-link" title="More Details"><BiLink /></a>
                                </div>
                            </a>
                        </div>
                    )
                })
            }

            return (
                <>
                    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        <GridF dataSet={ingData} classValue='col-lg-4 col-md-6 portfolio-item filter-ing' />
                        <GridF dataSet={comeData} classValue='col-lg-4 col-md-6 portfolio-item filter-come' />
                        <GridF dataSet={finishData} classValue='col-lg-4 col-md-6 portfolio-item filter-finish' />
                    </div>
                </>
            )
        }
    }

    const Elements = () => {
        if (!loading) {
            return (
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

                        <ClassificationData />
                    </div>
                </section>
            )
        } else {
            return (
                <><p>loading....</p></>
            )
        }
    }

    useEffect(() => {});

    return (
        <>
            <main id="main">
                <Elements />
            </main>
        </>
    );
}

export default Contest;