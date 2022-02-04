import React, { useEffect } from 'react';
import { Amplify } from 'aws-amplify';
import { withAuthenticator , Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';

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

function App({ signOut, user }) {
    return (
      <>
        <h1>Hello {user.username}</h1>
        <button onClick={signOut}>Sign out</button>
        <a href='/council/test'><div>테스트 이동</div></a>
      </>
    );
  }
  
  export default withAuthenticator(App);
