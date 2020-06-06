'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
".git/config": "5be7fa6892f23f41e7ed6c02a7f5351e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8c3f3054c1e0f0f8e781a7c55c20e125",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "dbd31034384e997b792a233e23ce6566",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8d2012117b1ee8e520b185fc49b98074",
".git/logs/refs/heads/master": "a2c18f78e4ac315ffdedf8fddc425521",
".git/logs/refs/remotes/origin/master": "afd9757305a1fab2acfbfe18ecf3b6cc",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/194c5961bbdcd69a93354975e853d12c010cff": "bc6528e14db597b7301a8394138c2271",
".git/objects/0c/a321ee7e12060249cf568266e9355c26bcd76e": "b858573fa9b5996eed2d772fc4ba7f0b",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/12/03b0fef6585830ba4d7ed94435a8c53fa4d104": "d49dba51598cdc98ddd100c950b11675",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2b/ea6cf021f4b9051481ef14cc10cbf5d8e8052b": "63b5c9272a9f37b581af292bbe457bcf",
".git/objects/2d/9ec7733737e362b484d2c09d0096d19194877d": "95dce0927bf2443e24e8b818019a3b01",
".git/objects/2f/6a6f65afa472195e14bf2b961b8f2f0a63ec26": "bfa078a5eb25f6302fa56d42d0a3eee6",
".git/objects/3b/1e6b0eb53b1b1f6c36e3c8919e384f0cb60bb2": "a32cc01ae6ee12e763a9faebbee7176c",
".git/objects/3f/4f010b0c25da958f5dac7a15b020ac441164a2": "548381b1d16ff7a61ba5770a2ac91a89",
".git/objects/41/f3bf5d9ccaa3876f6a77b39e0acff364feb7f6": "829fabbaa3709b3ce7bf72db86020eb3",
".git/objects/42/78a0830175c620aac57de356eafa7f27a4385b": "9670b155ba15612dbfbaa3c13ca82ab1",
".git/objects/4b/1902ecc7713cf51621f4af0d04102cacf56d86": "c87220ef6c19febeb662d4b032494dec",
".git/objects/4f/4ca2836f30a3e7ad13cd565f03baa678f72af3": "e469b9d9cc556f4212b2d26c8186e88d",
".git/objects/50/ad76fa6e83df48e57fcaa2743a87d637842be7": "582500c2cd9944224df24c552d995c61",
".git/objects/50/fbfc64a5ccebab233402ac4151607247ea8fd1": "5889dbb7030cc3d926634be67affd2e8",
".git/objects/58/e17d1fd4b79fdcc161790351a4121c962c608c": "7f9cb841c8b2860a0bfa9bac0d7c3ece",
".git/objects/67/5e3706e30bf1728b497cffc0628b37e5860c5e": "31dad684c78e41516602d3c8af4fbf6e",
".git/objects/73/ed31ae9a48cddf02db85e2f094ea58a1dc4ecd": "893f29565019a712f34f33d735a0112b",
".git/objects/76/01ddd2747739757a6f9b71c482b44df3cf9a5d": "e7e20b05985c2b1e4a93a4cf19ba31cc",
".git/objects/7b/f37b2abcecd1827bd99ac24e7ba1cf182b9b49": "1df28ba1aeed6ef65a8961d3b09c94c0",
".git/objects/7e/f3d44bee64376e9cdec11b4943eaa043bb7a5c": "8bb52271ed67783d94c3301b99f1843a",
".git/objects/80/98a25e42309ecd65b5c857f545d91893488a3c": "0628d96171b66f63fbc72b3908376380",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/82/4176f5c1b781c02e0563f4d3ee1a2d27a0d743": "bcefcda5be01009dcdec2d41d6d190d6",
".git/objects/83/9125f76538135203adc0b58c657b50c57c1f8e": "da2bd4849fa5425baa2cf95b42fc00e0",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/a993c34731aa6e4efcb26259e2a7a7d6d81fcd": "32d91bdb1e58c9b28acb44e154d8f10e",
".git/objects/93/97dc8b90431f988b59c1592f4c21b268cd5751": "cb69e59880ec97df294420e9781291ca",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/97/b422230155e78f8e924d7821d962f801e89d02": "66ba92e328e11f9bf016ccf77075cac9",
".git/objects/a6/197e13b718bfff4b8da55c23738d736199e844": "c4bfc6ed2972e2eeb34a8703489018d0",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/74ea4461b1c9f144bd36c5dcbed53496a8c6fc": "dba023fab7e9aee866c8e4217e4d29b5",
".git/objects/bf/19ecb4172154e2a0d23c5b3eb01bb8ce1d3579": "c61f0c2219a9c63a130bb6769033f5ff",
".git/objects/c0/630cb9e268cf4df26dbe81af1051e9ea18d976": "4ad164e6deef2d5a21bd4ff066ea361c",
".git/objects/c9/3374a819613f5283cb9785f42a2b926547f521": "cadbac9b544f3656ff57389d3bfdc78c",
".git/objects/cb/b38e52cea4a593ff7c2a07e1aabc5e6bb8bec5": "1393bb1c42b981d3c32a46cea3065122",
".git/objects/cf/32590c98727204927508b4baaadcd6c53429bd": "1a7cfe15962e012eae81765dfcf1f702",
".git/objects/da/3fa900f97b4812bc7bbd0cdf50671adee8749d": "df1604005ebbd1d10291f49f00457ba0",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/e1/e51741d9df16c767e096612f479220a74c4e43": "5a430b856f3185ee8744521d3cb1fc50",
".git/objects/e6/48ffb479b50f45d1d7f18d630761734fa6c360": "54bff3f4b1c21f6fc6c0b592adacd2ef",
".git/objects/f7/5f1ccc468aed025765fd412fab1cb29a601622": "18c1a958d5b4cf88bf4e01885d399100",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/ORIG_HEAD": "2616b7bfef8e309a172a2c662c41d2ad",
".git/refs/heads/master": "0a3185bf552c4bef1846711ee50f204e",
".git/refs/remotes/origin/master": "0a3185bf552c4bef1846711ee50f204e",
"assets/analytics.png": "3c324656e70274deae8b0768d246385a",
"assets/AssetManifest.json": "ee0fe12cdee03932bc55963acfb2f5a2",
"assets/bh.jpg": "1aef81c278858afbffc38f4bf82d53e5",
"assets/bhaskar.jpg": "dec3580ed1d6128b486ef99e8dd803d6",
"assets/FontManifest.json": "ec3cdd627994cdb59148d09592f1c4f8",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/Oswald-VariableFont_wght.ttf": "a6e5446a7c5789aabc9b37eaaf72134d",
"assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/NOTICES": "9926d775830365b0c6df1bf3f7327ad9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/tech.png": "282adb15ec34906f3cd0c62aff12538c",
"assets/way.png": "10a37b841bb23435e589f98368688053",
"assets/waylyf.png": "f1a2eb0a0fa032dbdb5e5ecf554f90b9",
"CNAME": "3dc0bb255636167922572f6b04410cc2",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "3cef61ea58f0e880b5e66411ef85b3ba",
"/": "3cef61ea58f0e880b5e66411ef85b3ba",
"main.dart.js": "dbf20828fd16533b4023150b98f6f27b",
"manifest.json": "7d574525d36fbb125212e1dfc2629929"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
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
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
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
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
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
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
