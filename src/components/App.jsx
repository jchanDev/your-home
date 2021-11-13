import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Book from "./Book";
import CreateBook from "./CreateBook";
import Bookshelf from "./Bookshelf";

function App() {
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

    return(
        <div>
            <Header />
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
            <Bookshelf />
            <Footer />
        </div>
    );
}

export default App;