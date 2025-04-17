'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b193bfb60b33c580d1aea4e49d42d797",
"version.json": "d9e2faae2616b60430ba4b5a2887b08d",
"index.html": "461765690111a5ea1b097a88507b1e65",
"/": "461765690111a5ea1b097a88507b1e65",
"firebase-messaging-sw.js": "41062c5a0aa18b8f3201b2eb0add801e",
"main.dart.js": "7a9284515662263604fe2a108e808907",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ff644230bd9f0e1b1ac483c51dc28050",
".git/config": "868827e711c48fddb7d5410fd336d5ad",
".git/objects/0d/60cf1e569380f1454aa63f0dd378efd5560759": "bb0cfb088feed1c8d9e8a91acc5a7a98",
".git/objects/66/0db72148a30850b87c54ebdee25fd94c29f845": "d76e70e6933d8f3606496576b1213aa0",
".git/objects/50/d6853914edfb58d86122a0f34b25a03749bf53": "9c541606e9ba1d9c9249dab410c182d6",
".git/objects/3d/cc6878baf4b751922fd939e2a92931feb25fd0": "f0034208005055e9965d120ffb5c7527",
".git/objects/33/0016c1889fea01a8ff153b9597eb6867ad4737": "99c80853c8b2fac101a8734cb0f8f3a7",
".git/objects/a3/d3437b56ad14333210d349ab5410d08d9aa71e": "0e4d5f2d650e0e85b407237be6c95725",
".git/objects/bb/ac60dc122e6905c4137b0e7328a408d1d6302a": "6ecbde53030ef195a710af7000a8274b",
".git/objects/d0/e686bcb18669f044f5c4e8ff76064b96305435": "bfe3d794f3cbb32413c1eea9d21ced23",
".git/objects/d6/41e143effea9f6616df2311eaf9a4dccc7c0d1": "7b6c7c00ac15117325f1ce7ffdf10bf4",
".git/objects/c0/071f49439491d72be8200526c121ba503ba6ac": "b12ddbee7ed636d970b5303e13ad6baa",
".git/objects/fe/1d2bd5628e2b9f0b09ae6e4cc22ad6e9fb86d4": "a6e28006f3c33502f84606c87808e9b9",
".git/objects/pack/pack-dce40d17db21d9a3198006d00262a331805b2d82.rev": "818243e38d705ab17a0673c296b11e68",
".git/objects/pack/pack-dce40d17db21d9a3198006d00262a331805b2d82.pack": "0dd87eb43f66a157cadab6aaa8a59351",
".git/objects/pack/pack-dce40d17db21d9a3198006d00262a331805b2d82.idx": "458333e64a698488b05b0709862e32a9",
".git/objects/80/a55f8e83327b8dd6bad8460b62c4870b839d45": "b4cdb00f8f7600b662e352576a1576c6",
".git/objects/17/690dae10cec8f06c7b0d0341c279d6263949e5": "313adf2f2c8ca589312fc328fb6ef338",
".git/objects/8a/35575c7412b429fe064216d9159426ddf10e1a": "c51cba0566fa96f0b15dcd7c3fa0dd4d",
".git/objects/07/4858d5b0348f71ae3b47871935a56bfebc3fe3": "95e9e65bba50d7c0641b3a91b7b0b118",
".git/objects/54/340e9387ea91401b19b72fa3f222e5159d62e0": "f2a0f163a29f65999e5642426fd03b73",
".git/objects/3f/7003665324b91a37077c798be33353f8651baf": "61cff64b451a22b6f0fb7c873f7365e7",
".git/objects/6d/1e197bb86ca48080ea43b78509c5d71b7ec875": "fd91ac703319327c0b22684c8db42933",
".git/objects/6c/89a8e4537ad08184e99b7cac8ac73e2f8c63cf": "2439a84a55c42a167752a708bac3f81d",
".git/objects/99/4e5e07020a1091733548f040251e77701ccf0c": "a4b080888b4bed734fe699d93798edd3",
".git/objects/97/b0c413654634699e952e9a18cd1f5080a4fa41": "530c5091b483084d21a322a3b57407f3",
".git/objects/63/dd839fe3345a7233cfa9b673caeafe8c30781e": "77529001f6be0d5662a0ce8344db1571",
".git/objects/0f/084e13f782ab04fe6d4583fea4123fb52e5855": "96ce5b2a6a5b758076b903f26509c3bd",
".git/objects/c3/7381bccc580a368105be4433fdf8de61429579": "c8bdb7fdf61ed157aadde5a72bd5bd27",
".git/objects/c4/5890d7e6739d1206550db15786c60805135fda": "a780672c61b8e2ae55e22c54926df98d",
".git/objects/c4/070f333db7abcf4c95023c248dda93bf25c732": "37d43a05e7192a3b2b74810eaad966fa",
".git/objects/ff/176eb5bb04bb4df823f87d800ac60d3b6f63f6": "9834245d1a0d6a3ecaee755e1b8c6f61",
".git/objects/46/1c7b59ed41e6d78b1503acf7849ab49ac79f73": "2de2b2971b1326f5aef111c8e5f6b0d0",
".git/objects/77/e8ad1ef528e6d3e00243ad83baf905edcc63b5": "80cba323e4ab3b5fbdb4058b18777e2f",
".git/objects/48/4d2390535f486d154b6ffbf548f693fcecd3c8": "120c7d2463fafca0930121fb212f8871",
".git/objects/85/cc9d6f5c6401f9390d68154b4338e9d2ae7f8c": "e4410e8ffb4922519886392ea8edc6d6",
".git/objects/82/18faed06ea61c21794022110bb69af9f7c0c22": "eb61c740565926faee25089b659e70f1",
".git/objects/78/f7fc8e8d293ed6e227d68cbda4c21974a3d22e": "2a6b50a4dbbae4616ace3689fdede46d",
".git/objects/8e/dde3840db54bd1bd017ddfdb070e54e6789161": "40f18cbf81e4b8656fbcb510fd6ecee3",
".git/objects/22/21a5525877fdc9732d96dbd2d1a0771dcaae2f": "858dac7be060f93edb97e5c325486ccc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f70dcdce30069f1880b2f0b3c1ad48d4",
".git/logs/refs/heads/main": "f70dcdce30069f1880b2f0b3c1ad48d4",
".git/logs/refs/remotes/origin/main": "c4ae9b04ae06b988d2afcd6b13f54e0e",
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
".git/refs/heads/main": "970c7e88b1fe875c21586c14e052e944",
".git/refs/remotes/origin/main": "970c7e88b1fe875c21586c14e052e944",
".git/index": "22b9869aca6b610b8c122fbe48f4988f",
".git/COMMIT_EDITMSG": "6b48349b8735c7243fb7c573904a55fb",
".git/FETCH_HEAD": "b5a632bafc0213d7e0e19e89185132d6",
"assets/AssetManifest.json": "371e0b393fcc2d9cf47f95835b79641e",
"assets/NOTICES": "d8cbcf47f09b5243c17fffeac4fa03a3",
"assets/FontManifest.json": "64f18e8e66e422aadd18be9a70d63be8",
"assets/AssetManifest.bin.json": "6d73b296bcf907f9a45d6e3a8f47e959",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2694fa52cbbeee5883e5dfa9a6990f01",
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
"assets/fonts/MaterialIcons-Regular.otf": "beba374589aa772cb27f5888f0ad79f1",
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
"assets/assets/web.env": "29b6937618957818761b380fe17315b2",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
