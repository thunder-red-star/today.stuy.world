// Landing page for the application
import React from 'react';
import Navigation from "../Navigation/Navigation";
import ThemeSet from "../Theme/ThemeSet";

export default class Links extends React.Component {
    render() {
        return (
            <div className="container" id="underline">
                <Navigation />
                <ThemeSet />
                <h1>Links</h1>
                <p>
                    This is the links page.
                </p>
            </div>
        );
    }
}