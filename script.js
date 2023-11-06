function displayBooks(books) {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = ""; // Clear the previous book list

    books.forEach((book) => {
        const bookDiv = document.createElement("div");
        bookDiv.classList.add("book");

        const titleHeading = document.createElement("h2");
        titleHeading.textContent = book.title;

        const authorPara = document.createElement("p");
        authorPara.textContent = `Author: ${book.author}`;

        const copiesPara = document.createElement("p");
        copiesPara.textContent = `Copies available: ${book.copies}`;

        const datePara = document.createElement("p");
        datePara.textContent = `Available from: ${book.available_date}`;

        bookDiv.appendChild(titleHeading);
        bookDiv.appendChild(authorPara);
        bookDiv.appendChild(copiesPara);
        bookDiv.appendChild(datePara);

        bookList.appendChild(bookDiv);
    });
}

// Function to search for books
function searchBooks() {
    const searchInput = document.getElementById("search-input").value.toLowerCase();
    const filteredBooks = allBooksData.filter((book) => {
        return (
            book.title.toLowerCase().includes(searchInput) ||
            book.author.toLowerCase().includes(searchInput)
        );
    });

    displayBooks(filteredBooks);
}

// Function to fetch books from the Python script
function fetchBooks() {
    fetch("http://127.0.0.1:5000") // genrate the path to the url form the python script *important ha ye*
        .then((response) => response.json())
        .then((books) => {
            allBooksData = books; // Store all book data for searching
            displayBooks(books);
        })
        .catch((error) => {
            console.error("Error fetching book data:", error);
        });
}



// Call the searchBooks function when the user types in the search input
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", searchBooks);

// Call the fetchBooks function when the page loads
window.onload = function () {
    fetchBooks();
};

let allBooksData = []; // Store all book data for searching
