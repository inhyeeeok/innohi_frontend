/* eslint-disable */
import React, { useState, useEffect } from 'react';
import * as CouncilCommon from './CouncilCommon'
import { withAuthenticator } from "@aws-amplify/ui-react";
import { useQuery, gql } from '@apollo/client';

const OINewsletter = ({ signOut, user }) => {

  const selectTodo = gql`
  query listInnohis {
      listNewsletterData {
            items {
                id
                bno
                content
                regDate
                sendDate
                title
            }
      }
    }
  `;

  const { loading, data } = useQuery(selectTodo);
  //console.log(error)
  // console.log(data)
  // console.log(loading)

  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const pageNumber = [];

  CouncilCommon.headerGrid();

  if (!loading) {
    for (let i = 1; i <= Math.ceil(data.listNewsletterData.items?.length / 5); i++) {
      pageNumber.push(i);
    }
  }

  const changeCurrentPage = (param) => {
    setStart((param.d - 1) * 5);
    setEnd(param.d * 5);
    setCurrentPage(param.d);
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
    if (data.listNewsletterData.items === undefined) {
      return (
        <>
          <p>loading....</p>
        </>
      )
    } else {
      return (
        ((data.listNewsletterData.items)?.slice(start, end)).slice(0).reverse().map((i, v) => {
          const convertSendDate = `${i.sendDate.substr(0, 4)}년 ${i.sendDate.substr(4, 2)}월`
          const convertRegDate = `작성일자 : ${i.regDate.substr(0, 4)}년 ${i.regDate.substr(4, 2)}월 ${i.regDate.substr(6, 2)}일`
          return (
            <>
              <article className="entry">

                <div className="entry-img">
                  <img src="" alt="" className="img-fluid"></img>
                </div>

                <h2 className="entry-title">
                  <a href={'/council/oi/detail/' + i.bno}>{i.title}</a>
                </h2>

                <div className="entry-meta">
                  <ul>
                    <li className="d-flex align-items-center"><i className="bi bi-person"></i> <div>{convertSendDate}</div></li>
                    <li className="d-flex align-items-center"><i className="bi bi-clock"></i> <div>{convertRegDate}</div></li>
                    {/* <li className="d-flex align-items-center"><i className="bi bi-chat-dots"></i> <div>{i.id}</div></li> */}
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
    }
  };

  const BlogElements = () => {
    if (!loading) {
      return (
        <section id="blog" className="blog">
          <div className="container" data-aos="fade-up">

            <div className="section-title">
              <h2>오픈이노베이션 레터</h2>
            </div>

            <div className="row">
              <div id="entry" className="entries">
                <ArticleElements param={data} />
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
        <>
          <p>loading....</p>
        </>
      )
    }
  }

  // useEffect(() => {
  //   reactDom.render(ArticleElements(stData?.slice(start, end)), document.getElementById('entry'));
  //   reactDom.render(entryPage(pageNumber, currentPage), document.getElementById('entryPage'));
  // }, [stData, currentPage]);

  useEffect(() => { });

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

export default withAuthenticator(OINewsletter, {
  socialProviders: ['google'],
  hideSignUp: [true],
  //   loginMechanisms : ['username'],
  loginMechanisms: ['email'],
  //  components : [components],
  variation: ["modal"]
});
