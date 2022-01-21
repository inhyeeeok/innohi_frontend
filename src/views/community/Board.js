import React, { useEffect } from 'react';

//import axios from 'axios';
import {DataTableComponent} from '../../components/dataTable/DataTable'
import * as jsondata from '../../components/JsonData'

import { BoardMainElements } from './BoardElements';

const Board = () =>  {
  
  const callSelectBoardData = () => {
    makeDataTable(jsondata.newsletter2TestData);
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
      { title: '순번', width: "5%" },
      { title: '내용', width: "70%", },
      { title: '날짜', width: "10%" },
      { title: '작성자', width: "10%" },
      { title: '조회수', width: "5%" },
    ]

    DataTableComponent(Response, columns);
  }

  useEffect(() => {
    callSelectBoardData();
  })

  return (
    <>
      {BoardMainElements}
    </>
  );

}

export default Board;
