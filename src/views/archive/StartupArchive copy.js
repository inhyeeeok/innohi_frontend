/* eslint-disable */

import React, { useState, useEffect } from 'react';
import * as jsondata from '../../components/JsonData'
import reactDom from 'react-dom';
import * as CouncilCommon from './CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";

const OPTIONS = [
  { value: "IoT", name: "IoT" },
  { value: "데이터 분석", name: "데이터 분석" },
  { value: "AI", name: "AI" },
];

const OPTIONS2 = [
  { value: "의료", name: "의료" },
  { value: "NEXT RISE", name: "NEXT RISE" },
  { value: "Batch9 Selection Day", name: "Batch9 Selection Day" },
];

const StartupArchive = ({ signOut, user }) => {
  // const firstData = jsondata.startupTestData.slice(jsondata.startupTestData.length - 50, jsondata.startupTestData.length); //최초 진입시 가장 최신 50개 렌더링
  const [fData, setFData] = useState(OPTIONS[0]);
  const [cData, setCData] = useState(OPTIONS2[0]);
  const [stData, setStData] = useState();
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];


  CouncilCommon.headerGrid();

  for (let i = 1; i <= Math.ceil(stData?.length / 5); i++) {
    pageNumber.push(i);
  }

  const changeStData = (key, value) => {
    let resData = '';
    // if (key == 'S_TECH_TYPE') {
    //   resData = jsondata.startupTestData.filter(it => it.S_TECH_TYPE.includes(value));
    // } else if (key == 'S_CATEGORY') {
    //   resData = jsondata.startupTestData.filter(it => it.S_CATEGORY.includes(value));
    // }
    console.log('fData : ' + fData);
    console.log('cData : ' + cData);

    let inputData = document.getElementById('search').value;
    console.log(inputData)
    if (inputData === "") {
      resData = jsondata.startupTestData.filter(it => it.S_TECH_TYPE.includes(fData) || it.S_CATEGORY.includes(cData));
    } else {
      resData = jsondata.startupTestData.filter(it => it.S_TECH_TYPE.includes(fData) || it.S_CATEGORY.includes(cData) || it.S_SERVICE_DETL.includes(inputData));
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
                <a href={'archive/detail/' + v.S_NO}>{v.S_MAIN_SERVICE}. <br /><span style={{ color: 'rgb(253, 142, 77)' }}>{v.S_NAME}</span></a>
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

  const handleChange1 = (e) => {
    console.log('fData :' + e.target.value);
    setFData(e.target.value)
    changeStData("S_TECH_TYPE", "IoT")
  };

  const handleChange2 = (e) => {
    const { value } = e.target
    console.log('cData :' + value);
    setCData(value)
    changeStData("S_CATEGORY", "의료")
  };

  const SelectBox = (props) => {

    if (props.type == 'fData')
      return (

        <select defaultValue={fData} onChange={handleChange1}>
          {props.option.map((option) => (
            <option
              key={option.value}
              value={option.value}
              defaultValue={props.defaultValue === option.value}
            >
              {option.name}
            </option>
          ))}
        </select>
      );
    else
      return (

        <select defaultValue={cData} onChange={handleChange2}>
          {props.option.map((option) => (
            <option
              key={option.value}
              value={option.value}
              defaultValue={props.defaultValue === option.value}
            >
              {option.name}
            </option>
          ))}
        </select>
      );
  };

  const BlogElements = () => {

    return (

      <section id="blog" className="blog">
        <div className="container" data-aos="fade-up">
          <div className="section-title" style={{ marginBottom: '20px' }}>
            <h2>스타트업 찾기</h2>
          </div>


          <div className="sidebar">
            <span className="sidebar-item">분야
              <SelectBox option={OPTIONS} type='fData'></SelectBox>
            </span>
            <span className="sidebar-item">카테고리
              <SelectBox option={OPTIONS2} type='cData'></SelectBox>
            </span>
            {/* <span className="sidebar-item search-form">검색 <input id="search" type="text" ></input><button type="button" onClick={() => { searchData(document.getElementById('search').value) }}><i className="bi bi-search"></i></button></span> */}
            {/* <span className="sidebar-item search-form">검색 <input id="search" type="text"></input><button type="button" onClick={() => { changeStData() }}><i className="bi bi-search"></i></button></span> */}
            <span>검색 <input id="search" type="text"></input><button type="button" onClick={() => { changeStData() }}><i className="bi bi-search"></i></button></span>
          </div>

          <div className="row">
            <div id="entry" className="entries">
              {/* <startup.ArticleElements data={stData?.slice(start, end)} /> */}
            </div>
          </div>

          <div id="entryPage" className="blog-pagination" style={{ padding: '0px 0 30px 0' }}></div>

        </div>
      </section>

    )
  }

  useEffect(() => {
    reactDom.render(ArticleElements(stData?.slice(start, end)), document.getElementById('entry'));
    reactDom.render(entryPage(pageNumber, currentPage), document.getElementById('entryPage'));
  }, [stData, currentPage, fData, cData]);

  CouncilCommon.eventLogOut(signOut);
  CouncilCommon.changeName(CouncilCommon.usernameCheck(user));

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
