import React, { useEffect } from 'react';
import * as json2data from '../../components/JsonData'
import { useParams } from 'react-router-dom';
import * as tt from './CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";

const NewsletterDetail = ({ signOut, user }) => {
    const params = useParams;

    tt.headerGrid();

    const setFrameHeight = () => {
        const height = document.body.scrollHeight;
        document.getElementById('ContentUrl').style.height = height + 50 + 'px';
    }

    const RenderImg = (data) => {

        const returnValue = (data.data.newsletterTestData).find(function (jsonData) { return jsonData.bno === Number(params().bno) })

        return (
            <div className="container">
                <div className="table-responsive-md" >
                    <table className="table table-bordered" style={{ backgroundColor: 'white' }}>
                        <thead>
                            <tr align="center" >
                                <th colSpan="4" style={{ fontSize: '24px' }}>{returnValue.title}</th>
                            </tr>
                        </thead>
                    </table>
                    <table className="table table-bordered" style={{ backgroundColor: 'white' }}>
                        <tbody>
                            <tr>
                                <td >
                                    <iframe
                                        title={returnValue.bno}
                                        id="ContentUrl"
                                        width="100%"
                                        height="100%"
                                        src={returnValue.content}
                                        // onLoad={setFrameHeight}
                                        scrolling="auto"
                                    >
                                    </iframe>

                                </td>
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
        setFrameHeight();
    })

    return (
        <>
            <section id="portfolio" className="portfolio section-bg">
                <div className="container" data-aos="fade-up" >
                    <div className="section-title">
                        <h2>오픈 이노베이션 레터</h2>
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

export default withAuthenticator(NewsletterDetail, {
    socialProviders: ['google'],
    hideSignUp: [true],
    //   loginMechanisms : ['username'],
    loginMechanisms: ['email'],
    //  components : [components],
    variation: ["modal"]
});
