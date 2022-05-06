// Landing page for the application
import StuyUtils from '../../utils/StuyUtils';

import React from 'react';
import Navigation from "../Navigation/Navigation";
import ThemeSet from "../Theme/ThemeSet";

// For this page, we will update some parts of the class every second.
export default class Bells extends React.Component {
    render() {
        return (
            <div className="container">
                <Navigation />
                <ThemeSet />
                <h1>Bells</h1>
                <div className="bells-container">
                    <div className="b-bell-schedule">
                        <h3>Current Bell Schedule</h3>
                        <h2>{StuyUtils.getBellSchedule(new Date())}</h2>
                    </div>
                    <div className="b-current-class">
                        <h3>Current Class</h3>
                        <h2>{StuyUtils.getCurrentClass(new Date())}</h2>
                    </div>
                </div>
            </div>
        );
    }
}