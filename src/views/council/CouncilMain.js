import React, { useEffect } from 'react';
import { Amplify, I18n  } from 'aws-amplify';
import { withAuthenticator} from "@aws-amplify/ui-react";
// import { ConfirmSignIn, ConfirmSignUp, ForgotPassword, RequireNewPassword, SignIn, SignUp, VerifyContact } from 'aws-amplify-react';
import '@aws-amplify/ui-react/styles.css';

import * as council from './CouncilMainElements'
import * as tt from './CouncilCommon'
import SwiperComponents from '../../components/swipers/Swiper';

Amplify.configure(
    {
        Auth: {
            region: "ap-northeast-2",
            userPoolId: "ap-northeast-2_ziFrj5PMJ",
            userPoolWebClientId: "1u1hslb0jutnh5g6d1o904bkib"
        }
    }
);

// I18n.putVocabularies(translations);
I18n.setLanguage('kr');
I18n.putVocabulariesForLanguage('en', {
  'Sign In': 'Login', // Tab header
  'Sign in': 'Log in', // Button label
  'Sign in to your account': 'Welcome Back!',
  Username: 'Enter your username', // Username label
  Password: 'Enter your password', // Password label
  'Forgot your password?': 'Reset Password',
});

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

// class MySignIn extends SignUp {
//   render() {
//     <div>ttttt</div>

//   }
// }

const CouncilMain = ({ isPassedToWithAuthenticator, signOut, user }) => {
  console.log(isPassedToWithAuthenticator)

  console.log(signOut);
  console.log(user);

   tt.headerGrid();

  useEffect(() => {
    SwiperComponents();
    tt.eventLogOut(signOut);
    tt.changeName(user.username);
})

    return (
      <>
        {council.heroElements}
        {council.CouncilMainElements}
        {council.clientsElements}
      </>
    )

    
  }
  
  export default  withAuthenticator(CouncilMain, {
    socialProviders: ['google'],
    hideSignUp : [true],
 //   loginMechanisms : ['username'],
    loginMechanisms : ['email'],
  //  components : [components],
    variation : ["modal"]
  }, [
 //  <MySignIn /> 
  ]);
