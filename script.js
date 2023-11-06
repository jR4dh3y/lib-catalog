// Sample book data (you can replace this with real data)
const books = [
    {
        title: "Book 1",
        author: "Author 1",
        copies: 5,
        availableDate: "2023-11-10",
    },
    {
        title: "Book 2",
        author: "Author 2",
        copies: 3,
        availableDate: "2023-11-15",
    },
    // Add more book objects as needed
];

// Function to display books in the HTML
function displayBooks() {
    const bookList = document.getElementById("book-list");
    
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
        datePara.textContent = `Available from: ${book.availableDate}`;
        
        bookDiv.appendChild(titleHeading);
        bookDiv.appendChild(authorPara);
        bookDiv.appendChild(copiesPara);
        bookDiv.appendChild(datePara);
        
        bookList.appendChild(bookDiv);
    });
}

// Call the displayBooks function when the page loads
window.onload = displayBooks;