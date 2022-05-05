import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Main app, import main view and hamburger menu
import Landing from './features/Landing/Landing';
import Home from './features/Home/Home';
import Bells from "./features/Bells/Bells";
import Announcements from "./features/Announcements/Announcements";
import Links from "./features/Links/Links";
import Credits from "./features/Credits/Credits";
import Settings from "./features/Settings/Settings";

// Don't forget to call renderImportAttributes
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/home/*" exact element={<Home />} />
            <Route path="/bells" component={Bells} />
            <Route path="/announcements" component={Announcements} />
            <Route path="/links" component={Links} />
            <Route path="/credits" component={Credits} />
            <Route path="/settings" component={Settings} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
