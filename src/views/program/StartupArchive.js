import React, { useEffect } from 'react';
import * as common from '../../components/common/BreadCrumbs'
import * as startup from '../program/StartupArchiveElements'

const StartupArchive = () => {

  useEffect(() => {

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