import React, { useState, useEffect } from 'react';

import * as jsondata from '../../components/JsonData';
import { BiLink } from "react-icons/bi";
import AOS from "aos";
import Isotope from 'isotope-layout'


const InnoPick = () => {

    const firstData = jsondata.techPickTestData.slice(jsondata.techPickTestData.length - 50, jsondata.techPickTestData.length); //최초 진입시 가장 최신 50개 렌더링
    const [stData] = useState(firstData);
 //   const [start, setStart] = useState(0);
//    const [end, setEnd] = useState(5);
 //   const [currentPage, setCurrentPage] = useState(1);
//    const pageNumber = [];

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

    const RenderPortfolio = (data) => {
        return (
            data.stData.map((v, i) => {
                return (
                    <div className={'col-lg-4 col-md-6 portfolio-item filter-' + i}>
                        <div className="portfolio-img"><img src={require('../../assets/img/insight/techpick/'+v.bno+'/'+v.content[0]).default} className="img-fluid" alt=""></img></div>
                        <div className="portfolio-info">
                            <h4>{v.title}</h4>
                            <p>{v.regDate.slice(0,10)}</p>
                            <a href={"/insight/detail/"+v.bno+"/"+v.content} className="details-link" title="More Details"><BiLink /></a>
                        </div>
                    </div>
                )
            })
        )
    }

    // const UU = (data) => {
    //     return (
    //         data.map((v, i) => {
    //             return (
    //                 <>
    //                     {/* <li data-filter={".filter-"+ i} className="filter-active">{i}</li> */}
    //                     <li data-filter={".filter-" + i}>{i}</li>
    //                 </>

    //             )
    //         })
    //     )
    // }

    useEffect(() => {

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
                        <RenderPortfolio stData={stData}/>
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

export default InnoPick;
