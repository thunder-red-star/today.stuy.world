// Landing page for the application
import React from 'react';
import Navigation from "../Navigation/Navigation";
import ThemeButton from "../Theme/ThemeButton";
import ThemeSet from "../Theme/ThemeSet";

export default class Announcements extends React.Component {
    render() {
        return (
            <div className="container" id="underline">
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