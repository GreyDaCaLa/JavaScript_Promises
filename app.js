console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");


let watching = new Promise((resolve,reject) => {
    let userWatchingLiveStream = false;
    if(userWatchingLiveStream){
        resolve("Thumbs up and Subscribe!");
    }else{
        reject("User left.");
    }
})


watching
.then( (result) => console.log(result) )
.catch( (error) => console.log(error) );



/*
## Exercise 1

```
function watchTurorialCallback(callback, errorCallback) {
  let userLeft = false;
  let userWatchingLiveStream = true;

  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingLiveStream) {
    callback("Thumbs up and Subscribe");
  }
}
watchTurorialCallback(
  (message) => {
    console.log(message);
  },
  (error) => {
    console.log(error.name + " " + error.message);
  }
);
```
*/

/*


- The above function can be replicated as a Promise.

1. Declare a variable `watching` and assign it a new promise object
2. Inside of the promise constructor, declare a variable named `userWatchingLiveStream`.
3. Add a `if/else` conditional that checks if `userWatchingLiveStream` is true
4. If `userWatchingLiveStream` is true, call the `resolve` method with "Thumbs up and Subscribe!"
5. If false, call the `reject` method with "User left."

- Once you have created your new promise:

1. Call `watching` and add a promise chain using `.then` and `.catch`
2. Pass in a function callback to `.then` that takes in a message and `console.log`'s the message
3. Pass in a function callback to `.catch` that takes in an error and `console.log`'s the error

*/