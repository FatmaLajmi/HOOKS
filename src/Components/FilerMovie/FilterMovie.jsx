import React, { useRef } from "react";
import movies from "../../movies";
import Form from "react-bootstrap/Form";
import './FilterMovie.css';

const FilterMovie = ({ setFilteredMovies }) => {
  const titleRef = useRef(); // Ref for title input
  const rateRef = useRef(); // Ref for rating input

  const handleFilter = () => {
    const titleText = titleRef.current.value.toLowerCase();
    const rateText = rateRef.current.value.trim(); // Get rating input

    setFilteredMovies(
      movies.filter((movie) => 
        movie.title.toLowerCase().includes(titleText) &&
        (rateText === "" || movie.rating >= parseFloat(rateText)) // Filter by rating only if provided
      )
    );
  };

  return (
    <Form className="filter-form">
      <Form.Control
        type="text"
        placeholder="Search by title"
        ref={titleRef}
        onInput={handleFilter} // Filters when typing
      />
      <Form.Control
        type="number"
        placeholder="Search by rating"
        ref={rateRef}
        onInput={handleFilter} // Filters when rating changes
      />
    </Form>
  );
};

export default FilterMovie;
