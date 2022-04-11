import React, { useEffect } from 'react';
import * as CouncilCommon from '../council/CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";

const RequestForm = () => {

  CouncilCommon.headerGrid();

  const DEest = (props) => {
    const question = props.question;
    const answer = props.answer;

    return (
      <>
        <article className="entry">

          <div className="entry-img">
            <img src="" alt="" className="img-fluid"></img>
          </div>

          <h2 className="entry-title">{question}<br /></h2>
          <p><input style={{width:'100%' , height:'100px'}} type="text" placeholder={answer}></input></p>
 
        </article>
      </>

    )
  }

  const Element = () => {
    return (
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>스타트업 수요조사 Request</h2>
            <p>스타트업과의 원활한 공동 사업 수행을 위해 현업부서의 수요를 파악하기 위한 기초 조사입니다.</p>
          </div>

          <div className="row">
            <div id="entry" className="entries">
              <DEest question='신청하시는분 메일주소' answer='innohi@hist.co.kr'/>
              <DEest question='성명' answer='이노하이맨'/>
              <DEest question='소속' answer='그룹명 혹은 팀명을 기입 바랍니다'/>
              <DEest question='스타트업과 협업하고자하는 분야는 무엇입니까' answer='디지털 트랜스포메이션, AI, 메타버스, ESG 등 자유롭게 작성 바랍니다'/>
              <DEest question='희망국가(국내/국외)' answer='국내만 희망하시는 경우 "국내만 희망"을 아래에 작성해주시고 희망하는 특정 국가가 있으시다면 아래에 작성 바랍니다'/>
              <DEest question='연계할 사업·프로젝트명' answer='스타트업과의 연계를 희망하는 사업명·프로젝트명을 기입 바랍니다(신사업일 경우 "신사업"으로 작성 바랍니다)'/>
              <DEest question='기존 사업·프로젝트에 스타트업 협업이 필요한 이유(As-Is)' answer='기존 업무에 스타트업의 협업이 필요하다고 생각한 이유를 작성 바랍니다(업무 수행에 있어 어려운 점, 개선이 필요한 사항 등)'/>
              <DEest question='스타트업과의 협업을 통해 이루고자 하는것은 무엇인가요(To-Be)' answer='스타트업과의 협업을 통해 이루고자 하는 목표를 작성 바랍니다'/>
              <DEest question='협업할 스타트업에게 바라는 핵심요소·기준' answer='스타트업이 보유해야하는 기술·역량에 대해 작성 바랍니다. 예시) AI기술을 활용한 데이터 가공 능력을 가진 스타트업'/>
              <DEest question='희망하지 않는 스타트업의 기준·형태' answer='수요 상 불필요한 스타트업의 기준을 작성 바랍니다. 예시) "단순 OOO을 구현하고 수행할 수 있는 스타트업은 불필요함"'/>
              <DEest question='협업할 스타트업에게 제공 가능한 자원은 무엇인가요?' answer='협업 시 스타트업에게 제공 가능한 자원·이점 등에 대해 작성 바랍니다. 예시) OOO 데이터 접근권한 공유 가능'/>
            </div>
          </div>

          <div className='d-flex justify-content-center justify-content-start' style={{ padding: '0px 0 50px 0' }}>
            <div className='btn-get-started scrollto'>제출하기</div>
          </div>

        </div>
      </section>

    )

  }

  useEffect(() => {

  })

  return (
    <>
      <main id="main">
        <Element />
      </main>
    </>
  );

}

export default withAuthenticator(RequestForm, {
  socialProviders: ['google'],
  hideSignUp: [true],
  //   loginMechanisms : ['username'],
  loginMechanisms: ['email'],
  //  components : [components],
  variation: ["modal"]
});
