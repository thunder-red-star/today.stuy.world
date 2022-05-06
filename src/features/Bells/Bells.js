// Landing page for the application
import StuyUtils from '../../utils/StuyUtils';

import React from 'react';
import Navigation from "../Navigation/Navigation";
import ThemeSet from "../Theme/ThemeSet";
import TimeUtils from "../../utils/TimeUtils";
import DateTime from "../../utils/DaT";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

// For this page, we will update some parts of the class every second.
export default class Bells extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.bellUpdate = setInterval(() => {
            // Update the bells
            document.getElementById("bell-schedule-header").innerHTML = StuyUtils.getDayInfo(new Date(), true).schedule;
            document.getElementById("current-class-header").innerHTML = StuyUtils.getCurrentClass(new Date()).period;
            document.getElementById("time-since").innerHTML = TimeUtils.minutesBetween(TimeUtils.UTCify(new Date()), TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(TimeUtils.UTCify(new Date())).start)) - 300;
            document.getElementById("time-till").innerHTML = TimeUtils.minutesBetween(TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(TimeUtils.UTCify(new Date())).end), TimeUtils.UTCify(new Date())) + 301;
            document.getElementById("time-now").innerHTML = DateTime.format(new Date(), "MM/DD/YYYY hh:mm:ss A");
            // Get the progress bar
            console.log("Trying to update progress bar to " + ((TimeUtils.minutesBetween(TimeUtils.UTCify(new Date()), TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(TimeUtils.UTCify(new Date())).start)) + 301) / TimeUtils.minutesBetween(TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(TimeUtils.UTCify(new Date())).start), TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(TimeUtils.UTCify(new Date())).end))) * 100 + "%")
            document.getElementById("progress-bar-inner").style.width = ((TimeUtils.minutesBetween(TimeUtils.UTCify(new Date()), TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(TimeUtils.UTCify(new Date())).start)) + 301) / TimeUtils.minutesBetween(TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(TimeUtils.UTCify(new Date())).start), TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(TimeUtils.UTCify(new Date())).end))) * 100 + "%";
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.bellUpdate);
    }

    render() {
        return (
            <div className="container" id="underline">
                <Navigation />
                <ThemeSet />
                <center>
                    <h1>Bells</h1>
                    <div className="bells-container">
                        <div className="b-bell-schedule">
                            <p className="section-header">Current Bell Schedule</p>
                            <p className="blue" id="bell-schedule-header">Loading...</p>
                        </div>
                        <div className="b-current-class">
                            <p className="section-header">Current Class</p>
                            <p className="blue" id="current-class-header">Loading...</p>
                        </div>
                        <div className="b-time-since-till-container">
                            <div className="b-time-since float-left">
                                <p className="big-time-since right-align" id="time-since">
                                    <img src="./Img/output-onlinegiftools.gif" alt="Loading..." />
                                </p>
                                <p className="small-time-since right-align">
                                    Minutes since period start
                                </p>
                            </div>
                            <div className="b-time-till float-right">
                                <p className="big-time-till left-align" id="time-till">
                                    <img src="./Img/output-onlinegiftools.gif" alt="Loading..." />
                                </p>
                                <p className="small-time-till left-align">
                                    Minutes until period end
                                </p>
                            </div>
                        </div>
                        <div className="b-progress-bar-container float-clear">
                            <ProgressBar width="100" max="100" progress="50" height="10"></ProgressBar>
                        </div>
                        <div className="b-time-now" id="time-now">
                            Loading...
                        </div>
                    </div>
                </center>
            </div>
        );
    }
}