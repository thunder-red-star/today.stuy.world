(() => {
	var t = {
		658: t => {
			t.exports = {
				StuyError: class extends Error {
					constructor(t) {
						super(t), this.name = "StuyException"
					}
				}, InvalidDate: class extends Error {
					constructor(t) {
						super(t), this.name = "InvalidDate"
					}
				}, InvalidTime: class extends Error {
					constructor(t) {
						super(t), this.name = "InvalidTime"
					}
				}, DayNotInData: class extends Error {
					constructor(t) {
						super(t), this.name = "DayNotInData"
					}
				}, DeprecatedMethod: class extends Error {
					constructor(t) {
						super(t), this.name = "DeprecatedMethod"
					}
				}
			}
		}, 138: (t, e, n) => {
			const o = n(658), r = n(395);
			Info = function (t, e, n, o, r) {
				let a = {};
				return a.school = t, a.cycle = e, a.schedule = n, a.testing = o, a.events = r, a
			}, Time = function (t, e) {
				let n = {};
				return n.start = t, n.end = e, n
			};
			let a = {};

			function u(t) {
				return t instanceof Date ? t.getTime() : r.parse(t, "H:mm A").getTime()
			}

			"Date\tSchool\tCycle\tSchedule\tTesting\tEvents\n2021-09-13\tTrue\tA\tHomeroom\tNone\tStart of MP1\n2021-09-14\tTrue\tB\tHomeroom\tNone\tNone\n2021-09-15\tTrue\tA\tHomeroom\tNone\tNone\n2021-09-16\tFalse\tNone\tNone\tNone\tYom Kippur\n2021-09-17\tTrue\tB\tHomeroom\tNone\tNone\n2021-09-18\tFalse\tNone\tNone\tNone\tNone\n2021-09-19\tFalse\tNone\tNone\tNone\tNone\n2021-09-20\tTrue\tA\tRegular\tScience\tNone\n2021-09-21\tTrue\tB1\tRegular\tScience\tNone\n2021-09-22\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2021-09-23\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2021-09-24\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2021-09-25\tFalse\tNone\tNone\tNone\tNone\n2021-09-26\tFalse\tNone\tNone\tNone\tNone\n2021-09-27\tTrue\tB\tRegular\tScience\tNone\n2021-09-28\tTrue\tA1\tRegular\tScience\tNone\n2021-09-29\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2021-09-30\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone\n2021-10-01\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2021-10-02\tFalse\tNone\tNone\tNone\tNone\n2021-10-03\tFalse\tNone\tNone\tNone\tNone\n2021-10-04\tTrue\tA\tRegular\tScience\tNone\n2021-10-05\tTrue\tB1\tRegular\tScience\tNone\n2021-10-06\tTrue\tA1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting\n2021-10-07\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2021-10-08\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2021-10-09\tFalse\tNone\tNone\tNone\tNone\n2021-10-10\tFalse\tNone\tNone\tNone\tNone\n2021-10-11\tFalse\tNone\tNone\tNone\tIndigenous Peoples' Day\n2021-10-12\tTrue\tB\tRegular\tScience\tNone\n2021-10-13\tTrue\tA\tPSAT\tNone\tPSAT Administration\n2021-10-14\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2021-10-15\tTrue\tA2\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2021-10-16\tFalse\tNone\tNone\tNone\tNone\n2021-10-17\tFalse\tNone\tNone\tNone\tNone\n2021-10-18\tTrue\tB\tRegular\tScience\tNone\n2021-10-19\tTrue\tA1\tRegular\tScience\tNone\n2021-10-20\tTrue\tB1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting, End of MP1\n2021-10-21\tTrue\tA2\tRegular\tMathematics, Music, Art\tStart of MP2\n2021-10-22\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2021-10-23\tFalse\tNone\tNone\tNone\tNone\n2021-10-24\tFalse\tNone\tNone\tNone\tNone\n2021-10-25\tTrue\tA\tRegular\tScience\tNone\n2021-10-26\tTrue\tB1\tRegular\tScience\tNone\n2021-10-27\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tGrades due 8am\n2021-10-28\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2021-10-29\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2021-10-30\tFalse\tNone\tNone\tNone\tNone\n2021-10-31\tFalse\tNone\tNone\tNone\tNone\n2021-11-01\tTrue\tB1\tRegular\tScience\tReport Card Distribution\n2021-11-02\tFalse\tNone\tNone\tNone\tElection Day, Professional Development\n2021-11-03\tTrue\tA1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting\n2021-11-04\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2021-11-05\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2021-11-06\tFalse\tNone\tNone\tNone\tNone\n2021-11-07\tFalse\tNone\tNone\tNone\tNone\n2021-11-08\tTrue\tB1\tRegular\tScience\tNone\n2021-11-09\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2021-11-10\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2021-11-11\tFalse\tNone\tNone\tNone\tVeterans Day\n2021-11-12\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2021-11-13\tFalse\tNone\tNone\tNone\tNone\n2021-11-14\tFalse\tNone\tNone\tNone\tNone\n2021-11-15\tTrue\tB\tRegular\tNone\tParent Teacher Conferences (evening)\n2021-11-16\tTrue\tA1\tPTC\tScience\tParent Teacher Conferences (daytime)\n2021-11-17\tTrue\tB1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting\n2021-11-18\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone\n2021-11-19\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2021-11-20\tFalse\tNone\tNone\tNone\tNone\n2021-11-21\tFalse\tNone\tNone\tNone\tNone\n2021-11-22\tTrue\tA\tRegular\tScience\tNone\n2021-11-23\tTrue\tB1\tRegular\tMathematics, Music, Art, Technology\tNone\n2021-11-24\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Computer Science, Social Studies, Health\tNone\n2021-11-25\tFalse\tNone\tNone\tNone\tThanksgiving Day\n2021-11-26\tFalse\tNone\tNone\tNone\tThanksgiving Day\n2021-11-27\tFalse\tNone\tNone\tNone\tNone\n2021-11-28\tFalse\tNone\tNone\tNone\tNone\n2021-11-29\tTrue\tB\tRegular\tNone\tNone\n2021-11-30\tTrue\tA1\tRegular\tScience\tNone\n2021-12-01\tTrue\tB1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting\n2021-12-02\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone\n2021-12-03\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tEnd of MP2\n2021-12-04\tFalse\tNone\tNone\tNone\tNone\n2021-12-05\tFalse\tNone\tNone\tNone\tNone\n2021-12-06\tTrue\tA\tRegular\tScience\tStart of MP3\n2021-12-07\tTrue\tB1\tRegular\tScience\tNone\n2021-12-08\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2021-12-09\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2021-12-10\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tGrades due 8am\n2021-12-11\tFalse\tNone\tNone\tNone\tNone\n2021-12-12\tFalse\tNone\tNone\tNone\tNone\n2021-12-13\tTrue\tB\tRegular\tScience\tNone\n2021-12-14\tTrue\tA1\tRegular\tScience\tReport Card Distribution\n2021-12-15\tTrue\tB1\tConference\tWorld Languages, English Language Arts, Health\tDepartment Meeting\n2021-12-16\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone\n2021-12-17\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2021-12-18\tFalse\tNone\tNone\tNone\tNone\n2021-12-19\tFalse\tNone\tNone\tNone\tNone\n2021-12-20\tTrue\tA1\tRegular\tScience\tNone\n2021-12-21\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2021-12-22\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone\n2021-12-23\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2021-12-24\tFalse\tNone\tNone\tNone\tWinter Recess\n2021-12-25\tFalse\tNone\tNone\tNone\tNone\n2021-12-26\tFalse\tNone\tNone\tNone\tNone\n2021-12-27\tFalse\tNone\tNone\tNone\tWinter Recess\n2021-12-28\tFalse\tNone\tNone\tNone\tWinter Recess\n2021-12-29\tFalse\tNone\tNone\tNone\tWinter Recess\n2021-12-30\tFalse\tNone\tNone\tNone\tWinter Recess\n2021-12-31\tFalse\tNone\tNone\tNone\tWinter Recess\n2022-01-01\tFalse\tNone\tNone\tNone\tNone\n2022-01-02\tFalse\tNone\tNone\tNone\tNone\n2022-01-03\tTrue\tA\tRegular\tNone\tNone\n2022-01-04\tTrue\tB1\tRegular\tScience\tNone\n2022-01-05\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2022-01-06\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2022-01-07\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-01-08\tFalse\tNone\tNone\tNone\tNone\n2022-01-09\tFalse\tNone\tNone\tNone\tNone\n2022-01-10\tTrue\tB\tRegular\tScience\tNone\n2022-01-11\tTrue\tA1\tRegular\tScience\tNone\n2022-01-12\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2022-01-13\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone\n2022-01-14\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-01-15\tFalse\tNone\tNone\tNone\tNone\n2022-01-16\tFalse\tNone\tNone\tNone\tNone\n2022-01-17\tFalse\tNone\tNone\tNone\tMartin Luther King Jr. Day\n2022-01-18\tTrue\tA1\tRegular\tFinals\tFinals\n2022-01-19\tTrue\tB1\tRegular\tFinals\tFinals\n2022-01-20\tTrue\tA2\tRegular\tFinals\tFinals\n2022-01-21\tTrue\tB2\tRegular\tFinals\tFinals\n2022-01-22\tFalse\tNone\tNone\tNone\tNone\n2022-01-23\tFalse\tNone\tNone\tNone\tNone\n2022-01-24\tTrue\tA\tRegular\tFinals\tFinals, End of MP3\n2022-01-25\tFalse\tNone\tNone\tNone\tRegents Exams\n2022-01-26\tFalse\tNone\tNone\tNone\tRegents Exams\n2022-01-27\tFalse\tNone\tNone\tNone\tRegents Exams\n2022-01-28\tFalse\tNone\tNone\tNone\tRegents Exams, Senior Grades\n2022-01-29\tFalse\tNone\tNone\tNone\tNone\n2022-01-30\tFalse\tNone\tNone\tNone\tNone\n2022-01-31\tFalse\tNone\tNone\tNone\tChancellor's Day\n2022-02-01\tFalse\tNone\tNone\tNone\tLunar New Year\n2022-02-02\tTrue\tB\tConference\tNone\tFaculty Meeting, Start of MP1\n2022-02-03\tTrue\tA1\tRegular\tNone\tNone\n2022-02-04\tTrue\tB1\tRegular\tNone\tGrades due 8am\n2022-02-05\tFalse\tNone\tNone\tNone\tNone\n2022-02-06\tFalse\tNone\tNone\tNone\tNone\n2022-02-07\tTrue\tA\tRegular\tScience\tNone\n2022-02-08\tTrue\tB1\tRegular\tScience\tReport Card Distribution\n2022-02-09\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2022-02-10\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2022-02-11\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-02-12\tFalse\tNone\tNone\tNone\tNone\n2022-02-13\tFalse\tNone\tNone\tNone\tNone\n2022-02-14\tTrue\tB\tRegular\tScience\tNone\n2022-02-15\tTrue\tA1\tRegular\tScience\tNone\n2022-02-16\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2022-02-17\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone\n2022-02-18\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-02-19\tFalse\tNone\tNone\tNone\tNone\n2022-02-20\tFalse\tNone\tNone\tNone\tNone\n2022-02-21\tFalse\tNone\tNone\tNone\tMidwinter Recess\n2022-02-22\tFalse\tNone\tNone\tNone\tMidwinter Recess\n2022-02-23\tFalse\tNone\tNone\tNone\tMidwinter Recess\n2022-02-24\tFalse\tNone\tNone\tNone\tMidwinter Recess\n2022-02-25\tFalse\tNone\tNone\tNone\tMidwinter Recess\n2022-02-26\tFalse\tNone\tNone\tNone\tNone\n2022-02-27\tFalse\tNone\tNone\tNone\tNone\n2022-02-28\tTrue\tA\tRegular\tNone\tNone\n2022-03-01\tTrue\tB1\tRegular\tScience\tNone\n2022-03-02\tTrue\tA1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting\n2022-03-03\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2022-03-04\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-03-05\tFalse\tNone\tNone\tNone\tNone\n2022-03-06\tFalse\tNone\tNone\tNone\tNone\n2022-03-07\tTrue\tB\tRegular\tScience\tNone\n2022-03-08\tTrue\tA1\tRegular\tScience\tNone\n2022-03-09\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2022-03-10\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone\n2022-03-11\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-03-12\tFalse\tNone\tNone\tNone\tNone\n2022-03-13\tFalse\tNone\tNone\tNone\tNone\n2022-03-14\tTrue\tA\tRegular\tScience\tNone\n2022-03-15\tTrue\tB1\tRegular\tScience\tNone\n2022-03-16\tTrue\tA1\tConference\tWorld Languages, English Language Arts, Health\tDepartment Meeting, End of MP1\n2022-03-17\tTrue\tB2\tRegular\tMathematics, Music, Art\tStart of MP2\n2022-03-18\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-03-19\tFalse\tNone\tNone\tNone\tNone\n2022-03-20\tFalse\tNone\tNone\tNone\tNone\n2022-03-21\tTrue\tB\tRegular\tScience\tNone\n2022-03-22\tTrue\tA1\tRegular\tScience\tNone\n2022-03-23\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tGrades due 8am\n2022-03-24\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone\n2022-03-25\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-03-26\tFalse\tNone\tNone\tNone\tNone\n2022-03-27\tFalse\tNone\tNone\tNone\tNone\n2022-03-28\tTrue\tA\tRegular\tScience\tReport Card Distribution\n2022-03-29\tTrue\tB1\tRegular\tScience\tNone\n2022-03-30\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2022-03-31\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2022-04-01\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-04-02\tFalse\tNone\tNone\tNone\tNone\n2022-04-03\tFalse\tNone\tNone\tNone\tNone\n2022-04-04\tTrue\tB1\tRegular\tScience\tNone\n2022-04-05\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2022-04-06\tTrue\tB2\tConference\tMathematics, Music, Art\tFaculty Meeting\n2022-04-07\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tParent Teacher Conferences (evening)\n2022-04-08\tTrue\tB\tPTC\tNone\tParent Teacher Conferences (daytime)\n2022-04-09\tFalse\tNone\tNone\tNone\tNone\n2022-04-10\tFalse\tNone\tNone\tNone\tNone\n2022-04-11\tTrue\tA1\tRegular\tScience\tNone\n2022-04-12\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2022-04-13\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone\n2022-04-14\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-04-15\tFalse\tNone\tNone\tNone\tSpring Recess\n2022-04-16\tFalse\tNone\tNone\tNone\tNone\n2022-04-17\tFalse\tNone\tNone\tNone\tNone\n2022-04-18\tFalse\tNone\tNone\tNone\tSpring Recess\n2022-04-19\tFalse\tNone\tNone\tNone\tSpring Recess\n2022-04-20\tFalse\tNone\tNone\tNone\tSpring Recess\n2022-04-21\tFalse\tNone\tNone\tNone\tSpring Recess\n2022-04-22\tFalse\tNone\tNone\tNone\tSpring Recess\n2022-04-23\tFalse\tNone\tNone\tNone\tNone\n2022-04-24\tFalse\tNone\tNone\tNone\tNone\n2022-04-25\tTrue\tA\tRegular\tNone\tNone\n2022-04-26\tTrue\tB1\tRegular\tScience\tNone\n2022-04-27\tTrue\tA1\tConference\tWorld Languages, English Language Arts, Health\tDepartment Meeting\n2022-04-28\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2022-04-29\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-04-30\tFalse\tNone\tNone\tNone\tNone\n2022-05-01\tFalse\tNone\tNone\tNone\tNone\n2022-05-02\tFalse\tNone\tNone\tNone\tEid al-Fitr\n2022-05-03\tTrue\tA1\tRegular\tScience\tNone\n2022-05-04\tTrue\tB1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting, End of MP2\n2022-05-05\tTrue\tA2\tRegular\tMathematics, Music, Art\tStart of MP3\n2022-05-06\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-05-07\tFalse\tNone\tNone\tNone\tNone\n2022-05-08\tFalse\tNone\tNone\tNone\tNone\n2022-05-09\tTrue\tA\tRegular\tScience\tNone\n2022-05-10\tTrue\tB1\tRegular\tScience\tNone\n2022-05-11\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tGrades due 8am\n2022-05-12\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2022-05-13\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-05-14\tFalse\tNone\tNone\tNone\tNone\n2022-05-15\tFalse\tNone\tNone\tNone\tNone\n2022-05-16\tTrue\tB\tRegular\tScience\tReport Card Distribution\n2022-05-17\tTrue\tA1\tRegular\tScience\tNone\n2022-05-18\tTrue\tB1\tConference\tWorld Languages, English Language Arts, Health\tDepartment Meeting\n2022-05-19\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone\n2022-05-20\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-05-21\tFalse\tNone\tNone\tNone\tNone\n2022-05-22\tFalse\tNone\tNone\tNone\tNone\n2022-05-23\tTrue\tA\tRegular\tScience\tNone\n2022-05-24\tTrue\tB1\tRegular\tScience\tNone\n2022-05-25\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2022-05-26\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone\n2022-05-27\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-05-28\tFalse\tNone\tNone\tNone\tNone\n2022-05-29\tFalse\tNone\tNone\tNone\tNone\n2022-05-30\tFalse\tNone\tNone\tNone\tMemorial Day\n2022-05-31\tTrue\tB\tRegular\tScience\tNone\n2022-06-01\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone\n2022-06-02\tTrue\tB1\tRegular\tMathematics, Music, Art\tNone\n2022-06-03\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone\n2022-04-04\tFalse\tNone\tNone\tNone\tNone\n2022-06-05\tFalse\tNone\tNone\tNone\tNone\n2022-06-06\tTrue\tB2\tRegular\tFinals\tFinals\n2022-06-07\tFalse\tNone\tNone\tNone\tClerical Day\n2022-06-08\tTrue\tA1\tRegular\tFinals\tFinals\n2022-06-09\tFalse\tNone\tNone\tNone\tChancellor's Day\n2022-06-10\tTrue\tB1\tRegular\tFinals\tFinals\n2022-06-11\tFalse\tNone\tNone\tNone\tNone\n2022-06-12\tFalse\tNone\tNone\tNone\tNone\n2022-06-13\tTrue\tA2\tRegular\tFinals\tFinals\n2022-06-14\tTrue\tB\tRegular\tFinals\tFinals, End of MP3\n2022-06-15\tFalse\tNone\tNone\tNone\tRegents Exams\n2022-06-16\tFalse\tNone\tNone\tNone\tRegents Exams\n2022-06-17\tFalse\tNone\tNone\tNone\tRegents Exams\n2022-06-18\tFalse\tNone\tNone\tNone\tNone\n2022-06-19\tFalse\tNone\tNone\tNone\tNone\n2022-06-20\tFalse\tNone\tNone\tNone\tJuneteenth\n2022-06-21\tFalse\tNone\tNone\tNone\tRegents Exams\n2022-06-22\tFalse\tNone\tNone\tNone\tRegents Exams\n2022-06-23\tFalse\tNone\tNone\tNone\tRegents Exams\n2022-06-24\tFalse\tNone\tNone\tNone\tRegents Exams, Grades due 8am\n2022-06-25\tFalse\tNone\tNone\tNone\tNone\n2022-06-26\tTrue\tNone\tNone\tNone\tNone\n2022-06-27\tTrue\tNone\tRegular\tNone\tLast day of school".split("\n").forEach((function (t) {
				let [e, n, o, r, u, s] = t.split("\t");
				a[e] = Info("True" == n, "None" == o ? null : o, "None" == r ? null : r, "None" == u ? null : u, "None" == s ? null : s)
			}));
			let s = {}, i = {}, l = {}, N = {},
				c = "Category\tStart\tEnd\nBefore School\t12:00 AM\t8:00 AM\nPeriod 1\t8:00 AM\t8:41 AM\nPassing 1 to 2\t8:41 AM\t8:45 AM\nPeriod 2\t8:45 AM\t9:26 AM\nPassing 2 to 3\t9:26 AM\t9:31 AM\nPeriod 3\t9:31 AM\t10:15 AM\nPassing 3 to 4\t10:15 AM\t10:20 AM\nPeriod 4\t10:20 AM\t11:01 AM\nPassing 4 to 5\t11:01 AM\t11:06 AM\nPeriod 5\t11:06 AM\t11:47 AM\nPassing 5 to 6\t11:47 AM\t11:52 AM\nPeriod 6\t11:52 AM\t12:33 PM\nPassing 6 to 7\t12:33 PM\t12:38 PM\nPeriod 7\t12:38 PM\t1:19 PM\nPassing 7 to 8\t1:19 PM\t1:24 PM\nPeriod 8\t1:24 PM\t2:05 PM\nPassing 8 to 9\t2:05 PM\t2:09 PM\nPeriod 9\t2:09 PM\t2:50 PM\nPassing 9 to 10\t2:50 PM\t2:54 PM\nPeriod 10\t2:54 PM\t3:35 PM\nAfter School\t3:35 PM\t11:59 PM".split("\n");
			c.shift(), c.forEach((function (t) {
				let e = t.split("\t");
				s[e[0]] = Time(r.parse(e[1], "h:mm A", !0), r.parse(e[2].trim(), "h:mm A", !0))
			}));
			let g = "Category\tStart\tEnd\nBefore School\t12:00 AM\t8:00 AM\nPeriod 1\t8:00 AM\t8:37 AM\nPassing 1 to 2\t8:37 AM\t8:41 AM\nPeriod 2\t8:41 AM\t9:18 AM\nPassing 2 to 3\t9:18 AM\t9:22 AM\nPeriod 3\t9:22 AM\t9:59 AM\nPassing 3 to 4\t9:59 AM\t10:03 AM\nPeriod 4\t10:03 AM\t10:40 AM\nPassing 4 to 5\t10:40 AM\t10:44 AM\nPeriod 5\t10:44 AM\t11:21 AM\nPassing 5 to 6\t11:21 AM\t11:25 AM\nPeriod 6\t11:25 AM\t12:02 PM\nPassing 6 to 7\t12:02 PM\t12:06 PM\nPeriod 7\t12:06 PM\t12:43 PM\nPassing 7 to 8\t12:43 PM\t12:47 PM\nPeriod 8\t12:47 PM\t1:24 PM\nPassing 8 to 9\t1:24 PM\t1:28 PM\nPeriod 9\t1:28 PM\t2:05 PM\nPassing 9 to 10\t2:05 PM\t2:09 PM\nPeriod 10\t2:09 PM\t2:46 PM\nTeacher Conferences\t2:50 PM\t3:30 PM\nAfter School\t3:30 PM\t11:59 PM".split("\n");
			g.shift(), g.forEach((function (t) {
				let e = t.split("\t");
				i[e[0]] = Time(r.parse(e[1], "h:mm A", !0), r.parse(e[2].trim(), "h:mm A", !0))
			}));
			let M = "Category\tStart\tEnd\nBefore School\t12:00 AM\t8:00 AM\nPeriod 1\t8:00 AM\t8:40 AM\nPassing 1 to 2\t8:40 AM\t8:45 AM\nPeriod 2\t8:45 AM\t9:25 AM\nPassing 2 to 3\t9:25 AM\t9:29 AM\nPeriod 3\t9:29 AM\t10:09 AM\nPassing 3 to Homeroom\t10:09 AM\t10:13 AM\nHomeroom\t10:13 AM\t10:25 AM\nPassing Homeroom to 4\t10:25 AM\t10:30 AM\nPeriod 4\t10:30 AM\t11:10 AM\nPassing 4 to 5\t11:10 AM\t11:14 AM\nPeriod 5\t11:14 AM\t11:54 AM\nPassing 5 to 6\t11:54 AM\t11:58 AM\nPeriod 6\t11:58 AM\t12:38 PM\nPassing 6 to 7\t12:38 PM\t12:42 PM\nPeriod 7\t12:42 PM\t1:22 PM\nPassing 7 to 8\t1:22 PM\t1:26 PM\nPeriod 8\t1:26 PM\t2:06 PM\nPassing 8 to 9\t2:06 PM\t2:10 PM\nPeriod 9\t2:10 PM\t2:50 PM\nPassing 9 to 10\t2:50 PM\t2:55 PM\nPeriod 10\t2:55 PM\t3:35 PM\nAfter School\t3:35 PM\t11:59 PM".split("\n");
			M.shift(), M.forEach((function (t) {
				let e = t.split("\t");
				l[e[0]] = Time(r.parse(e[1], "h:mm A", !0), r.parse(e[2].trim(), "h:mm A", !0))
			}));
			let d = "Category\tStart\tEnd\nBefore School\t12:00 AM\t8:15 AM\nPeriod 1\t8:15 AM\t8:35 AM\nPassing 1 to 2\t8:35 AM\t8:39 AM\nPeriod 2\t8:39 AM\t8:59 AM\nPassing 2 to 3\t8:59 AM\t9:03 AM\nPeriod 3\t9:03 AM\t9:23 AM\nPassing 3 to 4\t9:23 AM\t9:27 AM\nPeriod 4\t9:27 AM\t9:47 AM\nPassing 4 to 5\t9:47 AM\t9:51 AM\nPeriod 5\t9:51 AM\t10:11 AM\nPassing 5 to 6\t10:11 AM\t10:15 AM\nPeriod 6\t10:15 AM\t10:35 AM\nPassing 6 to 7\t10:35 AM\t10:39 AM\nPeriod 7\t10:39 AM\t10:59 AM\nPassing 7 to 8\t10:59 AM\t11:03 AM\nPeriod 8\t11:03 AM\t11:23 AM\nPassing 8 to 9\t11:23 AM\t11:27 AM\nPeriod 9\t11:27 AM\t11:47 AM\nPassing 9 to 10\t11:47 AM\t11:51 AM\nPeriod 10\t11:51 AM\t12:11 PM\nLunch\t12:11 PM\t12:56 PM\nTeacher Preparation\t12:56 PM\t1:00 PM\nParent Teacher Conferences\t1:00 PM\t3:00 PM\nAfter School\t3:00 PM\t11:59 PM".split("\n");

			function A(t) {
				let e = a[r.format(t, "YYYY-MM-DD")];
				if (null == e) throw new o.DayNotInData(r.format(t, "YYYY-MM-DD"));
				return e
			}

			function h(t) {
				let e;
				if (e = t instanceof String ? r.parse(t, "YYYY-MM-DD HH:mm:ss") : t, null == A(e)) throw new o.DayNotInData(r.format(e, "YYYY-MM-DD"));
				let n = r.addDays(e, 1);
				for (; 0 == A(n).school;) {
					if (null == A(n)) return;
					n = r.addDays(n, 1)
				}
				return n
			}

			function T(t, e = !1) {
				let n;
				n = t instanceof String ? r.parse(t, "YYYY-MM-DD HH:mm:ss") : t;
				let a = A(n);
				if (null == a) throw new o.DayNotInData(r.format(n, "YYYY-MM-DD"));
				let u = {};
				return null != a.schedule && 1 == a.school ? "Regular" == a.schedule ? u = s : "Conference" == a.schedule ? u = i : "Homeroom" == a.schedule ? u = l : "PTC" == a.schedule && (u = N) : u = e ? void 0 : T(h(n)), u
			}

			function f(t) {
				let e;
				if (e = t instanceof String ? r.parse(t, "YYYY-MM-DD HH:mm:ss") : t, null == A(e)) throw new o.DayNotInData(r.format(e, "YYYY-MM-DD"));
				let n = T(e);
				if (null != n) for (let t in n) {
					let o = n[t], a = r.parse(r.format(e, "HH:mm:ss"), "HH:mm:ss", !0);
					if (a.getTime() >= o.start.getTime() && a.getTime() <= o.end.getTime()) return new Object({
						period: t,
						start: o.start,
						end: o.end
					})
				}
			}

			d.shift(), d.forEach((function (t) {
				let e = t.split("\t");
				N[e[0]] = Time(r.parse(e[1], "h:mm A", !0), r.parse(e[2].trim(), "h:mm A", !0))
			})), t.exports = {
				getDayInfo: A,
				getNextSchoolDay: h,
				getBellSchedule: T,
				getCurrentClass: f,
				getNextClass: function (t, e = !1) {
					let n;
					if (n = t instanceof String ? r.parse(t, "YYYY-MM-DD HH:mm:ss") : t, null == A(n)) throw new o.DayNotInData(r.format(n, "YYYY-MM-DD"));
					let a, u = T(n);
					if (null == u) return;
					let s = f(n);
					for (let t = 0; t < Object.keys(u).length; t++) {
						let o = Object.keys(u)[t], r = u[o];
						if (null == s) {
							if (r.start.getTime() >= n.getTime()) {
								if (1 == e && Object.keys(u)[t].includes("Passing")) continue;
								a = new Object({period: o, start: r.start, end: r.end});
								break
							}
						} else if (r.start.getTime() >= s.end.getTime()) {
							if (1 == e && Object.keys(u)[t].includes("Passing")) continue;
							a = new Object({period: o, start: r.start, end: r.end});
							break
						}
					}
					return a
				},
				getCurrentPeriod: function (t) {
					let e;
					if (e = t instanceof String ? r.parse(t, "YYYY-MM-DD HH:mm:ss") : t, null == A(e)) throw new o.DayNotInData(r.format(e, "YYYY-MM-DD"));
					let n, a = T(e);
					if (null != a) {
						for (let t in a) {
							let o = a[t];
							u(e) >= u(o.start) && u(e) <= u(o.end) && (n = t)
						}
						return n
					}
				}
			}
		}, 395: (t, e, n) => {
			"use strict";
			n.r(e), n.d(e, {default: () => M});
			var o, r, a = {}, u = {}, s = "en", i = {
				MMMM: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
				MMM: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				dddd: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
				ddd: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
				dd: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
				A: ["AM", "PM"]
			}, l = {
				YYYY: function (t) {
					return ("000" + t.getFullYear()).slice(-4)
				}, YY: function (t) {
					return ("0" + t.getFullYear()).slice(-2)
				}, Y: function (t) {
					return "" + t.getFullYear()
				}, MMMM: function (t) {
					return this.res.MMMM[t.getMonth()]
				}, MMM: function (t) {
					return this.res.MMM[t.getMonth()]
				}, MM: function (t) {
					return ("0" + (t.getMonth() + 1)).slice(-2)
				}, M: function (t) {
					return "" + (t.getMonth() + 1)
				}, DD: function (t) {
					return ("0" + t.getDate()).slice(-2)
				}, D: function (t) {
					return "" + t.getDate()
				}, HH: function (t) {
					return ("0" + t.getHours()).slice(-2)
				}, H: function (t) {
					return "" + t.getHours()
				}, A: function (t) {
					return this.res.A[t.getHours() > 11 | 0]
				}, hh: function (t) {
					return ("0" + (t.getHours() % 12 || 12)).slice(-2)
				}, h: function (t) {
					return "" + (t.getHours() % 12 || 12)
				}, mm: function (t) {
					return ("0" + t.getMinutes()).slice(-2)
				}, m: function (t) {
					return "" + t.getMinutes()
				}, ss: function (t) {
					return ("0" + t.getSeconds()).slice(-2)
				}, s: function (t) {
					return "" + t.getSeconds()
				}, SSS: function (t) {
					return ("00" + t.getMilliseconds()).slice(-3)
				}, SS: function (t) {
					return ("0" + (t.getMilliseconds() / 10 | 0)).slice(-2)
				}, S: function (t) {
					return "" + (t.getMilliseconds() / 100 | 0)
				}, dddd: function (t) {
					return this.res.dddd[t.getDay()]
				}, ddd: function (t) {
					return this.res.ddd[t.getDay()]
				}, dd: function (t) {
					return this.res.dd[t.getDay()]
				}, Z: function (t) {
					var e = t.getTimezoneOffset() / .6 | 0;
					return (e > 0 ? "-" : "+") + ("000" + Math.abs(e - (e % 100 * .4 | 0))).slice(-4)
				}, ZZ: function (t) {
					var e = t.getTimezoneOffset(), n = Math.abs(e);
					return (e > 0 ? "-" : "+") + ("0" + (n / 60 | 0)).slice(-2) + ":" + ("0" + n % 60).slice(-2)
				}, post: function (t) {
					return t
				}, res: i
			}, N = {
				YYYY: function (t) {
					return this.exec(/^\d{4}/, t)
				}, Y: function (t) {
					return this.exec(/^\d{1,4}/, t)
				}, MMMM: function (t) {
					var e = this.find(this.res.MMMM, t);
					return e.value++, e
				}, MMM: function (t) {
					var e = this.find(this.res.MMM, t);
					return e.value++, e
				}, MM: function (t) {
					return this.exec(/^\d\d/, t)
				}, M: function (t) {
					return this.exec(/^\d\d?/, t)
				}, DD: function (t) {
					return this.exec(/^\d\d/, t)
				}, D: function (t) {
					return this.exec(/^\d\d?/, t)
				}, HH: function (t) {
					return this.exec(/^\d\d/, t)
				}, H: function (t) {
					return this.exec(/^\d\d?/, t)
				}, A: function (t) {
					return this.find(this.res.A, t)
				}, hh: function (t) {
					return this.exec(/^\d\d/, t)
				}, h: function (t) {
					return this.exec(/^\d\d?/, t)
				}, mm: function (t) {
					return this.exec(/^\d\d/, t)
				}, m: function (t) {
					return this.exec(/^\d\d?/, t)
				}, ss: function (t) {
					return this.exec(/^\d\d/, t)
				}, s: function (t) {
					return this.exec(/^\d\d?/, t)
				}, SSS: function (t) {
					return this.exec(/^\d{1,3}/, t)
				}, SS: function (t) {
					var e = this.exec(/^\d\d?/, t);
					return e.value *= 10, e
				}, S: function (t) {
					var e = this.exec(/^\d/, t);
					return e.value *= 100, e
				}, Z: function (t) {
					var e = this.exec(/^[\+-]\d{2}[0-5]\d/, t);
					return e.value = -60 * (e.value / 100 | 0) - e.value % 100, e
				}, ZZ: function (t) {
					var e = /^([\+-])(\d{2}):([0-5]\d)/.exec(t) || ["", "", "", ""];
					return {value: 0 - (60 * (e[1] + e[2] | 0) + (e[1] + e[3] | 0)), length: e[0].length}
				}, h12: function (t, e) {
					return (12 === t ? 0 : t) + 12 * e
				}, exec: function (t, e) {
					var n = (t.exec(e) || [""])[0];
					return {value: 0 | n, length: n.length}
				}, find: function (t, e) {
					for (var n, o = -1, r = 0, a = 0, u = t.length; a < u; a++) n = t[a], !e.indexOf(n) && n.length > r && (o = a, r = n.length);
					return {value: o, length: r}
				}, pre: function (t) {
					return t
				}, res: i
			}, c = function (t, e, n, o) {
				var r, a = {};
				for (r in t) a[r] = t[r];
				for (r in e || {}) !!n ^ !!a[r] || (a[r] = e[r]);
				return o && (a.res = o), a
			}, g = {
				_formatter: l, _parser: N, compile: function (t) {
					for (var e, n = /\[([^\[\]]|\[[^\[\]]*])*]|([A-Za-z])\2+|\.{3}|./g, o = [t]; e = n.exec(t);) o[o.length] = e[0];
					return o
				}, format: function (t, e, n) {
					var o = this || r, a = "string" == typeof e ? o.compile(e) : e, u = t.getTimezoneOffset(),
						s = o.addMinutes(t, n ? u : 0), i = o._formatter, l = "";
					s.getTimezoneOffset = function () {
						return n ? 0 : u
					};
					for (var N, c = 1, g = a.length; c < g; c++) l += i[N = a[c]] ? i.post(i[N](s, a[0])) : N.replace(/\[(.*)]/, "$1");
					return l
				}, preparse: function (t, e) {
					var n = this || r, o = "string" == typeof e ? n.compile(e) : e, a = {
						Y: 1970,
						M: 1,
						D: 1,
						H: 0,
						A: 0,
						h: 0,
						m: 0,
						s: 0,
						S: 0,
						Z: 0,
						_index: 0,
						_length: 0,
						_match: 0
					}, u = /\[(.*)]/, s = n._parser, i = 0;
					t = s.pre(t);
					for (var l, N, c = 1, g = o.length; c < g; c++) if (s[l = o[c]]) {
						if (!(N = s[l](t.slice(i), o[0])).length) break;
						i += N.length, a[N.token || l.charAt(0)] = N.value, a._match++
					} else if (l === t.charAt(i) || " " === l) i++; else {
						if (!u.test(l) || t.slice(i).indexOf(u.exec(l)[1])) {
							if ("..." === l) {
								i = t.length;
								break
							}
							break
						}
						i += l.length - 2
					}
					return a.H = a.H || s.h12(a.h, a.A), a._index = i, a._length = t.length, a
				}, parse: function (t, e, n) {
					var o = this || r, a = "string" == typeof e ? o.compile(e) : e, u = o.preparse(t, a);
					return o.isValid(u) ? (u.M -= u.Y < 100 ? 22801 : 1, n || ~o._parser.find(a, "ZZ").value ? new Date(Date.UTC(u.Y, u.M, u.D, u.H, u.m + u.Z, u.s, u.S)) : new Date(u.Y, u.M, u.D, u.H, u.m, u.s, u.S)) : new Date(NaN)
				}, isValid: function (t, e) {
					var n = this || r, o = "string" == typeof t ? n.preparse(t, e) : t,
						a = [31, 28 + n.isLeapYear(o.Y) | 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][o.M - 1];
					return !(o._index < 1 || o._length < 1 || o._index - o._length || o._match < 1 || o.Y < 1 || o.Y > 9999 || o.M < 1 || o.M > 12 || o.D < 1 || o.D > a || o.H < 0 || o.H > 23 || o.m < 0 || o.m > 59 || o.s < 0 || o.s > 59 || o.S < 0 || o.S > 999 || o.Z < -840 || o.Z > 720)
				}, transform: function (t, e, n, o) {
					const a = this || r;
					return a.format(a.parse(t, e), n, o)
				}, addYears: function (t, e) {
					return (this || r).addMonths(t, 12 * e)
				}, addMonths: function (t, e) {
					var n = new Date(t.getTime());
					return n.setMonth(n.getMonth() + e), n
				}, addDays: function (t, e) {
					var n = new Date(t.getTime());
					return n.setDate(n.getDate() + e), n
				}, addHours: function (t, e) {
					return (this || r).addMinutes(t, 60 * e)
				}, addMinutes: function (t, e) {
					return (this || r).addSeconds(t, 60 * e)
				}, addSeconds: function (t, e) {
					return (this || r).addMilliseconds(t, 1e3 * e)
				}, addMilliseconds: function (t, e) {
					return new Date(t.getTime() + e)
				}, subtract: function (t, e) {
					var n = t.getTime() - e.getTime();
					return {
						toMilliseconds: function () {
							return n
						}, toSeconds: function () {
							return n / 1e3
						}, toMinutes: function () {
							return n / 6e4
						}, toHours: function () {
							return n / 36e5
						}, toDays: function () {
							return n / 864e5
						}
					}
				}, isLeapYear: function (t) {
					return !((t % 4 || !(t % 100)) && t % 400)
				}, isSameDay: function (t, e) {
					return t.toDateString() === e.toDateString()
				}, locale: function (t, e) {
					a[t] || (a[t] = e)
				}, plugin: function (t, e) {
					u[t] || (u[t] = e)
				}
			};
			o = c(g), (r = c(g)).locale = function (t) {
				var e = "function" == typeof t ? t : r.locale[t];
				if (!e) return s;
				s = e(g);
				var n = a[s] || {}, M = c(i, n.res, !0), d = c(l, n.formatter, !0, M), A = c(N, n.parser, !0, M);
				for (var h in r._formatter = o._formatter = d, r._parser = o._parser = A, u) r.extend(u[h]);
				return s
			}, r.extend = function (t) {
				var e = c(r._parser.res, t.res), n = t.extender || {};
				for (var o in r._formatter = c(r._formatter, t.formatter, !1, e), r._parser = c(r._parser, t.parser, !1, e), n) r[o] || (r[o] = n[o])
			}, r.plugin = function (t) {
				var e = "function" == typeof t ? t : r.plugin[t];
				e && r.extend(u[e(g, o)] || {})
			};
			var M = r
		}
	}, e = {};

	function n(o) {
		var r = e[o];
		if (void 0 !== r) return r.exports;
		var a = e[o] = {exports: {}};
		return t[o](a, a.exports, n), a.exports
	}

	n.d = (t, e) => {
		for (var o in e) n.o(e, o) && !n.o(t, o) && Object.defineProperty(t, o, {enumerable: !0, get: e[o]})
	}, n.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e), n.r = t => {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
	}, n(138)
})();