import React, { useEffect } from 'react';
import * as CouncilCommon from '../council/CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useMutation, gql } from '@apollo/client';
import * as DateFunction from '../../components/common/DateFunction';
import { useNavigate } from "react-router-dom";

const RequestForm = ({ signOut, user }) => {

  CouncilCommon.headerGrid();
  const navigate = useNavigate();

  const createRequestForm = gql`
    mutation createRequestForm($createRequestForminput: CreateRequestFormInput!) {
      createRequestForm(input: $createRequestForminput) {
          asis
          belong
          country
          email
          field
          id
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
    `;

  const [createRequestFormMutation] = useMutation(createRequestForm);

  const SubmitRequest = () => {

    const handleCreateTodoClick = () => {

      const input = {
        "createRequestForminput": {
          "email": document.getElementById('email').value,
          "name": document.getElementById('name').value,
          "belong": document.getElementById('belong').value,
          "field": document.getElementById('field').value,
          "country": document.getElementById('country').value,
          "project": document.getElementById('project').value,
          "asis": document.getElementById('asis').value,
          "tobe": document.getElementById('tobe').value,
          "keypoint": document.getElementById('keypoint').value,
          "notwish": document.getElementById('notwish').value,
          "resource": document.getElementById('resource').value,
          "loginid": CouncilCommon.useremailCheck(user),
          "uptodate": DateFunction.getToday('yyyymmddhh24miss'),
          "state": '1', //고정 값 최초 접수 시 1
        }
      }

      const validateMsg = validateRequest(input.createRequestForminput);

      //제출 성공시 : 제출하기 버튼 클릭 -> validation check -> 정상 입력시 Alert창 팝업("신청이 완료되었습니다") -> 소싱 요쳥 현황 페이지로 이동
      if (validateMsg === '') {
        createRequestFormMutation({
          variables: input,
        })
          .then((res) => {
            alert('신청이 완료되었습니다.');
            navigate('/council/statusinquiry');
            console.log(res);
          })
          .catch((err) => {
            alert('Error occurred');
            console.log(err);
          });
      } else {
        //제출 실패시 : 제출하기 버튼 클릭 -> validation check -> 잘못입력된 부분으로 scroll up + alert message출력("xxx가 잘못입력되었습니다. 양식에 맞춰 입력바랍니다" / "xxx가 입력되지 않았습니다")
        alert(validateMsg);
        // const scrollId = validateMsg.substring(0, validateMsg.indexOf('이(가) 입력되지 않았습니다.'));
        // document.getElementById(scrollId).scrollIntoView({behavior: "smooth", block: "center"});
      }
    }


    return (
      <section id="blog" className="blog section" style={{ marginTop: '82px' }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>스타트업 수요조사 Request</h2>
            <p>스타트업과의 원활한 공동 사업 수행을 위해 현업부서의 수요를 파악하기 위한 기초 조사입니다.</p>
          </div>

          <div className="row">
            <div className="col-xl-1 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            </div>
            <div className="col-xl-10 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box" style={{ textAlign: 'center' }}>
                <img src={require('../../assets/img/council/sourcing_request/one_img.png').default} className="img-fluid" alt=""></img>
              </div>
            </div>
            <div className="col-xl-1 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            </div>
          </div>

          <div className="row">
            <div id="entry" className="entries">
              <RequestElement id='email' question='연락받으실 메일주소' answer='예시) innohi@hist.co.kr' />
              <RequestElement id='name' question='성명' answer='신청하시는분의 성함을 기입 바랍니다' />
              <RequestElement id='belong' question='소속' answer='그룹명 혹은 팀명을 기입 바랍니다' />
              <RequestElement id='field' question='스타트업과 협업하고자하는 분야는 무엇입니까' answer='디지털 트랜스포메이션, AI, 메타버스, ESG 등 자유롭게 작성 바랍니다' />
              <RequestElement id='country' question='희망국가(국내/국외)' answer='국내만 희망하시는 경우 "국내만 희망"을 아래에 작성해주시고 희망하는 특정 국가가 있으시다면 아래에 작성 바랍니다' />
              <RequestElement id='project' question='연계할 사업·프로젝트명' answer='스타트업과의 연계를 희망하는 사업명·프로젝트명을 기입 바랍니다(신사업일 경우 "신사업"으로 작성 바랍니다)' />
              <RequestElement id='asis' question='기존 사업·프로젝트에 스타트업 협업이 필요한 이유(As-Is)' answer='기존 업무에 스타트업의 협업이 필요하다고 생각한 이유를 작성 바랍니다(업무 수행에 있어 어려운 점, 개선이 필요한 사항 등)' />
              <RequestElement id='tobe' question='스타트업과의 협업을 통해 이루고자 하는것은 무엇인가요(To-Be)' answer='스타트업과의 협업을 통해 이루고자 하는 목표를 작성 바랍니다' />
              <RequestElement id='keypoint' question='협업할 스타트업에게 바라는 핵심요소·기준' answer='스타트업이 보유해야하는 기술·역량에 대해 작성 바랍니다. 예시) AI기술을 활용한 데이터 가공 능력을 가진 스타트업' />
              <RequestElement id='notwish' question='희망하지 않는 스타트업의 기준·형태' answer='수요 상 불필요한 스타트업의 기준을 작성 바랍니다. 예시) "단순 OOO을 구현하고 수행할 수 있는 스타트업은 불필요함"' />
              <RequestElement id='resource' question='협업할 스타트업에게 제공 가능한 자원은 무엇인가요?' answer='협업 시 스타트업에게 제공 가능한 자원·이점 등에 대해 작성 바랍니다. 예시) OOO 데이터 접근권한 공유 가능' />
            </div>
          </div>

          <div className='d-flex justify-content-center justify-content-start' style={{ padding: '0px 0 50px 0' }}>
            <div className='btn-get-started scrollto' onClick={handleCreateTodoClick}>제출하기</div>
          </div>

        </div>
      </section>

    )
  }

  const RequestElement = (props) => {
    const question = props.question;
    const answer = props.answer;
    const id = props.id;

    return (
      <>
        <article className="entry">
          <h2 className="entry-title">{question}<br /></h2>
          <p><input id={id} style={{ width: '100%', height: '70px' }} type="text" placeholder={answer}></input></p>
        </article>
      </>
    )
  }

  const validateRequest = (data) => {
    let errMsg = '';
    const pattern = /^\s+|\s+$/g;

    const rspkg = (msg) => {
      let rsMsg = '';

      if (msg === 'email') {
        rsMsg = '메일';
      } else if (msg === 'name') {
        rsMsg = '성명';
      } else if (msg === 'belong') {
        rsMsg = '소속';
      } else if (msg === 'field') {
        rsMsg = '분야';
      } else if (msg === 'country') {
        rsMsg = '희망국가';
      } else if (msg === 'project') {
        rsMsg = '사업 혹은 프로젝트명';
      } else if (msg === 'asis') {
        rsMsg = '협업 사유';
      } else if (msg === 'tobe') {
        rsMsg = '협업 목표';
      } else if (msg === 'keypoint') {
        rsMsg = '핵심요소 또는 기준';
      } else if (msg === 'notwish') {
        rsMsg = '스타트업의 기준 혹은 형태';
      } else if (msg === 'resource') {
        rsMsg = '제공 가능한 자원';
      }

      return rsMsg;
    }

    for (const key in data) {
      if (data[key] === '' || data[key] === undefined || data[key].replace(pattern, '') === "") {
        errMsg = rspkg(key) + '이(가) 입력되지 않았습니다.'
        document.getElementById(key).scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      } else if (key === 'email' && !data[key].match('@')) {
        errMsg = key + '유효한 이메일 주소 형식이 아닙니다.'
        document.getElementById(key).scrollIntoView({ behavior: "smooth", block: "center" });
        break;
      }
    }

    return errMsg;
  }

  useEffect(() => {
    CouncilCommon.eventLogOut(signOut);
    CouncilCommon.changeName(CouncilCommon.usernameCheck(user));
  })

  return (
    <>
      <main id="main">
        <SubmitRequest />
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
