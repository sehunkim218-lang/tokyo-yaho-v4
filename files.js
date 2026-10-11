/* 폰에 저장할 파일 목록. 파일을 추가하거나 이름을 바꾸면 여기도 고치고 VERSION 숫자를 올려요. */
self.APP_VERSION = 'v4';
self.APP_CACHE = 'tokyo-yaho-' + self.APP_VERSION;
self.APP_FILES = [
  './', 'index.html', 'style.css', 'app.js', 'files.js', 'manifest.webmanifest',
  'fonts/YahoSans-Variable.woff2',
  'lib/leaflet/leaflet.js', 'lib/leaflet/leaflet.css',
  'data/map/tokyo.json',
  'data/map/narita.json',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/apple-touch-icon.png',
  'data/trip.json', 'data/schedule.json', 'data/places.json', 'data/notices.json',
  'data/contacts.json', 'data/phrases.json', 'data/etiquette.json', 'data/emergency.json',
  'data/lost.json', 'data/checklist.json', 'data/missions.json', 'data/quiz.json'
  /* 장소 사진이나 지도 이미지를 넣으면 여기에 경로를 더해요. 예: 'img/sensoji.jpg' */
];
