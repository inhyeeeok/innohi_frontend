import React, { useEffect } from 'react';
import * as json2data from '../../components/JsonData'
import { useParams } from 'react-router-dom';
import * as tt from './CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";

const AnnouceDetail = ({ signOut, user }) => {
    const params = useParams;

    tt.headerGrid();

    const RenderImg = (data) => {
        const rdData = data.data.announceTestData[Number(params().bno) - 1];

        return (
            <div className="container">
                <div className="table-responsive-md" >
                    <table className="table table-bordered">
                        <thead style={{ backgroundColor: 'rgba(242, 242, 242, 0.706)' }}>
                            <tr align="center" >
                                <th colSpan="4" style={{fontSize:'24px'}}>{rdData.title}</th>
                            </tr>
                        </thead>
                    </table>
                    <table className="table table-bordered">
                        <tbody>
                            <tr>
                                <td>
                                    <img src={require('../../assets/img/council/announce/' + Number(rdData.bno) + '/' + rdData.img).default} className="img-fluid" alt=""></img>
                                </td>
                            </tr>
                            <tr align="left" >
                                <td colSpan="2" style={{'white-space': 'pre-wrap'}}>{rdData.content}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
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

export default withAuthenticator(AnnouceDetail, {
    socialProviders: ['google'],
    hideSignUp: [true],
    //   loginMechanisms : ['username'],
    loginMechanisms: ['email'],
    //  components : [components],
    variation: ["modal"]
});
