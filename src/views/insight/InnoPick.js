import React, { useEffect } from 'react';

import { BiLink } from "react-icons/bi";
import AOS from "aos";
import Isotope from 'isotope-layout'
import { useQuery, gql } from '@apollo/client';

const InnoPick = () => {

    const selectTodo = gql`
    query listInnohis {
        listTechPickData {
            items {
                id
                bno
                content
                regDate
                title
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

    const RenderPortfolio = () => {
        if (!loading) {
            const listTechPickData = ((data.listTechPickData.items)?.slice(0)).sort(function (a, b) { return b.bno - a.bno });
            return (
                listTechPickData.map((v, i) => {
                    const splitContent = v.content.split(',');
                    const regDateContent = v.regDate.slice(0, 4)+'-'+v.regDate.slice(4, 6)+'-'+v.regDate.slice(6, 8)
                    return (
                        <div className={'col-lg-4 col-md-6 portfolio-item filter-' + i}>
                            <a href={"/insight/innopick/detail/" + v.id}>
                                <div className="portfolio-img"><img src={require('../../assets/img/insight/techpick/' + v.bno + '/' + splitContent[0]).default} className="img-fluid" alt=""></img></div>
                                <div className="portfolio-info">
                                    <h4>{v.title}</h4>
                                    <p>{regDateContent}</p>
                                    <a href={"/insight/innopick/detail/" + v.id} className="details-link" title="More Details"><BiLink /></a>
                                </div>
                            </a>
                        </div>
                    )
                })
            )
        } else {
            return (
                <>
                    <p></p>
                </>
            )
        }
    }

    useEffect(() => { })

    return (
        <>
            <section id="portfolio" className="portfolio section-bg" style={{ marginTop: '62px' }}>
                <div className="container" data-aos="fade-up">

                    <div className="section-title">
                        <h2>Inno Pick</h2>
                        <p>새로운 기술과 트렌드를 innoHI가 콕 찝어드립니다.</p>
                    </div>

                    <div id='entryPage' className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">
                        <RenderPortfolio />
                    </div>
                </div>
            </section>
        </>
    );
}

export default InnoPick;
