import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Main app, import main view and hamburger menu
import Landing from './features/Landing/Landing';
import Home from './features/Home/Home';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={Landing} />
          <Route path="/home" exact element={Home} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
