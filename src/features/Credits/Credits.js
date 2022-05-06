// Landing page for the application
import React from 'react';
import Navigation from "../Navigation/Navigation";
import ThemeSet from "../Theme/ThemeSet";

export default class Credits extends React.Component {
    render() {
        return (
            <div className="container" id="underline">
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <ThemeSet />
                <Navigation />
                <h1>Credits</h1>
                <p>
                    This is the credits page, which will be fully completed in the future.
                </p>
            </div>
        );
    }
}