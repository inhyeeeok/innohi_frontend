import React from 'react';

import test from "../../components/Test";

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
          <li className='dropdown'><a href='/intro'><div>Introduce<i className='bi bi-chevron-down'></i></div></a>
            <ul>
              <li><div>소개</div></li>
              <li><div>추진체계</div></li>
              <li><div>연혁</div></li>
              {/* <li><div>자주묻는 질문</div></li> */}
            </ul>
          </li>
          <li className='dropdown'><a href='/program/startup'><div>Program<i className='bi bi-chevron-down'></i></div></a>
            <ul>
              <li><a href='/program/startup'><div>스타트업 소싱</div></a></li>
              <li><a href='/program/external'><div>대외협력</div></a></li>
              <li><a href='/program/suggest'><div>협업제안</div></a></li>
            </ul>
          </li>
          <li className='dropdown'><a href='/insight/contest'><div>Insight<i className='bi bi-chevron-down'></i></div></a>
            <ul>
              <li><a href='/insight/biz'><div>Biz Pick</div></a></li>
              <li><a href='/insight/tech'><div>Tech Pick</div></a></li>
              <li><a href='/insight/contest'><div>Event</div></a></li>
            </ul>
          </li>
          <li className='dropdown'><a href='/contact/member'><div>Contact<i className='bi bi-chevron-down'></i></div></a>
            <ul>
              <li><a href='/contact/member'><div>구성원 소개</div></a></li>
              {/* <li><a href='/contact/question'><div>문의하기</div></a></li> */}
              <li><a href='https://docs.google.com/forms/d/e/1FAIpQLScB_r-XIOR0H9I6HxdrwIE4MFqWmP7ho1lOsT_ijsAOmCcMlQ/viewform'><div>문의하기</div></a></li>
            </ul>
          </li>
          <li><a href='/council'><div className='getstarted'>협의체공간</div></a>
          </li>
        </ul>
        <i className='bi bi-list mobile-nav-toggle'></i>
      </nav>
    </div>
  </header>;

class Header extends React.Component {

  componentDidMount() {
    test();
  }
  
  render() {
    return (
      <>
        {headerElements}
      </>
    );
  }

}

export default Header;
