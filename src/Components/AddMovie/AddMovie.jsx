import React, { useRef, useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './AddMovie.css';
import Modal from 'react-bootstrap/Modal';

const AddMovie = ({ filteredMovies, setFilteredMovies }) => {
  const titleRef = useRef();
  const descRef = useRef();
  const ratingRef = useRef();
  const posterRef = useRef();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
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
    
    <>
      <Button variant="primary" onClick={handleShow}>
        Add new movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="add-movie-form">
            <Form.Control type="text" placeholder="Title" ref={titleRef} />
            <Form.Control type="text" placeholder="Description" ref={descRef} />
            <Form.Control type="number" placeholder="Rating (0-10)" ref={ratingRef} />
            <Form.Control type="text" placeholder="Poster URL" ref={posterRef} />
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
                handleAddMovie();
                handleClose();
            }}>
            Add Movie
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    
  );
};

export default AddMovie;
