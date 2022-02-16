import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator , Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import { Link } from "react-router-dom";
import CouncilTest from './CouncilTest';
import * as council from './CouncilMainElements'
import SwiperComponents from '../../components/swipers/Swiper';

Amplify.configure(
    {
        Auth: {
            region: "ap-northeast-2",
            userPoolId: "ap-northeast-2_DiyOO1TSM",
            userPoolWebClientId: "6j47c2j501afo5eqrs7lc4pmi3"
        }
    }
);


// const CouncilMain = () => {


//     useEffect(() => {

//     })

//     return (
//         <Authenticator>
//             {({ signOut, user }) => (
//                 <div className="App">
//                     <p>
//                         Hey {user.username}, welcome to my channel, with auth!
//                     </p>
//                     <button onClick={signOut}>Sign out</button>
//                     <a href='/council/test'><div>테스트 이동</div></a>
//                 </div>
//             )}
//         </Authenticator>
//     );

// }

// export default CouncilMain;

function CouncilMain({ signOut, user }) {

  console.log(signOut);
  console.log(user);

  useEffect(() => {
    SwiperComponents();

})

    return (
      <>
      {council.heroElements}
      {council.CouncilMainElements}
      {council.clientsElements}
        <p>{user.username} 님 환영합니다</p>
        <button onClick={signOut}>Sign out</button>

        {/* <Link to='/council/test' state={{ user: user.username}}><button>Test2</button></Link>
        <a href={'/council/test'}>상세보기</a> */}
      </>
    );
  }
  
  export default withAuthenticator(CouncilMain);
