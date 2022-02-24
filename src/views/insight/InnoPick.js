import React, { useState, useEffect } from 'react';

//import axios from 'axios';
import * as jsondata from '../../components/JsonData';
import { BiLink } from "react-icons/bi";
import AOS from "aos";
import Isotope from 'isotope-layout'
import reactDom from 'react-dom';


const TechPick = () => {

    const firstData = jsondata.newsletterTestData.slice(jsondata.newsletterTestData.length - 10, jsondata.newsletterTestData.length); //최초 진입시 가장 최신 50개 렌더링
    const [stData, setStData] = useState(firstData);
    const [start, setStart] = useState(0);
    const [end, setEnd] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const pageNumber = [];
    console.log(firstData);


    window.addEventListener('load', () => {
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
    });

    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
            return [...document.querySelectorAll(el)]
        } else {
            return document.querySelector(el)
        }
    }

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

    const AA = (data) => {
        return (
            data.map((v, i) => {
                return (
                    <div className={'col-lg-4 col-md-6 portfolio-item filter-' + i}>
                        <div className="portfolio-img"><img src={require('../../assets/img/coucil/oi/newsletter.png').default} className="img-fluid" alt=""></img></div>
                        <div className="portfolio-info">
                            <h4>{i}</h4>
                            <p>2022.05.18</p>
                            <a href="https://www.plugandplaytechcenter.com/events/web-30-and-big-data-in-healthcare/" className="details-link" title="More Details"><BiLink /></a>
                        </div>
                    </div>
                )
            })
        )
    }

    const UU = (data) => {
        return (
            data.map((v, i) => {
                return (
                    <>
                        {/* <li data-filter={".filter-"+ i} className="filter-active">{i}</li> */}
                        <li data-filter={".filter-" + i}>{i}</li>
                    </>

                )
            })
        )
    }

    useEffect(() => {
        reactDom.render(AA(firstData), document.getElementById('entryPage'));
    })

    return (
        <>
            <section id="portfolio" className="portfolio section-bg" style={{ marginTop: '62px' }}>
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Inno Pick</h2>
                        <p>새로운 기술과 트렌드를 innoHI가 콕 찝어드립니다.</p>
                    </div>

                    <div id='entryPage' className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

                    </div>

                    <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
                        {/* <li data-filter="*" className="filter-active">전체</li>
                                <li data-filter=".filter-ing">1</li>
                                <li data-filter=".filter-come">2</li>
                                <li data-filter=".filter-finish">3</li> */}
                    </ul>

                </div>
            </section>
        </>
    );


}

export default TechPick;
