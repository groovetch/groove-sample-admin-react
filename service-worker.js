"use strict";var precacheConfig=[["/index.html","1d6a4912efaf0974fc21eb60f1e876be"],["/static/js/0.476c9538.chunk.js","0ba5e1aa9e4016ba3cb2749f330d4697"],["/static/js/1.a87dbfe9.chunk.js","525037d162be2c7b6183be2bf63350cf"],["/static/js/2.5ad0b864.chunk.js","17e74cb85efbb0d02853f59534a4baf4"],["/static/js/4.f7a204d7.chunk.js","a20dfc7eeae335cb82f57e98cda6fd89"],["/static/js/5.2fb50033.chunk.js","0a88537414356d7ec7064b32dbbc5258"],["/static/js/6.781d6cf6.chunk.js","8f08bad1933ea2d28555ccb2c97f29a5"],["/static/js/main.ab0001c6.js","0a4df3b25e79eb152715e78467f25308"],["/static/media/Linearicons-Free.03e91f12.woff2","03e91f122aa5fd425abbe23c85546eb0"],["/static/media/Linearicons-Free.2f3e9f80.ttf","2f3e9f80fff7d699dd3de6904d7d1647"],["/static/media/Linearicons-Free.65060723.woff","65060723fe964f85afa0a82d0bb78cf9"],["/static/media/Linearicons-Free.71ad32ce.svg","71ad32ce1ab07350277dfcf1f7a503a5"],["/static/media/Linearicons-Free.b9b7f23c.eot","b9b7f23cb61b1f503e1249b63d980448"],["/static/media/Pe-icon-7-stroke.01798bc1.ttf","01798bc13e33afc36a52f2826638d386"],["/static/media/Pe-icon-7-stroke.71394c0c.eot","71394c0c7ad6c1e7d5c77e8ac292fba5"],["/static/media/Pe-icon-7-stroke.b38ef310.woff","b38ef310874bdd008ac14ef3db939032"],["/static/media/Pe-icon-7-stroke.c45f7de0.svg","c45f7de008ab976a8e817e3c0e5095ca"],["/static/media/abstract1.74469765.jpg","744697657fa614add7943a9b16f1487e"],["/static/media/abstract1.e108c06f.jpg","e108c06fd5e5a60817cf7f585e88f184"],["/static/media/abstract10.15dbcbc9.jpg","15dbcbc92ed3e5cc0d486d98449e3a6b"],["/static/media/abstract2.277c3c2e.jpg","277c3c2e889ea72e77ce563f124eb584"],["/static/media/abstract3.2462ce56.jpg","2462ce56f689f50ec23f1842b43698c4"],["/static/media/abstract4.b8ef214f.jpg","b8ef214f5c715371c2e575483804f12a"],["/static/media/abstract5.47b02d2c.jpg","47b02d2c4d1e42d0cac93c0d323b0e94"],["/static/media/abstract6.329bba4a.jpg","329bba4a1c4113c3707f59f3f76e635b"],["/static/media/abstract7.dba374f1.jpg","dba374f193cb519062dff7fc65babb25"],["/static/media/abstract8.6651e71f.jpg","6651e71fa9915bfc01adbe667eb2bb97"],["/static/media/abstract9.fbf8d4ee.jpg","fbf8d4ee4f2fe5c4e31c88afb65c9682"],["/static/media/city1.ebc5562d.jpg","ebc5562d1cffc3bdb49fb28166eccda7"],["/static/media/city2.b44931fe.jpg","b44931fe45e3a9107a41ace44080992b"],["/static/media/city3.d50a28d0.jpg","d50a28d0e346721067a1b73796472d92"],["/static/media/city4.126ace39.jpg","126ace3903af0c90ec8531126054987a"],["/static/media/city5.77f23573.jpg","77f235733dc4450e2ff44e3136b89492"],["/static/media/groove-fulllogo-color.0e48934a.png","0e48934ae69db92c1d31e6a3ce9b0190"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],c=new URL(t,self.location),n=createCacheKey(c,hashParamName,a,/\.\w{8}\./);return[c.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var c=new Request(a,{credentials:"same-origin"});return fetch(c).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});