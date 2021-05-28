import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Container } from "../components/Grid";
import { List, ListItem } from "../components/List";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    loadBooks();
  }, []);

  function loadBooks() {
    API.getBooks()
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  function deleteBook(id) {
    API.deleteBook(id)
      .then((res) => loadBooks())
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      {books !== undefined && books !== null ? (
        <List>
          {books.map((book) => (
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
              <DeleteBtn onClick={() => deleteBook(book._id)} />
            </ListItem>
          ))}
        </List>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </Container>
  );
}

export default Saved;
