import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";
import { NavBar } from './Components/NavBar/NavBar';
import 'bulma/css/bulma.css';
/* import { HomePage } from "./Pages/HomePage/HomePage"; */

function App() {
  return (
    <div className="App">

     <BrowserRouter>
     <NavBar />
     <Routes>
       <Route path="*" element={<ErrorPage/>}/>
     </Routes>
     </BrowserRouter>
   
    </div>
  );
}

export default App;
