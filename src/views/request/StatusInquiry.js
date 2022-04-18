import React, { useState, useEffect } from 'react';
import * as CouncilCommon from '../council/CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useQuery, gql } from '@apollo/client';

const StatusInquiry = ({ signOut, user }) => {

  CouncilCommon.headerGrid();

  const selectTodo = gql`
      query listInnohis($tableRequestFormFilterInput:TableRequestFormFilterInput!) {
        listRequestForms(filter: $tableRequestFormFilterInput) {
          items {
            id
            asis
            belong
            country
            email
            field
            keypoint
            loginid
            name
            notwish
            project
            resource
            tobe
            uptodate
          }
        }
      }
    `;

  const input = {
    "tableRequestFormFilterInput": {
      "loginid": { "eq": CouncilCommon.useremailCheck(user) }
    }
  }

  const { loading, error, data, refetch } = useQuery(selectTodo, { variables: input });
  console.log(error)
  console.log(data)
  console.log(loading)

  const Element = () => {
    if (!loading) {
      const sortedData = data.listRequestForms.items.slice().sort((a, b) => a.uptodate - b.uptodate);
      return (
        sortedData.map((v, i) => {
          console.log(v)
          console.log(i)
          return (
            <>
              <InquiryElement param={v} index={'faq-list-'+i}/>
            </>
          )
        })
      )

    } else {
        return (
           <></>
        )
    }

  }

  const InquiryElement = (eData) => {
    console.log(eData.param)
    console.log(eData.index)

    const StatusElement = () => {
      const imgStyle = {
        maxWidth: "20%",
        height: "auto"
      }

      // const StatusCheck = () => {

      // }

      return (
        <>
          <img src={require('../../assets/img/request/status/소싱 신청_active.png').default} alt="" style={imgStyle}></img>
          <img src={require('../../assets/img/request/status/스타트업.png').default} alt="" style={imgStyle}></img>
          <img src={require('../../assets/img/request/status/스타트업선정.png').default} alt="" style={imgStyle}></img>
          <img src={require('../../assets/img/request/status/후속업무.png').default} alt="" style={imgStyle}></img>
        </>
      )
    }

    return (
      <li data-aos="fade-up" data-aos-delay="300">
        <i className="bx bx-help-circle icon-help"></i>
        <a href={'#' + eData.index} data-bs-toggle="collapse" className="collapsed">
          <div className="table-responsive-md">
            <table className="table table-bordered">
              <thead style={{ backgroundColor: 'rgba(242, 242, 242, 0.706)' }}>
                <tr align="center">
                  <th colSpan="1"><span>신청분야</span></th>
                  <th colSpan="3"><span>디지털 트랜스포메이션</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align="center" width="25%">신청 날짜</td>
                  <td colSpan="1">{eData.param.uptodate}</td>
                  <td align="center" width="25%">진행 단계</td>
                  <td colSpan="1">신청서 검토중</td>
                </tr>
                <tr>
                  <td align="center" colSpan="4" style={{ fontWeight: 'bold', color: 'red' }}>평가 위원회 날짜 확정 시 직접 연락드리겠습니다.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i>
        </a>

        <div id={eData.index} className="collapse close" data-bs-parent=".faq-list">

          <div className="entry-img" style={{ marginTop: '50px', textAlign: 'center' }}>
            <StatusElement />
          </div>

          <div className="table-responsive-md" style={{ marginTop: '50px' }}>
            <table className="table table-bordered">
              <thead style={{ backgroundColor: 'rgba(242, 242, 242, 0.706)' }}>
                <tr align="center">
                  <th colSpan="2"><span>작성 내용</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align="center" width="25%">신청자 이메일</td>
                  <td colSpan="1">{eData.param.email}</td>
                </tr>
                <tr>
                  <td align="center" colSpan="1">성명</td>
                  <td colSpan="1">{eData.param.name}</td>
                </tr>
                <tr>
                  <td align="center" colSpan="1">소속</td>
                  <td colSpan="1">{eData.param.belong}</td>
                </tr>
                <tr>
                  <td align="center" colSpan="1">희망 국가</td>
                  <td colSpan="1">{eData.param.country}</td>
                </tr>
                <tr>
                  <td align="center" colSpan="1">연계할 사업·프로젝트명</td>
                  <td colSpan="1">{eData.param.project}</td>
                </tr>
                <tr>
                  <td align="center" colSpan="1">기존 사업·프로젝트에 스타트업 협업이 필요한 이유(As-Is)</td>
                  <td colSpan="1">{eData.param.asis}</td>
                </tr>
                <tr>
                  <td align="center" colSpan="1">스타트업과의 협업을 통해 이루고자 하는것은 무엇인가요(To-Be)</td>
                  <td colSpan="1">{eData.param.tobe}</td>
                </tr>
                <tr>
                  <td align="center" colSpan="1">협업할 스타트업에게 바라는 핵심요소·기준</td>
                  <td colSpan="1">{eData.param.keypoint}</td>
                </tr>
                <tr>
                  <td align="center" colSpan="1">희망하지 않는 스타트업의 기준·형태</td>
                  <td colSpan="1">{eData.param.notwish}</td>
                </tr>
                <tr>
                  <td align="center" colSpan="1">협업할 스타트업에게 제공 가능한 자원은 무엇인가요?</td>
                  <td colSpan="1">{eData.param.resource}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </li>
    )
  }


  useEffect(() => {
    CouncilCommon.eventLogOut(signOut);
    CouncilCommon.changeName(CouncilCommon.usernameCheck(user));
    // Element();
  })

  return (
    <>
      <main id="main">
        <section id="faq" className="faq section-bg">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>스타트업 소싱 현황</h2>
              <p>{CouncilCommon.usernameCheck(user)} 님의 신청 현황입니다.</p>
            </div>

            <div className="faq-list">
              <ul>
                <Element />
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}


export default withAuthenticator(StatusInquiry, {
  socialProviders: ['google'],
  hideSignUp: [true],
  //   loginMechanisms : ['username'],
  loginMechanisms: ['email'],
  //  components : [components],
  variation: ["modal"]
});
