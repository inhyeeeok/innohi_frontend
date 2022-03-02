import React, { useEffect } from 'react';
import * as json2data from '../../components/JsonData'
import { useParams } from 'react-router-dom';
import * as tt from './CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";

const AnnouceDetail = ({signOut, user}) => {
    const params = useParams;
    const detailData = json2data.announceTestData[params().bno];
    console.log(json2data)

    tt.headerGrid();

    const RenderImg = (data) => {
        const wfw = data.data.announceTestData[Number(params().bno)-1];

        return (
            <div className="portfolio-img">
                <h4>{wfw.title}</h4>
                <img src={require('../../assets/img/council/announce/' + Number(wfw.bno) + '/' + wfw.img).default} className="img-fluid" alt=""></img>
                <p>{wfw.content}</p>
            </div>
        )
    }

    useEffect(() => {
        tt.eventLogOut(signOut);
        tt.changeName(user.username);
    })

    return (
        <>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container" data-aos="fade-up" >
                    <div className="section-title">
                        <h2>알려드려요</h2>
                        {/* <p>새로운 기술과 트렌드를 innoHI가 콕 찝어드립니다.</p> */}
                    </div>
                    <div id='entryPage' className="section-title" data-aos="fade-up" data-aos-delay="200">
                        <RenderImg data={json2data} />
                    </div>
                </div>
            </section>
        </>
    )

}

export default  withAuthenticator(AnnouceDetail, {
    socialProviders: ['google'],
    hideSignUp : [true],
  //   loginMechanisms : ['username'],
    loginMechanisms : ['email'],
  //  components : [components],
    variation : ["modal"]
  });
  