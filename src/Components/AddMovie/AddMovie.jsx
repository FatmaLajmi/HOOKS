import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './AddMovie.css';

const AddMovie = ({ filteredMovies, setFilteredMovies }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const ratingRef = useRef();
  const posterRef = useRef();

  const handleAddMovie = () => {
    const title = titleRef.current.value.trim();
    const description = descRef.current.value.trim();
    const rating = parseFloat(ratingRef.current.value);
    const posterUrl = posterRef.current.value.trim();

    if (!title || !description || isNaN(rating) || !posterUrl) {
      alert("Please fill in all fields correctly.");
      return;
    }

    const newMovie = {
      title,
      description,
      rating,
      posterUrl,
    };

    setFilteredMovies([...filteredMovies, newMovie]);

    // Clear inputs
    titleRef.current.value = "";
    descRef.current.value = "";
    ratingRef.current.value = "";
    posterRef.current.value = "";
  };

  return (
    <Form className="add-movie-form">
      <Form.Control type="text" placeholder="Title" ref={titleRef} />
      <Form.Control type="text" placeholder="Description" ref={descRef} />
      <Form.Control type="number" placeholder="Rating (0-10)" ref={ratingRef} />
      <Form.Control type="text" placeholder="Poster URL" ref={posterRef} />
      <Button onClick={handleAddMovie}>Add Movie</Button>
    </Form>
  );
};

export default AddMovie;
