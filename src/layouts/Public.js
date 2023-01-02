import { Route, Routes } from "react-router-dom";

import Main from '../views/main/Main';

import Introduction from '../views/intro/Introduction';

import StartupSourcing from '../views/program/StartupSourcing';
import Suggestion from '../views/program/Suggestion';
import IntroduceEn from '../views/program/IntroduceEn';

import InnoPick from '../views/insight/InnoPick';
import Contest from '../views/insight/Contest';
import Detail from '../views/insight/InnoPickDetail';

import HipassIntro from "../views/solutions/HipassIntro";
import IdpIntro from "../views/solutions/IdpIntro";
import HcsIntro from "../views/solutions/HcsIntro";


import Member from '../views/contact/Member'

import OnemorePassLogin from '../views/pilot/OnemorePassLogin'
import OnemorePassSetting from '../views/pilot/OnemorePassSetting'

import CouncilMain from '../views/council/CouncilMain';

import CouncilAnnounce from "../views/announce/CouncilAnnouce";
import AnnouceDetail from "../views/announce/AnnouceDetail";

import OINewsletter from "../views/newsletter/OINewsletter"
import NewsletterDetail from "../views/newsletter/NewsletterDetail"

import StartupArchive from '../views/archive/StartupArchive';
import ArchiveDetail from '../views/archive/ArchiveDetail';

import RequestForm from '../views/request/RequestForm'
import StatusInquiry from '../views/request/StatusInquiry'

import ErrorPage from '../components/error/ErrorPage';

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';

import * as CouncilCommon from '../views/council/CouncilCommon'
import RouteChangeTracker from '../components/common/RouteChangeTracker';

import {
    ApolloProvider
} from '@apollo/client';
import Client from './Client';
import Test from './Test';

const sessionCheck = () => {
    setTimeout(() => {
        if (localStorage.getItem("amplify-signin-with-hostedUI")) {
            // localStorage.clear();
            CouncilCommon.loginOut();
        }
    }, 3000000); //페이지 진입 후 30분 세션 out
}

const Public = () => {

    sessionCheck();
    RouteChangeTracker();

    return (
        <>
            <ApolloProvider client={Client}>

                <Header />

                <Routes>
                    <Route path='/' element={<Main />}></Route>

                    <Route exact path='/test' element={<Test />}></Route>

                    <Route exact path='/intro'>
                        <Route exact path='introduction' element={<Introduction />}></Route>
                    </Route>

                    <Route exact path='/program'>
                        <Route exact path='startup' element={<StartupSourcing />}></Route>
                        <Route exact path='suggest' element={<Suggestion />}></Route>
                        <Route exact path='introduceEn' element={<IntroduceEn />}></Route>
                    </Route>

                    <Route exact path='/insight' >
                        <Route path='innopick' element={<InnoPick />}></Route>
                        <Route path='innopick/detail/:id' element={<Detail />}></Route>
                        <Route path='contest' element={<Contest />}></Route>
                    </Route>

                    <Route exact path='/solutions' >
                        <Route path='hipass' element={<HipassIntro />}></Route>
                        <Route path='idp' element={<IdpIntro />}></Route>
                        <Route path='hcs' element={<HcsIntro />}></Route>
                    </Route>

                    <Route exact path='/contact'>
                        <Route exact path='member' element={<Member />}></Route>
                    </Route>

                    <Route exact path='/council'>
                        <Route exact path='main' element={<CouncilMain />}> </Route>
                        <Route exact path='announce' element={<CouncilAnnounce />}> </Route>
                        <Route exact path='announce/detail/:bno' element={<AnnouceDetail />}> </Route>
                        <Route exact path='oi' element={<OINewsletter />}> </Route>
                        <Route exact path='oi/detail/:bno' element={<NewsletterDetail />}> </Route>
                        <Route exact path='archive' element={<StartupArchive />}></Route>
                        <Route exact path='archive/detail/:bno' element={<ArchiveDetail />}></Route>

                        <Route exact path='requestform' element={<RequestForm />}> </Route>
                        <Route exact path='statusinquiry' element={<StatusInquiry />}> </Route>

                        <Route exact path='onemorepass' element={<OnemorePassLogin />}></Route>
                        <Route exact path='setting' element={<OnemorePassSetting />}></Route>
                    </Route>

                    <Route path="/*" element={<ErrorPage />} />

                </Routes>

                <Footer />
            </ApolloProvider>
        </>
    );
}

export default Public;
