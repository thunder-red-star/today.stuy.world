import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// Main app, import main view and hamburger menu
import Landing from './features/Landing/Landing';
import Home from './features/Home/Home';
function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
      </div>
    </Router>
  );
}

export default App;
