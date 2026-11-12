// Cambia il numero della versione ogni volta che aggiorni index.html
var C="test-atleta-v4",A=["./","index.html","manifest.json","icon-192.png","icon-512.png"];
self.addEventListener("install",function(e){e.waitUntil(caches.open(C).then(function(c){return c.addAll(A)}));self.skipWaiting()});
self.addEventListener("activate",function(e){e.waitUntil(caches.keys().then(function(k){return Promise.all(k.filter(function(x){return x!=C}).map(function(x){return caches.delete(x)}))}).then(function(){return self.clients.claim()}))});
self.addEventListener("fetch",function(e){e.respondWith(caches.match(e.request).then(function(r){return r||fetch(e.request)}))});
