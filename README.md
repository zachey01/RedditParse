# RedditParse

## example:

```javascript
const redditParse = require("redditparse");

redditParse
  .randomPost("funny")
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

## Type:

- randomPost
- newPost
- topPost
- hotPost
- bestPost
