import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { ErrorPage } from "./Pages/ErrorPage/ErrorPage";

function App() {
  return (
    <div className="App">
     <h1>MY TOP 5 !</h1>

     <BrowserRouter>
     <Routes>
       <Route path="*" element={<ErrorPage/>}/>
     </Routes>
     </BrowserRouter>
   
    </div>
  );
}

export default App;
