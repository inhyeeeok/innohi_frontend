import React, { useEffect } from 'react';

const ErrorPage = () =>  {
  
  
    useEffect(() => {
      document.getElementById('header').style.display = "none";
      document.getElementById('footer').style.display = "none";


    })
  
    return (
      <>
        <img src={require('../../assets/img/sample.jpg').default} className='img-fluid animated' alt=''></img>
      </>
    );
  
  }
  
  export default ErrorPage;
  