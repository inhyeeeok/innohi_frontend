/* eslint-disable */
import React, { useState, useEffect } from 'react';
import * as CouncilCommon from '../council/CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useQuery, gql } from '@apollo/client';

const StartupArchive = ({ signOut, user }) => {

  const selectTodo = gql`
  query listInnohis {
        listStartupArchiveData (limit: 500){
          items {
            id
            category_L
            city
            category_S
            country
            employeeNum
            estbYear
            investRound
            logoLink
            moneyRaised
            name
            service
            no
          }
        }
    }
  `;

  const [stData, setStData] = useState(undefined);

  const { loading, error, data } = useQuery(selectTodo);
  // console.log(loading, error, data);

  const setNumber = 10;
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(setNumber);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];


  CouncilCommon.headerGrid();
  CouncilCommon.eventLogOut(signOut);
  CouncilCommon.changeName(CouncilCommon.usernameCheck(user));

  if (!loading && data) {
    for (let i = 1; i <= Math.ceil(stData?.length / setNumber); i++) {
      pageNumber.push(i);
    }
  }

  const searchData = (param) => {
    if (param === "") {
      alert('검색어를 입력하세요.')
    } else {
      let resData = '';
      resData = data.listStartupArchiveData.items.filter(it => it.service.includes(param) || it.name.toLowerCase().includes(param.toLowerCase()) || it.category_L.toLowerCase().includes(param.toLowerCase()) || it.category_S.toLowerCase().includes(param.toLowerCase()));

      setStart(0);
      setEnd(setNumber);
      setCurrentPage(0);
      document.getElementsByClassName('justify-content-center')[0].children[0].click();

      setStData(resData);
    }
  }

  const changeStData = (key, value) => {
    let resData = '';

    if (key == 'category_S') {
      resData = data.listStartupArchiveData.items.filter(it => it.category_S.includes(value));
    } else if (key == 'category_L') {
      resData = data.listStartupArchiveData.items.filter(it => it.category_L.includes(value));
    }

    setStart(0);
    setEnd(setNumber);
    setCurrentPage(0);
    document.getElementsByClassName('justify-content-center')[0].children[0].click();

    setStData(resData);
  }

  const changeCurrentPage = (param) => {
    setStart((param.d - 1) * setNumber);
    setEnd(param.d * setNumber);
    setCurrentPage(param.d);

    document.getElementById('main').scrollIntoView({ behavior: "smooth", block: "start" });
  }

  const EntryPage = () => {
    return (
      <ul className="justify-content-center">
        {
          pageNumber.map(d => {
            if (d === currentPage) {
              return <li onClick={() => { changeCurrentPage({ d }) }} key={d} className="active"><a>{d}</a></li>
            } else {
              return <li onClick={() => { changeCurrentPage({ d }) }} key={d}><a>{d}</a></li>
            }
          })
        }
      </ul>
    )
  };

  const ArticleElements = () => {
    return (
      stData.slice(start, end).map((v) => {
        return (
          <article key={v.no} className="entry">

            <div className="entry-title">
              <img src={v.logoLink} alt="" style={{ width: "100px", maxHeight: "auto" }}></img>
            </div>

            {/* <h2 className="entry-img"> */}
            <h2 className="entry-title">
              <a href={'archive/detail/' + v.no}>{v.service}. <br /><span style={{ color: 'rgb(253, 142, 77)' }}>{v.name}</span></a>
            </h2>

            <div className="entry-meta">
              <ul >
                <li className="d-flex align-items-center" key={v.employeeNum}><i className="bi bi-person"></i> <div>{v.employeeNum}</div></li>
                <li className="d-flex align-items-center" key={v.estbYear}><i className="bi bi-clock"></i> <div>{v.estbYear}</div></li>
                <li className="d-flex align-items-center" key={v.country}><i className="bi bi-chat-dots"></i> <div>{v.country}</div></li>
              </ul>
            </div>

          </article>
        )
      })
    )
  };

  const BlogElements = () => {
    if (stData != undefined) {
      return (
        <section id="blog" className="blog" style={{ marginTop: '82px' }}>
          <div className="container" data-aos="fade-up">
            <div className="section-title" style={{ marginBottom: '20px' }}>
              <h2>스타트업 찾기</h2>
            </div>

            <div className="row">

              <div id="entry" className="col-lg-8 entries">
                <ArticleElements />
              </div>

              <div className="col-lg-4">
                <div className="sidebar">
                  <h3 className="sidebar-title">검색</h3>

                  <div className="sidebar-item search-form">
                    <form action="">
                      <input id="search" type="text" onKeyPress={(e) => { if (e.key === 'Enter') { searchData(document.getElementById('search').value) } }} ></input>
                      <button type="button" onClick={() => { searchData(document.getElementById('search').value) }}><i className="bi bi-search"></i></button>
                    </form>
                  </div>

                  <h3 className="sidebar-title">분야</h3>
                  <div className="sidebar-item categories">
                    <ul>
                      <li onClick={() => { changeStData("category_S", "IoT") }}><div style={{ cursor: 'pointer' }}>IoT</div></li>
                      <li onClick={() => { changeStData("category_S", "데이터 분석") }}><div style={{ cursor: 'pointer' }}>데이터 분석</div></li>
                      <li onClick={() => { changeStData("category_S", "AI") }}><div style={{ cursor: 'pointer' }}>AI</div></li>
                      <li onClick={() => { changeStData("category_S", "플랫폼 서비스") }}><div style={{ cursor: 'pointer' }}>플랫폼 서비스</div></li>
                      <li onClick={() => { changeStData("category_S", "지속가능성") }}><div style={{ cursor: 'pointer' }}>지속가능성</div></li>
                      <li onClick={() => { changeStData("category_S", "VR") }}><div style={{ cursor: 'pointer' }}>VR</div></li>
                      <li onClick={() => { changeStData("category_S", "핀테크") }}><div style={{ cursor: 'pointer' }}>핀테크</div></li>
                      <li onClick={() => { changeStData("category_S", "자율주행") }}><div style={{ cursor: 'pointer' }}>자율주행</div></li>
                      <li onClick={() => { changeStData("category_S", "모빌리티") }}><div style={{ cursor: 'pointer' }}>모빌리티</div></li>
                      <li onClick={() => { changeStData("category_S", "업무 자동화") }}><div style={{ cursor: 'pointer' }}>업무 자동화</div></li>
                      <li onClick={() => { changeStData("category_S", "로보틱스") }}><div style={{ cursor: 'pointer' }}>로보틱스</div></li>
                      <li onClick={() => { changeStData("category_S", "네트워크") }}><div style={{ cursor: 'pointer' }}>네트워크</div></li>
                    </ul>
                  </div>

                  <h3 className="sidebar-title">Tags</h3>
                  <div className="sidebar-item tags">
                    <ul>
                      <li onClick={() => { changeStData("category_L", "의료") }}><a>의료</a></li>
                      <li onClick={() => { changeStData("category_L", "물류") }}><a>물류</a></li>
                      <li onClick={() => { changeStData("category_L", "여행") }}><a>여행</a></li>
                      <li onClick={() => { changeStData("category_L", "IT") }}><a>IT</a></li>
                      <li onClick={() => { changeStData("category_L", "항공") }}><a>항공</a></li>
                      <li onClick={() => { changeStData("category_L", "디지털 트랜스포메이션") }}><a>DT</a></li>
                      <li onClick={() => { changeStData("category_L", "에듀테크") }}><a>에듀</a></li>
                      <li onClick={() => { changeStData("category_L", "지속가능성") }}><a>지속가능성</a></li>
                      <li onClick={() => { changeStData("category_L", "모빌리티") }}><a>모빌리티</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div id="entryPage" className="blog-pagination" style={{ padding: '0px 0 30px 0' }}>
              <EntryPage />
            </div>

          </div>
        </section>
      )

    } else {
      return (
        <><p></p></>
      )
    }
  }

  useEffect(() => {
    if (!loading && data) {
      if (stData === undefined) {
        setStData(data.listStartupArchiveData.items.slice(0, 50));
      }
    }


  }, [loading, stData, currentPage]);



  return (
    <>
      <main id="main">
        <BlogElements />
      </main>
    </>
  );

}

export default withAuthenticator(StartupArchive, {
  socialProviders: ['google'],
  hideSignUp: [true],
  //   loginMechanisms : ['username'],
  loginMechanisms: ['email'],
  //  components : [components],
  variation: ["modal"]
});
