// Landing page for the application
import React from 'react';
import Navigation from "../Navigation/Navigation";
import ThemeButton from "../Theme/ThemeButton";

export default class Settings extends React.Component {
    render() {
        return (
            <div className="container" id="underline">
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Navigation />
                <h1>Settings</h1>
                <p>
                    Here you can mess around with the settings of the application. Please keep in mind that editing settings will store keys in local storage (i.e. cookies, but without an expiration date).
                </p>
                <h2>Theme</h2>
                <ThemeButton />
            </div>
        );
    }
}