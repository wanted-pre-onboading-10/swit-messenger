# Swit 메신저
## 과제 정보
로그인 페이지에서 받아 온 정보를 redux-persist를 통해 세션스토리지에 저장하고, 리덕스 툴킷을 사용하여 구현한 다양한 채팅 기능(메시지 전송, 삭제, 답장 등)을 제공합니다. 추가로 화면 좌측에는 유저들의 상태를 제공하는 페이지를 제작했습니다.
## 배포
배포 링크: [https://youthful-almeida-e80ef9.netlify.app/](https://youthful-almeida-e80ef9.netlify.app/)
## 팀원
| 이욱창 | 김태희  | 문현돈 | 이경은 |
| :---- | :------ | ------ |  ----- |
| ![](https://user-images.githubusercontent.com/78027252/153702187-d9d6a705-9b36-4bc7-a178-7a0657893b4d.png)       | ![](https://user-images.githubusercontent.com/78027252/153702225-f9c8fb23-b7af-454d-9c97-4b7119a06214.png) | ![](https://user-images.githubusercontent.com/78027252/153702229-2c97a545-a682-4867-b78e-5028c7774201.png) |  ![](https://user-images.githubusercontent.com/78027252/153702159-776cb78e-59ca-4c0a-bab5-742f5998d4e0.png)
| [@wook95](https://github.com/wook95)      | [@tae100k](https://github.com/tae100k) | [@hyundonny](https://github.com/hyundonny)| [@2kyung19](https://github.com/2kyung19)|
## 요구 사항 및 추가 구현사항
### 채팅 메시지 관리
- 메시지 전송
    - 엔터키로 전송할 수 있고, 입력시 전송버튼은 즉시 활성화.
    - 컨텐츠를 입력하지 않으면 전송 불가.
    - 입력란은 멀티라인으로 입력하고 메시지에서의 출력도 그대로 출력.
- 메시지 삭제
    - 삭제 버튼을 클릭하면 "*** 메시지를 삭제하시겠습니까?" 라는 메시지가 출력되며 응답시 삭제.
    - ***은 메시지 내용중 최대 10자 까지 보여주며 뒤에는 ... 처리.
- 메시지 답장
    - 답장을 클릭하면 "사용자 이름\n" + "메시지 내용\n" + "(회신)\n" 문자가 입력창에 자동으로 삽입되록 구현.
    - \n 개행, 입력창에 내용이 존재할때는 입력된 내용 앞에 입력.
- 메시지 정렬
    - 메시지의 정렬은 과거 부터 최신 순으로 정렬.
    - 대화목록은 미리 생성된 데이터로 3명이 5건의 메시지를 주고 받는 내용이 출력
    - 날짜의 경우 yyyy-mm-dd hh:MM:ss 포멧으로 출력, 내가 전송한 메시지의 경우 이름 옆에 * 문자 출력.
### 레이아웃
- 대화 목록
    - 대화목록은 상단에 위치하며, 입력창은 하단
    - 입력창과는 별도로 대화목록만 스크롤
- 입력창
    - 왼쪽에는 입력란, 오른쪽에는 보내기 버튼
- 메시지
    - 왼쪽에는 프로필 이미지, 오른쪽에는 이름과 보낸 날짜, 하단에는 보낸 메시지의 내용이 출력, 메시지의 가장 오른쪽에는 삭제 버튼과 답장 버튼.
- (추가 구현) 좌측 메뉴
    - 사이드바 상단에는 현재 로그인 되어있는 유저의 정보를 표시
    - 메시지 / 연락처 두 개의 탭을 나눠 각 탭 별로 토글 버튼 구현
    - 메시지 탭에는 채팅방 목록과 public channel 목록 구현
    - 연락처 탭에는 연락처 리스트와 연락처 검색 가능한 input 구현
    - 사이드바 하단에는 로그아웃 버튼 구현
### (추가 구현)리덕스 사용
- `리덕스 툴킷`으로 로그인, 메시지, 모듈의 데이터 모델을 관리.
    - 로그인 데이터 모델: login, logout, editUserName, changeChattingStatue
    - 메시지의 데이터 모델 id, userId, userName, profileImage, content, date
- `커스텀 훅`을 통해 컴포넌트와 전역 상태 관리 코드를 분리시켜 유지보수가 용이하게 하고, 중복을 줄임과 동시에 사용하기 편리하도록 만들었습니다.
- 가능하면 테스트 코드를 작성해, 다른 팀원들이 봐도 금방 사용법을 알 수 있도록 만들었습니다.
### (추가구현) 로그인
기능 명세에 적혀있진 않았지만, 채팅 앱에 관한 팀원들과의 회의 결과 간단한 로그인 페이지를 만들기로 결정.
- 로그인 기능
    - form 태그를 이용해 `enter` key 입력으로 로그인
    - maxLegnth 어트리뷰트를 통해 너무 긴 이름을 막음.
- 이상 동작 감지
    - 이름을 정하지 않고 submit 버튼 누를시 따로 구현한 경고 모달 컴포넌트 표출. 모달창을 닫고 다시 로그인 화면으로 들어오면 로그인 input에 붉은 underline 생성
    - 이름을 정하지 않고 url을 통해 채팅방 접근시 모달창 출력과 강제 redirect
## 역할
### 김태희
- 이번 프로젝트하면서 작성한 블로그  : [[김태희 - Messanger Service]](https://www.notion.so/Swit-7245b5bb8cf341a08513b483f2676de4)
- (역할) 리덕스 툴킷을 사용하여, 메시지 추가, 메시지 삭제, 메시지 정렬 등의 기능을 구현하는 역할을 맡았다. (구현) messageSlice에 add, delete액션을 만들었고, 커스텀 훅 useMessage를 통해 useSelector를,  useMessageAction useDispatch를 할 수 있도록 구현하였다.
- (회고)  메시지를 추가하면, 채팅 내용 + 유저 정보 형태로 메시지 데이터 모델을 추가해야 했다. 그래서 유저 정보 리덕스를 구현한 팀원에게 질문하고 설명을 들으면서 해결하였고, 이 때 협업의 중요함을 느꼈다. 이를 바탕으로 본인이 작성한 리덕스를 채팅창 코드에서 사용할 때는 팀원분이 해당 리덕스를 잘 이해하고 사용할 수 있도록 줌을 통해  의사소통하는 시간을 가졌다.
### 문현돈
- 전반적인 스타일링 담당. 이번 과제는 디자인이 따로 주어지지 않았기 때문에, 과제를 시작하기 전 [dribbble](https://dribbble.com/search/shots/popular/web-design?q=messenger)에 올라온 다양한 메신저앱 디자인, 그리고 Skype, Telegram, Discord 등 인기 메신저 앱 디자인을 참고해 이번 프로젝트를 어떻게 구현할 지 정했다. 미디어 쿼리를 활용해 모바일 및 데스크탑 크기에 맞춰 반응형으로 사이드바 및 대화 목록, 메시지 입력창 구현했다.
- 이번 과제는 이전과 달리 비즈니스 로직보다는 오로지 디자인에만 집중했다. 특이하게도 텍스트로만 과제가 주어져 초반에 디자인을 정하는데 많은 시간을 할애했다. 그동안 코드에만 집중했었는데 이번 기회를 통해 데스크탑, 모바일 디자인을 직접 연구해보고 정해볼 수 있었다. 처음에는 대화 목록 기능이 만들어질 때까지 사이드바를 먼저 구현했는데, 대화 목록 컴포넌트와 사이드바 컴포넌트가 포지션상 겹칠 수 있다는 생각을 못한 채 그냥 만드는 실수를 범했다. 결국 대화 목록 컴포넌트까지 구현했을 때 모바일 화면에서 사이드바가 대화목록과 겹쳐버렸다. 여러 가지 방안을 강구해봤고, 최종적으로 택한 방법은 모바일 화면에서 사이드바가 닫혀있을 경우 position absolute를 활용해 화면 바깥으로 빼주는 것이다. 앞으로는 mock data를 활용하듯 mock component를 써서 위치를 임의로 잡는 연습을 해야할 것 같다.
### 이경은
### 이욱창
## 컨벤션 
| 항목      | 내용                       |
| :-------------- | :-------------------------------- |
| style 파일 이름  | styles.module.scss로 통일. (잘못된 예시 : component.module.scss) |
| css  |  classname은 하이픈 사용하여 작명,  classnames 패키지 작성 후, const = cx라는 변수이름으로 통일 |
| import  | Import 시 패키지,컴포넌트,기타 순으로 한줄 띄우기 |
| propTypes   |  위치 : 컴포넌트 위, 필수 여부 : javascript 사용시 해당 패키지 꼭 쓸 것 |
| 디렉토리명  |  하이픈 사용하여 작명, index.js로 통일 |


<details>
<summary>이유</summary>
<div markdown="1">

1. component.module.scss을 쓰는 팀원들이 있었는데, 현재 상황에서는 index.js라는 이름으로 
컴포넌트 이름을 정했으므로, index와 같이 styles로 가는것이 깔끔하다고 생각해 결정
2. 논의 결과 세계에서 많이 쓰는 컨벤션이라는 논리에 의해 결정
3. 팀원들과 논의 결과, 가장 많이 쓰는 방식으로 결정
4. 리액트 컴포넌트의 중요한 변수들이 위로 올라와야 한다는 의견과, 프롭스를 알아야 컴포넌트를 이해하기 쉽다는
의견으로 좁혀서 결정
5. 디렉토리는 케밥케이스, 컴포넌트명은 카멜케이스로 결정

</div>
</details>

## 사용 기술 및 스택
- Stack
    - `Redux Toolkit`
    - `React Hooks`
    - `scss-modules`
    - Deploy : `Netilfy`
    - Other : `Git / GitHub`
    - Build Tool (Create React App)
## 로컬 환경 구동
- 프로젝트 클론
  ```bash
  git clone https://github.com/wanted-pre-onboading-10/swit-messenger
  ```
- 프로젝트 디렉토리 들어가기
  ```bash
  cd swit-messenger
  ```
- 패키지 설치 및 프로젝트 시작
  ```bash
  npm install && npm run start
  ```
 
## 자료 구조
```
swit-messenger/src
│ 
├── App.js
├── assets
│   ├── icons
│   │   ├── BitcoinIcon.js
│   │   ├── ChatIcon.js
│   │   ├── ChatIconFill.js
│   │   ├── CheckIcon.js
│   │   ├── ChevronDownIcon.js
│   │   ├── CloseIcon.js
│   │   ├── ControllerIcon.js
│   │   ├── DeleteIcon.js
│   │   ├── EarbudsIcon.js
│   │   ├── MenuIcon.js
│   │   ├── PeopleIcon.js
│   │   ├── PlusIcon.js
│   │   ├── CheckIcon.js
│   │   ├── ReplyIcon.js
│   │   ├── SendIcon.js
│   │   ├── ThreeDotsIcon.js
│   │   ├── WarningIcon.js
│   │   └── switLogo.png
│   └── images
│       ├── member1.png
│       ├── member10.png
│       ├── member2.png
│       ├── member3.png
│       ├── member4.png
│       ├── member5.png
│       ├── member6.png
│       ├── member7.png
│       ├── member8.png
│       └── member9.png
├── components
│   ├── chat
│   │   ├── multiline-input
│   │   │   ├── index.js
│   │   │   └── styles.module.scss
│   │   ├── reply-tag
│   │   │   ├── index.js
│   │   │   └── styles.module.scss
│   │   ├── speech-bubble
│   │   │   ├── index.js
│   │   │   └── styles.module.scss
│   │   ├── index.js
│   │   └── styles.module.scss
│   ├── modal
│   │   ├── index.js
│   │   ├── portal.js 
│   │   └── style.module.css
│   └── sidebar
│       ├── contacts
│       │   ├── contacts-item
│       │   ├── contacts-menu-btn
│       │   ├── index.js
│       │   └── styles.module.scss
│       ├── dropdown
│       │   ├── index.js
│       │   └── styles.module.scss
│       ├── logout
│       │   ├── index.js
│       │   └── styles.module.scss
│       ├── profile
│       │   ├── index.js
│       │   └── styles.module.scss
│       ├── shared
│       │   ├── dropdown
│       │   └── data.js
│       ├── switch
│       │   ├── index.js
│       │   └── styles.module.scss
│       ├── toggle
│       │   ├── index.js
│       │   └── styles.module.scss
│       ├── index.js
│       └── styles.module.scss
├── constants
│   ├── conversation.js
│   ├── member.js
│   └── replyboundary.js
├── hooks
│   ├── useMessage.js
│   ├── useMessageAction.js
│   ├── useModal.js
│   ├── useModalAction.js
│   ├── useUser.js
│   └── useUserAction.js
├── index.js
├── pages
│   ├── chat
│   │   └── index.js
│   └── login
│       ├── index.js
│       └── login.module.scss
├── redux
│   ├── slices
│   │    ├── index.js
│   │    ├── message.js
│   │    ├── modal.js
│   │    ├── modal.spec.js
│   │    ├── user.js
│   │    └── user.spec.js
│   └── store.js
├── styles
│   ├── _reset.scss
│   └── variable.scss
└── utils
    ├── checkblank.js
    ├── getSortedData.js
    ├── newline.js
    └── textLenOverCut.js
```
