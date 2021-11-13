import React, { useState } from "react";
import CreateBook from "./CreateBook";
import Book from "./Book";

function Bookshelf() {
    const [books, setbooks] = useState([]);

    function addBook(newBook) {
        setbooks(prevBooks => {
            return [...prevBooks, newBook];
        });
    }

    function deleteBook(id) {
        setbooks(prevBooks => {
            return prevBooks.filter((noteItem, index) => {
                return index !== id;
            });
        });
    }


    return (
    <div>
    <img src="./images/empty-bookshelf.png" class="bookshelf" alt="bookshelf" />

    <CreateBook onAdd={addBook} />
        {books.map((bookItem, index) => {
            return (
                <Book   
                    key={index}
                    id={index}
                    title={bookItem.title}
                    content={bookItem.content}
                    onDelete={deleteBook}
                />  
            );
        })}
    </div>
    )
}

export default Bookshelf;