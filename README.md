# innohi-front-end-react

## [개발스택]

|라이브러리|적용기술|날짜|작성자|버전|비고|
|---|---|------|---|---|-----|
||20211220|권인혁|2.5.0||
||20211220|권인혁|2.5+||
||20211220|권인혁|1.18.20||
||20211227|권인혁|2.9.2||
||20211227|권인혁|2.9.2||
||20220103|권인혁|4.13||
||20220104|권인혁|||
||20220104|권인혁|||

## [API Documents]

## [코드실행]

### 1. npm start 
개발 모드에서 앱을 실행합니다. 
브라우저에서 보려면 http://localhost:3000 을
엽니다 .
수정하면 페이지가 새로고침됩니다.
또한 콘솔에 린트 오류가 표시됩니다.
```
$ cd <프로젝트 디렉터리>/innohi_front-end
$ npm start
```

### 2. npm test 
대화형 감시 모드에서 테스트 실행기를 시작합니다.
자세한 내용은 [테스트 실행](https://create-react-app.dev/docs/running-tests/)에 대한 섹션 을 참조하세요.
```
$ cd <프로젝트 디렉터리>/innohi_front-end
$ npm test
```

### 3. npm run build
build폴더 에 프로덕션용 앱을 빌드 합니다.
프로덕션 모드에서 React를 올바르게 번들하고 최상의 성능을 위해 빌드를 최적화합니다.

빌드가 축소되고 파일 이름에 해시가 포함됩니다.
앱을 배포할 준비가 되었습니다!

자세한 내용은 [배포](https://create-react-app.dev/docs/deployment/)에 대한 섹션 을 참조하세요.
```
$ cd <프로젝트 디렉터리>/innohi_front-end
$ npm run build
-- 실행
$ serve -s build
```

## [배포 및 운영]

### 1. 설정 파일

### 2. AWS Amplify 배포


## [기타]

### 1. git 설정
```
$ cd 폴더
$ git init
$ git remote add origin https://github.com/inhyeeeok/innohi_frontend-react.git
```

### 2. 라이브러리 load
```
npm install react-router-dom --save

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
```

## [Amazon Cognito]
