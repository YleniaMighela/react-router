import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importo le pages
import HomePage from "./pages/HomePage.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import PostsLista from "./pages/PostsLista.jsx";





function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/chisiamo" element={<ChiSiamo />} />
          <Route path="/post" element={<PostsLista />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
