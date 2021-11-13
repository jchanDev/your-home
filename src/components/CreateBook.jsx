import React, { useState } from "react";

function CreateBook(props) {
  const [book, setBook] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setBook(prevBook => {
      return {
        ...prevBook,
        [name]: value
      };
    });
  }

  function submitBook(event) {
    props.onAdd(book);
    setBook({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={book.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={book.content}
          placeholder="Describe this book..."
          rows="3"
        />
        <button onClick={submitBook}>Add</button>
      </form>
    </div>
  );
}

export default CreateBook;