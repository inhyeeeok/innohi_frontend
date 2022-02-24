import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const InnoPickDetail = () => {
    const params = useParams;

    console.log(params());
    console.log(params().content);

    const RenderImg = (data) => {
        const contentDataArray = (data.data).split(',');
        console.log(contentDataArray[0]);

        return (
            contentDataArray.map((v) => {
                return (
                    <div className="portfolio-img">
                        <img src={require('../../assets/img/insight/techpick/' + params().bno + '/' + v).default} className="img-fluid" alt=""></img>
                    </div>
                )
            })
        )
    }

    useEffect(() => {
    })

    return (
        <>
            <section id="portfolio" className="portfolio section-bg" style={{ marginTop: '62px' }}>
                <div className="container" data-aos="fade-up" >
                    <div className="section-title">
                        <h2>Inno Pick</h2>
                        {/* <p>새로운 기술과 트렌드를 innoHI가 콕 찝어드립니다.</p> */}
                    </div>
                    <div id='entryPage' className="section-title" data-aos="fade-up" data-aos-delay="200">
                        <RenderImg data={params().content} />
                    </div>
                </div>
            </section>
        </>
    )

}

export default InnoPickDetail;