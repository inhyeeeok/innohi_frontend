import React, { useEffect } from 'react';

//import axios from 'axios';
import DataTableComponent from '../../components/dataTable/DataTable'
import * as jsondata from '../../components/JsonData'

import * as common from '../../components/common/BreadCrumbs'

const BizPick = () => {

    const callSelectBoardData = () => {
        makeDataTable(jsondata.newsletterTestData);
        // axios.get(`${process.env.REACT_APP_API_URL}/api/v1/board/selectBoard`, { params: { limit: 10, offset: 0 } })
        //   .then((Response) => {
        //     //       console.log(Response.data);
        //     makeDataTable(Response.data.data);
        //   })
        //   .catch((Error) =>  {
        //     console.log(Error)
        //     makeDataTable(jsondata.newsletterTestData);
        //   })
    }

    const makeDataTable = (Response) => {
        const columns = [
            { data: 'bno', width: "5%" },
            { data: 'title', width: "70%", },
            { data: 'updtDate', width: "10%" },
            { data: 'regUser', width: "10%" },
            { data: 'viewCnt', width: "5%" },
        ]

        DataTableComponent(Response, columns);
    }

 const BoardMainElements =
        <section id="about" className="about">
            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <h2 style={{ textTransform: 'capitalize' }}>Biz Pick</h2>
                    <p>행사에 대한 고민은 많지만, 오늘도 바쁜 당신을 위해 오픈이노베이션 분야별 행사와 모임을 한 눈에 모아 봤습니다. 놓쳐선 안 될 행사와 함께 여러분의 메일함을 살며시 두드릴게요.
                        <br />우리, 한 주의 문을 활짝 여는 격주 금요일 아침에 만나요 🙋‍♀️
                    </p>
                </div>
                <table id="dataTable" className="type04" width="100%">
                    <thead>
                        <tr>
                            <th>순번</th>
                            <th>내용</th>
                            <th>날짜</th>
                            <th>작성자</th>
                            <th>조회수</th>
                        </tr>
                    </thead>
                </table>
                <div id="dataTable2" width="100%">

                </div>
            </div>
        </section>
        ;

 const BoardDetailElements = (props) => {
        console.log(JSON.stringify(props.data));
        const param = props.data;
        return (
            <>
                <div className="container">
                    <div className="table-responsive-md" >
                        <table className="table table-bordered">
                            <thead style={{ backgroundColor: 'rgba(242, 242, 242, 0.706)' }}>
                                <tr align="center" >
                                    <th width="10%">제목</th>
                                    <th width="40%" colSpan="3" >{param.title}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr align="center">
                                    <td>순번</td>
                                    <td>{param.bno}</td>
                                    <td>조회수</td>
                                    <td>{param.viewCnt}</td>
                                </tr>
                                <tr align="center">
                                    <td width="10%">작성일</td>
                                    <td width="40%">{param.regDate}</td>
                                    <td width="10%">작성자</td>
                                    <td width="40%">{param.regUser}</td>
                                </tr>
                                <tr>
                                    <td colSpan="4">
                                        <iframe
                                            src={param.content}
                                            style={{ height: '2830px', width: '100%' }} title="oi-newsletter"></iframe>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="table table-condensed">
                            <thead>
                                <tr>
                                    {/* <td style={{ float: 'right' }}> */}
                                    {/* <button type="button" id="delete" className="btn btn-primary disabled">이전</button> */}<a href='/board'>
                                        <button type="button" id="list" className="btn btn-primary" style={{ float: 'right' }}>목록</button>
                                        {/* <button type="button" id="write" className="btn btn-primary active">다음</button> */}</a>
                                    {/* </td> */}
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </>

        )
    }
        ;


  useEffect(() => {
    callSelectBoardData();
  })

  return (
    <>
      <main id="main">
        {common.BreadCrumbsElements}
        {BoardMainElements}
      </main>
    </>
  );

}

export default BizPick;
