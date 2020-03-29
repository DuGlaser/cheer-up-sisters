const app = require("../app");
const axios = require("axios");

const getCommitCount = (from, to) => {
  return axios({
    url: "https://api.github.com/graphql",
    headers: {
      Authorization: `bearer ${app.get("options").GITHUB_TOKEN}`,
      Accept: "application/vnd.github.v4.idl",
    },
    method: "POST",
    data: {
      query: `query { 
       user(login: "${app.get("options").GITHUB_USER_NAME}") { 
        contributionsCollection(from: "${from}", to: "${to}") {
          totalCommitContributions
        }
      }
    }`,
    },
  })
    .then((res) => res.data)
    .then((res) => {
      return res.data.user.contributionsCollection.totalCommitContributions;
    });
};

module.exports = { getCommitCount };
