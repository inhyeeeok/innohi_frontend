import React, { useEffect, useState } from 'react';
import * as CouncilCommon from '../council/CouncilCommon'
import Modal from '../../components/modal/Modal'

const OnemorePassLogin = () => {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

   

    const MemberElements = () => {
        return (
            <>
              
            </>
        )
    }

    const test = () => {

        const popupWidth = '';
        const popupHeight = '';

        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer ac1567183e29b245dfe49e28e0862c388d4df2c6a98d23a78246fe877a39580e");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"user_id":"test","lang_init":"KR"});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://interface-api.ompasscloud.com/v1/ompass/u2f", requestOptions)
        .then(response => response.text())
        .then(result => {
            window.open(JSON.parse(result).data.ompass_uri, '_blank', 'status=no, height='+window.screen.height / 2+', width='+document.body.offset / 2+', top=100') 
            console.log(result) 
        })
        .catch(error => console.log('error', error));


    }

    const test1 = () => {
        
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Bearer 6f1810263bbf08a347e9a9d5bbeb456e373e6470afdfb70ba3ebc6cd14131f16");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"user_id":"test","lang_init":"KR"});

        var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
        };

        fetch("https://interface-api.ompasscloud.com/v1/ompass/uaf", requestOptions)
        .then(response => response.text())
        .then(result => {
            window.open(JSON.parse(result).data.ompass_uri, '_blank', 'status=no, height='+window.screen.height / 2+', width='+document.body.offset / 2+', top=100') 
            console.log(result) 
        })
        .catch(error => console.log('error', error));

    }

    useEffect(() => {
        CouncilCommon.headerGrid();
    });

    return (
        <>
        {/* <Modal show={show} title='test' handleClose={handleClose} handleShow={handleShow}>
        <iframe
                                        title='we'
                                        id="ContentUrl"
                                        width="700"
                                        height='500'
                                        src='https://interface.ompasscloud.com/authenticate/did/168?type=u2f&domain=innohi.hist.co.kr&username=test&display_name=none&access_key=eyJ0eXBlIjoiSldUIiwicmVnRGF0ZSI6MTY2MTkyMDk0OTA3MiwiYWxnIjoiSFMyNTYifQ.eyJzdWIiOiJWRVJJRllfQUNDRVNTX0tFWSIsImV4cCI6MTY2MTkyMTI0OSwidXNlcm5hbWUiOiJ0ZXN0In0.QVTSLkpSf5azOLAmjX5jAUVahdUE7dRwfHrQdseEYT4&redirect_uri=innohi.hist.co.kr/council/main&lang=KR'
                                        // onLoad={setFrameHeight}
                                        scrolling="auto"
                                    >
                                    </iframe>

        </Modal> */}
          <section id='hero' className='d-flex align-items-center'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1' data-aos="fade-up" data-aos-delay="200">
                                <h1><span style={{ color: 'rgb(253, 142, 77)' }}>Hi-Pass</span></h1>
                                <h2 style={{ marginTop: '15px' }}>
                                    <span style={{ fontFamily: 'Jost', textTransform: 'uppercase', fontWeight: 'bold' }}>HIPASS</span>와 함께 간편 로그인을 구현해보세요<br />
                                </h2>
                                <div className='d-flex justify-content-center justify-content-lg-start'>
                                    <button onClick={test} className="btn-get-end">등록</button >
                                    <button onClick={test1} className="btn-get-end">비밀번호 없는 로그인</button >               
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2 hero-img' data-asos="zoom-in" data-aos-delay="200">
                                <img src='https://static.wadiz.kr/landing/media/lupi-characters-mo.f4d85e86.png' className='img-fluid animated' alt=''></img>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
}

export default OnemorePassLogin;