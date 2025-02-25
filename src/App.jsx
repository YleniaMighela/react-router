import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importo le pages
import HomePage from "./pages/HomePage.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import PostsLista from "./pages/PostsLista.jsx";
import AddPosts from "./pages/AddPosts.jsx";

// importo il LAYOUT
import DefaultLayout from "./layouts/DefaultLayout";





function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/chisiamo" element={<ChiSiamo />} />
            <Route path="/post" element={<PostsLista />} />
            <Route path="/aggiungipost" element={<AddPosts />} />


          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
