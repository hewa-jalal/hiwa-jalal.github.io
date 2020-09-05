'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a390052e8598b108b13c378a8f88ba81",
".git/config": "d373d075737215c398dc8ec993e004f0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "57ca299e1c672d390342d1c8fa494d3b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c9627cb864635f686a26dda592b6aed4",
".git/logs/refs/heads/master": "c9627cb864635f686a26dda592b6aed4",
".git/logs/refs/remotes/origin/master": "c655d6c19ef69858fd41e9e5bf22d98b",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/11/eee871934c260ff558f2ae2fea814e111f1064": "3bc1897fa97b3996d2c894ad7f5560d3",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1a/a98304e59ade84a3ea585ce80918f4f2fcd1fc": "8e1a81deb89a0251cec7fc6cc3af5ce4",
".git/objects/1f/5c725d351c97f286e1c8bafb6a55d9cc2bf20f": "86ee9fa8bbca288d88c72f87f1e2f82c",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/24/90c4c146f64db294c44c32e16fbdc653fec427": "688ca800d00b6d2e90246b974e26977c",
".git/objects/2f/1a33f90ebcf72750f63fa3e1c5b1529314c3f4": "0ca4ba433f8dbf78a0ed3500ecbd0dbe",
".git/objects/36/9ef53b9777c2dbd475db30688960dfc474e14a": "a5315415c334071eff2de7e26e51ce8a",
".git/objects/47/b3c5f76a8af32f6072498923bb5ba2a2f9267d": "c4c40dcd14fca7478c5bd15c4e14c568",
".git/objects/4a/aa5ac54b81c0a50594b5985c988e286411eda3": "820d0841f590011d6513e94db95ef6b0",
".git/objects/52/0db953c6a50cb40b482a03908b96404fd90b87": "01aa77d6f0f138ab73f64b2545fdaf38",
".git/objects/64/79ebda90cfed6bbc55a4f263d7d5cdb1731cc0": "3054a104d63c4d974fa10f4dd7e6c889",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/67/c402f6b25897e258ef23febc41509bbb53fe8b": "40e0dd12b738559c01a679c9926c6600",
".git/objects/6e/21adaeef4a704ea9957081e8dece7c600b02e7": "6af17723cc88fe398c4ba6cb90ccd862",
".git/objects/73/dc861de11631db6b8878f658dfa79c92ae453f": "c248987291d4a6bec88261e63014166f",
".git/objects/7b/49e1cd7c19f59129131719a192acee8f333060": "99a4971cffedb0f9b7f67f53b63f452d",
".git/objects/7d/f44716e4f7ba34bf9fc6d7ba7159a8cd6bd944": "8c231b5113a1d551e5ee0683076e58b9",
".git/objects/7f/31b67cc227aed8eefd1ba46d98bb1efa359697": "12eb60aa95c555b7f74c71b739a8e922",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/b2c8151d302646b7003339a84fe148a5504a12": "c7e97ceb4a2ead3a38466dd57359f9b6",
".git/objects/a3/61f44871047ab306b30ef684c41d88f966b596": "d7c0193a9f1acf2652f680f072496403",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/ac/19b329149abc2af5022ff4a0d870df6deb8800": "d5d17af325de4deccb03b8d79486c6bc",
".git/objects/af/d7ebb1a7d513a2a990d3acc96942d0f1cdf133": "4927effb783a28efbce338378a8386d7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/e3f8333858e479ba9f06fef61a87a6781b400b": "acd021532a5d08f68f7e8fef21aec92a",
".git/objects/bc/fe09210283a9932df402c2e4626433ccdf0333": "e0144e2d97f7ae032296fb9678577a1f",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/c2/bf0ea6f73b190e622a0014312d2694d5e3f791": "39971b0c2c172996db2ac82d66caac3c",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/d8/ecaec3b95f407d3eff1d9c9a3029a89f58b657": "f7cdb820afec116ebce47f60052692e9",
".git/objects/e2/ca64aff22cdbc86505ccd209904b44e57832be": "fba87c19b009b1156aaea25cba991ed2",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/f7/47014284088fcb0d1089092a7a8068d0479bad": "a72ca724095ec06bfda3344d423a7927",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "2a4b6f2ebaf471f9abc71c3bf3d7ced7",
".git/refs/remotes/origin/master": "2a4b6f2ebaf471f9abc71c3bf3d7ced7",
"assets/AssetManifest.json": "5400d8b710ec2155f88005611a5aaa33",
"assets/assets/about.html": "cca535e84bb3f1ad20cd1423638d0253",
"assets/assets/avatar_image.jpg": "a8b4feb6cf1a446427f45c31e2137b90",
"assets/assets/avatar_imag_cropped.jpg": "15a14030bc0e54b3091f8a2cecc64f02",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/switch_daytime.flr": "7530828e9a6ad38f86475fc17fc578ee",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/works/fruits_vs_vegetables_logo.png": "6fcd02d2b1b1caa2bf237a89d4101c60",
"assets/assets/works/in_bed_ideas_logo.png": "fb128c93d05398e27360d1637dfc8eb8",
"assets/assets/works/islam_time_logo.png": "779b6660918d2566902a4347004b60f8",
"assets/FontManifest.json": "8f036bb4279e4857a966e259b818f8ae",
"assets/fonts/MaterialIcons-Regular.otf": "a68d2a28c526b3b070aefca4bac93d25",
"assets/NOTICES": "bf72feba119a5a1a6a45aba4adbd56a5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "5e92bc7aaab28e6f43a4863f349a96db",
"/": "5e92bc7aaab28e6f43a4863f349a96db",
"main.dart.js": "5f54048b19bf641dcd5fac73e70c3621",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210"
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
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a 'reload' param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'reload'})));
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
  // If the URL is not the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'reload'});
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
  if (event.data === 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message === 'downloadOffline') {
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
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
