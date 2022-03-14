import React, { useEffect } from 'react';
import { Auth } from "aws-amplify";
import { useLocation } from 'react-router-dom';

export const loginOut = async () => { //로그아웃
  try {
    await Auth.signOut('권인혁', 'innoHI1!');
    alert("Logged Out");
  } catch (e) {
    alert(e.message);
  }
}

export const headerGrid = () => {
  if (localStorage.getItem("amplify-signin-with-hostedUI")) {
    document.getElementById("header").style.display = '';
  } else {
    document.getElementById("header").style.display = 'none';
    window.location.href = '/'
  }
}

export const changeName = (id) => {
  const ee = document.getElementById("user_name")
  ee.textContent = id+' 님'
}

export const eventLogOut = (param) => {
  const el = document.getElementById("LogOut");
  el.addEventListener('click', param )
  // el.addEventListener('click', function(){
  //   alert("Logged out");
  //   setTimeout(() => {
  //     param()
  //   }, 10000);
  // } )
}

export const globalSignOut = async () => { //글로벌 로그아웃
  try {
    await Auth.signOut({ global: true });
    console.log('global logout successfully');
  } catch (err) {
    console.log('error signing out: ', err);
  }
}


export const CouncilCommon = () => {

  const param = useLocation();

  const signIn = async () => { //로그인
    try {
      await Auth.signIn('권인혁', 'innoHI1!');
      alert("Logged in");
    } catch (e) {
      alert(e.message);
    }
  }



  const resendConfirmationCode = async () => { //확인 코드 재전송
    try {
      await Auth.resendSignUp('권인혁');
      console.log('code resent successfully');
    } catch (err) {
      console.log('error resending code: ', err);
    }
  }


  useEffect(() => {
    console.log(param.state)
  })

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      <button onClick={signIn}>login</button>
      <button onClick={loginOut}>loginOut</button>
      <button onClick={resendConfirmationCode}>resendConfirmationCode</button>
      <button onClick={globalSignOut}>globalSignOut</button>
    </>

  );

}

