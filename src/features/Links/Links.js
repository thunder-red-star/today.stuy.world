// Landing page for the application
import React from 'react';
import Navigation from "../Navigation/Navigation";
import ThemeSetter from "../Theme/ThemeSetter";

export default class Links extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation />
                <ThemeSetter />
                <h1>Links</h1>
                <p>
                    This is the links page.
                </p>
            </div>
        );
    }
}