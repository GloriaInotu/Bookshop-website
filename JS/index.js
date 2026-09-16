window.onload = () =>{
    // Getting the buttons to extend blurbs of each book
    const readMorebtn1 = document.getElementById('readMorebtn1')
    const readMorebtn2 = document.getElementById('readMorebtn2')
    const readMorebtn3 = document.getElementById('readMorebtn3')
    const readMorebtn4 = document.getElementById('readMorebtn4')

    // Getting the dots and extra description for each book
    var dots1 = document.getElementById('dots1')
    var dots2 = document.getElementById('dots2')
    var dots3 = document.getElementById('dots3')
    var dots4 = document.getElementById('dots4')

    var moreText1 = document.getElementById('moreDescription1')
    var moreText2 = document.getElementById('moreDescription2')
    var moreText3 = document.getElementById('moreDescription3')
    var moreText4 = document.getElementById('moreDescription4')

    // Adding event listeners so when the buttons is pressed, the blurb of the book will be extended or shorten
    readMorebtn1.addEventListener('click', book1Blurb)
    readMorebtn2.addEventListener('click', book2Blurb)
    readMorebtn3.addEventListener('click', book3Blurb)
    readMorebtn4.addEventListener('click', book4Blurb)

    // Functions to extend or shorten the blurbs of each book - sourced from w3schools
    function book1Blurb() {
        // When the button is clicked, if the dots are hidden, they will be shown and the extra description will be hidden
        if (dots1.style.display === "none") {
            dots1.style.display = "inline";
            readMorebtn1.innerHTML = "Read more";
            moreText1.style.display = "none";
        // When the button is clicked,  if the dots are shown, they will be hidden and the extra description will be shown.
        } else {
            dots1.style.display = "none";
            readMorebtn1.innerHTML = "Read less";
            moreText1.style.display = "inline";
        }      
    } 

    function book2Blurb() {
        if (dots2.style.display === "none") {
            dots2.style.display = "inline";
            readMorebtn2.innerHTML = "Read more";
            moreText2.style.display = "none";
        } else {
            dots2.style.display = "none";
            readMorebtn2.innerHTML = "Read less";
            moreText2.style.display = "inline";
        }
    }
    function book3Blurb() {
        if (dots3.style.display === "none") {
            dots3.style.display = "inline";
            readMorebtn3.innerHTML = "Read more";
            moreText3.style.display = "none";
        } else {
            dots3.style.display = "none";
            readMorebtn3.innerHTML = "Read less";
            moreText3.style.display = "inline";
        }
    }

    function book4Blurb() {
        if (dots4.style.display === "none") {
            dots4.style.display = "inline";
            readMorebtn4.innerHTML = "Read more";
            moreText4.style.display = "none";
        } else {
            dots4.style.display = "none";
            readMorebtn4.innerHTML = "Read less";
            moreText4.style.display = "inline";
        }
    }  

// Getting the search button and adding an event listener to it so when it's clicked, the search function will be called
const searchBtn = document.getElementById('searchBtn');
searchBtn.addEventListener('click', search);

// Function to search for books based on the text in the search bar 
function search() {
    const searchBarbox = document.getElementById('searchBarbox');
    // Get all book divs by the class name
    const books = document.getElementsByClassName('book');
    const booksContent = document.getElementsByClassName('blurb');

    // Loop through each book div and get the content (title, author, genre and description) that will be comapred with the searched text. 
    for(let i = 0; i < books.length; i++) {
        const currentBook = books[i];
        const content = currentBook.getElementsByTagName('p')[0].innerText.toLowerCase();

        // Get the text in the search bar and covert it to lowercase. 
        const searchText = searchBarbox.value.toLowerCase();
        // If the content contains the text in the search bar, display the book, if not, hide it.
        if(content.includes(searchText)){
            currentBook.style.display = "flex";
        } else {
            currentBook.style.display = "none";
            books[i].style.display = "none";
        }
    } 
    }
}