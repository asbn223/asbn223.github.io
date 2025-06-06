'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "8ecdc16f483e82276364506044355c90",
"version.json": "1eb8f12352611db6b3dd704792ab4fed",
"splash/img/light-background.png": "758bb6afcab1b4e2eb6a8ae801819302",
"index.html": "ab8954841c075653de6ce74a0a7c2dcd",
"/": "ab8954841c075653de6ce74a0a7c2dcd",
"firebase-messaging-sw.js": "41062c5a0aa18b8f3201b2eb0add801e",
"main.dart.js": "895ed820e5fbd9946072e019d1bb9018",
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
"manifest.json": "c4802b9e200569ff9b08f5293916a9ed",
"nginx.conf": "6f55925c072518728e44ca586dcaa122",
".git/config": "868827e711c48fddb7d5410fd336d5ad",
".git/objects/95/b8b41ac845b9d531d3cf19700573dfa3a66a33": "7def5aa96aaeb4c6646a81ffb23373aa",
".git/objects/0e/f0df4709b63626bf02df26febc98b9ae7e8df8": "c33482aff57e1aeeb28a2542f44466d3",
".git/objects/f4/d95fbf8ddf92996123e02464f36fb5332aa61f": "bbcb19644f272012776c827ccdebc7e3",
".git/objects/f2/a42bc1b1b4f7b8972dfd1aa68b6bf085e82b6e": "ab28d960584aa725d93da302a9993ac0",
".git/objects/e4/b3bb2d296222d6a5ae72a97ebf1b8c73bbf7ff": "7d099682aa2a544f23c35e6e35f94141",
".git/objects/pack/pack-f9ef1d660d7d9ac4e64e00c7252653ffc46d6d8d.idx": "c0bdfafda845ebe9cd9c24044b12e026",
".git/objects/pack/pack-f9ef1d660d7d9ac4e64e00c7252653ffc46d6d8d.pack": "29a24ba62e6a8da0b03a30010329ba28",
".git/objects/pack/pack-f9ef1d660d7d9ac4e64e00c7252653ffc46d6d8d.rev": "f73694bd4a65f25b7d0115a8354d7c86",
".git/objects/16/9cdac8f8c3de824857e8cbd1e47461851ede23": "f15c4b937d4a12da626ef18c080f736f",
".git/objects/45/44b0e5c2465a606a620ceb8bb2d37421ef9998": "3f84cde35acc44dc57c6acfb6744cb51",
".git/objects/4c/a86eeb9b32837dcb93e7214330f99508569d1d": "903f7f39c9df8eec96a73f5966def4cc",
".git/objects/88/338108b0a4c20db64c5631249234f13f2af35f": "5e261cd7582a16667e0eea28307b0ad2",
".git/objects/55/e7887b02490bd380f4aff20c393c32f1b8228c": "c416a558b5b6531fd032636b05cc1e11",
".git/objects/de/93135099d6062c782104d1883869683b723dff": "4b924652ab89f4b40c82346d2ea2f9ef",
".git/objects/e8/237ba17bace4b6173e1dca9376055ef5531a90": "2ac268de12ed9735575f1344c792ea01",
".git/objects/79/71d3217482a5520eea2fa77c4273c90d59380d": "5b7d7f7ecca5f82b4e29683741952b61",
".git/objects/47/8c836902a3bb674bfb7818a1560fbbfd189430": "56796071f8a62204c8ffafe19ccf9e36",
".git/objects/8b/34d3334cb8a6d74f4723b6c7c195221ebddcc1": "53e6e6ddeaf78a6bfb914bf28f7078c4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4d6ec5b4b2dd75075966928f92340089",
".git/logs/refs/heads/main": "4d6ec5b4b2dd75075966928f92340089",
".git/logs/refs/remotes/origin/main": "8f1487845a6f46ef1fc19ae05840a2da",
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
".git/refs/heads/main": "5d793ce21a6bab654fa924ac73a9a45d",
".git/refs/remotes/origin/main": "5d793ce21a6bab654fa924ac73a9a45d",
".git/index": "addd74059998305a648332c4d47ebd6b",
".git/COMMIT_EDITMSG": "7e129dfc1c511ec667a5c18ace8b999a",
".git/FETCH_HEAD": "37b0abb1e79d802de40d7936be7ea2dc",
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
