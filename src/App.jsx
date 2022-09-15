import { Routes, Route } from 'react-router-dom';
import Book from './components/Book';
import Nav from './components/Nav';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Book book="ashe" />} />
        <Route path="/catagories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
