const movies = [
    {
      "title": "Inception",
      "description": "Un voleur qui vole des secrets à travers les rêves se voit offrir une mission inhabituelle.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 8.8
    },
    {
      "title": "The Dark Knight",
      "description": "Batman affronte le Joker, un criminel imprévisible semant le chaos.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
      "rating": 9.0
    },
    {
      "title": "Interstellar",
      "description": "Un groupe d'explorateurs traverse un trou de ver pour trouver une nouvelle planète habitable.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "rating": 8.6
    },
    {
      "title": "Forrest Gump",
      "description": "L'histoire d'un homme au grand cœur qui traverse des moments clés de l'histoire américaine.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "rating": 8.8
    },
    {
      "title": "The Matrix",
      "description": "Un hacker découvre la vérité sur la réalité et se bat contre un monde contrôlé par des machines.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "rating": 8.7
    },
    {
      "title": "Gladiator",
      "description": "Un général romain trahi cherche vengeance contre l'empereur corrompu.",
      "posterUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/Gladiator_%282000_film_poster%29.png/250px-Gladiator_%282000_film_poster%29.png",
      "rating": 8.5
    },
    {
      "title": "Titanic",
      "description": "Une romance tragique à bord du célèbre navire qui a sombré en 1912.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg",
      "rating": 7.9
    },
    {
      "title": "Avatar",
      "description": "Un soldat en mission sur Pandora découvre un monde fascinant et en tombe amoureux.",
      "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnMhjRNUPGcToFFbGDcclYcuMMi_UHnJbRcQ&s",
      "rating": 7.8
    },
    {
      "title": "Pulp Fiction",
      "description": "Un film culte racontant plusieurs histoires entrelacées dans le monde du crime.",
      "posterUrl": "https://m.media-amazon.com/images/I/81UTs3sC5hL._AC_UF1000,1000_QL80_.jpg",
      "rating": 8.9
    },
    {
      "title": "The Godfather",
      "description": "L'histoire d'une puissante famille mafieuse dirigée par Don Corleone.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "rating": 9.2
    },
    {
      "title": "The Shawshank Redemption",
      "description": "Un prisonnier innocent trouve une lueur d'espoir derrière les barreaux.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
      "rating": 9.3
    },
    {
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "description": "Un groupe de héros entreprend un voyage pour détruire un anneau maléfique.",
      "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwjvtARVQAFZvjgby4i1ev7I2h0OgHcG8YoQ&s",
      "rating": 8.8
    },
    {
      "title": "The Avengers",
      "description": "Les super-héros de Marvel s'unissent pour combattre une menace extraterrestre.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BNGE0YTVjNzUtNzJjOS00NGNlLTgxMzctZTY4YTE1Y2Y1ZTU4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "rating": 8.0
    },
    {
      "title": "Fight Club",
      "description": "Un homme en quête de sens fonde un club secret de combats clandestins.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_.jpg",
      "rating": 8.8
    },
    {
      "title": "The Lion King",
      "description": "L'histoire émouvante de Simba, un jeune lion destiné à devenir roi.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_FMjpg_UX1000_.jpg",
      "rating": 8.5
    }
  ]
  
  
  export default movies