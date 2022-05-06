// Landing page for the application
import React from 'react';
import Navigation from "../Navigation/Navigation";
import ThemeSetter from "../Theme/ThemeSetter";

export default class Announcements extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation />
                <ThemeSetter />
                <h1>Announcements</h1>
                <p>
                    This is the announcements page.
                </p>
            </div>
        );
    }
}