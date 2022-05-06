export default {
	minutesBetween(start, end) {
		return Math.floor((end - start) / 60000);
	},
	epochToCurrent (epochTime) {
		// "Epoch time" is a date with hours, minutes, and seconds, but otherwise the year, month, and day are all 0.
		// "Current time" is a date with hours, minutes, seconds, and the year, month, and day are all set to the current date.
		// This function converts an epoch time to a current time.
		let currentTime = new Date();
		let currentTimeYear = currentTime.getFullYear();
		let currentTimeMonth = currentTime.getMonth();
		let currentTimeDay = currentTime.getDate();

		return new Date(currentTimeYear, currentTimeMonth, currentTimeDay, epochTime.getHours(), epochTime.getMinutes(), epochTime.getSeconds());
	},
	UTCify(date) {
		return Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds());
	}
}