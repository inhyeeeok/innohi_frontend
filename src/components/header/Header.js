import React, { useEffect } from 'react';
import GlobalFunction from "../GlobalFunction";

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
              {/* <ul>
              <li><a href='/intro/introduction'>이노하이란?</a></li>
              <li><a href='/intro/propel'>비전</a></li>
              <li><a href='/intro/history'>연혁</a></li>
            </ul> */}
            </li>
            <li className='dropdown'><a href='/program/startup'>Program<i className='bi bi-chevron-down'></i></a>
              <ul>
                <li><a href='/program/startup'>프로그램 소개</a></li>
                {/* <li><a href='/program/external'>대외협력</a></li> */}
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
                {/* <li><a href='/contact/question'><div>문의하기</div></a></li> */}
                <li><a href='https://docs.google.com/forms/d/e/1FAIpQLScB_r-XIOR0H9I6HxdrwIE4MFqWmP7ho1lOsT_ijsAOmCcMlQ/viewform'>문의하기</a></li>
              </ul>
            </li>
            <li><a href='/council/main' className='getstarted'>협의체공간</a>
            </li>
          </ul>
          <i className='bi bi-list mobile-nav-toggle'></i>
        </nav>
      </div>
    </header>;

  const headerCouncilElements =
    //  <header id='header' className='fixed-top header-inner-pages' style={{display:'none'}}>
    <header id='header' className='header-inner-pages' style={{ display: 'none' }}>
      <div className='container d-flex align-items-center'>
        <h1 className='logo me-auto'>
          <a href='/council/main'>
            <span>협의체공간</span>
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
            <li className='dropdown'><a href='https://forms.gle/BkRuvRAdHo3wAMSA9'>스타트업 소싱 요청</a>
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
    </header>;

  useEffect(() => {
    GlobalFunction();
  });

  if (window.location.pathname.split('/')[1] === ('council'))
    return (
      <>
        {headerCouncilElements}
      </>
    );
  else if (window.location.pathname.split('/')[1] === ('test'))
    return null
  else
    return (
      <>
        {headerElements}
      </>
    );

}

export default Header;
