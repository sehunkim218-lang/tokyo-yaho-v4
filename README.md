# 도쿄 야호 v4 — 2026 도쿄 수학여행 가이드북 (대전대신고 54회)

순수 HTML/CSS/JS로 만든 휴대폰 전용 PWA. 빌드 도구나 설치할 것 없음.

## 폴더
- `index.html` `style.css` `app.js` — 화면과 동작
- `data/*.json` — 내용. 화면은 이 파일을 읽어서 그리기만 함
- `data/examples/` — 채워진 화면을 미리 볼 때 쓰는 형식 예시 (주소 뒤에 `?data=examples`)
- `files.js` — 폰에 저장할 파일 목록과 버전
- `sw.js` — 오프라인 저장(서비스 워커)
- `manifest.webmanifest`, `icons/` — 홈 화면 설치용
- `fonts/` — Yaho Sans (Pretendard JP를 줄인 글꼴, OFL. fonts/README.md)
- `lib/leaflet/` — 지도 확대·축소 라이브러리 Leaflet (BSD-2)
- `data/map/tokyo.json`, `data/map/narita.json` — 오프라인 도쿄·나리타 지도 (© OpenStreetMap contributors, ODbL. data/map/README.md)
- `tools/` — 지도 파일을 다시 만드는 스크립트 (폰에는 저장 안 됨)

## 내 컴퓨터에서 실행
파일을 더블클릭하면 안 됨(데이터를 못 읽음). 폴더에서 터미널을 열고:

    python -m http.server 8000

브라우저에서 http://localhost:8000 을 열고, 개발자 도구(F12)의 휴대폰 보기로 확인.

## 휴대폰에 설치
오프라인 저장은 https 주소에서만 동작함. GitHub Pages 예시:
1. GitHub에 새 저장소를 만들고 이 폴더 안의 파일을 전부 올림
2. Settings → Pages → Branch를 main / (root)로 저장
3. 몇 분 뒤 나오는 https 주소를 폰으로 열고, 참여 코드 입력 → "오프라인 저장 완료" 확인
4. 아이폰: 사파리 공유 → 홈 화면에 추가 / 안드로이드: 크롬 메뉴 → 홈 화면에 추가

## 내용 채우기
- 학교 일정이 나오면 `data/`의 json만 고치면 됨. 비어 있으면 "들어올 자리" 화면이 나옴
- 값이 null이거나 글자에 `[확인 필요]`가 있으면 화면에 [확인 필요] 표시가 뜸
- 형식은 `data/examples/`의 파일을 참고
- 참여 코드를 정하면 `data/trip.json`의 `joinCode`에 넣음 (비워 두면 아무 코드나 통과)
- 장소를 지도에 찍으려면 `places.json`의 장소에 `"lat"`(위도), `"lng"`(경도)를 넣음. 숙소도 `trip.json`의 hotel에 lat/lng를 넣으면 지도에 붉은 표시가 생김
- 사진을 넣으면 `img/`에 두고 `files.js`의 목록에 경로를 추가
- 파일을 고친 뒤에는 `files.js`의 `APP_VERSION`을 올려야(v1 → v2) 폰이 새 내용을 받음
- 공지(`data/notices.json`)는 인터넷이 될 때 자동으로 새로 받음

## v4에서 바뀐 것
- 학교 '주요 일정' 표대로 일정 5일(집합일 10/19 ~ 4일차 10/23), 날마다 지역·식사
- 장소 8곳 상세: 한눈에 / 볼거리 / 먹을 곳 / 스포츠 용품 / 안전·규칙 탭, 일본어로 보여주기 화면, 출처 링크
- 홈 '오늘 카드' (출발 전 D-day와 할 일, 여행 중 오늘 가는 곳·주의), '최근에 바뀐 것' 모음
- 도움 → 공항·입출국 순서 화면
- 지도: 도쿄 | 나리타 두 장 (워너 브라더스까지 넓힘, 공항 활주로·터미널)
- 준비물·일본어(공항, 식당, 쇼핑·면세, 테마파크)·퀴즈·미션 채움
- 조사 기준일 2026-10-09. 시각·숙소·집합 장소·항공편은 [확인 필요]로 남김
