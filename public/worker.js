let CACHE_NAME = "pwa-task-manager";
let urlsToCache = [
  "/",
  "/completed",
  "/launches",
  "/missions",
  "/rockets",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/manifest.json",
  "/favicon.ico",
  "/logo/SpaceX_48x48.jpg",
  "/logo/SpaceX_72x72.jpg",
  "/logo/SpaceX_96x96.jpg",
  "/logo/SpaceX_144x144.jpg",
  "/logo/SpaceX_168x168.jpg",
  "/logo/SpaceX_192x192.jpg",
  "/home-background.jpg",
  "/spacex-logo.png",
  "https://live.staticflickr.com/65535/50901521371_9e1556a0a3_o_d.jpg",
  "https://live.staticflickr.com/65535/50901639472_293ce4ab26_o_d.jpg",
  "https://live.staticflickr.com/65535/50901521266_69fff3b7de_o_d.jpg",
  "https://live.staticflickr.com/65535/50900813468_ea9530723e_o_d.jpg",
  "https://live.staticflickr.com/65535/50901639337_a221aeb10d_o_d.jpg",
  "https://live.staticflickr.com/65535/50901521186_b20b2fa48d_o_d.jpg",
];

// Install a service worker
this.addEventListener("install", (event) => {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME).then(function (cache) {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

// Cache and return requests
this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then(function (response) {
      // Cache hit - return response
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

// Update a service worker
this.addEventListener("activate", (event) => {
  var cacheWhitelist = ["pwa-task-manager"];
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
