//Get a book photo from the openlibrary.org api and place the photo in the DOM

document.querySelector('button').addEventListener('click', getFood)

function getFood (){
    let value = document.querySelector('input').value

fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
      console.log(data)
      document.querySelector('h2').innerText = data.meals[0].strMeal
      document.querySelector('img').src = data.meals[0].strMealThumb
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
  }



