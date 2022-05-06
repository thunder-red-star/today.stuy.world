// Bellpage component
import React from 'react';
import StuyUtils from "../../utils/StuyUtils";
import Navigation from "../Navigation/Navigation";
import ThemeSet from "../Theme/ThemeSet";
import DateTime from "../../utils/DaT";
import TimeUtils from "../../utils/TimeUtils";
export default class BellPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // Load the bell schedule from StuyUtils
        // Create a new empty table
        document.getElementById("bellTableBody").innerHTML = "";

        let bellSchedule = StuyUtils.getBellSchedule(new Date());
        // For each bell, add a new row to the table
        for (let i = 0; i < Object.keys(bellSchedule).length; i++) {
            let bellName = Object.keys(bellSchedule)[i];
            let startTime = bellSchedule[bellName]["start"];
            let endTime = bellSchedule[bellName]["end"];
            // Add the row to the table
            document.getElementById("bellTableBody").innerHTML += `
                <tr>
                    <td>${bellName}</td>
                    <td>${DateTime.format(TimeUtils.UTCify(startTime), "HH:mm A")}</td>
                    <td>${DateTime.format(TimeUtils.UTCify(endTime), "HH:mm A")}</td>
                </tr>
            `;
        }
    }

    render() {
        return (
            <div className="bellPage">
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <Navigation/>
                <ThemeSet/>
                <h1>Today's Bell Schedule</h1>
                <div className="bellTable">
                    <table id="bellTable">
                        <thead>
                        <tr>
                            <th>Period</th>
                            <th>Start Time</th>
                            <th>End Time</th>
                        </tr>
                        </thead>
                        <tbody id="bellTableBody">
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }


}