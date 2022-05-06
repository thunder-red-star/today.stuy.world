// Error types for main class

export default {
	// Error types

	StuyError: class extends Error {
		// Base error class
		constructor(message) {
			super(message);
			this.name = 'StuyException';
		}
	},
	InvalidDate: class extends Error {
		// Thrown if a date is invalid
		constructor(message) {
			super(message);
			this.name = 'InvalidDate';
		}
	},
	InvalidTime: class extends Error {
		// Thrown if a time is invalid
		constructor(message) {
			super(message);
			this.name = 'InvalidTime';
		}
	},
	DayNotInData: class extends Error {
		// Thrown if a day is not in the data
		constructor(message) {
			super(message);
			this.name = 'DayNotInData';
		}
	},
	DeprecatedMethod: class extends Error {
		// Thrown if a method is deprecated
		constructor(message) {
			super(message);
			this.name = 'DeprecatedMethod';
		}
	},
}