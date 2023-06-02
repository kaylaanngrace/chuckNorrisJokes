// bring in html elements for the joke btn and joke
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('joke-btn');

/* 
create a function that makes an API request 
- check state and status
- if status is not 200 display an error
- parse JSON data
- DOMContentLoaded to load immediately
*/
const changeJoke = () => {
  const xhr = new XMLHttpRequest();

  xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200) {
        jokeEl.textContent = JSON.parse(this.responseText).value;
      } else {
        jokeEl.textContent = 'Something Went Wrong (Not Funny)'
      }
    }
  };

  xhr.send();
};

// create an event listener to the btn
document.addEventListener('DOMContentLoaded', changeJoke);
jokeBtn.addEventListener('click', changeJoke);
