// Landing page for the application
import React from 'react';
import Navigation from '../../features/Navigation/Navigation';
import ThemeSet from "../Theme/ThemeSet";
import { Link } from 'react-router-dom';
// Site specifications:
// * There is a hamburger menu that opens the sidebar
// * In the sidebar, you can click different links to display different views

export default class Home extends React.Component {
    render() {
        return (
            <div id="underline">
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Navigation />
                <ThemeSet />
                <h1>
                    Home
                </h1>
                <p>
                    You are at the home page. We're still working on this, but we're happy to have you here.
                </p>
                <p>
                    If you want to see other pages, click the hamburger menu in the top right corner.
                    It'll open the sidebar, where you can click on the links to see other pages.
                </p>
                <p>
                    Currently, the following pages are available (in progress or complete):
                    <ul>
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/bells">Bells</Link>
                        </li>
                        <li>
                            <Link to="/schedule">Schedule</Link>
                        </li>
                        <li>
                            <Link to="/settings">Settings</Link>
                        </li>
                    </ul>
                </p>
                <p>
                    There are many bugs and issues that we're working on. For example, there is a flash during theme updates, and the app doesn't adjust for timezone changes (please use America/New_York for now).
                    If you have any suggestions, please let us know.
                </p>
            </div>
        );
    }
}