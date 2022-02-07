import { Route, Routes } from "react-router-dom";

import Main from '../views/main/Main';

import Introduction from '../views/intro/Introduction';
import Propel from '../views/intro/Propel';
import History from '../views/intro/History';

import StartupArchive from '../views/community/StartupArchive';


import StartupSourcing from '../views/program/StartupSourcing';
import ExternalCooperation from '../views/program/ExternalCooperation';
import Suggestion from '../views/program/Suggestion';

import BizPick from '../views/insight/BizPick'
import TechPick from '../views/insight/TechPick';
import Contest from '../views/insight/Contest';

import Member from '../views/contact/Member'

import CouncilMain from '../views/council/CouncilMain';
import CouncilTest from "../views/council/CouncilTest";
import CouncilIntro from "../views/council/CouncilIntro";

import ErrorPage from '../views/common/ErrorPage';

import Header from '../components/header/Header'
import Footer from '../components/footer/Footer';




const Public = () => {

    return (
        <>

            <Header />

            <Routes>
                <Route path='/' element={<Main />}></Route>

                <Route exact path='/intro'>
                    <Route exact path='introduction' element={<Introduction />}></Route>
                    <Route exact path='propel' element={<Propel />}></Route>
                    <Route exact path='history' element={<History />}></Route>
                </Route>

                <Route exact path='/program'>
                    <Route exact path='startup' element={<StartupSourcing />}></Route>
                    <Route exact path='external' element={<ExternalCooperation />}></Route>
                    <Route exact path='suggest' element={<Suggestion />}></Route>
                </Route>
                
                <Route exact path='/insight' >
                    <Route  path='biz' element={<BizPick />}></Route>
                    <Route  path='tech' element={<TechPick />}></Route>
                    <Route  path='contest' element={<Contest />}></Route>
                </Route>
                
                <Route exact path='/contact'>
                    <Route exact path='member' element={<Member />}></Route>
                    <Route exact path='question' element={<StartupArchive />}></Route>
                </Route>

                <Route exact path='/council/main' element={<CouncilMain />}> </Route>
                <Route exact path='/council/test' element={<CouncilTest />}></Route>
                <Route exact path='/council' element={<CouncilIntro />}> </Route>


                <Route path="/*" element={<ErrorPage />} />

            </Routes>

            <Footer />
        </>
    );


}

export default Public;
