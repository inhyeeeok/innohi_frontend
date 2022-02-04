import React from 'react';

import GlobalFunction from "../GlobalFunction";
import { Link } from "react-router-dom";

const headerElements =

  <header id='header' className='fixed-top header-inner-pages'>
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
          <li className='dropdown'><a href='/intro/introduction'>Introduce<i className='bi bi-chevron-down'></i></a>
            <ul>
              <li><a href='/intro/introduction'>소개</a></li>
              <li><a href='/intro/propel'>추진체계</a></li>
              <li><a href='/intro/history'>연혁</a></li>
            </ul>
          </li>
          <li className='dropdown'><a href='/program/startup'>Program<i className='bi bi-chevron-down'></i></a>
            <ul>
              <li><a href='/program/startup'>스타트업 소싱</a></li>
              <li><a href='/program/external'>대외협력</a></li>
              <li><a href='/program/suggest'>협업제안</a></li>
            </ul>
          </li>
          <li className='dropdown'><a href='/insight/contest'>Insight<i className='bi bi-chevron-down'></i></a>
            <ul>
              <li><a href='/insight/biz'>Biz Pick</a></li>
              <li><a href='/insight/tech'>Tech Pick</a></li>
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
          <li><a href='/council' className='getstarted'>협의체공간</a>
          </li>
        </ul>
        <i className='bi bi-list mobile-nav-toggle'></i>
      </nav>
    </div>
  </header>;

class Header extends React.Component {

  componentDidMount() {
    GlobalFunction();
  }
  
  render() {
    if(window.location.pathname.split('/')[1] === 'council') return null;
      return (
        <>
          {headerElements}
        </>
      );
  }

}

export default Header;
