'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "eef39129d4dc7a5f682d85096a60c213",
"version.json": "d9e2faae2616b60430ba4b5a2887b08d",
"splash/img/light-background.png": "758bb6afcab1b4e2eb6a8ae801819302",
"index.html": "f82dba61e5b670787cca4b42b37b06ff",
"/": "f82dba61e5b670787cca4b42b37b06ff",
"firebase-messaging-sw.js": "41062c5a0aa18b8f3201b2eb0add801e",
"main.dart.js": "cbf7fda825b7d26d0c2a1ec9b90c4116",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ff644230bd9f0e1b1ac483c51dc28050",
".git/config": "868827e711c48fddb7d5410fd336d5ad",
".git/objects/59/3e4dafdc43e591bc6c962cd71ed8fdb031982e": "2c022e5b4d8c9337368d0cd02588af3e",
".git/objects/0c/f6abc07dc10b83599c196319eded9145e25f40": "fd1a9381a23539c76c0d6fa2dcf93600",
".git/objects/50/7f97a3e1d60cc6efad2948db93850875bf32a8": "d7d515102f58ee3280a5a107054e4fa6",
".git/objects/51/05d703ed7003218f61f10048a4602843bc1bad": "88ad4b2b7e3eb06c5fea68b72e95bd61",
".git/objects/94/fa794dc9310913ae1156a3d9efa2dd8b0223bb": "56b884ed708194c51da3394b730e63f3",
".git/objects/5f/ba8345dc29778393df94751b9cfe59a6f63cf0": "b150ac3102c18ba80ee69fa515a60c46",
".git/objects/df/2057626ac5c1a429b0f12066fd133476f0f2fb": "e0483c035ae44eb97d10f58d560d032e",
".git/objects/b4/700708912e9c8f2ae4a227780018abe5282a46": "0a88509d6a7400414beaf25b1077e4d5",
".git/objects/a2/12317b198ac8f15ca3f003b1f8323f6f984468": "bb9de91d003238d61c3d515fdc4b3304",
".git/objects/f3/ac88e93b53cd2c4e0c24b9886e7440f74e167b": "dc2351a77304c086d4421d721d045fc6",
".git/objects/pack/pack-463eef8e3f0cab79a64ad7f861f4f95103d8ba96.idx": "4f1c36a2d1aebe1f187fe9c28abc3ed9",
".git/objects/pack/pack-463eef8e3f0cab79a64ad7f861f4f95103d8ba96.pack": "76d2c3ab94e17f296ff207ed57d1a120",
".git/objects/pack/pack-463eef8e3f0cab79a64ad7f861f4f95103d8ba96.rev": "a6afca95db40f32eeafa088a60419bbe",
".git/objects/87/cf3a26f6e621abbdc790d8e54e19e4badcb153": "e211dbafccf62c3383b27fe7d6b6fb99",
".git/objects/44/05f678a2bb0851d63c5d85135897ef1f8e323c": "108a5407e5e00c50532293b47b404ed9",
".git/objects/9f/2bdb0909b6b8eb3c6e5ed6c8b6550df0a30411": "d3e124f6ccd468aeaec46410ea42d4a0",
".git/objects/3f/144fdb1acbfb82071a40f29e4e7fdebb2029db": "383434608faf62c8f5bf3fedf6df1336",
".git/objects/30/220802a9ffc1e997a73924c148c34c7233809a": "1796a3583b9c1dc8dad5a7b5bd9af32f",
".git/objects/6d/f0634393324e4ffa8bc173e4e0d610438044f6": "e25021ca204c2c1c35aecd3279950e2a",
".git/objects/6c/31caebb993caf06a5a8b3c5c2dc7a8b0fe96f9": "6e55e0b75e5c8c964bcabecf2eb90e35",
".git/objects/f9/77e47f47ee438a6387a3855c047b91074a80a2": "6fa04091baaaee57c923b7647cc0496b",
".git/objects/77/0438ce7a9035b0a57de9f5c30964c2cd4d8630": "351b9471cd9e7fcc2f4c3061d42c2b25",
".git/objects/23/6f92709a0cef3655b20b3c7fff4729782a21cc": "ba93171dfa114a39ab80388757cedb6e",
".git/objects/2e/be98dd386a81b9f139c6599da888588474f124": "e6a9d70405311acd18da82c6e035c5d5",
".git/objects/8e/22e8e5d56b33e301511a69d085bb2f0582eef7": "fb16a9a61ee712deee78e651e3f88925",
".git/objects/8e/afe32b38af5f3d28487d11afebc6f93029172d": "e0c6291826a33936aad7deb5dc9724fa",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3ab53d8b806a4fc09e3d373411bf239a",
".git/logs/refs/heads/main": "3ab53d8b806a4fc09e3d373411bf239a",
".git/logs/refs/remotes/origin/main": "b3445c50704daab11d17f8a69f59a415",
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
".git/refs/heads/main": "f0b38f24c068e965fac8dbc30938b184",
".git/refs/remotes/origin/main": "f0b38f24c068e965fac8dbc30938b184",
".git/index": "c65900587006d32d4a391220a63a7127",
".git/COMMIT_EDITMSG": "7e129dfc1c511ec667a5c18ace8b999a",
".git/FETCH_HEAD": "e67d7539a73b5f73f1838b4917263ce0",
"assets/AssetManifest.json": "371e0b393fcc2d9cf47f95835b79641e",
"assets/NOTICES": "e5641b8e50b5b0a40955565e0b54a62a",
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
"assets/assets/web.env": "39b0e302942642ae0a2bfcbfe85bc720",
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
