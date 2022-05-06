// Landing page for the application
import React from 'react';
import Navigation from '../../features/Navigation/Navigation';
import ThemeSetter from "../Theme/ThemeSetter";
// Site specifications:
// * There is a hamburger menu that opens the sidebar
// * In the sidebar, you can click different links to display different views

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Navigation />
                <ThemeSetter />
                <h1>
                    Home
                </h1>
                <p>
                    You are at the home page. We're still working on this, but we're happy to have you here.
                </p>
            </div>
        );
    }
}