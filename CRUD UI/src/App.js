import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllPosts from './components/AllPosts';
import Create from './components/Create';
import Edit from './components/Edit';
import Navbar from './components/Navbar';
import Search from './components/Search'; // Import the Search component

function App() {
  return (
    <>
      <Navbar />
      <Search /> {/* Add the Search component here */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllPosts />} />
          <Route path='/create' element={<Create />} />
          <Route path='/edit' element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
