# Kakao Javascript SDK Meteor wrapper
Kakao Javascript SDK입니다.
## How to install / 설치 방법
```
meteor add zerocho:kakao-javascript
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
Automatically load and init kakao javascript api
```js
if (Meteor.isClient) {
  Meteor.startup(function() {
    Kakao.load('<YOUR API KEY>');
    // can leave out key if its in settings / Meteor.settings에 키가 있으면 키를 넣을 필요가 없습니다.
  });
}
```

```js
Kakao.loaded() // true or false
```
## SDK Document
[Kakao Javascript Guide DOC](https://developers.kakao.com/docs/js)