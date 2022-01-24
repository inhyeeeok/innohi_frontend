import React, { useEffect } from 'react';

//import axios from 'axios';
import DataTableComponent from '../../components/dataTable/DataTable'
import * as jsondata from '../../components/JsonData'

import * as board from './BoardElements';
import * as common from '../../components/common/BreadCrumbs'

const Board = () =>  {
  
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

  useEffect(() => {
    callSelectBoardData();
  })

  return (
    <>
      <main id="main">
        {common.BreadCrumbsElements}
        {board.BoardMainElements}
      </main>
    </>
  );

}

export default Board;
