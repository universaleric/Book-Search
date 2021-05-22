import React, { useState, useEffect } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import Form from "../components/Form";
import axios from "axios";

function Books() {
  // Setting our component's initial state
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  // Deletes a book from the database with a given id, then reloads books from the db
  // function deleteBook(id) {
  //   API.deleteBook(id)
  //     .then((res) => loadBooks())
  //     .catch((err) => console.log(err));
  // }

  // Handles updating component state when the user types into the input field
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
      <Row>
        <Col size="md-6">
          <Form
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        </Col>
        <Col size="md-6 sm-12">
          {result.items !== undefined ? (
            <List>
              {result.items.map((book) => (
                <ListItem key={book._id}>
                  <Link to={"/books/" + book._id}>
                    Author: {book.volumeInfo.authors[0]}
                    Description: {book.volumeInfo.description}
                    <img
                      src={book.volumeInfo.imageLinks.thumbnail}
                      alt={book.volumeInfo.title}
                    />
                    Link: {book.volumeInfo.infoLink}
                    Title: {book.volumeInfo.title}
                  </Link>
                  {/* <DeleteBtn onClick={() => deleteBook(book._id)} /> */}
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default Books;
