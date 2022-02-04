/* eslint-disable */

import React, { useState, useEffect } from 'react';
import * as common from '../../components/common/BreadCrumbs'
import * as jsondata from '../../components/JsonData'
import reactDom from 'react-dom';

const StartupArchive = () => {
  const firstData = jsondata.startupTestData.slice(jsondata.startupTestData.length - 50, jsondata.startupTestData.length); //최초 진입시 가장 최신 50개 렌더링
  const [stData, setStData] = useState(firstData);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(stData?.length / 5); i++) {
    pageNumber.push(i);
  }

  const changeStData = (key, value) => {
    let resData = '';
    if (key == 'S_TECH_TYPE') {
      resData = jsondata.startupTestData.filter(it => it.S_TECH_TYPE.includes(value));
    } else if (key == 'S_CATEGORY') {
      resData = jsondata.startupTestData.filter(it => it.S_CATEGORY.includes(value));
    }
    setStData(resData);
  }

  const changeCurrentPage = (param) => {
    setStart((param.d - 1) * 5);
    setEnd(param.d * 5);

    setCurrentPage(param.d);
  }

  // const callSelectStartupData = () => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/api/v1/board/selectBoard`, { params: { limit: 10, offset: 0 } })
  //     .then((Response) => {
  //       console.log(Response.data);
  //     })
  //     .catch((Error) => console.log(Error))
  // }

  const entryPage = (num, activeNum) => {
    return (
      <ul className="justify-content-center">
        {
          num.map(d => {
            if (d == activeNum) {
              return <li onClick={() => { changeCurrentPage({ d }) }} key={d} className="active"><a>{d}</a></li>
            } else {
              return <li onClick={() => { changeCurrentPage({ d }) }} key={d}><a>{d}</a></li>
            }
          })
        }
      </ul>
    )
  };

  const ArticleElements = (Data) => {
    return (
      Data.map((v, i) => {
        return (
          <>
            <article key={v.S_NO} className="entry">

              <div className="entry-img">
                <img src="" alt="" className="img-fluid"></img>
              </div>

              <h2 className="entry-title">
                <a href={'/startupDetail?' + v.S_NO}>{v.S_MAIN_SERVICE}. <span style={{ color: 'rgb(253, 142, 77)' }}>{v.S_NAME}</span></a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="bi bi-person"></i> <div>{v.S_EMPLOYEE_NUM}</div></li>
                  <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <div>{v.S_RESEARCHED_TIME}</div></li>
                  <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <div>{v.S_TECH_TYPE}</div></li>
                </ul>
              </div>

              <div className="entry-content">
                <p>{v.S_SERVICE_DETL}</p>
              </div>

            </article>
          </>

        )
      })
    )
  };

  const BlogElements = () => {

    return (
      <section id="blog" className="blog" style={{ padding: '60px 0 20px 0' }}>
        <div className="container" data-aos="fade-up">
          <div className="section-title" style={{ marginBottom: '20px' }}>
            <h2>스타트업 찾기</h2>
            <p>스타트업 & 지원기관의 투자라운딩 소식, 모집 소식,주요 뉴스 등 최신정보(DB)를 검색하고,구독과 알림을 통해 연결성을 강화합니다.
              <br />그간 Inno H.I.가 구축해 온 글로벌  Startup 정보를 확인하실 수 있습니다.
            </p>
          </div>

          <div className="row">
            <div id="entry" className="col-lg-8 entries">
              {/* <startup.ArticleElements data={stData?.slice(start, end)} /> */}

            </div>

            <div className="col-lg-4">
              <div className="sidebar">
                <h3 className="sidebar-title">검색</h3>

                <div className="sidebar-item search-form">
                  <form action="">
                    <input type="text"></input>
                    <button type="submit"><i className="bi bi-search"></i></button>
                  </form>
                </div>

                <h3 className="sidebar-title">분류</h3>
                <div className="sidebar-item categories">
                  <ul>
                    <li onClick={() => { changeStData("S_TECH_TYPE", "IoT") }}><div style={{ cursor: 'pointer' }}>IoT</div></li>
                    <li onClick={() => { changeStData("S_TECH_TYPE", "데이터 분석") }}><div style={{ cursor: 'pointer' }}>데이터 분석</div></li>
                    <li onClick={() => { changeStData("S_TECH_TYPE", "AI") }}><div style={{ cursor: 'pointer' }}>AI</div></li>
                    <li onClick={() => { changeStData("S_TECH_TYPE", "플랫폼 서비스") }}><div style={{ cursor: 'pointer' }}>플랫폼 서비스</div></li>
                    <li onClick={() => { changeStData("S_TECH_TYPE", "지속가능성") }}><div style={{ cursor: 'pointer' }}>지속가능성</div></li>
                    <li onClick={() => { changeStData("S_TECH_TYPE", "VR") }}><div style={{ cursor: 'pointer' }}>VR</div></li>
                    <li onClick={() => { changeStData("S_TECH_TYPE", "핀테크") }}><div style={{ cursor: 'pointer' }}>핀테크</div></li>
                    <li onClick={() => { changeStData("S_TECH_TYPE", "자율주행") }}><div style={{ cursor: 'pointer' }}>자율주행</div></li>
                    <li onClick={() => { changeStData("S_TECH_TYPE", "모빌리티") }}><div style={{ cursor: 'pointer' }}>모빌리티</div></li>
                    <li onClick={() => { changeStData("S_TECH_TYPE", "업무 자동화") }}><div style={{ cursor: 'pointer' }}>업무 자동화</div></li>
                    <li onClick={() => { changeStData("S_TECH_TYPE", "로보틱스") }}><div style={{ cursor: 'pointer' }}>로보틱스</div></li>
                    <li onClick={() => { changeStData("S_TECH_TYPE", "네트워크") }}><div style={{ cursor: 'pointer' }}>네트워크</div></li>
                  </ul>
                </div>

                <h3 className="sidebar-title">Tags</h3>
                <div className="sidebar-item tags">
                  <ul>
                    <li onClick={() => { changeStData("S_CATEGORY", "의료") }}><a>의료</a></li>
                    <li onClick={() => { changeStData("S_CATEGORY", "NEXT RISE") }}><a>NEXT RISE</a></li>
                    <li onClick={() => { changeStData("S_CATEGORY", "Batch9 Selection Day") }}><a>BATCH9</a></li>
                    <li onClick={() => { changeStData("S_CATEGORY", "물류") }}><a>물류</a></li>
                    <li onClick={() => { changeStData("S_CATEGORY", "APAC SUMMIT") }}><a>APAC SUMMIT</a></li>
                    <li onClick={() => { changeStData("S_CATEGORY", "SUMMER SUMMIT") }}><a>SUMMER SUMMIT</a></li>
                    <li onClick={() => { changeStData("S_CATEGORY", "여행") }}><a>여행</a></li>
                    <li onClick={() => { changeStData("S_CATEGORY", "IT") }}><a>IT</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div id="entryPage" className="blog-pagination">
          </div>

        </div>
      </section>

    )
  }

  useEffect(() => {
    reactDom.render(ArticleElements(stData?.slice(start, end)), document.getElementById('entry'));
    reactDom.render(entryPage(pageNumber, currentPage), document.getElementById('entryPage'));
  }, [stData, currentPage]);

  return (
    <>
      <main id="main">
        {common.BreadCrumbsElements}
        <BlogElements />
      </main>
    </>
  );

}

export default StartupArchive;