import './css/Main.css';
import './css/Fonts.css';
import './features/Theme/auto.css';

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
          <Route path="/home" exact element={<Home />} />
            <Route path="/bells" exact element={<Bells />} />
            <Route path="/announcements" exact element={<Announcements />} />
            <Route path="/links" exact element={<Links />} />
            <Route path="/credits" exact element={<Credits />} />
            <Route path="/settings" exact element={<Settings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
