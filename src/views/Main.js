import '../assets/style/style.css';
import '../assets/style/custom.css';
import React from 'react';
import hero from '../assets/img/hero-img.png';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item, readOnly: true };
    this.delete = props.delete;
  }

  render() {
    return (
      <>
        <section id='hero' className='d-flex align-items-center'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1' data-aos="fade-up" data-aos-delay="200">
                <h1><span style={{ color: 'rgb(253, 142, 77)' }}>Inno</span>vation for <span style={{ color: 'rgb(253, 142, 77)' }}>H</span>anjin's Future <span style={{ color: 'rgb(253, 142, 77)' }}>I</span>nsight</h1>
                <h2>HIST에서는 신기술 도입과 혁신 성장을 위한 <br />오픈 이노베이션 프로그램 'inno H.I' 를 운영하고 있습니다</h2>
                <div className='d-flex justify-content-center justify-content-lg-start'>
                  <div href='' className='btn-get-started scrollto'>협의체공간</div> 
                </div>
              </div>
              <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos="zoom-in" data-aos-delay="200">
                <img src={hero} className='img-fluid animated' alt=''></img>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Main;
