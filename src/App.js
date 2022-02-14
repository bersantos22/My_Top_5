import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { NavBar } from './Components/NavBar/NavBar';
import 'bulma/css/bulma.css';
import {Section1} from './Components/Section1/section1'

function App() {
  return (
    <div className="App">
     <h1>MY TOP 5 !</h1>

     <BrowserRouter>
     
     <Routes>
       <Route path="*" element={<ErrorPage/>}/>
     </Routes>
     </BrowserRouter>
     
     <NavBar />
     <Section1 />
   
    </div>
  );
}

export default App;
