// Landing page for the application
import React from 'react';
import Navigation from "../Navigation/Navigation";
import ThemeSet from "../Theme/ThemeSet";

export default class Announcements extends React.Component {
    render() {
        return (
            <div className="container" id="underline">
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Navigation />
                <ThemeSet />
                <h1>Announcements</h1>
                <p>
                    This is the announcements page.
                </p>
            </div>
        );
    }
}