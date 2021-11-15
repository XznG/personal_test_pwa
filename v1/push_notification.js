// // push_notification
// Notification.requestPermission(function(result) {
// console.log("User choice", result);
// if (result !== "granted") {
//   console.log("No notification permission granted!");
// } else {
//   const img = "";
//   const text = "Test text!";
//   const title = "Test Title";
//   const options = {
//       body: text,
//       icon: "",
//       vibrate: [200, 100, 200],
//       tag: "new-product",
//       image: img,
//       badge: "",
//       actions: [
//         { action: "First", title: "First"},
//         { action: "Second", title: "Second"}
//       ],
//       data: {
//         First: {
//           url: '/first'
//         },
//         Second: {
//           url: '/second'
//         },
//       }
//    };
//
//   navigator.serviceWorker.ready.then(function(serviceWorker) {
//     console.log('ready to show notification');
//     console.log(`${serviceWorker}`);
//     serviceWorker.showNotification(title, options);
//   });
// }
// });
