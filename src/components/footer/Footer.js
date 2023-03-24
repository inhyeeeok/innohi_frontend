import React from 'react';
import '../../assets/style/style.css'
import '../../assets/style/custom.css'

const Footer = () => {

  const FooterElements = () => {
    return (
      <footer id='footer'>
        <div className='container footer-bottom clearfix'>
          {/* <div className='copyright'>
            Copyright &copy;2022 <strong><a href='/solutions/hipass'>Hanjin</a><a href='/solutions/idp'> Information Systems </a> <a href='/solutions/hcs'>& Telecommunication</a></strong>. Co., Ltd. All rights Reserved.
          </div> */}
          <div className='copyright'>
            Copyright &copy;2022 <strong><span>Hanjin Information Systems & Telecommunication</span></strong>. Co., Ltd. All rights Reserved.
          </div>
          <div className='credits'>문의하기 : innohi@hist.co.kr</div>
        </div>
      </footer>
    )
  }

  if (window.location.pathname.split('/')[1] === 'test') return null;
  // if (window.location.pathname.split('/')[1] === 'login')
  //   return null;
  return (
    <>
      <FooterElements />
    </>
  );

}

export default Footer;
