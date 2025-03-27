import MovieList from './Components/MovieList/MovieList';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="app-header animated-entry">
        <h1 className="app-title">🎬🍿✨MovieMagic✨🍿🎬</h1>
        <p className="app-subtitle">Discover and manage your favorite films</p>
      </header>
      
      <main className="main-container">
        <MovieList/>
      </main>
      
      <footer className="app-footer">
        <p className="footer-text">
          © {new Date().getFullYear()} MovieMagic - All rights reserved
        </p>
      </footer>
    </div>
  );
}

export default App;