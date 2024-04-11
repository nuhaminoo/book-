let hamburgerbtn = document.querySelector(".hamburger");
let nav_list = document.querySelector(".nav-list");
let closebtn = document.querySelector(".close");
hamburgerbtn.addEventListener("click", () => {
  nav_list.classList.add("active");
});
closebtn.addEventListener("click", () => {
  nav_list.classList.remove("active");
});

let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
const countToDate = new Date().setHours(new Date().getHours() + 24);
let previousTimeBetweenDates;
setInterval(() => {
  const currentDate = new Date();
  const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
  flipAllCards(timeBetweenDates);

  previousTimeBetweenDates = timeBetweenDates;
}, 250);

function flipAllCards(time) {
  const seconds = time % 60;
  const minutes = Math.floor(time / 60) % 60;
  const hours = Math.floor(time / 3600);
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}


// Counter section logic
$(document).ready(function () {
  $(".count").counterUp({
    delay: 10,
    time: 1200,
  });
});


$(document).ready(function() {
  $("#search-button").click(function() {
    $.getJSON("https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json&jscmd=viewapi", function(data) {
      // Process the API response here
    });
  });
});
$(document).ready(function() {
  $("#search-button").click(function() {
    $.getJSON("https://openlibrary.org/api/books?bibkeys=ISBN:0201558025,LCCN:93005405&format=json&jscmd=viewapi", function(data) {
      var bookInfo = data["ISBN:0201558025"];
      var title = bookInfo.title;
      var author = bookInfo.author.name;
      var previewUrl = bookInfo.preview_url;
      var thumbnailUrl = bookInfo.thumbnail_url;

      $("#book-info").html("<h1>" + title + "</h1><p>Author: " + author + "</p><p>Preview: " + previewUrl + "</p><img src='" + thumbnailUrl + "' alt='Book cover'>");
    });
  });
});
const isbn = '0451526538';
const apiUrl = `https://openlibrary.org/api/books?bibkeys=ISBN:${encodeURIComponent(isbn)}&format=json`;
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const book = data[`ISBN:${isbn}`];
    console.log(book.title);
    console.log(book.authors);
    console.log(book.publish_date);
  })
  .catch(error => console.log(error));
  const authorName = 'J. K. Rowling';
const apiUrl = `https://openlibrary.org/search.json?author=${encodeURIComponent(authorName)}`;

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const authorBooks = data.docs.filter(doc => doc.author_name.includes(authorName));
    console.log(authorBooks);
  })
  .catch(error => console.log(error));