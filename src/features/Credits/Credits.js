// Landing page for the application
import React from 'react';
import Navigation from "../Navigation/Navigation";
import ThemeSet from "../Theme/ThemeSet";

export default class Credits extends React.Component {
    render() {
        return (
            <div className="container" id="underline">
                <ThemeSet />
                <Navigation />
                <h1>Credits</h1>
                <p>
                    This is the credits page.
                </p>
            </div>
        );
    }
}