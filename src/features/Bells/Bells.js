// Landing page for the application
import StuyUtils from '../../utils/StuyUtils';

import React from 'react';
import Navigation from "../Navigation/Navigation";
import ThemeSet from "../Theme/ThemeSet";
import TimeUtils from "../../utils/TimeUtils";
import DateTime from "../../utils/DaT";
import ButtonLink from "../../components/Button/ButtonLink";

// For this page, we will update some parts of the class every second.
export default class Bells extends React.Component {
    componentDidMount() {
        this.bellUpdate = setInterval(() => {
            // Update the bells
            document.getElementById("bell-schedule-header").innerHTML = StuyUtils.getDayInfo(new Date(), true).schedule || "N/A";
            document.getElementById("cycle-header").innerHTML = StuyUtils.getDayInfo(new Date(), true).cycle || "N/A";
            document.getElementById("current-class-header").innerHTML = StuyUtils.getCurrentClass(new Date()).period;
            document.getElementById("time-since").innerHTML = TimeUtils.minutesBetween(new Date(), TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(new Date()).start)) - 300;
            document.getElementById("time-till").innerHTML = TimeUtils.minutesBetween(TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(new Date()).end), new Date()) + 301;
            document.getElementById("time-now").innerHTML = DateTime.format(new Date(), "MM/DD/YYYY hh:mm:ss A");
            document.getElementById("next-class-header").innerHTML = StuyUtils.getNextClass(new Date(), true).period;
            // Get the progress bar
            let progBarPercentage1 = TimeUtils.minutesBetween(new Date(), TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(new Date()).start)) - 300;
            let progBarPercentage2 = /* Get time between start and end of current class */ TimeUtils.minutesBetween(TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(new Date()).end), TimeUtils.epochToCurrent(StuyUtils.getCurrentClass(new Date()).start)) + /* Get time between start and end of next class */ TimeUtils.minutesBetween(TimeUtils.epochToCurrent(StuyUtils.getNextClass(new Date()).start), TimeUtils.epochToCurrent(StuyUtils.getNextClass(new Date()).end)) + /* Get time between start and end of next class */ TimeUtils.minutesBetween(TimeUtils.epochToCurrent(StuyUtils.getNextClass(new Date()).end), new Date()) + 1;
            let progBarPercentage = (1 + (progBarPercentage1 / progBarPercentage2)) * 100;
            console.log("Trying to update progress bar to " + progBarPercentage);
            // document.getElementById("progress-bar-inner").style.width = progBarPercentage + "%";
        }, 1000);
    }
    componentWillUnmount() {
        clearInterval(this.bellUpdate);
    }

    render() {
        return (
            <div className="container" id="underline">
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Navigation />
                <ThemeSet />
                <center>
                    <h1>Bells</h1>
                    <div className="bells-container">
                        <div className="b-day-info">
                            <div class="float-clear">
                                <div className="b-bell-schedule float-left">
                                    <p className="section-header">Current Bell Schedule</p>
                                    <p className="mini-blue" id="bell-schedule-header">Loading...</p>
                                </div>
                                <div className="b-cycle float-right">
                                    <p className="section-header">Cycle</p>
                                    <p className="mini-blue" id="cycle-header">Loading...</p>
                                </div>
                            </div>
                        </div>
                        <div className="b-current-class float-clear">
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
                        <div className="b-next-class float-clear">
                            <p className="section-header">Next Class</p>
                            <p className="blue" id="next-class-header">N/A</p>
                        </div>
                        <div className="b-time-now float-clear" id="time-now">
                            Loading...
                        </div>
                    </div>
                    <ButtonLink
                        className="button button-primary"
                        href="/schedule"
                    >Today's full schedule</ButtonLink>
                </center>
            </div>
        );
    }
}