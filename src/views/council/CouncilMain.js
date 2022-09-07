import React, { useEffect, useState } from 'react';
import { Amplify, I18n } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
// import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact } from 'aws-amplify-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../../config/aws-exports';

import * as CouncilCommon from './CouncilCommon'
import CouncilCarousel from '../council/CouncilCarousel'
import Modal from '../../components/modal/Modal'
import * as jsondata from '../../components/JsonData'

Amplify.configure(config)

I18n.setLanguage('kr');
I18n.putVocabulariesForLanguage('kr', {
  'Sign in': '로그인', // Button label
  // 'Sign in to your account': 'Welcome Back!',
  Username: '이름을 입력해주세요.', // Username label
  Email: '이메일을 입력해주세요.', // Email label
  Password: '비밀번호', // Password label
  'Forgot your password?': '비밀번호를 잊으셨나요?',
  'Sign In with Google': 'Hanjin SSO (한진 계열사 로그인)',
});

const CouncilMain = ({ isPassedToWithAuthenticator, signOut, user }) => {
  const [show, setShow] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  CouncilCommon.headerGrid();

  const getLastWeek = () => {
    var d = new Date()
    var dayOfMonth = d.getDate()
    d.setDate(dayOfMonth - 7)
    return getDateStr(d)
  }

  const getToday = () => {
    var d = new Date()
    return getDateStr(d)
  }

  const getDateStr = (myDate) => {
    return (myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate())
  }

  const popUpCheck = () => {
    const lastDay = localStorage.getItem("innohi");
    const sevenDay = getLastWeek();

    if (lastDay === sevenDay) {
      localStorage.removeItem("innohi");
    } else if (lastDay === null) {
      localStorage.setItem("innohi", getToday());
    }
  }

  const setLoginData = (param) => {
    sessionStorage.removeItem("CognitoIdentityServiceProvider");
    sessionStorage.setItem("CognitoIdentityServiceProvider", JSON.stringify(param.attributes));
  }

  const affiliateCheck = (param) => {
    // const user1 = await Auth.currentAuthenticatedUser()
    // console.log('user: ', user1)
    // console.log('email: ', user1.attributes.email)
    // console.log('name: ', user1.attributes.name)
    const email = param.attributes.email;
    const affiliateAddress = email.split('@')[1]
    const rs = jsondata.affiliateTestData.filter(it => it.email.includes(affiliateAddress));

    if (param.attributes.email_verified) {
      console.log('따로 등록한 email 입니다.');
    } else if (rs.length === 0) {
      alert("그룹사 회원만 입장 가능한 공간 입니다. \n 메인 화면으로 돌아갑니다")
      CouncilCommon.globalSignOut();
      // Auth.signOut({ global: true });
    } else {
      // console.log(email);
    }
  }

  const HeroElements = () => {
    return (
      <section id='hero' className='d-flex align-items-center' >
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1' data-aos="fade-up" data-aos-delay="200">
            <h1><span style={{ color: 'rgb(253, 142, 77)' }}>INNOHI </span>협의체</h1>
            <h2>오픈이노베이션 레터와 스타트업 찾기 등 <br />INNOHI의 여러가지 소식들을 이곳에서 확인해보세요</h2>
          </div>
          <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos="zoom-in" data-aos-delay="200">
            <img src={require('../../assets/img/intro/histroy/travel.jpg').default} className='img-fluid animated' alt=''></img>
          </div>
        </div>
      </div>
    </section>
    )
  }

  useEffect(() => {
  //  popUpCheck();
    setLoginData(user);
    affiliateCheck(user);
    CouncilCommon.eventLogOut(signOut);
    CouncilCommon.changeName(CouncilCommon.usernameCheck(user));
  })

  const ModalElements = () => {
    const title = 'InnoHI 사이트 리뉴얼에 따른 개인정보(이름, 이메일) 이용 안내'

    if (localStorage.getItem("innohi") == null)
      return (

        <>
          <Modal show={show} title={title} handleClose={handleClose} handleShow={handleShow}>
            {/* {contents} */}
            안녕하세요.<br />
            한진정보통신 InnoHI 운영자입니다. <br /><br />

            저희 innohi 와 함께해주시는 여러 협의체 구성원 여러분께 진심으로 감사드리며,
            사이트 리뉴얼에 따른 개인정보 이용에 관한 안내 말씀드립니다. <br /><br />

            그동안 이노하이 웹페이지는 그룹사 계정이 웹 브라우저에 로그인되어있는 상태에서
            접근이 가능한 비공개형 사이트였습니다. <br /><br />

            이번 리뉴얼을 통해 공개 영역과 협의체 구성원 전용 비공개 영역으로
            분리되어 운영될 예정이오며 <br /><br />
            기존 이노하이 웹페이지를 이용하시던 그룹사 이메일 계정에 임시 비밀번호를
            발급하는 방식으로 서비스 이용을 도와드릴 예정입니다.(별도 이메일 송부예정)
            <br /><br />
            만약 이용을 원하지 않으시는 분은 아래의 연락처로 연락주시기 바랍니다.
            <br />
            <br />
            이용정보 : 이름, 이메일
            <br />
            문의처 : innoHI@hist.co.kr
          </Modal>
        </>
      )
    else
      return (
        <div></div>
      )
  }

  return (
    <>
      {/* <ModalElements /> */}
      <HeroElements />
      <CouncilCarousel type='operation'/>
      <CouncilCarousel type='startup'/>
    </>
  )


}

export default withAuthenticator(CouncilMain, {
    includeGreetings: true,
    socialProviders: ['google'],
    hideSignUp: [true],
    loginMechanisms: ['email'],
    variation: ["modal"]
  }, false, [
]);



