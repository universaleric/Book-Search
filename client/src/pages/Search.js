import React, { useState, useEffect } from "react";
import SaveBtn from "../components/SaveBtn";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Form from "../components/Form";
import axios from "axios";

function Search() {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then((res) => loadBooks())
  //     .catch((err) => console.log(err));
  // }

  function saveBook(bookData) {
    API.saveBook(bookData)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const books = event.target.value;
    console.log(books);
    setSearch(books);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("https://www.googleapis.com/books/v1/volumes?q=" + search)
      .then((res) => {
        setResult(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  console.log(result.items);
  console.log(result.length);
  return (
    <Container fluid>
      <Form handleInputChange={handleInputChange} handleSubmit={handleSubmit} />

      {result.items !== undefined && result.items !== null ? (
        <List>
          {result.items.map((book) => (
            <ListItem key={book._id}>
              <div>
                <img
                  src={book.volumeInfo.imageLinks.thumbnail}
                  alt={book.volumeInfo.title}
                />
              </div>
              <div>
                <strong>Title:</strong> {book.volumeInfo.title}
              </div>
              <div>
                <strong>Author:</strong> {book.volumeInfo.authors[0]}
              </div>
              <div>
                <strong>Description:</strong> {book.volumeInfo.description}
              </div>
              <div>
                <strong>Link:</strong>{" "}
                <a href={book.volumeInfo.infoLink}>
                  {book.volumeInfo.infoLink}
                </a>
              </div>
              <SaveBtn onClick={() => saveBook(book._id)} />
              {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </Container>
  );
}

export default Search;
