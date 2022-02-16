import React, { useEffect } from 'react';
import { Auth } from "aws-amplify";
import { useLocation } from 'react-router-dom';


const CouncilTest = () => {

  const param = useLocation();

    const login = async () => {
        try {
            await Auth.signIn('권인혁', 'innoHI1!');
            alert("Logged in");
          } catch (e) {
            alert(e.message);
          }
    }

    const loginOut = async () => {
        try {
            await Auth.signOut('권인혁', 'innoHI1!');
            alert("Logged Out");
          } catch (e) {
            alert(e.message);
          }
    }

  useEffect(() => {
    console.log(param.state)
  })

    return (
        <>
                <button onClick={login}>login</button>
                <button onClick={loginOut}>loginOut</button>
        </>
       
    );

}

export default CouncilTest;
