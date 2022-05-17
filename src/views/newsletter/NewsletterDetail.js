import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as CouncilCommon from '../council/CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useQuery, gql } from '@apollo/client';
import GoBackButton from '../../components/button/GoBackButton';

const NewsletterDetail = ({ signOut, user }) => {
    const params = useParams;

    CouncilCommon.headerGrid();

    const selectTodo = gql`
        query listInnohis {
            listNewsletterData {
                    items {
                        id
                        bno
                        content
                        regDate
                        sendDate
                        title
                    }
                }
            }
    `;

    const { loading, data } = useQuery(selectTodo);
    // console.log(error)
    // console.log(data)
    // console.log(loading)

    const setFrameHeight = () => {
        const height = document.body.scrollHeight;
        document.getElementById('ContentUrl').style.height = height + 50 + 'px';
    }

    const RenderArticle = () => {

        const returnValue = (data.listNewsletterData.items).find(function (jsonData) { return jsonData.bno === params().bno });

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

    CouncilCommon.eventLogOut(signOut);
    CouncilCommon.changeName(CouncilCommon.usernameCheck(user));

    useEffect(() => {
        if (!loading) setFrameHeight();
    })

    if (!loading) {
        return (
            <>
                <section id="portfolio" className="portfolio section-bg" style={{ marginTop: '61px' }}>
                    <div className="container" data-aos="fade-up" >
                        <div className="section-title">
                            <h2>오픈 이노베이션 레터</h2>
                        </div>
                        <div id='entryPage' className="section-title" data-aos="fade-up" data-aos-delay="200">
                            <RenderArticle />
                        </div>
                        <GoBackButton />
                    </div>
                </section>
            </>
        )

    } else {
        return (
            <>
                <p>loading....</p>
            </>
        )
    }


}

export default withAuthenticator(NewsletterDetail, {
    socialProviders: ['google'],
    hideSignUp: [true],
    //   loginMechanisms : ['username'],
    loginMechanisms: ['email'],
    //  components : [components],
    variation: ["modal"]
});
