import React, { useEffect, useState } from 'react';
import { Amplify, I18n, Auth } from 'aws-amplify';
import { withAuthenticator } from "@aws-amplify/ui-react";
// import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact } from 'aws-amplify-react';
import '@aws-amplify/ui-react/styles.css';
import config from '../../aws-exports';

import * as council from './CouncilMainElements'
import * as CouncilCommon from './CouncilCommon'
import SwiperComponents from '../../components/swipers/Swiper';

import Modal from '../../components/modal/Modal'

Amplify.configure(config)

I18n.setLanguage('kr');
I18n.putVocabulariesForLanguage('kr', {
  'Sign In': 'Login', // Tab header
  'Sign in': '로그인', // Button label
  'Sign in to your account': 'Welcome Back!',
  Username: 'Enter your username', // Username label
  Email: '이메일', // Email label
  Password: '비밀번호', // Password label
  '비밀번호를 잊으셨나요?': 'Reset Password',
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

  const getToday= () => {
    var d = new Date()
    return getDateStr(d)
  }

  const getDateStr = (myDate) => {
    return (myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate())
  }

  const popUpCheck = () => {
    const lastDay = localStorage.getItem("innohi");
    const sevenDay = getLastWeek();

    console.log(sevenDay);

    if (lastDay === sevenDay) {
       localStorage.removeItem("innohi");
    } else if(lastDay === null){
      localStorage.setItem("innohi", getToday());
    }
  }

  useEffect(() => {
    SwiperComponents();
    CouncilCommon.eventLogOut(signOut);
    CouncilCommon.changeName(user.username);
    popUpCheck();

  })

  const ModalElements = () => {
    const title = 'InnoHI 사이트 리뉴얼에 따른 개인정보(이름, 이메일) 이용 안내'
    // const contents = `안녕하세요. \n
    // 한진정보통신 InnoHI 운영자입니다. \n
    // <br />

    // 저희 innohi 와 함께해주시는 여러 협의체 구성원 여러분께 진심으로 감사드리며,
    // 사이트 리뉴얼에 따른 개인정보 이용에 관한 안내 말씀드립니다. 

    // 그동안 이노하이 웹페이지는 그룹사 계정이 웹 브라우저에 로그인되어있는 상태에서
    // 접근이 가능한 비공개형 사이트였습니다. 

    // 이번 리뉴얼을 통해 공개 영역과 협의체 구성원 전용 비공개 영역으로
    // 분리되어 운영될 예정이오며 
    // 기존 이노하이 웹페이지를 이용하시던 그룹사 이메일 계정에 임시 비밀번호를
    // 발급하는 방식으로 서비스 이용을 도와드릴 예정입니다.(별도 이메일 송부예정)
    
    // 만약 이용을 원하지 않으시는 분은 아래의 연락처로 연락주시기 바랍니다.
    
    // 이용정보 : 이름, 이메일
    
    // 문의처 : innoHI@hist.co.kr`

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
      <ModalElements />
      {council.heroElements}
      {council.CouncilMainElements}
      {council.clientsElements}
    </>
  )


}

export default withAuthenticator(CouncilMain, {
  socialProviders: ['google'],
  hideSignUp: [true],
  //   loginMechanisms : ['username'],
  loginMechanisms: ['email'],
  //  components : [components],
  variation: ["modal"]
}, [
  //  <MySignIn /> 
]);

