const awsmobile =  {
    "aws_project_region": "ap-northeast-2",
    // "aws_cognito_identity_pool_id": "ap-northeast-2:03b5526e-b84d-40d7-8d97-0d1a0e21b699",
    "aws_cognito_region": "ap-northeast-2",
    "aws_user_pools_id": "ap-northeast-2_ziFrj5PMJ",
    "aws_user_pools_web_client_id": "1u1hslb0jutnh5g6d1o904bkib",
    "oauth":{
        "domain":"innohi.auth.ap-northeast-2.amazoncognito.com",
        "scope" : [
            "phone",
            "email",
            "openid",
            "aws.cognito.signin.user.admin"
        ],
        "redirectSignIn": process.env.REACT_APP_REDIRECT_SIGN_IN,
        "redirectSignOut" : process.env.REACT_APP_REDIRECT_SIGN_OUT,
        "responseType" : "code"
    },
    "federationTarget" : "COGNITO_USER_POOLS",
    "aws_appsync_graphqlEndpoint": "https://nkkzctvdzfg45ds3jcxfh55wte.appsync-api.ap-northeast-2.amazonaws.com/graphql",
    "aws_appsync_region": "ap-northeast-2",
    "aws_appsync_authenticationType": "API_KEY",
    "aws_appsync_apiKey": "da2-tcvyntmjjvaqpfcxps5onm7bkq",
};

export default awsmobile;