const redditParse = require("../src/index");

redditParse
  .randomPost("funny")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

redditParse
  .newPost("funny")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

redditParse
  .topPost("funny")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

redditParse
  .hotPost("funny")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });

redditParse
  .bestPost("funny")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
