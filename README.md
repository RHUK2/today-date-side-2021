# 프로젝트 소개

<br>
<center>
<img src="https://user-images.githubusercontent.com/75672249/128997070-d3020bc6-ee46-4fb3-a9c5-5f2ad349eeb9.png" width="300px" />
</center>
<br>

클라이언트와 서버를 구분하여 비동기 통신을 통해 CRUD 기능이 구현된 SPA 웹 페이지를 제작해보려는 목표를 가지고 개발하였습니다. 오늘의 데이트 웹 사이트는 데이트 장소를 고민하는 커플들을 위해 자신이 경험한 데이트 장소를 공유하여 고민을 덜기 위한 사이트입니다.

## 사용 기술 스택

- 언어

  ![html5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![css3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![js](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

- 클라이언트

  ![react](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
  ![styled-component](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

- 서버

  ![nodejs](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
  ![express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

- 데이터베이스

  ![mongodb](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)

- 파일 업로드

  ![aws](https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white)

- 배포 환경

  ![heroku](https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white)

## 프로젝트 기능

### 회원가입 / 로그인

![오늘의데이트_로그인_회원가입](https://user-images.githubusercontent.com/75672249/129146366-8f84cefc-bb87-4ecd-ab51-3cefd1e8df76.gif)

- passport.js를 이용한 쿠키/세션 로그인
- 입력 정보를 받아 crypto를 이용해 비밀번호 암호화
- 별명 존재 여부 및 비밀번호 일치 확인

### 포스트 업로드 / 읽기

![오늘의데이트_CR](https://user-images.githubusercontent.com/75672249/129146361-8196e146-fe4c-46ce-a631-5a6d43d7b779.gif)

- 이미지 미리보기
- react-slick을 이용한 이미지 슬라이드
- multerS3 미들웨어를 이용하여 AWS S3에 파일 업로드
- axios를 이용해 POST 통신을 통한 포스트 업로드
- axios를 이용해 GET 통신을 통한 포스트 읽기

### 포스트 수정 및 삭제

![오늘의데이트_UD](https://user-images.githubusercontent.com/75672249/129146363-2f3ebf2b-9f8f-4077-9531-d11ca38dcdc1.gif)

- axios를 이용해 PUT 통신을 통한 포스트 수정
- axios를 이용해 DELETE 통신을 통한 포스트 삭제

![오늘의데이트__페이징_정렬](https://user-images.githubusercontent.com/75672249/129146355-efbdb3df-fe23-4bef-84b1-c367c7fd58bf.gif)

- react-paginate를 이용한 페이징
- 위치 옵션에 따른 GET 통신으로 데이터 불러오기

![오늘의데이트_마이페이지_검색](https://user-images.githubusercontent.com/75672249/129146367-11fc0d56-2527-435f-aca9-e5f40d415e65.gif)

- 사용자가 작성한 글을 마이페이지에 표시
- 사용자가 입력한 값을 쿼리 데이터로 넘겨받아 GET 통신으로 데이터 불러오기
