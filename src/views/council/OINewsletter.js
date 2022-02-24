/* eslint-disable */

import React, { useState, useEffect } from 'react';
import * as jsondata from '../../components/JsonData'
import reactDom from 'react-dom';
import * as tt from './CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";
import {Link} from "react-router-dom";

const OINewsletter = ({signOut, user}) => {
  const firstData = jsondata.newsletterTestData.slice(jsondata.newsletterTestData.length - 50, jsondata.newsletterTestData.length); //최초 진입시 가장 최신 50개 렌더링
  const [stData, setStData] = useState(firstData);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];

  tt.headerGrid();

  for (let i = 1; i <= Math.ceil(stData?.length / 5); i++) {
    pageNumber.push(i);
  }

  const changeCurrentPage = (param) => {
    setStart((param.d - 1) * 5);
    setEnd(param.d * 5);

    setCurrentPage(param.d);
  }

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
        console.log(v)
        return (
          <>
            <article key={v.S_NO} className="entry">

              <div className="entry-img">
                <img src="" alt="" className="img-fluid"></img>
              </div>

              <h2 className="entry-title">
                <a href={v.content}>{v.title}.</a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="bi bi-person"></i> <div>{v.regUser}</div></li>
                  <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <div>{v.regDate}</div></li>
                  <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <div>{v.noticeYn}</div></li>
                </ul>
              </div>

              {/* <div className="entry-content">
                <p>{v.S_SERVICE_DETL}</p>
              </div> */}

            </article>
          </>

        )
      })
    )
  };

  const BlogElements = () => {

    return (
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="section-title" style={{ marginBottom: '20px' }}>
            <h2>오픈이노베이션 레터</h2>
            {/* <p>혁신에 대한 고민은 많지만, 오늘도 바쁜 당신을 위해 오픈이노베이션 분야별 행사와 모임을 한 눈에 모아 봤습니다. 놓쳐선 안 될 행사와 함께 여러분의 메일함을 살며시 두드릴게요.
                    <br />우리, 한 주의 문을 활짝 여는 격주 금요일 아침에 만나요 🙋‍♀️
                </p> */}
          </div>

          <div className="row">
            <div id="entry" className="entries">
            </div>
          </div>

          <div id="entryPage" className="blog-pagination" style={{ padding: '0px 0 30px 0' }}>
          </div>

        </div>
      </section>
    )
  }

  useEffect(() => {
    reactDom.render(ArticleElements(stData?.slice(start, end)), document.getElementById('entry'));
    reactDom.render(entryPage(pageNumber, currentPage), document.getElementById('entryPage'));
  }, [stData, currentPage]);

  tt.eventLogOut(signOut);
  tt.changeName(user.username);

  return (
    <>
      <main id="main">
        <BlogElements />
      </main>
    </>
  );

}

// export default StartupArchive;

export default  withAuthenticator(OINewsletter, {
  socialProviders: ['google'],
  hideSignUp : [true],
//   loginMechanisms : ['username'],
  loginMechanisms : ['email'],
//  components : [components],
  variation : ["modal"]
});
