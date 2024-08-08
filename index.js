const prompt = require('prompt-sync')()
// REMINDER: Run your code to make sure there are no errors before submitting!
// Create an object that represents your favorite show with the following keys: name (string), genre (string), rating (number) (2 pts)
let favShow = {
  name: "I can't think of any",
  genre: "idk",
  rating: 5,
}

// Console log the show's name using the object (1 pt)
console.log(favShow.name)

// Add a new key called watched and put in a boolean with whether you have seen it (1 pt)
favShow.watched = false

// Change the rating of the show to increase it by one (2 pt)
favShow.rating++

// Loop through the object and print every key and element. (2 pt)
// It should look like: 
// name is Ted Lasso
// genre is comedy
// rating is 4.5
// watched is true
for (let key in favShow) {
  console.log(`${[key]} is ${favShow[key]}`)
}

// EXTRA CREDIT
// Make two more show objects and put them all in an array
// Loop through the array and print the names of the shows
let shows = [
  {
    name: "haha",
    genre: "genre 1",
    rating: 5,
  },
  {
    name: "hehe",
    genre: "genre 2",
    rating: 5,
  }
]

shows.unshift(favShow)

let index = 0
while (index < shows.length) {
  for (let key in shows[index]) {
    if (key == "name") {
      console.log(shows[index][key])
    }
  }
  index++
}
