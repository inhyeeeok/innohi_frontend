import React from 'react';
import '../../assets/style/style.css'
import '../../assets/style/custom.css'

const Footer = () => {

  const footerElements =

  <footer id='footer'>
    <div className='container footer-bottom clearfix'>
      <div className='copyright'>
        Copyright &copy;2022 <strong><span>Hanjin Information Systems & Telecommunication</span></strong>. Co., Ltd. All rights Reserved.
      </div>
      <div className='credits'>문의하기 : innohi@hist.co.kr</div>
    </div>
  </footer>
  ;

  if(window.location.pathname.split('/')[1] === 'test') return null;
  // if (window.location.pathname.split('/')[1] === 'login')
  //   return null;
  return (
    <>
      {footerElements}
    </>
  );

}

export default Footer;
