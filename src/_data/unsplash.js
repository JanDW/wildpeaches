require("dotenv").config();

const Cache = require("@11ty/eleventy-cache-assets");
const apiKey = process.env.UNSPLASH_PUBLIC_KEY;

console.log({apiKey});

module.exports = {
  getFullUrl: async (id) => {
    const url = `https://api.unsplash.com/photos/${id}`;
    if (!id) {
      return;
    }

    try {
      const response = await Cache(url, {
        duration: "1d", // 1 day
        type: "json",
        directory: ".cache",
        fetchOptions: {
          headers: { Authorization: `Client-ID ${apiKey}` },
        },
      });

      console.log(response.urls.full);

      return response.urls.full;
    } catch (error) {
      console.error(error);
      return {};
    }
  },
}