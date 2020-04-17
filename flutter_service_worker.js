'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "b07308657ed529ea286eb82670c4ffed",
"assets/FontManifest.json": "f7161631e25fbd47f3180eae84053a51",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/lib/assets/stmt.png": "cc129151e67c3142d027d78e4ff449bb",
"assets/lib/assets/ticmedblue.png": "2bb874765d7f3702f0c5716067f931a9",
"assets/lib/assets/ticmedjaune.png": "cb32cab5ef968c441dcdbfa7141566d1",
"assets/LICENSE": "dac24b5b617bc3a68de482ec5c9cc584",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"cov1.zip": "a5c3cb5fdf5f84920d93d57658d4c7f0",
"cov2.zip": "71dd3e3bdd4e544b8121dff8db6123bb",
"cov3.zip": "eb34330a25caec587356a41e785038d3",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "ea5dfe0fc9ac75fac59eaa311948903c",
"/": "ea5dfe0fc9ac75fac59eaa311948903c",
"main.dart.js": "dbc73a30f0917647a60425b473089391",
"manifest.json": "e7a548a01ce3b9ccf203e5aa640df65f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
