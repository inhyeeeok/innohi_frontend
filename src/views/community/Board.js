import React, { useEffect } from 'react';
import ReactDOM from 'react-dom'

import axios from 'axios';
import DataTableComponent from '../../components/dataTable/DataTable'

import { BoardMainElements } from './BoardElements';


const Board = () =>  {

  const callSelectBoardData = () => {
    axios.get('http://localhost:5000/api/v1/board/selectBoard', { params: { limit: 10, offset: 0 } })
      .then((Response) => {
        //       console.log(Response.data);
        makeDataTable(Response);
      })
      .catch((Error) => console.log(Error))
  }

  const makeDataTable = (Response) => {
    const columns = [
      { name: '순번', selector: (row) => row.bno, sortable: true , width: "15%"},
      { name: '내용', selector: (row) => row.title, sortable: true, width: "40%" },
      { name: '날짜', selector: (row) => row.updtDate, sortable: true, width: "15%" },
      { name: '작성자', selector: (row) => row.regUser, sortable: true, width: "15%" },
      { name: '조회수', selector: (row) => row.viewCnt, sortable: true, width: "15%" },
    ]
    const element = <DataTableComponent data={Response.data.data} columns={columns}/>
    ReactDOM.render(element, document.getElementById("dataTable"));
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
