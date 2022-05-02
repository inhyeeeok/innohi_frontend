import React, { useEffect } from 'react';
import * as CouncilCommon from '../council/CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useQuery, gql } from '@apollo/client';
import * as DateFunction from '../../components/common/DateFunction';

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
            state
          }
        }
      }
    `;

  const input = {
    "tableRequestFormFilterInput": {
      "loginid": { "eq": CouncilCommon.useremailCheck(user) }
    }
  }

  const { loading, error, data} = useQuery(selectTodo, { variables: input });
  console.log(error)
  console.log(data)
  console.log(loading)

  const Element = () => {
    if (!loading) {
      const sortedData = data.listRequestForms.items.slice().sort((a, b) => a.uptodate - b.uptodate);
      if (sortedData.length === 0) {
        return (
          <>
            <p>조회 결과가 없습니다.  많은 지원 부탁드립니다.</p>
          </>
        )
      } else {
        return (
          sortedData.map((v, i) => {
            console.log(v)
            console.log(i)
            return (
              <>
                <InquiryElement param={v} index={'faq-list-' + i} />
              </>
            )
          })
        )
      }

    } else {
      return (
        <>
          <p>로딩중..........</p>
        </>
      )
    }

  }

  const InquiryElement = (eData) => {
    console.log(eData.param)
    console.log(eData.index)
    const inquireDate = DateFunction.StringToDateString(eData.param.uptodate);
    const status = eData.param.state;

    const StatusElement = () => {
      let msg = '';

      if (status === '1') {
        msg = '평가 위원회 날짜 확정 시 직접 연락드리겠습니다.'
      } else if (status === '2') {
        msg = '2번 멘트 문구 입니다.'
      } else if (status === '3') {
        msg = '3번 멘트 문구 입니다.'
      } else if (status === '4') {
        msg = '4번 멘트 문구 입니다.'
      } else {
        msg = '잘못된 데이터 입니다.'
      }

      return (
        <>
          <td align="center" colSpan="4" style={{ fontWeight: 'bold', color: 'red' }}>{msg}</td>
        </>
      )
    }

    const StatusImgElement = () => {
      const imgStyle = { maxWidth: "20%", height: "auto" }

      let img1 = '소싱 신청.png';
      let img2 = '스타트업.png';
      let img3 = '스타트업선정.png';
      let img4 = '후속업무.png';

      if (status === '1') {
        img1 = '소싱 신청_active.png'
      } else if (status === '2') {
        img2 = '스타트업발굴_active.png'
      } else if (status === '3') {
        img3 = '스타트업선정_active.png'
      } else if (status === '4') {
        img4 = '후속업무_active.png'
      } 

      return (
        <>
          <img src={require(`../../assets/img/request/status/${img1}`).default} alt="" style={imgStyle}></img>
          <img src={require(`../../assets/img/request/status/${img2}`).default} alt="" style={imgStyle}></img>
          <img src={require(`../../assets/img/request/status/${img3}`).default} alt="" style={imgStyle}></img>
          <img src={require(`../../assets/img/request/status/${img4}`).default} alt="" style={imgStyle}></img>
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
                  <th colSpan="3"><span>{eData.param.field}</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td align="center" width="25%">신청 날짜</td>
                  <td colSpan="1">{inquireDate}</td>
                  <td align="center" width="25%">진행 단계</td>
                  <td colSpan="1">신청서 검토중</td>
                </tr>
                <tr>
                  <StatusElement />
                </tr>
              </tbody>
            </table>
          </div>
          <i className="bi bi-chevron-down icon-show"></i><i className="bi bi-chevron-up icon-close"></i>
        </a>

        <div id={eData.index} className="collapse close" data-bs-parent=".faq-list">

          <div className="entry-img" style={{ marginTop: '50px', textAlign: 'center' }}>
            <StatusImgElement />
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
                  <td align="center" width="25%">연락받으실 이메일</td>
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
