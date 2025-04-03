'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "b8b51b6b6e81bef405c11196f0f96fa6",
"version.json": "9e61d114e7106e4cbcaa7658a050d2f9",
"index.html": "0b974139865de096b9bd6f2a78445aa6",
"/": "0b974139865de096b9bd6f2a78445aa6",
"firebase-messaging-sw.js": "41062c5a0aa18b8f3201b2eb0add801e",
"main.dart.js": "281f00c950b36923998d15f30cd1bf58",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ff644230bd9f0e1b1ac483c51dc28050",
".git/ORIG_HEAD": "3ecf472efbdd73e3d0ad874d6bad8e2a",
".git/config": "868827e711c48fddb7d5410fd336d5ad",
".git/objects/92/cd87fe7a01b6bfb76805e9b110c8d1d5e766d8": "5e1e9b3caebe6c93bab6c20e2521ca8d",
".git/objects/92/4b7b1efde24071c41bfc097cc58a20bf9754f4": "af76bc731631f29cf72c48b2b10ef8fd",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/9b/3392bf9f8f1cdba8b89221f5aed5fd2260b049": "b5ccb88973a1966efb75a6267d268400",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/35/447f9b30ed83be7aa24b79738b6249cf0bb0ab": "aab9336ccdbe91e60ba38c547c18c17a",
".git/objects/0b/f70373813ac0741f0bfd040ebee50056db5ecd": "293a979475dead7487155595abef7c9a",
".git/objects/60/323ed6abdf13d27724c20971cae30198b4bebc": "9a2cc7330c419dd0255f26dcd8250b07",
".git/objects/5f/77c8520f6653ccd48deec8f4fd9e1c2de6b730": "695d134241517317697498883a7a4302",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/33/ef539fe1a9fa918f8f8f9f74acf4581d7961b3": "73815322be6e82d6e453c4ba2ffe0c2d",
".git/objects/a4/eb632817b41f8ae2702ea15a744a007443cd8d": "843945a6395f77fda951646c4e73c328",
".git/objects/b5/6c3a91f9768d435358f438c354cf9a3e774f93": "4ad24ddc600b53cca1931dbbc67f34c1",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/ac/99dbb3056b52ec2b0f17dc116340ce2bdc657a": "01fb0572389d50a235a48226d0c50ed6",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/bb/e6ccd5b1d214e454b709e49cee9ddacad835eb": "0b73397562859775c743d5b9eb2da092",
".git/objects/df/e85f9553a43d846bedc18901ceeb20353cbfc9": "ca2d93e0ec92c667d683e71be42fb4f2",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/9efcaa37322d98220f6fd657141ce4fa18ca7c": "877e3e3c3c1512cf84e567959b8616c5",
".git/objects/bc/77192443fc3eafee41ba5dd1a25d26492be841": "885efb550db516c3a9f71e5ddf3a8d2a",
".git/objects/d8/2befbc01c8415503e0c206f20f7366f95ac769": "223980d174e8b5aa2395bb4ee95fd586",
".git/objects/e5/a8e123a5de33206df3794ecbd1aaa807922957": "6e887542de5236f5da625094326c3c2b",
".git/objects/e5/20eb058dbb4c1f4128e3e5e1edd0e42aeacd8b": "e38395772b44503c25de691efd6c080d",
".git/objects/f4/634cd7c3f16e8b1ffd01f2ea4a824b3b25991d": "b81b0f4a4b2e3399239e4b475a3d1a96",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/b7724481506aad674be65590f2274e378cd378": "ce07aa56324bee390c68d5fd3976ab63",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e4/af0cdcc73fa8e1edf7c137035183b15dec33a4": "24487016750c27c331ddf7aacb64fe03",
".git/objects/ed/8cf828122360d37979491ba1fd6c761f280f1b": "5c85557c4b36c8e6a3cc78cf126db94f",
".git/objects/c6/3975c6522dcafdf10893dcb5307b0030f63487": "0fab5a7dbc75caa4ad9138a4d671472b",
".git/objects/c6/28de2c4dc5d6376c7cefb53a2d6a689326f33f": "5c788632908da5b7b247ff1dfd53753f",
".git/objects/4e/19ce43173a7f809d2697fccb05a4e116af9e68": "e0916aa20ab13ef8d25f0d78d9303a6b",
".git/objects/27/7a841f699569f82803211378dfd8029e7cfa6b": "8f8fd5f2d72bec3fe8fd39872e549594",
".git/objects/73/bc5c3eec09c981440886696fd5801c66d88dcb": "ab4cfe440383f45bb904680d8e19fd33",
".git/objects/80/0531084fa6cecc3b7ee732bc66582d0f889aed": "18ca3ebee6bd116d77e00864e95360f4",
".git/objects/80/f4a4d35f6e61cd91f4a0bbab09960d3c0406af": "57afae810de2b9b08bc17612e6086faf",
".git/objects/17/b6b896b7754f0f8dbc4899f32501253cbbd237": "13a3194650b2e0c89052c1c20b5d830c",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/fe81910f702f5eca74b2ac30582356e45a3304": "f6992224cfaefd1de22f0fb6387ae79e",
".git/objects/21/629fc1c905ddce84be81ad0b013cba5424f430": "91238af56ba568c4c6ce0b479f5fe7b6",
".git/objects/4d/e5a672cad2052ada637a77e0142767c65ab3f2": "bba6b51d64e916f8b85288366fe7ed0c",
".git/objects/86/1a69368c62134382670dedb35f480e74ce988f": "e220665698e724f993967724649409f6",
".git/objects/72/f05439a7eeb396e9f0450f1ed461815333d3ab": "1bcfff5a5344266c396c25f44e6a51df",
".git/objects/72/f5d5fbff2d617a9f1a55f9b9f7ae8d97af8320": "f6347e6a89f154634301131159c46265",
".git/objects/44/7b0bcd935e7a848d0a26b5fd115b0b311171af": "b96edb76bc95aa507312b010b0be6fab",
".git/objects/2f/faa22348d3aeaaf6844016dcc132b2bf2b3851": "212f82437b572ac6e5d3a45dc61c4ee3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/eed1b5375a80361f1a707b4416b3f24557206a": "de6b9814f0b7d8156ff2dfbfe7efe256",
".git/objects/07/d5127c04b17a9a62121d12aeb00b701e920500": "e2a9bf3fec6e17ec821e8b25c7bd1280",
".git/objects/38/72a1ccd266707ba5db5f7628a9fde1fb93f802": "82d7dfad17dcdc039f531930671f5a8f",
".git/objects/9a/a18a52464306b13972b5ae6d2860138eb39168": "c29ea1047174e015c86ea45cf98a07fd",
".git/objects/9a/d595964a6b4937a62a2412b544d8c942eed798": "21fbeeb2830872a4fdaffd457e59ceae",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/65/2eb957891479ac64f5dbdaded0908bdc2884ff": "9e1e5d2ecd5ff0b2c8790323f2bdb538",
".git/objects/3a/04ff71e8370a44e1fa3ff36bc249408786ab77": "f3b5f499009b791f20d9d6f340ad582c",
".git/objects/5b/aa90d5420ce3f12128797657bc5015f5442f5a": "8a71b6a850ba06a23a355f6c5832bdcb",
".git/objects/6d/d925b5b4d7bf2031386a2c6a1834b457ac077f": "6cedf5681cd1980c43939b2ff2b3ee1e",
".git/objects/6c/b612132f65112a38881e7eb3f6a90007a37edd": "f9358316b99d0e36f0c2c5f2796f1ed4",
".git/objects/52/059c3a3da3fed017096a7f9b6189264bda150b": "cc21ad1b7a7096a79889ec3cd9661684",
".git/objects/63/8345cc3fa610a937e9875f95db3b94978d8890": "6ee32b1b6fe4d1b186892e5ae0f277e6",
".git/objects/63/e150048ec21643f98cea28924f2fc43ebafa3b": "30b020f4ac76462754b4396a7a369cf0",
".git/objects/90/9994f8a4eade85f287fb85b9f537a6925de9ec": "20b63c829035fffff643249e05c722df",
".git/objects/d3/1b85d7c835b8714e4cf67e5a4a341c1a700aef": "9e0a90db2195e1f3f83fc4d088439759",
".git/objects/d3/a138bb4641c82c072be475ec11d30a1ea6b4fa": "0d8fa1be8ee3d39b4f4d52642b6d8c7f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/cfa5ffc4fd79a98ae605b5e46c4b1a6bc4f57b": "4c8a20f886bfe8608cae61ed4e3fc49a",
".git/objects/ba/783f1853c7c4ad024be2ef48efedf99dc7c1b3": "58b9e7ede8791e3d050a276441086749",
".git/objects/b8/8f876f2d8e4393e45b58f6eaf92ba807bf7cec": "8ab0e89f52722e86803fd4fb66b50727",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/dc/bbb23e3cee65e0afdeb1dfa307e03f12927cbd": "7e5c6cd28bbdee41d6519950e240950c",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d2/46813172bfbc1f9883163b7872be01582dc6d6": "fa7c265b9b6c9eb30852d96f5a7b3962",
".git/objects/aa/99fb3b2d7088941d7636ab7afa0d227bacb694": "cb3bee311718fed6c070d26fe75800f6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/66c1ef58dc22ca59f0dd04c756c797a004e839": "1ac9eb9f7c6c3d54e052ca077c8d33d3",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f0/14ad4d2593573f8f5c56107736d16886f3ccdd": "79a3728ba382402d1ea13ef40d9470ad",
".git/objects/c5/941b96eb487555fae9582fe68da15f02a7d4d0": "65f956283e25a178c1aff11030f5f810",
".git/objects/c2/6a1e1d2dd746a4e4219ded6d3c488d2e7c2316": "e84b152a3679b65794b57cf44411b3a8",
".git/objects/cb/525055a40f1426f2d886d405306c0896b22db2": "e64c726885e680645b90b8c90d536f7a",
".git/objects/2c/5515b1bb165439707201463db9756ef577ecf2": "105898adb6db38b489c18b3c753216bf",
".git/objects/2d/72c0fa6940e70b1d42a3ae96410de69bd07392": "5d18ca11cab7bd2be1d417c551804d56",
".git/objects/4f/c6b18a21206fd494062469de2f0df5716c7385": "8f8bb27d9d641b17ad21ebbdd65539ea",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8d/503647e3123a9f0ba0984d0bad816912889944": "0eaa50b8cf41161cbc21f8e1dfd112a9",
".git/objects/15/bd63db3d8df9a205797e1259cc60b15b31eaf4": "c34200a59e8b9562ea292abf1ff9acff",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/49/b91464c240e11bb070c2a583863e586466e4db": "bfaf13cc0237f8c2213a54b87593a3bf",
".git/objects/49/3a840e01505e37390b40f7cde6bd4f5a773531": "fb2d20cb64f25bd36de3c7ab1317a700",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/7a/3f2d389e0109b51c6687aaf9fc807150648c36": "f0d60b4d40a344a16ff2409863089cfa",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "49af78536952f6bebcaaeed8e63c5999",
".git/logs/refs/heads/main": "49af78536952f6bebcaaeed8e63c5999",
".git/logs/refs/remotes/origin/main": "8a5ba0398b2ab21a5f15082f871a1681",
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
".git/refs/heads/main": "d5a2e9964b5b75aa7a04eaaf74685194",
".git/refs/remotes/origin/main": "d5a2e9964b5b75aa7a04eaaf74685194",
".git/index": "9bf7c4630d014d273927df620879edba",
".git/COMMIT_EDITMSG": "17940a3febf652e4ff13c926ac5d06e4",
".git/FETCH_HEAD": "5718a0bb5947703f551c246bc9e83187",
"assets/AssetManifest.json": "1cc0628af3e6e0c949a3e41852677ed3",
"assets/NOTICES": "7da780d41d338a6c58f1f40ae9538862",
"assets/FontManifest.json": "64f18e8e66e422aadd18be9a70d63be8",
"assets/AssetManifest.bin.json": "25b55d08312f15442c690a0a345683e6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "2694fa52cbbeee5883e5dfa9a6990f01",
"assets/packages/flutter_iconly/fonts/IconlyLight.ttf": "a2023f2e6ebf4b9fc99a8371297f0265",
"assets/packages/flutter_iconly/fonts/IconlyBroken.ttf": "29154d8260b60657e92db7e3f9003518",
"assets/packages/flutter_iconly/fonts/iconly_bold.ttf": "d8984bdaada3bfac387c9482c753047c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "404e1a6a54150ee07ade253b06d3468a",
"assets/fonts/QuickSand-Bold.ttf": "e8dcee4bbf2288a2d264c76fa547f37a",
"assets/fonts/QuickSand-Medium.ttf": "fd7f304a26dd790aef9f1ae84403eab3",
"assets/fonts/QuickSand-Regular.ttf": "7194c41ffab51721bd84ca104553c4e1",
"assets/fonts/QuickSand-SemiBold.ttf": "025d26a905aa7e016827cdc2b429552f",
"assets/fonts/QuickSand-Light.ttf": "e60d43df6abf50de0980883f4596e268",
"assets/fonts/MaterialIcons-Regular.otf": "219c073adc3d50e884d36d6abde0e20d",
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
