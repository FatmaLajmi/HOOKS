import React from 'react';
import Card from 'react-bootstrap/Card';
import './MovieCard.css';
import { FaStar } from 'react-icons/fa';

//setting default props

const defaultProps =    {
    title: "pas de titre",
    description: "inconnu",
    posterUrl: "https://img.freepik.com/vecteurs-libre/pile-design-plat-dessine-main-illustration-livres_23-2149341898.jpg",
    rating: 0  
  }
  
const MovieCard=({ movie = defaultProps }) =>{
    //distructering
    const { title, description, posterUrl, rating} = movie;

  return (
    <Card className="movie-card">
        <Card.Img variant="top" src={posterUrl} height={380} width={240} />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <div className="rating">
                <FaStar />
                {rating}/10
            </div>
        </Card.Body>
    </Card>
  )
}

export default MovieCard