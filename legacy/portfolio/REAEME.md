# 페이지 마크업

#### [두나무 회사 홈페이지](https://www.dunamu.com/home)

- 반응형
- 모든 애니매이션 jquery#1.12.4 버전대만 사용
- ie8++ ( 다만 ie8은 미디어 쿼리 지원하지 않으므로 

#### [투자자문 페이지](https://dunamuinvest.com/)

- 반응형


#### 카카오스탁 앱 내에 자문통 & 자문가이드 서비스

- 회사 내부 사정으로 인해 페이지는 다 만들었으나 프로젝트 무기한 연기...

#### 카카오스탁 앱>종목진단 결제하기, 급등7시 & 샀다 외국인 페이지

## 업비트

- 앱뷰 ( 업비트 앱 > 코인정보 탭 )
- [업비트 모바일 메인 페이지](https://upbit.com/) (모바일로 들어가야 합니다.)


## daum

mobile/

- [실시간 호가 버튼](http://m.finance.daum.net/)
- [카증 앱으로 주문하기 list](http://m.finance.daum.net/)
- [환율, 금융 gnb](http://m.finance.daum.net/)

pc/

- 카카오스톡 이벤트 설치 팝업 (이벤트가 끝나서 페이지 닫았습니다.)
- [daum 메인페이지 에서 로그인 시 나오는 3개의 탭증 `증권`탭을 눌렀을떄 나오는 하단 목록](https://www.daum.net/)

## 그 외 각종 자잘한 팝업들

성능, 용량의 이점을 위해 통이미지 사용 자제

1. 카카오스탁앱 > 2017새해 서비스 안내
2. 카카오스탁앱 > 삼성증권 계좌개설 안내
3. 카카오스탁앱 > kb증권 통합안내
4. 카카오스탁앱 > 거래용 앱 유도 팝업
5. 카카오스탁앱 > 정기구독 해지 안내
6. 카카오스탁앱 > 종목추천 서비스 오픈 이벤트
7. [카카오스탁 웹](http://stock.kakao.com/m) 팝업 배너 2개
8. 두나무 주식회사 개인정보 처리방침 frame (구조) 제작

---

# 기능부분 개발

### [모바일 페이지 팝업 배너](http://stock.kakao.com/m, http://m.finance.daum.net/)
모바일 페이지에서 특정 주식 아이템(Ex: 삼성전자)으로 갈경우 하단에 카카오스탁 설치 팝업 띄우는 script

```
- domVariable 설명 => 웹의 특성상 도메인이 다른경우 cors오류가 발생하는데 이를 jsonp방식을 이용해 직접 구상해본 domVariable(html 파일의 변수화)를 통해 html파일을 같은 이름으로 .json으로 새로 만든 뒤 string 형식으로 domVariable이라는 parameter에 집어넣으면 그 html의 dom구조를 읽어와서 이식해줌
- jquery등의 프레임 워크 없이 javscript로 제작해서 성능이 뛰어납니다 (cors 오류 발생시 => 40ms이내, cors오류 발생 X => 10ms 이내), 또한 프레임워크를 사용하지 않으면서 ie9이상을 지원하게 해놨습니다.
- 앱 다운로드 link, 닫기버튼 눌렀을시 몇일동안 해당 배너를 보여주지 않을지 설정 가능, google analytics 이식 가능, jsonp 방식으로만 같은 파일을 만들면 cors오류 피해갈수 있음
- closer를 이용한 전역변수 접근 X

# 실행 순서
1. 설정해놓은 url을 iframe으로 가져온뒤 cors 오류가 발생하는지 판단합니다.

if 오류 발생
  +2. 같은 경로의 해당 html 파일 이름으로 .json 파일을 불러오도록 시도합니다. [jsonp 방식에서 따온 방법] ( Ex: ./html/page.html => ./html/page.json )
  +3. .json으로 불러오는게 성공할 경우 해당 파일의 parameter로 설정된 domVariable을 가져온뒤 해당 파일의 상대경로를 절대경로로 변경합니다.

2. bt엔 `dnm-link` 라는 item을, 닫기 버튼엔 `dnm-close` 라는 id를 설정하면 해당 엘리먼트에 이벤트가 적용됩니다.

( +additional. ga 라는 이름의 함수가 있을경우 google analytics를 적용합니다. [카테고리 이름 설정 가능] )
```

### [업비트 모바일 메인 페이지](https://upbit.com/) (모바일로 들어가야 합니다.)

  - 모든 animation 자체 개발 => ie9++이상 지원 다만 애니매이션은 css의 transition을 이용(javascript로 만드는 애니매이션은 너무 무거움)

### 그 외에 간단한 슬라이더, toggle 이벤트 등은 전부 vanila js 로 자체 개발

---

## 작업 환경

1. git (gitlab)
2. nas synology
3. jira
4. node.js, gulp
5. virtual tester => xcode, genymotion, virtualBoxVm
