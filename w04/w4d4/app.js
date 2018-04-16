const express = require('express');
const app = express();

// Videos
const videos = [
    {
      id: 1,
      title: "America is the Greatest Country in the United States",
      url: "https://www.netflix.com/watch/80208273?trackId=13752289&tctx=0%2C0%2C"
    },

    {
      id: 2,
      title: "Micheal Che Matters",
      url: "https://www.netflix.com/watch/80049871?trackId=13752289&tctx=0%2C0%2C"
    },

    {
      id: 3,
      title: "Baby Cobra",
      url: "https://www.netflix.com/watch/80101493?trackId=13752290&tctx=1%2C1%2C"
    }
  ];

// Comedians
const comedians = [
    {id: 1, name: "Dave Chappelle"},
    {id: 2, name: "Jim Jeffries" },
    {id: 3, name: "Bill Burr" }
  ];

  const ratings = [
      {id: 1, name: "Paul Blart: Mall Cop", rating: "26%"},
      {id: 2, name: "I Heart Huckabees", rating: "86%" },
      {id: 3, name: "Super Troopers", rating: "90%" }
    ];



// Get videos
app.get('/videos', (request, response) => {
    let videosJSON = JSON.stringify(videos)
    response.send(videosJSON);
});

// Get comedians
app.get('/comedians', (request, response) => {
    let comediansJSON = JSON.stringify(comedians)
    response.send(comediansJSON);
});

// Get movie rating
app.get('/ratings', (request, response) => {
    let ratingJSON = JSON.stringify(ratings)
    response.send(ratingJSON);
});

// Post data
app.post('/videos', function(request, response) {
    console.log('woot');
    response.send(comedians);
});

// Get Videos by id
app.get('/videos/:id', (request, response) => {
    // console.log(request.params);
    let video = videos[request.params.id - 1];
    response.send(video);
});

// Get Comedians by id
app.get('/comedians/:id', (request, response) => {
    let comedian = comedians[request.params.id - 1];
    response.send(comedian);
});

// Get Ratings by id
app.get('/ratings/:id', (request, response) => {
    let rating = ratings[request.params.id - 1];
    response.send(rating);
});

app.listen(3000, () => {
    console.log("Server Is Working");
});
