import React, { useState, useEffect } from 'react';
import * as common from '../../components/common/BreadCrumbs'
import * as startup from '../program/StartupArchiveElements'
import * as jsondata from '../../components/JsonData'
import reactDom from 'react-dom';
//import axios from 'axios';

const StartupArchive = () => {
  const stData = useState(jsondata.StartupTestData);

  // const callSelectStartupData = () => {
  //   axios.get(`${process.env.REACT_APP_API_URL}/api/v1/board/selectBoard`, { params: { limit: 10, offset: 0 } })
  //     .then((Response) => {
  //       console.log(Response.data);
  //     })
  //     .catch((Error) => console.log(Error))
  // }

  const make 
  
  useEffect(() => {
    reactDom.render(startup.ArticleElements(stData[0]), document.getElementById('entry'));
})

  return (
    <>
      <main id="main">
        {common.BreadCrumbsElements}
        {startup.BlogElements}
      </main>
    </>
  ); 

}

export default StartupArchive;