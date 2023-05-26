const axios = require("axios");

async function getRandomRedditPost(subReddit) {
  const params = ["hot"];
  const paramsIndex = Math.floor(Math.random() * params.length);
  const randomParams = params[paramsIndex];
  const subredditUrl = `https://www.reddit.com/r/${subReddit}/${randomParams}.json`;

  try {
    const response = await axios.get(subredditUrl, { params });
    const data = response.data;
    const posts = data.data.children;
    const numPosts = posts.length; // определяем размер массива
    const randomIndex = Math.floor(Math.random() * numPosts); // получаем случайный индекс
    let title = posts[randomIndex].data.title;
    let image = posts[randomIndex].data.url;
    let author = posts[randomIndex].data.author;
    let numComments = posts[randomIndex].data.num_comments;
    let NSWF = posts[randomIndex].data.over_18;
    let type = posts[randomIndex].data.post_hint;
    let link = posts[randomIndex].data.permalink;
    let postText = posts[randomIndex].data.selftext;
    const jsonObject = {
      title,
      image,
      author,
      numComments,
      NSWF,
      type,
      link,
      postText,
    };
    const jsonString = JSON.stringify(jsonObject);
    const parsedJson = JSON.parse(jsonString);
    const formattedJson = JSON.stringify(parsedJson, null, 2);
    return formattedJson;
  } catch (error) {
    console.log(error);
  }
}

module.exports = getRandomRedditPost;
