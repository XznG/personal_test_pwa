// self.oninstall = function() {
//     caches.open('cache-response1').then(function(cache) {
//         cache.addAll([
//             '/',
//             'index.html',
//             'index.js'
//         ])
//         .then(function() {
//             console.log('added files');
//         })
//         .catch(function(err) {
//             console.log('err! ', err);
//         })
//     })
// }
//
// self.onactivate = function(event) {
//     console.log('sw is up and running!');
// }
//
// self.onfetch = function(event) {
//     event.respondWith(
//         caches.match(event.request)
//         .then(function(cachedFiles) {
//             if(cachedFiles) {
//                 return cachedFiles;
//             } else {
//                 return fetch(event.request)
//                 .then(async function(response) {
//                     var cache = await caches.open(cacheName);
//                     await cache.put(event.request, response.clone());
//                     return response;
//                 })
//                 .catch(function(err) {
//                     console.log('err! ', err);
//                 })
//             }
//         })
//     )
// }
//
// function openPushNotification(event) {
//   console.log('asd');
//   console.log("[Service Worker] Notification click Received.", event.notification.data);
//   console.log("[Service Worker] Notification click Received.", event.action);
//   console.log(event.notification.data[event.action]);;
//
//   // event.notification.close();
//   // event.waitUntil(clients.openWindow(event.notification.data));
// }
//
// self.addEventListener("notificationclick", openPushNotification);
