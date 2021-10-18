'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/assets/github.png": "0918d78648457def080137b179fc5608",
"assets/assets/gmail.png": "2c1a7560c88ea83e6b2593cd07af8ad8",
"assets/assets/stack-overflow.png": "acb71e0f82f275957f59f032221e25d1",
"assets/assets/wat2.jpg": "fef87b07d21bdc6c1832f9d8c92be664",
"assets/assets/twitter.png": "f29106f6f82f24c14018283fd2e3a917",
"assets/assets/my.jpg": "433aa6c868bb595fe023262449156ea2",
"assets/assets/linkedin.png": "94db7e92e51707073eea9d740f69e975",
"assets/assets/resume.png": "555113a9d551c75b40ee11bc304be4a3",
"assets/assets/wat1.jpg": "ce27186a6bc7dc39f0b1eeacd833fc99",
"assets/NOTICES": "b06d041bb8aecd4df31c5791e16d4e08",
"assets/fonts/Caveat-Regular.ttf": "65f9db2d54febfe7b53e56e13d163c49",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/fonts/Kalam-Regular.ttf": "bea35746fb7cdd67b15ecf0622d8cc85",
"assets/fonts/Courgette-Regular.ttf": "59c3685a73f0f1b7c302dd2d6dabd628",
"assets/fonts/DancingScript-Regular.ttf": "c4434ab21f7144bbcf88c9a35ae3f075",
"assets/fonts/Bobbers-Personal.ttf": "5c76545ba1b3dc897637f923fc2923b6",
"assets/fonts/Pacifico-Regular.ttf": "9b94499ccea3bd82b24cb210733c4b5e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/FontManifest.json": "33aa710e8773e55545b7136a6d6ad367",
"assets/AssetManifest.json": "4fe7999e67a3a61764208125918d90cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"version.json": "426313f2f3133c2f20415344c4a22df3",
"CNAME": "cfabe85dcebdeebd82090475204f8ed0",
".git/FETCH_HEAD": "5c344530793e9d66d76c83bf747ebbb4",
".git/packed-refs": "a970f74e1c1cd6c0eedebf42dfc1b2bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/COMMIT_EDITMSG": "925ee6746850f140997e1d98760e423f",
".git/config": "bfd75214ade0d82949567f50534b75ce",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-commit.sample": "01b1688f97f94776baae85d77b06048b",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/objects/9f/f31276b467face2a97c5c183263a27941eb36c": "26ca915414b65a6cb3ef458440a50884",
".git/objects/ce/421e30fd3fc36c5cdec29c2df063f3a447aaf4": "d3802613c0383663d965b815c51c78c0",
".git/objects/ce/9c7e8825395d1d3dc22bb806046d7b85a673c1": "08f1e3a417e66238148668fa68f8b0cb",
".git/objects/89/33ded502c9a2c7260d73f6b42b5a5b046c9c65": "916bdc6e9d51935d4ea7303c4991cdd3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/6a/fbfe24165434b20570f60ca03e481bda1e95a5": "e7198098ea91533c223b9d802e277246",
".git/objects/a6/020acf8c5f31eba94916338f3eb079b61e0e4c": "3fe5a6a1c2750c9c2a9ca6e75e10cadc",
".git/objects/32/c08e42bf98f390063ceabe58b6924fb98bcf63": "3c55877d8d47bb78fc7375ad43e53af1",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/16/46ac49c92f7fb441d5eb131f180b88b3442a6e": "5e6f43e4616eba73dbe175e23a7d5897",
".git/objects/34/a5aa6a82a40713bce36649115cc7a43f08b36f": "f95402ba5a69871a51f711955fc8102b",
".git/objects/f9/544bb99294cf46108a70922b60374bed8f712c": "a12babf846862d654de353bd134d8c16",
".git/objects/f9/5736ba632f8eca88d39bbbd99f14ebf47be283": "2d3364ea2a62c987ca5b015d519ee873",
".git/objects/6e/33cbf19b600ebe267b4d367ee8341c7ae1498c": "798b317316b031608c216f1186de112c",
".git/objects/ec/d0c6661c33c3f06edad5906b3935b9da3571d8": "4a84d530f721992187b8dc8cfcbd0ca1",
".git/objects/7c/e49f3566975a568d0a532fa8e3e38acf827ecc": "56dac06a263e4cc1bb8e19d62e2e96b0",
".git/objects/55/ef3b58100937f6252bc860983dc5980720f051": "0298c30421b99e27cc1a5f12df60564b",
".git/objects/5e/58e5cc1b73c1f747705cae4d8d181430efa12d": "e5843e94bcad2abcea8bec518c88d360",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8c/45d96d9c06968004ae4a90a458b9506e0ff598": "973221f56ac0d5f0f0cab0355df1910a",
".git/objects/8f/e2149e80de31f04d98ecf8d675d18b738edb19": "e45b9365cf2aa6fcee06f44739295f87",
".git/objects/80/4b1744e32c276832639d0eb78782c139725a68": "69650891aca55c73b253800ec648c937",
".git/objects/8a/5a7d606953d69d5acb540610588d932b317008": "cd9a1e8afe82820828a21bb891948d02",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/d6/163849e7d954c1f1bf442cb3f21bfdf493aac1": "d243dff30255f828aee2401d21c6917b",
".git/objects/d6/4ebe9b119f6cf986d6f7c1f175e17528777d53": "1eee50f4fdbfb754661eb691286b3912",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/b203bf8c7c66e3d8019061d2e14f2dcd2d72a8": "fc51f6648f0d0f73a24a55a859890e83",
".git/objects/2c/04d0653903607e2557f6f8797c974dd26700bf": "a3a9123bfcb1fb87b97f7b7ffac2782e",
".git/objects/d1/3ab2028cf9ee4e196816a6803b26123188ca60": "890719f4169df608e16539cb4d53ed29",
".git/objects/d1/23045af6fb253b4a0e228b83579839622fe523": "0f1bdb12d9b7516eaae622cb5a5f64ba",
".git/objects/4e/1cdbe45758afe762ca494d658dd0dde5971f61": "b334c66366b6bc09aadd1019928effc5",
".git/objects/4e/768846cc8c1b2596cf162c1e242e61a2c8c75d": "6f26997130850477853371c0e88d789f",
".git/objects/33/8bef047921a4c69b62e8dde43664c7ca1f6ff5": "fa82b9dd1d5f914262f0a244e5249d70",
".git/objects/39/769e455cc65dd61f042f87956c90d96d4c2901": "14b2ad3720b9f5dec9cf01f230f75a31",
".git/objects/f3/329e06bef28145f8619846c4269bdd6a72def6": "4468c3134a2e9f573a8c6b012cb0ad15",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/21/8be2e73085513c1e4b48f050774e20024a6d53": "b52ff317ec4c3f994a4040479e4d3b92",
".git/objects/25/33198d44937634302ebc6dbbe01da1805d2fc2": "632b55b0ffe1a25ca045ccdfc9e33df1",
".git/objects/b8/175b825114e0d0b22cea1dd8c9230156de8273": "05bfa8c1a5286baa64e20ee58f0a4a64",
".git/objects/10/b8ed8ca09b2b218e5dada009065bcf21f50910": "52a22591507001a037c6484723874e2b",
".git/objects/05/ebb65dfe516682cc74eb41af3cd8e948454d4a": "7668f7f74ca2cdb1bc4d42092dd3e643",
".git/objects/92/d66b683abdf4544958a10bc77f2736c74afbba": "baa7eb29208e1de44aab523506371d08",
".git/objects/74/1a2a927adbea70f470ac124e1893f601be91c5": "2514f23bb57a67a5518fac37773aa371",
".git/objects/c7/3720e50bfcc9c90100af336e971efcd9156c28": "d3684d947d369c681ae355b48378d750",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/7ad29a7eb3fc06ab44245306f336fd82b263b7": "a4396a099142b5c72ce2388fa095d549",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/cb/a7a3608668db526432a59e64ee78b96935652b": "f36f676f04509507bd942b3aafb93643",
".git/objects/38/d7a224be9ca97bef830ebf6a648c38fc53a805": "beea85cdd8f63e21bcfc1c2c6b194ddf",
".git/objects/28/41e3f2c95ef09070026f13dbbc2bcbe6b62626": "4f974a5b535be412bfded005fb4d22aa",
".git/objects/28/5cfca8df5751892777cdbe7225f03ac7b39e68": "f142ed244a4aceab674656d8d6690146",
".git/objects/53/ae64f34aeb8ce3b529a4764658eb99118500ab": "6992fbcd5548fb28b94aa1603a5a0a16",
".git/objects/57/344353885c34ea81bdcfb9ab0304b1c568321f": "a401d69d6684523a532379224f9d0d35",
".git/objects/2a/a2917aed73b3e5672521edcd631965bd908545": "ceaf1bd0499451c6b62ed27a45406e2f",
".git/objects/35/67d1127bfc313e95daeb098b411a316af322e9": "1d055a2d39ef33558fa7b7116ddf25ef",
".git/objects/37/5f0eccf1b48f244e41bdf03791f60579629bc0": "b3543566cecb4a3135b50bdf6586270e",
".git/objects/e3/b1df27781ba118ca6ccd9537b1f0fd07969aeb": "4ddcdae49eb761c83e0b8197d50d8f3a",
".git/objects/5c/443a20734e64f28d70f6ad1920b4a0193c4625": "bedc9aeef28939c0f0d3da810879e260",
".git/objects/f4/5115f032e9aa9aea3dabaf877dda4fa982af5d": "9024a7c39808706e7e6406d682c9472e",
".git/objects/3d/d37118afe01a54ecaf64bea2203696eb0febc1": "3417a6c3a344069aa840b2ffcd24b90d",
".git/objects/3d/334d6b56464985c615e83501644c3f7f028586": "05da834836cbeac14f41ea332c5c1e6a",
".git/objects/95/d0fe92d0ba73efa8de6be73fa4b3456faa4e3b": "73aac67c9519740b83184e5237c64efb",
".git/objects/95/24177766dad5b1add6a36ecbaa076e99e5c9ca": "daf15be08978ebb0def128e4f3cceee1",
".git/objects/95/6256749c155d164a09c7a3c9969ff65199a31e": "2c7ac03a9e35c3b75e6f6a7df5c1f52b",
".git/objects/1b/c8fab957aa7a2dd3547491b4ebc9c2ff0c38b6": "c252f76b68fd504cd61b91c3c94e7d91",
".git/objects/6c/5811f65269d3b60fc044cd01b8cc4b94146e50": "18bcc5fd81a861ab7c129003e8c20025",
".git/objects/e6/2133c16aab81c9366bbdef02a5913ea56fc033": "419d5e7700a0849d4ab82669d2d284d7",
".git/objects/e6/f5078dc3d5aa5accd0901fe0b87db18e75efad": "ce5e84f8e0b1587dfd3c13a1a48fa9fc",
".git/objects/09/72300eab9e28fa7d8985ce08e57178ab54d6bb": "cb4342b1d2d3606170a81f6918c9fc23",
".git/objects/2f/f29aa3f4fc40192525a98cb9cae60f443b7c44": "0cb3555d674e72ede775f68c2b1b16cb",
".git/objects/c2/1796c2c597360ebfa6312650ff807e52a639a6": "eeb03ab124ef6b43a5876257c27f4775",
".git/objects/91/8aa24f2566e33061639ff09a4c90b95c1831f0": "5f28a5d1d55a40b42adff36d07865fdc",
".git/objects/f8/cee777f35e4de3980adf9fba9db6f0fa290562": "8d5fc8fec24a71e193407c53f79bc26f",
".git/objects/07/9eb4a9c602ca499884862fcb2b349de3e78a73": "14a9d64594b96009d88e59904f38a866",
".git/objects/bd/3bc0a9b5c2a826a435b17e4781425739843cf4": "de26803d783816ae924b0c80e79b1ba6",
".git/objects/9c/7d11c78d0eddee54f5ad4f486494f2a2f6f41d": "37a6d343fa013e670110664b31fbc034",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/84/22e67937c42f2aa55c158093359374962f23ff": "b096b3a9f3896f56cd0f082731164e39",
".git/objects/84/1ac306b6ed36408ed09a1e30a695c485acb691": "30cb7307104ca3d2777a1bb42afe125f",
".git/objects/fd/a4f369e17ba63719b1cc0e49ef16aa5d113d03": "6ac0bf07b6f3da4d11290cb2889849f0",
".git/objects/83/46b7c544cb6d1d60d1f9bf7f6564dd68752b56": "7be3fb34ce6114ce5a4e4bf949092f29",
".git/objects/4f/d52018968294d7733932d317de2eb8e0dcdc82": "0c9e8b6eee45bd4512ad5e6b7f211208",
".git/objects/4f/cf881f6df20dfe388de5928dd95c129319efae": "a7d7a02cf4ba2ffe9e13aa992f0c3520",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/5b48d3ac0cac9bd764364ee9fca4bb5cd001a5": "671d7d559e1a7c8361ef86da1c8a0c27",
".git/objects/23/e2f36a7077e6e09375982584dac6fb4fe1e997": "f9475e988446a4e16ee6086cfea1b988",
".git/objects/00/e7be0d855fa7926f95545b3f8e46998493a9e3": "308651182afabb3d0fc5ea2bf7e290e7",
".git/objects/5d/8b04c39adba999b3f292e0b112b442105a11d9": "603ff0239a6c2401168c5054fbd1b183",
".git/objects/c9/8f95b56fd03e9bd89d9f8a77a0091231f34b57": "28e155be4eb13ca0c788864618952946",
".git/objects/c9/3a7ca10af47a81aa08ba24070743b29592841f": "55fd56c6b9afb826170a0a0839dffd13",
".git/objects/01/75a869a82161360d165e415897ff0fe924e516": "99bce0971b88e299213f47c273c94a64",
".git/objects/b2/0af9b4adb54a8d7623453ceae38a441979257e": "3bd837ee618071a5f373123b60281214",
".git/objects/a3/b72652a13f821098602780cd5b4f9b686106ba": "57815280543941d2e3e56d39652c9244",
".git/objects/c5/2f690ca29bf853eaf7f8d46533b4437d80da6a": "446939b8ad381c8cc1647158d13ad0a7",
".git/objects/65/c9ebcf499d30e978ec7ea02bdd00522b9f5984": "5d5fbe6c31a4d3f8f5542a81edea0c3e",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/fa/44a30d7eddd8a54b43aa43329785f40130f771": "79dd6a4e948a84d1d47f49054c29a2f1",
".git/objects/a2/92c3b89735c57b311c1dbb72a5369d45d8aa54": "9687dd29e1125d40671cd04f9a5b254e",
".git/objects/a0/7638614c2ab6121635417eb3c69b08184fbdbc": "a6f92b0b77b3aeaad3e6d4edc2e0c24f",
".git/objects/0d/e4436962f868e6656aafbaee784a6767db9a8a": "9901b445657a24cd9df08c6a48129a5b",
".git/objects/5b/f08b8b716f38b429c445cdc35a3d8a9ba2b661": "feecc4adb416cf091651fe2b476128a1",
".git/ORIG_HEAD": "723ebce52b21c3936623ef1ea9335aa9",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "00ba26103134c26751ee23f36c1cc0b6",
".git/refs/heads/main": "00ba26103134c26751ee23f36c1cc0b6",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/logs/refs/remotes/origin/HEAD": "e092fef971971ec79696d3a668376843",
".git/logs/refs/remotes/origin/main": "4c8fffaa3c6ca939e2b39fce83737758",
".git/logs/refs/heads/main": "45e07525d99af9b19c76bea5dfe895e6",
".git/logs/HEAD": "45e07525d99af9b19c76bea5dfe895e6",
".git/index": "63e6b5a221cb19acbfce0475b69a1db2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"manifest.json": "e8bccd65f55e8a138c472d9f1a30ebd9",
"main.dart.js": "64d58d0e4bbc3376fd25baf708469609",
"index.html": "c535b243778051d53ccb2ac07c7056fa",
"/": "c535b243778051d53ccb2ac07c7056fa"
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
