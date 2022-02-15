import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { NavBar } from './Components/NavBar/NavBar';
import 'bulma/css/bulma.css'; 
import { HomePage } from './Pages/HomePage/HomePage';
import { PostMyTop } from "./Pages/PostTop5";

function App() {
  return (
    
     
     <BrowserRouter>
     
      <NavBar />

      <HomePage />

      <Routes>
     
     
       <Route path="/not-found" element={<ErrorPage/>}/>
       <Route path="/post-top-5" element={<PostMyTop/>}/>

     </Routes>
     </BrowserRouter>
     
     
     
   

  );
}

export default App;
