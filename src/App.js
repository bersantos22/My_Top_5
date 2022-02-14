import './App.css';
import { NavBar } from './Components/NavBar/NavBar';
import 'bulma/css/bulma.css'; 
import { HomePage } from './Pages/HomePage/HomePage';
function App() {
  return (
    <div className="App">
     <NavBar />
      <HomePage />
    </div>
  );
}

export default App;
