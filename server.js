const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const axios = require("axios");

const options = {
  method: "GET",
  url: "https://twinword-word-associations-v1.p.rapidapi.com/associations/",
  params: { entry: "sound" },
  headers: {
    "X-RapidAPI-Key": "SIGN-UP-FOR-KEY",
    "X-RapidAPI-Host": "twinword-word-associations-v1.p.rapidapi.com",
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

  app.get('/api/associations/:word', (req, res) => {
    const request = unirest("GET", "https://twinword-word-associations-v1.p.rapidapi.com/associations/");
    request.query({ "entry": req.params.word });
    request.headers({
      "x-rapidapi-host": "twinword-word-associations-v1.p.rapidapi.com",
      "x-rapidapi-key": "YOUR_RAPID_API_KEY_GOES_HERE",
      "useQueryString": true
    });


app.get("/", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
