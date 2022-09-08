import React, { useEffect } from 'react';
import GlobalFunction from "../common/GlobalFunction";

const Header = () => {

  const headerElements =
    <header id='header' className='fixed-top header-inner-pages'>
      {/* <header id='header' className=' header-inner-pages'> */}
      <div className='container d-flex align-items-center'>
        <h1 className='logo me-auto'>
          <a href='/'>
            <span>innohi</span>
            <span></span>
          </a>
        </h1>
        <nav id='navbar' className='navbar'>
          <ul>
            {/* <li className='nav-link scrollto'><a href='/'><div>HOME</div></a></li> */}
            <li className='dropdown'><a href='/intro/introduction'>Introduce
              {/* <i className='bi bi-chevron-down'></i> */}
            </a>
            </li>
            <li className='dropdown'><a href='/program/startup'>Program<i className='bi bi-chevron-down'></i></a>
              <ul>
                <li><a href='/program/startup'>프로그램 소개</a></li>
                <li><a href='/program/suggest'>협업제안</a></li>
              </ul>
            </li>
            <li className='dropdown'><a href='/insight/contest'>Insight<i className='bi bi-chevron-down'></i></a>
              <ul>
                <li><a href='/insight/innopick'>Inno Pick</a></li>
                <li><a href='/insight/contest'>Event</a></li>
              </ul>
            </li>
            <li className='dropdown'><a href='/contact/member'>Contact<i className='bi bi-chevron-down'></i></a>
              <ul>
                <li><a href='/contact/member'>구성원 소개</a></li>
                <li><a href='https://docs.google.com/forms/d/e/1FAIpQLScB_r-XIOR0H9I6HxdrwIE4MFqWmP7ho1lOsT_ijsAOmCcMlQ/viewform' target="_blank" rel="noopener noreferrer">문의하기</a></li>
              </ul>
            </li>
            <li onClick={() => { uafCall() }} className='getstarted'>그룹사공간
              {/* <a href='/council/main' className='getstarted'>그룹사공간</a> */}
            </li>
            <li className='dropdown'><a href='/program/introduceEn'>English</a>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle'></i>
        </nav>
      </div>
    </header>;

  const headerCouncilElements =
    <header id='header' className='fixed-top header-inner-pages' style={{ display: 'none' }}>
      {/* <header id='header' className='header-inner-pages' style={{ display: 'none' }}> */}
      <div className='container d-flex align-items-center'>
        <h1 className='logo me-auto'>
          <a href='/council/main'>
            <span>그룹사 공간</span>
            <span></span>
          </a>
        </h1>
        <nav id='navbar' className='navbar'>
          <ul>
            <li className='dropdown'><a href='/council/announce'>알려드려요</a>
            </li>
            <li className='dropdown'><a href='/council/oi'>이노하이 레터</a>
            </li>
            <li className='dropdown'><a href='/council/archive'>스타트업 찾기</a>
            </li>
            <li className='dropdown'><a href='/council/requestform'>스타트업 소싱 요청</a>
              <ul>
                <li><a href='/council/requestform'>스타트업 소싱 요청</a></li>
                <li><a href='/council/statusinquiry'>소싱 요청 현황</a></li>
              </ul>
            </li>
            <li className='dropdown'><a href='#'>파일럿</a>
              <ul>
                <li onClick={() => { u2fCall() }}><a href='#'>간편인증 등록 (Hi-Pass)</a></li>
                <li onClick={() => { resetHipass() }}><a href='#'>Hi-Pass 등록 초기화</a></li>
              </ul>
            </li>
            <li><a href='/' className='getstarted'>INNOHI</a>
            </li>
            <li className='dropdown' ><a id='user_name' href='/'>로그인이 필요합니다.</a>
              <ul>
                <li id="LogOut">로그아웃</li>
              </ul>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle'></i>
        </nav>
      </div>
    </header>

  const headerHiPassElements =
    <header id='header' className='fixed-top header-inner-pages' style={{ display: 'none' }}>
      {/* <header id='header' className='header-inner-pages' style={{ display: 'none' }}> */}
      <div className='container d-flex align-items-center'>
        <h1 className='logo me-auto'>
          <a href='/council/main'>
            <span>그룹사 공간</span>
            <span></span>
          </a>
        </h1>
        <nav id='navbar' className='navbar'>
          <ul>
            <li className='dropdown'><a href='/council/announce'>알려드려요</a>
            </li>
            <li className='dropdown'><a href='/council/oi'>이노하이 레터</a>
            </li>
            <li className='dropdown'><a href='/council/archive'>스타트업 찾기</a>
            </li>
            <li className='dropdown'><a href='/council/requestform'>스타트업 소싱 요청</a>
              <ul>
                <li><a href='/council/requestform'>스타트업 소싱 요청</a></li>
                <li><a href='/council/statusinquiry'>소싱 요청 현황</a></li>
              </ul>
            </li>
            <li><a href='/' className='getstarted'>INNOHI</a>
            </li>
            <li className='dropdown' ><a id='user_name' href='#'>로그인이 필요합니다.</a>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle'></i>
        </nav>
      </div>
    </header>

  const uafCall = () => {

    if (window.confirm('비밀번호 없는 로그인(Beta)하시겠습니까? \n *등록되지 않은 사용자는 취소 버튼을 눌러야 진행 가능합니다.')) {

      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer b0843ef0ea33f8a5d38dd938a1af426385ca82dfa520bab036c8497806811dd9");
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({ "user_id": "test", "lang_init": "KR" });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://hipass.hist.co.kr:7002/v1/ompass/uaf", requestOptions)
        .then(response => response.text())
        .then(result => {
          window.open(JSON.parse(result).data.ompass_uri, '_blank', 'status=no, height=' + window.screen.height / 2 + ', width=' + window.screen.width / 2 + ', top=' + window.screen.height / 4 + ', left=' + window.screen.width / 4)
          // console.log(result)
        })
        .catch(error => console.log('error', error));

    } else {
      document.location.href = '/council/main';
    }
  }

  const u2fCall = () => {

    const userInfo = JSON.parse(sessionStorage.getItem('CognitoIdentityServiceProvider'));

    const myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer b0843ef0ea33f8a5d38dd938a1af426385ca82dfa520bab036c8497806811dd9");
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({ "user_id": userInfo.email, "lang_init": "KR" });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://hipass.hist.co.kr:7002/v1/ompass/u2f", requestOptions)
      .then(response => response.text())
      .then(result => {
        window.open(JSON.parse(result).data.ompass_uri, '_blank', 'status=no, height=' + window.screen.height / 2 + ', width=' + window.screen.width / 2 + ', top=' + window.screen.height / 4 + ', left=' + window.screen.width / 4)
        // console.log(result)
      })
      .catch(error => console.log('error', error));
  }

  const resetHipass = () => {

    const userInfo = JSON.parse(sessionStorage.getItem('CognitoIdentityServiceProvider'));

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer b0843ef0ea33f8a5d38dd938a1af426385ca82dfa520bab036c8497806811dd9");

    var requestOptions = {
      method: 'DELETE',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch("https://hipass.hist.co.kr:7002/v1/ompass/users/"+userInfo.email, requestOptions)
      .then(response => response.text())
      .then(result => {
        alert('간편인증 등록 해지 처리되었습니다.')
        // console.log(result)
      })
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    GlobalFunction();
  }, [])

  if (window.location.pathname.split('/')[1] === ('council'))
    return (
      <>
        {headerCouncilElements}
      </>
    );
  else if (window.location.pathname.split('/')[1] === ('test'))
    return null

  else if (window.location.pathname.split('/')[1] === ('hipass'))
    return (
      <>
        {headerHiPassElements}
      </>
    );
  else
    return (
      <>
        {headerElements}
      </>
    );

}

export default Header;
