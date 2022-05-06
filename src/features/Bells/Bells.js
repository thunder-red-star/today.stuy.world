// Landing page for the application
import React from 'react';
import Navigation from "../Navigation/Navigation";
import ThemeSet from "../Theme/ThemeSet";

export default class Bells extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation />
                <ThemeSet />
                <h1>Bells</h1>
                <p>
                    This is the bells page.
                </p>
            </div>
        );
    }
}