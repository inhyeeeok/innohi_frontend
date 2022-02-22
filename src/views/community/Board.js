import React, { useEffect } from 'react';

//import axios from 'axios';
import * as jsondata from '../../components/JsonData'

import $ from 'jquery';

import * as  DT from '../../components/dataTable/DataTable';
import * as board from './BoardElements';
import * as common from '../../components/common/BreadCrumbs'

import * as tt from '../../views/council/CouncilCommon';

import { withAuthenticator} from "@aws-amplify/ui-react";

const Board = ({signOut, user}) =>  {
  
  const callSelectBoardData = () => {
    makeDataTable(jsondata.newsletterTestData);
  }

  tt.headerGrid();

  const makeDataTable = (Response) => {
    const columns = [
      { data: 'title', width: "70%", },
    ]

    syncTable(Response, columns);
  }

  const syncTable = (orginData, columns) => {

    $('#dataTable').DataTable({
        data: orginData,
        columns: columns,
        createdRow: function (row, data, dataIndex) {
            console.log(this);
            console.log(row);
            console.log(data);
            row.addEventListener('click', function () {

                return (
                   //  window.location.href = '/boardDetail?' + "bno="+orginData[dataIndex].bno
                     window.location.href = '/boardDetail?' + JSON.stringify(orginData[dataIndex])
                );
                // const elements = <BizDetailElements data={orginData[dataIndex]} />
                // reactDom.render(elements, document.getElementById("dataTable2"));
                // document.getElementById("dataTable_wrapper").style.display = "none"
            })
        },

        drawCallback: function () {
            document.getElementById('dataTable').firstElementChild.style.backgroundColor = '#f1f1f1b4';
        },

        language: DT.lang_kor,
        responsive: DT.defaultResponsive,
        lengthChange: DT.defaultLengthChange,
        searching: DT.defaultSearching,
        ordering: DT.defaultOrdering,
        info: DT.defaultInfo,
        // 페이징 기능 숨기기
        //paging: false,
        // 2번째 항목을 오름 차순 
        // order : [ [ 열 번호, 정렬 순서 ], ... ]
        pageLength: 10,
        order: [[0, "asc"]]
    });
};

  useEffect(() => {
    callSelectBoardData();
    tt.eventLogOut(signOut);
    tt.changeName(user.username);
  })

  return (
    <>
      <main id="main">
        {/* {common.BreadCrumbsElements} */}
        {board.BoardMainElements}
      </main>
    </>
  );

}

export default  withAuthenticator(Board, {
  socialProviders: ['google'],
  hideSignUp : [true],
//   loginMechanisms : ['username'],
  loginMechanisms : ['email'],
//  components : [components],
  variation : ["modal"]
});
