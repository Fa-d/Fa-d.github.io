'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "16ec3bd3711b5f8478830a92d47996f0",
".git/config": "fb46ce2937f4af266606c0b9bbd3efa5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "e8fe3781d5712e5ce399bd0fd3ce28cd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dfa2f9c817e4d73d615dbc53a7413aa5",
".git/logs/refs/heads/main": "df5fc53fbd117a731962d50221d7520b",
".git/logs/refs/remotes/origin/main": "f7c89c9bf25cb6e12bbd47d61acf25fd",
".git/objects/00/e7be0d855fa7926f95545b3f8e46998493a9e3": "308651182afabb3d0fc5ea2bf7e290e7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/9eb4a9c602ca499884862fcb2b349de3e78a73": "14a9d64594b96009d88e59904f38a866",
".git/objects/09/72300eab9e28fa7d8985ce08e57178ab54d6bb": "cb4342b1d2d3606170a81f6918c9fc23",
".git/objects/10/b8ed8ca09b2b218e5dada009065bcf21f50910": "52a22591507001a037c6484723874e2b",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/8be2e73085513c1e4b48f050774e20024a6d53": "b52ff317ec4c3f994a4040479e4d3b92",
".git/objects/28/5cfca8df5751892777cdbe7225f03ac7b39e68": "f142ed244a4aceab674656d8d6690146",
".git/objects/2a/a2917aed73b3e5672521edcd631965bd908545": "ceaf1bd0499451c6b62ed27a45406e2f",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/33/8bef047921a4c69b62e8dde43664c7ca1f6ff5": "fa82b9dd1d5f914262f0a244e5249d70",
".git/objects/35/67d1127bfc313e95daeb098b411a316af322e9": "1d055a2d39ef33558fa7b7116ddf25ef",
".git/objects/3d/d37118afe01a54ecaf64bea2203696eb0febc1": "3417a6c3a344069aa840b2ffcd24b90d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/768846cc8c1b2596cf162c1e242e61a2c8c75d": "6f26997130850477853371c0e88d789f",
".git/objects/4f/cf881f6df20dfe388de5928dd95c129319efae": "a7d7a02cf4ba2ffe9e13aa992f0c3520",
".git/objects/5b/f08b8b716f38b429c445cdc35a3d8a9ba2b661": "feecc4adb416cf091651fe2b476128a1",
".git/objects/5c/443a20734e64f28d70f6ad1920b4a0193c4625": "bedc9aeef28939c0f0d3da810879e260",
".git/objects/5d/8b04c39adba999b3f292e0b112b442105a11d9": "603ff0239a6c2401168c5054fbd1b183",
".git/objects/65/c9ebcf499d30e978ec7ea02bdd00522b9f5984": "5d5fbe6c31a4d3f8f5542a81edea0c3e",
".git/objects/6a/fbfe24165434b20570f60ca03e481bda1e95a5": "e7198098ea91533c223b9d802e277246",
".git/objects/6c/5811f65269d3b60fc044cd01b8cc4b94146e50": "18bcc5fd81a861ab7c129003e8c20025",
".git/objects/6e/33cbf19b600ebe267b4d367ee8341c7ae1498c": "798b317316b031608c216f1186de112c",
".git/objects/74/1a2a927adbea70f470ac124e1893f601be91c5": "2514f23bb57a67a5518fac37773aa371",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/83/46b7c544cb6d1d60d1f9bf7f6564dd68752b56": "7be3fb34ce6114ce5a4e4bf949092f29",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/33ded502c9a2c7260d73f6b42b5a5b046c9c65": "916bdc6e9d51935d4ea7303c4991cdd3",
".git/objects/8a/5a7d606953d69d5acb540610588d932b317008": "cd9a1e8afe82820828a21bb891948d02",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/45d96d9c06968004ae4a90a458b9506e0ff598": "973221f56ac0d5f0f0cab0355df1910a",
".git/objects/92/d66b683abdf4544958a10bc77f2736c74afbba": "baa7eb29208e1de44aab523506371d08",
".git/objects/95/24177766dad5b1add6a36ecbaa076e99e5c9ca": "daf15be08978ebb0def128e4f3cceee1",
".git/objects/95/d0fe92d0ba73efa8de6be73fa4b3456faa4e3b": "73aac67c9519740b83184e5237c64efb",
".git/objects/9c/7d11c78d0eddee54f5ad4f486494f2a2f6f41d": "37a6d343fa013e670110664b31fbc034",
".git/objects/a0/7638614c2ab6121635417eb3c69b08184fbdbc": "a6f92b0b77b3aeaad3e6d4edc2e0c24f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/b72652a13f821098602780cd5b4f9b686106ba": "57815280543941d2e3e56d39652c9244",
".git/objects/a6/020acf8c5f31eba94916338f3eb079b61e0e4c": "3fe5a6a1c2750c9c2a9ca6e75e10cadc",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/b203bf8c7c66e3d8019061d2e14f2dcd2d72a8": "fc51f6648f0d0f73a24a55a859890e83",
".git/objects/b2/0af9b4adb54a8d7623453ceae38a441979257e": "3bd837ee618071a5f373123b60281214",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/175b825114e0d0b22cea1dd8c9230156de8273": "05bfa8c1a5286baa64e20ee58f0a4a64",
".git/objects/c9/8f95b56fd03e9bd89d9f8a77a0091231f34b57": "28e155be4eb13ca0c788864618952946",
".git/objects/cb/a7a3608668db526432a59e64ee78b96935652b": "f36f676f04509507bd942b3aafb93643",
".git/objects/d1/23045af6fb253b4a0e228b83579839622fe523": "0f1bdb12d9b7516eaae622cb5a5f64ba",
".git/objects/d1/3ab2028cf9ee4e196816a6803b26123188ca60": "890719f4169df608e16539cb4d53ed29",
".git/objects/e5/5b48d3ac0cac9bd764364ee9fca4bb5cd001a5": "671d7d559e1a7c8361ef86da1c8a0c27",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/f4/5115f032e9aa9aea3dabaf877dda4fa982af5d": "9024a7c39808706e7e6406d682c9472e",
".git/objects/fd/a4f369e17ba63719b1cc0e49ef16aa5d113d03": "6ac0bf07b6f3da4d11290cb2889849f0",
".git/ORIG_HEAD": "fc8adf95e1df4fb94276fbe3c108fe43",
".git/refs/heads/main": "6d673e8a1aeb0868d42ecc1520697eda",
".git/refs/remotes/origin/main": "6d673e8a1aeb0868d42ecc1520697eda",
"assets/AssetManifest.json": "5b610ebad229d60c6403968eaa2589fa",
"assets/assets/github.png": "0918d78648457def080137b179fc5608",
"assets/assets/gmail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/assets/linkedin.png": "94db7e92e51707073eea9d740f69e975",
"assets/assets/my.jpg": "433aa6c868bb595fe023262449156ea2",
"assets/assets/stack-overflow.png": "acb71e0f82f275957f59f032221e25d1",
"assets/assets/twitter.png": "f29106f6f82f24c14018283fd2e3a917",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "f6be0fedd4c15b9ab8ee614c91f70235",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "57692ecace8f295b32a9cb34a5c5f857",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "2f30da865ed2f9044cf6e46e4eb313c7",
"/": "2f30da865ed2f9044cf6e46e4eb313c7",
"main.dart.js": "10270cac42c689f64213a40c6ceb05d6",
"manifest.json": "de71a6eb82ffb40c60556616d326c70b",
"README.md": "a4b7eadac26630bd86177f87b1239f40",
"version.json": "426313f2f3133c2f20415344c4a22df3"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
