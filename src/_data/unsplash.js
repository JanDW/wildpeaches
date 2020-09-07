require("dotenv").config();

const Cache = require("@11ty/eleventy-cache-assets");
const apiKey = process.env.UNSPLASH_PUBLIC_KEY;

module.exports = {
  getFullUrl: async (id) => {
    const url = `https://api.unsplash.com/photos/${id}`;

    try {
      const response = await Cache(url, {
        duration: "1d", // 1 day
        type: "json",
        directory: ".cache",
        fetchOptions: {
          headers: { Authorization: `Client-ID ${apiKey}` },
        },
      });

      return response.urls.full.toJSON;
    } catch (error) {
      console.error(error);
      return {};
    }
  },
}