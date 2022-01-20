import React, { useEffect } from 'react';
import * as common from '../../components/common/BreadCrumbs'
import * as dfs from '../program/DfsElements'

const Dfs = () => {

  useEffect(() => {

})

  return (
    <>
      <main id="main">
        {common.BreadCrumbsElements}
        {dfs.AboutElements}
        {dfs.TeamElements}
        {dfs.ServiceElements}
      </main>
    </>
  ); 

}

export default Dfs;
