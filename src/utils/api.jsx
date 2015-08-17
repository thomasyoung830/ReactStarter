var Fetch = require('whatwg-fetch');
var rootUrl = 'https://api.imgur.com/3/';
var apiKey = "f0f65760508b3b1";

module.exports = window.api = {
  get: function(url) {
    return fetch(rootUrl + url, {
      headers: {
        'Authorization' : 'Client-ID ' + apiKey
      }
    })
    .then(function(response) {
      return response.json()
    })
  }
};

