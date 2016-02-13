# Kakao Javascript SDK Meteor wrapper
Kakao Javascript SDK입니다.
## How to install / 설치 방법
```
meteor add zerocho:kakao-sdk
```
## Using Meteor.settings
```json
{
  "public": {
    "kakao": {
      "key": "<YOUR API KEY>"
    }
  }
}
```
## Document / 설명서
Automatically loads the script and initiates Kakao javascript SDK
자동으로 스크립트를 로드하고 Kakao.init()을 실행합니다.
```js
if (Meteor.isClient) {
  Meteor.startup(function() {
    Kakao.load('<YOUR API KEY>');
    // can leave out key if its in settings / Meteor.settings에 키가 있으면 키를 넣을 필요가 없습니다.
  });
}
```

Can find whether the script is loaded or not
스크립트가 로딩되었는지 아닌지 확인할 수 있습니다.
```js
Kakao.loaded() // true or false
```
## SDK Document
[Kakao Javascript Guide DOC](https://developers.kakao.com/docs/js)