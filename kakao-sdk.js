///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/zerocho:kakao-sdk/kakao-sdk.js                           //
//                                                                   //
///////////////////////////////////////////////////////////////////////
Kakao = {
  load: _.once(function (key) {
    if (!key && Meteor.settings && Meteor.settings.public && Meteor.settings.public.kakao && Meteor.settings.public.kakao.key) {
      key = Meteor.settings.public.kakao.key;
    } else {
      if(console === undefined) {
        return console.log("kakao-javascript - tried to load but key not supplied");
      }
    }
    var script = document.createElement('script');
    var self = this;
    script.type = 'text/javascript';
    script.src = '//developers.kakao.com/sdk/js/kakao.min.js';
    script.addEventListener('load', function () {
      self._init();
      if (typeof self.init === 'function') {
        self.init.call(self, key);
      }
    }, false);
    document.getElementsByTagName('head')[0].appendChild(script);
    return key;
  }),
  _loaded: new ReactiveVar(false),
  loaded: function () {
    return this._loaded.get();
  },
  _init: function () {
    this._loaded.set(true);
  }
};