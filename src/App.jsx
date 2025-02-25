
import { BrowserRouter, Routes, Route } from "react-router-dom";

// importo le pages
import HomePage from "./pages/HomePage.jsx";
import ChiSiamo from "./pages/ChiSiamo.jsx";
import PostsLista from "./pages/PostsLista.jsx";
import AddPosts from "./pages/AddPosts.jsx";
import PostsDetailsPage from "./pages/PostsDetailsPage.jsx";

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
            <Route path="/aggiungipost/:id" element={<PostsDetailsPage />} />



          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
