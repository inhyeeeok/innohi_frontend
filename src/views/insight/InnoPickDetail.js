import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const InnoPickDetail = () => {
    const params = useParams;

    const selectTodo = gql`
    query listInnohis ($id : ID!){
        getTechPickData(id: $id) {
            bno
            content
            id
            regDate
            title
        }
    }
    `;

    const input = {
        "id": params().id
    }

    const { loading, data } = useQuery(selectTodo, {
        variables: input
    });

    const RenderImg = () => {
        if (!loading) {
            const contentDataArray = (data.getTechPickData.content).split(',');
            console.log(contentDataArray[0]);

            return (
                contentDataArray.map((v) => {
                    return (
                        <div className="portfolio-img">
                            <img src={require('../../assets/img/insight/techpick/' + data.getTechPickData.bno + '/' + v).default} className="img-fluid" alt=""></img>
                        </div>
                    )
                })
            )
        } else {
            return (
                <><p></p></>
            )
        }
    }

    useEffect(() => {})

    return (
        <>
            <section id="portfolio" className="portfolio section-bg" style={{ marginTop: '62px' }}>
                <div className="container" data-aos="fade-up" >
                    <div className="section-title">
                        <h2>Inno Pick</h2>
                    </div>

                    <div id='entryPage' className="section-title" data-aos="fade-up" data-aos-delay="200">
                        <RenderImg />
                    </div>
                </div>
            </section>
        </>
    )

}

export default InnoPickDetail;