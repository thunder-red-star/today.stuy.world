// Landing page for the application
import React from 'react';
import Navigation from "../Navigation/Navigation";

export default class Settings extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation />
                <h1>Settings</h1>
                <p>
                    This is the settings page.
                </p>
            </div>
        );
    }
}