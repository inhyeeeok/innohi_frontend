import React, { useEffect } from 'react';
import * as common from '../../components/common/BreadCrumbs';

const ErrorPage = () =>  {
  
  
    useEffect(() => {
    })
  
    return (
      <>
        {common.BreadCrumbsElements}
        <img src={require('../../assets/img/sample.jpg').default} className='img-fluid animated' alt=''></img>
      </>
    );
  
  }
  
  export default ErrorPage;
  