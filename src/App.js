import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { NavBar } from './Components/NavBar/NavBar';
import 'bulma/css/bulma.css'; 
import { HomePage } from './Pages/HomePage/HomePage';
import { PostMyTop } from "./Pages/PostTop5";
import { Top5 } from "./Pages/Top5";
import { AllTop5 } from "./Pages/AllTop5";
import { AboutUs } from "./Pages/AboutUs/AboutUs";


function App() {
  return (
    
     
     <BrowserRouter>
     
      <NavBar />


      

      <Routes>
     
        <Route path="/top-5-lists" element={<Top5/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/not-found" element={<ErrorPage/>}/>
        <Route path="/post-top-5" element={<PostMyTop/>}/>
        <Route path="/alltop5" element={<AllTop5/>}/>
        <Route path="/user-top-5/:id" element={<Top5/>}/>
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/" element={<HomePage />} />


     </Routes>
     </BrowserRouter>
     
     
     
   

  );
}

export default App;
