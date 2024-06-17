'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "58a22bc696c1d43555cb795805de7a86",
"version.json": "5b6d665946a1c187905b81ee45f0db7b",
"index.html": "8353ce00b9fb77e9e06e32291fe9acb2",
"/": "8353ce00b9fb77e9e06e32291fe9acb2",
"firebase-messaging-sw.js": "a14aae9dc193dd7d16e7e904e3987e8e",
"main.dart.js": "8739f7fc1079ec21040ba178c5fa109d",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "29fa5306dd5ba1918b7da2fc5d387a02",
"assets/dotenv": "34a5e500dbc6361578d885747bb4862c",
"assets/AssetManifest.json": "45e2b5c0a511de68cb1200b5f3a5db0b",
"assets/NOTICES": "10ef22b86eff9bee17a03d81be4e9759",
"assets/FontManifest.json": "305a8a492b6d3c1b2efa7aeb268d8f60",
"assets/AssetManifest.bin.json": "0e455672aed790f0fe944a34b2081932",
"assets/packages/awesome_notifications/test/assets/images/test_image.png": "c27a71ab4008c83eba9b554775aa12ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/mesh_gradient/shaders/animated_mesh_gradient.frag": "1890be5ac6e1b673019ee2604c2d59c5",
"assets/packages/mesh_gradient/shaders/point_mesh_gradient.frag": "6721e3c3c3b65cb49c2709c828288ffd",
"assets/packages/iconforest_flat_icons_social/assets/fonts/flat_icons_social.ttf": "069bac72d889ade33f07619445ecc3ad",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f503238e7f6c7b83003454b434087d71",
"assets/fonts/james-stroker/James-Stroker.ttf": "58dc1ae8de513f3e2e7a53b726cab2cd",
"assets/fonts/fira-sans/FiraSans-Thin.ttf": "8205dc3e1f7953b4f52ed6a23977a6be",
"assets/fonts/fira-sans/FiraSans-Medium.ttf": "f97963c595e8acb87013c1d4e1c3c9f9",
"assets/fonts/fira-sans/FiraSans-Bold.ttf": "382e230417d252a0cb16c7d491b030c7",
"assets/fonts/fira-sans/FiraSans-ExtraLight.ttf": "7b01a1d6efbf405007495ea871f58d42",
"assets/fonts/fira-sans/FiraSans-Light.ttf": "20161a557e36034d7255f22dadab5f58",
"assets/fonts/fira-sans/FiraSans-Black.ttf": "608b764a1cc4218d10f27600ef530fa6",
"assets/fonts/fira-sans/FiraSans-ExtraBold.ttf": "ab5e89ae3427a97125ae380280b1df7f",
"assets/fonts/fira-sans/FiraSans-SemiBold.ttf": "eb5e811f2fe0408c9d0a552fcf1fb390",
"assets/fonts/fira-sans/FiraSans-Regular.ttf": "50e780b45678ae34cef52d3e5112bd0d",
"assets/fonts/space-grotesk/SpaceGrotesk-Light.ttf": "021142e7734a57a1a48ca495158863cf",
"assets/fonts/space-grotesk/SpaceGrotesk-Regular.ttf": "7f510d38d1c785c851d73882c0ca58c0",
"assets/fonts/space-grotesk/SpaceGrotesk-SemiBold.ttf": "73a35ae608e5c13b794c5f893b67bf61",
"assets/fonts/space-grotesk/SpaceGrotesk-Medium.ttf": "705b51b5e52edb8d669adf36eac8f771",
"assets/fonts/space-grotesk/SpaceGrotesk-Bold.ttf": "a17e24dc3fccc03e32a6e66100fb05df",
"assets/fonts/MaterialIcons-Regular.otf": "c86f7dcf46f7cb834f8947b185bdd5f4",
"assets/assets/svg/change_profile.svg": "e148892d82146a6e4a0bfc0b4f673fa3",
"assets/assets/svg/information.svg": "b9c97639f74d56fefee940a2c8b6c2c3",
"assets/assets/svg/password-check.svg": "6007965ef068094e715ccd8fc4d049c8",
"assets/assets/svg/user.svg": "919da09696d1b20be00418ada2a9189a",
"assets/assets/svg/top-ellipse.svg": "318448eef3424c406a4bd46386845774",
"assets/assets/svg/Rectangle.svg": "8aeecddada940ef9a3afa53b5d3321ad",
"assets/assets/svg/logout.svg": "ae2e71ad9c4ef51b4b8a30f27a4f3b63",
"assets/assets/svg/mage_qr-code.svg": "3da03e2f119d1ec66ab871119ec092e5",
"assets/assets/svg/qr_scan.svg": "61f7a15fbb50dc29de112787a016989d",
"assets/assets/svg/Rectangle-2.svg": "26e1198c620b6272aa5154af3d7a4e69",
"assets/assets/svg/magic-star.svg": "db8fbae974a32d6190c48e13a58effe6",
"assets/assets/svg/calendar-2.svg": "713d8c8ec18ed5a91c772544f8e520b5",
"assets/assets/svg/instagram.svg": "e3f7e8bfd3e431c463c1c1dde95d5130",
"assets/assets/svg/link.svg": "2f236b8e803c524b14557d689589bf04",
"assets/assets/svg/arrow-right.svg": "f9b4ce633c5e0f01f0d5a36f4ec0699f",
"assets/assets/svg/close-circle.svg": "7b8ef8999f77a54f01ea056ace5d2a21",
"assets/assets/svg/note.svg": "1aa09b7220394f182b2457d703b34809",
"assets/assets/svg/arrow-right2.svg": "aab42e576d47a656f119d96100a92480",
"assets/assets/svg/gallery.svg": "44a9c47b513571afbd7f0e3833a8c552",
"assets/assets/svg/message-question.svg": "ab299083c9ed0ceb2fd8227a66cf4341",
"assets/assets/svg/search-normal.svg": "8f638cc75436b1028f695e605756fc1f",
"assets/assets/svg/document.svg": "ab939a193d6571327a8521732f0e0d5e",
"assets/assets/svg/bottom-ellipse.svg": "c3b53df8e449568425ad4189ef5449d5",
"assets/assets/svg/people.svg": "9d7b52bf86982eed3dcd5606ce2ff2c4",
"assets/assets/svg/info-circle.svg": "e6413a74331513e6f3401c507c6908b6",
"assets/assets/svg/notification.svg": "32bbdcf30f2a8ddf4c0076fe0bf6cdc7",
"assets/assets/svg/text-block.svg": "9af46d5ba47ee7219409fd507dc99439",
"assets/assets/svg/tick-circle.svg": "25a6ed08fd17882175417c3073ccafc7",
"assets/assets/svg/facebook.svg": "8564cbf9ba8b64724e460c6262c7c425",
"assets/assets/svg/camera.svg": "d727d3e3df2d05dab6f3d2a546ea8cb7",
"assets/assets/svg/more.svg": "2a77f69c7f9dee9df040123857a44f26",
"assets/assets/svg/home-2.svg": "218447c50fe5b5301c57208ccd53cf5a",
"assets/assets/svg/upload-cloud.svg": "e39dac07aff67d2d0a3c04891706e61d",
"assets/assets/svg/youtube.svg": "5ea1f36a4416ec4a66da8b9cf3c2a364",
"assets/assets/svg/clock.svg": "4a3afbd1123ad12f2eccb041b5d07c5f",
"assets/assets/svg/location.svg": "ec498669e06100882b2e8d93aff2822d",
"assets/assets/svg/messages-3.svg": "c75bf867e7d1b55bac6ea3c4ad4335ee",
"assets/assets/svg/profile.svg": "0b1f9599a89cf3b9b64f23c0c5131fc5",
"assets/assets/svg/sort.svg": "1948103f0eec5ee1503445a1198c0542",
"assets/assets/svg/twitter.svg": "79a1e7840a8f76582a5713795232925f",
"assets/assets/svg/arrow-left.svg": "ba6adf81d1c04b3ca38cbeb70b8cb3f6",
"assets/assets/svg/ar_scan.svg": "0071badf095f3555d9e987b5498577a8",
"assets/assets/svg/scanner.svg": "c612fe5a9d91d6f172f3059f9ec05d7e",
"assets/assets/svg/menu.svg": "24e078cd97f32045870059f10c78d382",
"assets/assets/svg/arrow-left2.svg": "3505c5806d079e769bf793510551443e",
"assets/assets/images/default_avatar.jpg": "048e6b4fb5b7ed67e15cf3785bfe0c58",
"assets/assets/images/main_app_icon.png": "4ffc28bf4279ef0a8563d7063501fc5f",
"assets/assets/images/third_onboarding.png": "b46ea7a3042591624edef61196fd737b",
"assets/assets/images/second_background.png": "23c57394eda93dac28cf8b592446ac59",
"assets/assets/images/bottom_nav.png": "851b9472e68cdca389336e0f1b6043e7",
"assets/assets/images/splash.png": "acf408dd24a9c7764ef16a2601065da0",
"assets/assets/images/first_onboarding.png": "cb11e354e2ea4502f0d302c7d67c8ab1",
"assets/assets/images/backgorund.png": "7c8beee4e413f1b7ecb323a2cd43af95",
"assets/assets/images/app_logo.png": "ff9abeca9b67ffbf930b393d24f49796",
"assets/assets/images/qr.png": "8f68d904baf96590375c73302b28b106",
"assets/assets/images/second_onboarding.png": "88f9b19b1daf32892b1f5aa50b19efd9",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
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
