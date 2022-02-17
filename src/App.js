import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { NavBar } from './Components/NavBar/NavBar';
import 'bulma/css/bulma.css'; 
import { HomePage } from './Pages/HomePage/HomePage';
import { Top5 } from "./Pages/Top5";
import { AllTop5 } from "./Pages/AllTop5";
<<<<<<< HEAD
import {AboutUs} from "./Pages/AboutUs/AboutUs"
import {PostTop} from "./Pages/PostTop5/index"
=======
import { AboutUs } from "./Pages/AboutUs/AboutUs";
import { PostYourTop5 } from "./Pages/PostTop5/PostYourTop5";
>>>>>>> ee0b16b96e7395a2b82406d458e4dd0245ca5aa0



function App() {
  return (
    
     
     <BrowserRouter>
     
      <NavBar />

      

      <Routes>
     
        <Route path="/top-5-lists" element={<Top5/>}/>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/not-found" element={<ErrorPage/>}/>
        <Route path="/post-top-5" element={<PostYourTop5 />}/>
        <Route path="/alltop5" element={<AllTop5/>}/>
        <Route path="/user-top-5/:id" element={<Top5/>}/>
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/" element={<HomePage />} />


     </Routes>
     </BrowserRouter>
     
     
     
   

  );
}

export default App;
