import React from 'react';

import test from "../../components/Test";

const headerElements =

  <header id='header' className='fixed-top header-inner-pages'>
    <div className='container d-flex align-items-center'>
      <h1 className='logo me-auto'>
        <a href='/'>
          <span>innohi</span>
          <span>_react</span>
        </a>
      </h1>
      <nav id='navbar' className='navbar'>
        <ul>
        {/* <li className='nav-link scrollto'><a href='/'><div>HOME</div></a></li> */}
          <li className='dropdown'><a href='/intro'><div>소개<i className='bi bi-chevron-down'></i></div></a>
            <ul>
              <li><div>innoHI 소개</div></li>
              <li><div>Vision</div></li>
              <li><div>이노하이 발자취</div></li>
              {/* <li><div>자주묻는 질문</div></li> */}
            </ul>
          </li>
          <li className='dropdown'><a href='/program/startup'><div>프로그램<i className='bi bi-chevron-down'></i></div></a>
            <ul>
              <li><a href='/program/startup'><div>스타트업 소싱<br />(한진그룹>스타트업)</div></a></li>
              <li><a href='/program/external'><div>대외 협력<br />(한진그룹+α>스타트업)</div></a></li>
              <li><a href='https://docs.google.com/forms/d/e/1FAIpQLSdHnXT1VGX3OWoH8K1slTlkIWtLNIpNShk5k-8fBI-CxO6yow/viewform'><div>협업 제안<br />(스타트업>한진그룹)</div></a></li>
              {/* <li><a href='/dfs'><div>DFS(Deal Flow Session)</div></a></li> */}
            </ul>
          </li>
          <li className='dropdown'><a href='/event/oi'><div>이벤트<i className='bi bi-chevron-down'></i></div></a>
            <ul>
              <li><a href='/event/oi'><div>세미나 및 컨퍼런스</div></a></li>
              <li><a href='/event/contest'><div>공모전</div></a></li>
            </ul>
          </li>
          <li className='dropdown'><a href='/community/board'><div>커뮤니티<i className='bi bi-chevron-down'></i></div></a>
            <ul>
              <li><a href='/community/board'><div>OI 뉴스레터</div></a></li>
              <li><a href='/community/startup'><div>스타트업 찾기</div></a></li>
              <li><a href='https://docs.google.com/forms/d/e/1FAIpQLScB_r-XIOR0H9I6HxdrwIE4MFqWmP7ho1lOsT_ijsAOmCcMlQ/viewform'><div>문의 및 제안하기</div></a></li>
            </ul>
          </li>
          <li><a href='/council'><div className='getstarted'>협의체공간</div></a></li>
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
