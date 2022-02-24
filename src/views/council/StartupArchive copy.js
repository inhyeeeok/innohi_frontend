/* eslint-disable */

import React, { useState, useEffect } from 'react';
import * as jsondata from '../../components/JsonData'
import reactDom from 'react-dom';
import * as tt from './CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";
import {Link} from "react-router-dom";

const StartupArchive = ({signOut, user}) => {
  const firstData = jsondata.startupTestData.slice(jsondata.startupTestData.length - 50, jsondata.startupTestData.length); //최초 진입시 가장 최신 50개 렌더링
  const [stData, setStData] = useState(firstData);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];

  tt.headerGrid();

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
                <a href={'/startupDetail?' + v.S_NO}>{v.S_MAIN_SERVICE}. <br /><span style={{ color: 'rgb(253, 142, 77)' }}>{v.S_NAME}</span></a>
              </h2>

              <div className="entry-meta">
                <ul>
                  <li className="d-flex align-items-center"><i className="bi bi-person"></i> <div>{v.S_EMPLOYEE_NUM}</div></li>
                  <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <div>{v.S_RESEARCHED_TIME}</div></li>
                  <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <div>{v.S_TECH_TYPE}</div></li>
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
//      <section id="blog" className="blog" style={{ padding: '60px 0 20px 0' }}>
      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="section-title" style={{ marginBottom: '20px' }}>
            <h2>알려드려용</h2>
            <p>어떤걸.. 알려드릴까용....</p>
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

export default  withAuthenticator(StartupArchive, {
  socialProviders: ['google'],
  hideSignUp : [true],
//   loginMechanisms : ['username'],
  loginMechanisms : ['email'],
//  components : [components],
  variation : ["modal"]
});
