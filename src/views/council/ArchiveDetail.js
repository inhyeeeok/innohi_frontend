import React, { useEffect } from 'react';
import * as json2data from '../../components/JsonData'
import { useParams } from 'react-router-dom';
import * as tt from './CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";

const ArchiveDetail = ({ signOut, user }) => {
    const params = useParams;

    tt.headerGrid();

    const findStartup = (element) => {
        if (element.S_NO == params().bno) {
            return true;
        }
    }

    const RenderStartup = (data) => {
        console.log(data.data)

        return (
            <>
                <div className="container">
                    <div className="table-responsive-md" >
                        <table className="table table-bordered">
                            <thead style={{ backgroundColor: 'rgba(242, 242, 242, 0.706)' }}>
                                <tr align="center" >
                                    <th colSpan="4">{data.data.S_NAME}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {/* <td width="10%">번호</td>
                                    <td width="40%">{data.data.S_NO}</td>
                                    <td width="10%">카테고리</td>
                                    <td width="40%">{data.data.S_CATEGORY}</td> */}
                                    <td align="center" colSpan="1">카테고리</td>
                                    <td colSpan="3">{data.data.S_CATEGORY}</td>
                                </tr>
                                <tr>
                                     <td align="center" colSpan="1">테크 타입</td>
                                    <td colSpan="3">{data.data.S_TECH_TYPE}</td>
                                </tr>
                                <tr>
                                    <td align="center" colSpan="1">메인 서비스</td>
                                    <td colSpan="3">{data.data.S_MAIN_SERVICE}</td>
                                </tr>
                                <tr >
                                    <td align="center" colSpan="1">서비스 상세</td>
                                    <td colSpan="3">{data.data.S_SERVICE_DETL}</td>
                                </tr>
                                <tr >
                                    <td align="center" colSpan="1">고용 직원</td>
                                    <td colSpan="3">{data.data.S_EMPLOYEE_NUM}</td>
                                </tr>
                                <tr >
                                    <td align="center" colSpan="1">위치</td>
                                    <td colSpan="3">{data.data.S_LOCATION}</td>
                                </tr>
                                <tr >
                                    <td align="center" colSpan="1">조사 시간</td>
                                    <td colSpan="3">{data.data.S_RESEARCHED_TIME}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
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
                        <h2>스타트업 찾기</h2>
                        {/* <p>새로운 기술과 트렌드를 innoHI가 콕 찝어드립니다.</p> */}
                    </div>
                    <RenderStartup data={json2data.startupTestData.find(findStartup)} />
                </div>
            </section>
        </>
    )
}

export default withAuthenticator(ArchiveDetail, {
    socialProviders: ['google'],
    hideSignUp: [true],
    //   loginMechanisms : ['username'],
    loginMechanisms: ['email'],
    //  components : [components],
    variation: ["modal"]
});