import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { NavBar } from './Components/NavBar/NavBar';
import 'bulma/css/bulma.css'; 
import { HomePage } from './Pages/HomePage/HomePage';
import { PostMyTop } from "./Pages/PostTop5";
import { AboutUs } from "./Pages/AboutUs/AboutUs";

function App() {
  return (
    
     
     <BrowserRouter>
     
      <NavBar />

      <Routes>
     
     
       <Route path="/not-found" element={<ErrorPage/>}/>
       <Route path="/post-top-5" element={<PostMyTop/>}/>
       <Route path="/aboutUs" element={<AboutUs />} />
       <Route path="/" element={<HomePage />} />

     </Routes>
     </BrowserRouter>
     
     
     
   

  );
}

export default App;
