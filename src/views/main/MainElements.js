import kal from '../../assets/img/clients/kal.png';

export const heroElements =

  <section id='hero' className='d-flex align-items-center'>
    <div className='container'>
      <div className='row'>
        <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1' data-aos="fade-up" data-aos-delay="200">
          <h1><span style={{ color: 'rgb(253, 142, 77)' }}>Inno</span>vation for <span style={{ color: 'rgb(253, 142, 77)' }}>H</span>anjin's Future <span style={{ color: 'rgb(253, 142, 77)' }}>I</span>nsight</h1>
          <h2>HIST에서는 신기술 도입과 혁신 성장을 위한 <br />오픈 이노베이션 프로그램 'inno H.I' 를 운영하고 있습니다</h2>
          <div className='d-flex justify-content-center justify-content-lg-start'>
            <a href='/council'><div className='btn-get-started scrollto'>협의체공간</div></a>
          </div>
        </div>
        <div className='col-lg-6 order-1 order-lg-2 hero-img' data-aos="zoom-in" data-aos-delay="200">
          <img src={require('../../assets/img/sample.jpg').default} className='img-fluid animated' alt=''></img>
        </div>
      </div>
    </div>
  </section>
  ;

export const refElements =
  <>
    <section id='hero' className='d-flex align-items-center' style={{ backgroundColor: '#f3f5fa' }}>
      <div className='container'>
        <div className='row'>
        <div className='col-lg-6  hero-img' data-aos="zoom-in" data-aos-delay="200">
            <img src={require('../../assets/img/tour_DFS.jpg').default} className='img-fluid animated' alt=''></img>
          </div>
          <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 ' data-aos="fade-up" data-aos-delay="200">
            <h1><span style={{ color: '#37517e'}}>The HIST group company DFS was held</span></h1>
            <h2><span style={{ color: '#37517e'}}>디지털솔루션팀 솔루션사업그룹에서는 11월 17일 본사 5층 대회의실에서 ‘여행 플랫폼과 에듀테크 분야’ 스타트업 발굴을 주제로 PnP DFS(Deal Flow Session)를 개최했습니다.</span></h2>
            <div className='d-flex justify-content-center justify-content-lg-end'>
              <div href='' className='btn-get-started scrollto'>자세히 알아보기</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  ;

export const cliensElements =

  <section id='cliens' className='cliens section-bg'>
    <div className='container'>
      <div className='row justify-content-center' data-aos='zoom-in'>
        <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
          <img src={require('../../assets/img/clients/kal.png').default} className='img-fluid' alt=''></img>
        </div>
        <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
          <img src={kal} className='img-fluid' alt=''></img>
        </div>
        <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
          <img src={kal} className='img-fluid' alt=''></img>
        </div>
        <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
          <img src={kal} className='img-fluid' alt=''></img>
        </div>
        <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
          <img src={kal} className='img-fluid' alt=''></img>
        </div>
      </div>

      <div className='row justify-content-center' data-aos='zoom-in'>
        <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
          <img src={kal} className='img-fluid' alt=''></img>
        </div>
        <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
          <img src={kal} className='img-fluid' alt=''></img>
        </div>
        <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
          <img src={kal} className='img-fluid' alt=''></img>
        </div>
        <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
          <img src={kal} className='img-fluid' alt=''></img>
        </div>
        <div className='col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center'>
          <img src={kal} className='img-fluid' alt=''></img>
        </div>
      </div>

    </div>
  </section> // End Cliens Section
  ;

export const clientsElements =

  <section id="clients" className="clients">
    <div className="container" data-aos="fade-up">
      <header className="header-font">
        <h4>지금, 이 행사 어때요?</h4>
        <p>이노하이가 추천하는 놓쳐선 안 될 행사</p>
      </header>

      <div className="clients-slider swiper">
        <div className="swiper-wrapper align-items-center">
          <div className="swiper-slide"><img src={require('../../assets/img/clients/hist.png').default} className="img-fluid" style={{ width: "320px" }} alt=""></img></div>
          <div className="swiper-slide"><img src={require('../../assets/img/clients/kal.png').default} className="img-fluid" style={{ width: "320px" }} alt=""></img></div>
          <div className="swiper-slide"><img src={require('../../assets/img/clients/kal.png').default} className="img-fluid" style={{ width: "320px" }} alt=""></img></div>
        </div>
        <div className="swiper-pagination"></div>
      </div>

    </div>
  </section>
  ;

  export const joinNewsletterElements =

    <div id='footer'>
      <div className='footer-newsletter'>
        <div className='container'>
        <div className="col-lg-12">
            <h4>관심 분야의 행사소식을 가장 먼저 접하세요.</h4>
            <p>기술혁신의 인사이트를 얻을 수 있는 innoH.I. 정기레터를 무료로 구독 할 수 있으며 비지니스에 부합하는 컨설팅, 교육프로그램을 운영할 수 있습니다.</p>
              <a href="/board" className="btn-get-started scrollto"><strong>지난 뉴스레터 보기</strong></a>
          </div>
        </div>
      </div>
    </div>
  ;
