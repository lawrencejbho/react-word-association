const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const axios = require("axios");

// Body parameters for the API

// axios
//   .request(options)
//   .then(function (response) {
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     console.error(error);
//   });

app.get("/api/associations/:word", (req, res) => {
  const encodedParams = new URLSearchParams();
  encodedParams.append("indent", "yes");
  encodedParams.append("lang", "en");
  encodedParams.append("limit", "50");
  encodedParams.append("pos", "noun,adjective,verb,adverb");
  encodedParams.append("text", req.params.word); // can grab the :word in the URI to be used here
  encodedParams.append("type", "stimulus");

  const options = {
    method: "POST",
    url: "https://wordassociations-word-associations-v1.p.rapidapi.com/json/search",
    params: { apikey: "606d17fc-8fc0-49e5-b351-499bea92d92b" },
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "d404a1e24fmshd8b99d017f768bep164f9djsn74105ed77c0d",
      "X-RapidAPI-Host": "wordassociations-word-associations-v1.p.rapidapi.com",
    },
    data: encodedParams,
  };

  const request = axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.get("/", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
