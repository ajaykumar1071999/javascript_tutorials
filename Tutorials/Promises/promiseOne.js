const promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("promise has one created");
    resolve();
  }, 2000);
});

promiseOne
  .then(function () {
    console.log("Promise one consumed");
  })
  .catch();

const promiseTwo = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Promise two created");
  }, 1000);
  resolve({ username: "ajay kumar", email: "username.com" });
});

promiseTwo.then(function (data) {
  console.log("Promise two consumed");
  console.log("data", data);
});
