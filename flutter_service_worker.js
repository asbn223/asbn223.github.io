'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "96ea0b109bcfd8a44a2b62dbdb743027",
"version.json": "d9e2faae2616b60430ba4b5a2887b08d",
"splash/img/light-background.png": "758bb6afcab1b4e2eb6a8ae801819302",
"index.html": "b1587c2e3c1800a62f9c86414c232709",
"/": "b1587c2e3c1800a62f9c86414c232709",
"firebase-messaging-sw.js": "41062c5a0aa18b8f3201b2eb0add801e",
"main.dart.js": "77aa63eb557056f236ae70ec9a967d59",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "9a3d312a1fe16dff8061a8c82cb2738f",
"icons/favicon-16x16.png": "cc01931ef253eb2d3c8b9e491285a6e4",
"icons/favicon.ico": "3319c69f48687388248a5259c9c0a6e1",
"icons/apple-touch-icon.png": "911198977c2a9d7ae4e4adfb77ff8e1b",
"icons/apple-icon.png": "2b424cee30868e3b4dc79e1a3ef0f138",
"icons/apple-icon-144x144.png": "8ec03f106041599955546af96066f5a2",
"icons/android-icon-192x192.png": "60b6ac6fb5370908f6a17912c1332c29",
"icons/apple-icon-precomposed.png": "2b424cee30868e3b4dc79e1a3ef0f138",
"icons/apple-icon-114x114.png": "a1f619b8b7aa9bf64fb596f89ec08ffb",
"icons/Icon-192.png": "1e82f8dc3e4ac44e2b46827088a2618a",
"icons/Icon-maskable-192.png": "1e82f8dc3e4ac44e2b46827088a2618a",
"icons/apple-icon-57x57.png": "4f09a3076f5d5c6360df90aab82bcb10",
"icons/apple-icon-152x152.png": "22f70986a51e8f15ff4a2fe18f0419a3",
"icons/android-icon-72x72.png": "bbceb57590e77d582eb20cbcd14ee64d",
"icons/android-icon-96x96.png": "582f065c52e7971ad91d5bd353e6fc65",
"icons/android-icon-36x36.png": "0d38c2a2e78566699d80e271b0865b55",
"icons/apple-icon-180x180.png": "a75caab31babe245fdffcb16c18b06f2",
"icons/favicon-96x96.png": "61a706496d5225fb6383978548833535",
"icons/android-icon-48x48.png": "37c2bb527747dc089cb8e1a370d5443a",
"icons/apple-icon-76x76.png": "899aea91af4bcb78e55bd61564288efa",
"icons/apple-icon-60x60.png": "9e89fd9fa0f8f6d4faa9eb6b9855ad6e",
"icons/Icon-maskable-512.png": "f05ce25da6e4b673a131580d51295f24",
"icons/android-icon-144x144.png": "6c62c4e3dbdc1c17c09abc65880ba93a",
"icons/apple-icon-72x72.png": "046374bb3ac458d7f3c0e3ac89331e20",
"icons/apple-icon-120x120.png": "d81788cd55d4d2ab1a37f545162d9f85",
"icons/Icon-512.png": "f05ce25da6e4b673a131580d51295f24",
"icons/favicon-32x32.png": "9483526573b3641b326a0b75a2ac8495",
"manifest.json": "8dd2cd032d244c1c80051732abecb1cf",
".git/config": "59426fa31e148402e6603e0f66414f7e",
".git/objects/pack/pack-9b9c2d20b711a9602bae021a644a6c753755e0ec.pack": "cfce9b2c64a3ac0866b023428d776112",
".git/objects/pack/pack-9b9c2d20b711a9602bae021a644a6c753755e0ec.rev": "cf6a5d491d8aac9848de7a67697e2d9d",
".git/objects/pack/pack-9b9c2d20b711a9602bae021a644a6c753755e0ec.idx": "b6e4da9b4aa4484c1774e84b741d2619",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "38e80bcc4e294b0b84257740c2aeb05c",
".git/logs/refs/heads/main": "38e80bcc4e294b0b84257740c2aeb05c",
".git/logs/refs/remotes/origin/main": "1f14d922e6cb2ba2b0c3a398896ade9d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "dc9319712df96e4b8b7d80aaf6a89a3a",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "bff22a56cae99e478ac195d3729ac799",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "5677f6ef2580a82f5dcb6c8e0dcf5462",
".git/refs/remotes/origin/main": "5677f6ef2580a82f5dcb6c8e0dcf5462",
".git/index": "f24d96581c72b1c5dd6391aef6a3640c",
".git/FETCH_HEAD": "56bb255e639fc6a4d8e25711237ba562",
"assets/AssetManifest.json": "371e0b393fcc2d9cf47f95835b79641e",
"assets/NOTICES": "6759f6503bcfaf7cdc366ea5effe9ea2",
"assets/FontManifest.json": "64f18e8e66e422aadd18be9a70d63be8",
"assets/AssetManifest.bin.json": "6d73b296bcf907f9a45d6e3a8f47e959",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6284b833aee65a8f601935955df9f72d",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "a2023f2e6ebf4b9fc99a8371297f0265",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "29154d8260b60657e92db7e3f9003518",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "d8984bdaada3bfac387c9482c753047c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9bfbc26e9dd1055173eef2694b446b1f",
"assets/fonts/QuickSand-Bold.ttf": "e8dcee4bbf2288a2d264c76fa547f37a",
"assets/fonts/QuickSand-Medium.ttf": "fd7f304a26dd790aef9f1ae84403eab3",
"assets/fonts/QuickSand-Regular.ttf": "7194c41ffab51721bd84ca104553c4e1",
"assets/fonts/QuickSand-SemiBold.ttf": "025d26a905aa7e016827cdc2b429552f",
"assets/fonts/QuickSand-Light.ttf": "e60d43df6abf50de0980883f4596e268",
"assets/fonts/MaterialIcons-Regular.otf": "bdcafacb5f9bb5bbd3256fff6fce3f7e",
"assets/assets/svg/no_data_found.svg": "d5d6ecef814183325e52c8aa210d90b2",
"assets/assets/svg/something_went_wrong.svg": "dd3522c622db9d1f04725a178b767c7e",
"assets/assets/images/attendance_history.png": "c38e4937834ff5a834394f356a12146a",
"assets/assets/images/teams_details.png": "d9f9c35601e07df6f9c9dd30a2d737fd",
"assets/assets/images/app_icon.png": "e576b7ec52b2587cf9cafe3e4549d32b",
"assets/assets/images/payroll.png": "7035cb801cdef2de7dbd17f3ef100acb",
"assets/assets/images/company.png": "2a8877e090a1775a47169cf7ee283f22",
"assets/assets/images/splash_screen.png": "758bb6afcab1b4e2eb6a8ae801819302",
"assets/assets/images/app_logo.png": "b36ec6a27eb7d2a00704f3787cfdd89f",
"assets/assets/images/daily_log.png": "00704689001bb908787719add2c9ada3",
"assets/assets/web.env": "39b0e302942642ae0a2bfcbfe85bc720",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
