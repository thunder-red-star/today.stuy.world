import './css/Main.css';
import './css/Fonts.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Main app, import main view and hamburger menu
import Landing from './features/Landing/Landing';
import Home from './features/Home/Home';
import Bells from "./features/Bells/Bells";
import Announcements from "./features/Announcements/Announcements";
import Links from "./features/Links/Links";
import Credits from "./features/Credits/Credits";
import Settings from "./features/Settings/Settings";
import Schedule from "./features/BellPage/BellPage";

import './css/Underline.css';
import './css/Center.css';

// Don't forget to call renderImportAttributes
function App() {
  /*
  const [ stylePath, setStylePath ] = useState("./Themes/Light.css");
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    var head = document.head;
    var link = document.createElement("link");

    if (theme == "light") {
      setStylePath("./Themes/Light.css");
    } else if (theme == "dark") {
      setStylePath("./Themes/Dark.css");
    } else {
      setStylePath("./Themes/Light.css");
    }

    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = stylePath;

    head.appendChild(link);

    return () => { head.removeChild(link); }

  }, [theme, stylePath]);
  */

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
          <Route path="/schedule" element={<Schedule />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
