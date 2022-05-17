import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as CouncilCommon from '../council/CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useQuery, gql } from '@apollo/client';
import GoBackButton from '../../components/button/GoBackButton';

const AnnouceDetail = ({ signOut, user }) => {
    const params = useParams;

    CouncilCommon.headerGrid();

    const selectTodo = gql`
        query listInnohis {
            listNoticeData {
                    items {
                        id
                        bno
                        content
                        description
                        regDate
                        sendDate
                        title
                    }
                }
            }
    `;

    const { loading, data } = useQuery(selectTodo);

    const RenderImg = () => {
        const returnValue = (data.listNoticeData.items).find(function (jsonData) { return jsonData.bno === params().bno })

        return (
            <div className="container">
                <div className="table-responsive-md" >
                    <table className="table table-bordered" style={{ backgroundColor: 'white' }}>
                        <thead>
                            <tr align="center" >
                                <th colSpan="4" style={{fontSize:'24px'}}>{returnValue.title}</th>
                            </tr>
                        </thead>
                    </table>
                    <table className="table table-bordered"  style={{ backgroundColor: 'white' }}>
                        <tbody>
                            <tr>
                                <td >
                                    <img src={require('../../assets/img/council/announce/' + Number(returnValue.bno) + '/' + returnValue.content).default} className="img-fluid" alt=""></img>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                    <table className="table table-bordered"  style={{ backgroundColor: 'white' }}>
                        <tbody>
                            <tr align="left">
                                <td colSpan="2" style={{'whiteSpace': 'pre-wrap'}}>{returnValue.description}</td>
                            </tr>
                        </tbody>
                    </table>

                    <GoBackButton />
                </div>
            </div>
        )
    }

    useEffect(() => {
        CouncilCommon.eventLogOut(signOut);
        CouncilCommon.changeName(CouncilCommon.usernameCheck(user));
    })

    if (!loading) {
        return (
            <>
                <section id="portfolio" className="portfolio section-bg" style={{ marginTop: '61px' }}>
                    <div className="container" data-aos="fade-up" >
                        <div className="section-title">
                            <h2>알려드려요</h2>
                            {/* <p>새로운 기술과 트렌드를 innoHI가 콕 찝어드립니다.</p> */}
                        </div>
                        <div id='entryPage' className="section-title" data-aos="fade-up" data-aos-delay="200">
                            <RenderImg />
                        </div>
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

export default withAuthenticator(AnnouceDetail, {
    socialProviders: ['google'],
    hideSignUp: [true],
    //   loginMechanisms : ['username'],
    loginMechanisms: ['email'],
    //  components : [components],
    variation: ["modal"]
});
