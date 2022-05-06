import DateTime from "./DaT";

// Structural stuff
let Info = function(school, cycle, schedule, testing, events) {
	let self = {};
	self.school = school;
	self.cycle = cycle;
	self.schedule = schedule;
	self.testing = testing;
	self.events = events;
	return self;
}

let Time = function(start, end) {
	let self = {};
	self.start = start;
	self.end = end;
	return self;
}

// Parse Term Days as TSV, return object of Info objects
let termDaysFile = `Date\tSchool\tCycle\tSchedule\tTesting\tEvents
2021-09-13\tTrue\tA\tHomeroom\tNone\tStart of MP1
2021-09-14\tTrue\tB\tHomeroom\tNone\tNone
2021-09-15\tTrue\tA\tHomeroom\tNone\tNone
2021-09-16\tFalse\tNone\tNone\tNone\tYom Kippur
2021-09-17\tTrue\tB\tHomeroom\tNone\tNone
2021-09-18\tFalse\tNone\tNone\tNone\tNone
2021-09-19\tFalse\tNone\tNone\tNone\tNone
2021-09-20\tTrue\tA\tRegular\tScience\tNone
2021-09-21\tTrue\tB1\tRegular\tScience\tNone
2021-09-22\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2021-09-23\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2021-09-24\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2021-09-25\tFalse\tNone\tNone\tNone\tNone
2021-09-26\tFalse\tNone\tNone\tNone\tNone
2021-09-27\tTrue\tB\tRegular\tScience\tNone
2021-09-28\tTrue\tA1\tRegular\tScience\tNone
2021-09-29\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2021-09-30\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone
2021-10-01\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone
2021-10-02\tFalse\tNone\tNone\tNone\tNone
2021-10-03\tFalse\tNone\tNone\tNone\tNone
2021-10-04\tTrue\tA\tRegular\tScience\tNone
2021-10-05\tTrue\tB1\tRegular\tScience\tNone
2021-10-06\tTrue\tA1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting
2021-10-07\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2021-10-08\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2021-10-09\tFalse\tNone\tNone\tNone\tNone
2021-10-10\tFalse\tNone\tNone\tNone\tNone
2021-10-11\tFalse\tNone\tNone\tNone\tIndigenous Peoples' Day
2021-10-12\tTrue\tB\tRegular\tScience\tNone
2021-10-13\tTrue\tA\tPSAT\tNone\tPSAT Administration
2021-10-14\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2021-10-15\tTrue\tA2\tRegular\tWorld Languages, English Language Arts, Health\tNone
2021-10-16\tFalse\tNone\tNone\tNone\tNone
2021-10-17\tFalse\tNone\tNone\tNone\tNone
2021-10-18\tTrue\tB\tRegular\tScience\tNone
2021-10-19\tTrue\tA1\tRegular\tScience\tNone
2021-10-20\tTrue\tB1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting, End of MP1
2021-10-21\tTrue\tA2\tRegular\tMathematics, Music, Art\tStart of MP2
2021-10-22\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone
2021-10-23\tFalse\tNone\tNone\tNone\tNone
2021-10-24\tFalse\tNone\tNone\tNone\tNone
2021-10-25\tTrue\tA\tRegular\tScience\tNone
2021-10-26\tTrue\tB1\tRegular\tScience\tNone
2021-10-27\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tGrades due 8am
2021-10-28\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2021-10-29\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2021-10-30\tFalse\tNone\tNone\tNone\tNone
2021-10-31\tFalse\tNone\tNone\tNone\tNone
2021-11-01\tTrue\tB1\tRegular\tScience\tReport Card Distribution
2021-11-02\tFalse\tNone\tNone\tNone\tElection Day, Professional Development
2021-11-03\tTrue\tA1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting
2021-11-04\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2021-11-05\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2021-11-06\tFalse\tNone\tNone\tNone\tNone
2021-11-07\tFalse\tNone\tNone\tNone\tNone
2021-11-08\tTrue\tB1\tRegular\tScience\tNone
2021-11-09\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2021-11-10\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2021-11-11\tFalse\tNone\tNone\tNone\tVeterans Day
2021-11-12\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2021-11-13\tFalse\tNone\tNone\tNone\tNone
2021-11-14\tFalse\tNone\tNone\tNone\tNone
2021-11-15\tTrue\tB\tRegular\tNone\tParent Teacher Conferences (evening)
2021-11-16\tTrue\tA1\tPTC\tScience\tParent Teacher Conferences (daytime)
2021-11-17\tTrue\tB1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting
2021-11-18\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone
2021-11-19\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone
2021-11-20\tFalse\tNone\tNone\tNone\tNone
2021-11-21\tFalse\tNone\tNone\tNone\tNone
2021-11-22\tTrue\tA\tRegular\tScience\tNone
2021-11-23\tTrue\tB1\tRegular\tMathematics, Music, Art, Technology\tNone
2021-11-24\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Computer Science, Social Studies, Health\tNone
2021-11-25\tFalse\tNone\tNone\tNone\tThanksgiving Day
2021-11-26\tFalse\tNone\tNone\tNone\tThanksgiving Day
2021-11-27\tFalse\tNone\tNone\tNone\tNone
2021-11-28\tFalse\tNone\tNone\tNone\tNone
2021-11-29\tTrue\tB\tRegular\tNone\tNone
2021-11-30\tTrue\tA1\tRegular\tScience\tNone
2021-12-01\tTrue\tB1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting
2021-12-02\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone
2021-12-03\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tEnd of MP2
2021-12-04\tFalse\tNone\tNone\tNone\tNone
2021-12-05\tFalse\tNone\tNone\tNone\tNone
2021-12-06\tTrue\tA\tRegular\tScience\tStart of MP3
2021-12-07\tTrue\tB1\tRegular\tScience\tNone
2021-12-08\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2021-12-09\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2021-12-10\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tGrades due 8am
2021-12-11\tFalse\tNone\tNone\tNone\tNone
2021-12-12\tFalse\tNone\tNone\tNone\tNone
2021-12-13\tTrue\tB\tRegular\tScience\tNone
2021-12-14\tTrue\tA1\tRegular\tScience\tReport Card Distribution
2021-12-15\tTrue\tB1\tConference\tWorld Languages, English Language Arts, Health\tDepartment Meeting
2021-12-16\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone
2021-12-17\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone
2021-12-18\tFalse\tNone\tNone\tNone\tNone
2021-12-19\tFalse\tNone\tNone\tNone\tNone
2021-12-20\tTrue\tA1\tRegular\tScience\tNone
2021-12-21\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2021-12-22\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone
2021-12-23\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone
2021-12-24\tFalse\tNone\tNone\tNone\tWinter Recess
2021-12-25\tFalse\tNone\tNone\tNone\tNone
2021-12-26\tFalse\tNone\tNone\tNone\tNone
2021-12-27\tFalse\tNone\tNone\tNone\tWinter Recess
2021-12-28\tFalse\tNone\tNone\tNone\tWinter Recess
2021-12-29\tFalse\tNone\tNone\tNone\tWinter Recess
2021-12-30\tFalse\tNone\tNone\tNone\tWinter Recess
2021-12-31\tFalse\tNone\tNone\tNone\tWinter Recess
2022-01-01\tFalse\tNone\tNone\tNone\tNone
2022-01-02\tFalse\tNone\tNone\tNone\tNone
2022-01-03\tTrue\tA\tRegular\tNone\tNone
2022-01-04\tTrue\tB1\tRegular\tScience\tNone
2022-01-05\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2022-01-06\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2022-01-07\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-01-08\tFalse\tNone\tNone\tNone\tNone
2022-01-09\tFalse\tNone\tNone\tNone\tNone
2022-01-10\tTrue\tB\tRegular\tScience\tNone
2022-01-11\tTrue\tA1\tRegular\tScience\tNone
2022-01-12\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2022-01-13\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone
2022-01-14\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-01-15\tFalse\tNone\tNone\tNone\tNone
2022-01-16\tFalse\tNone\tNone\tNone\tNone
2022-01-17\tFalse\tNone\tNone\tNone\tMartin Luther King Jr. Day
2022-01-18\tTrue\tA1\tRegular\tFinals\tFinals
2022-01-19\tTrue\tB1\tRegular\tFinals\tFinals
2022-01-20\tTrue\tA2\tRegular\tFinals\tFinals
2022-01-21\tTrue\tB2\tRegular\tFinals\tFinals
2022-01-22\tFalse\tNone\tNone\tNone\tNone
2022-01-23\tFalse\tNone\tNone\tNone\tNone
2022-01-24\tTrue\tA\tRegular\tFinals\tFinals, End of MP3
2022-01-25\tFalse\tNone\tNone\tNone\tRegents Exams
2022-01-26\tFalse\tNone\tNone\tNone\tRegents Exams
2022-01-27\tFalse\tNone\tNone\tNone\tRegents Exams
2022-01-28\tFalse\tNone\tNone\tNone\tRegents Exams, Senior Grades
2022-01-29\tFalse\tNone\tNone\tNone\tNone
2022-01-30\tFalse\tNone\tNone\tNone\tNone
2022-01-31\tFalse\tNone\tNone\tNone\tChancellor's Day
2022-02-01\tFalse\tNone\tNone\tNone\tLunar New Year
2022-02-02\tTrue\tB\tConference\tNone\tFaculty Meeting, Start of MP1
2022-02-03\tTrue\tA1\tRegular\tNone\tNone
2022-02-04\tTrue\tB1\tRegular\tNone\tGrades due 8am
2022-02-05\tFalse\tNone\tNone\tNone\tNone
2022-02-06\tFalse\tNone\tNone\tNone\tNone
2022-02-07\tTrue\tA\tRegular\tScience\tNone
2022-02-08\tTrue\tB1\tRegular\tScience\tReport Card Distribution
2022-02-09\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2022-02-10\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2022-02-11\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-02-12\tFalse\tNone\tNone\tNone\tNone
2022-02-13\tFalse\tNone\tNone\tNone\tNone
2022-02-14\tTrue\tB\tRegular\tScience\tNone
2022-02-15\tTrue\tA1\tRegular\tScience\tNone
2022-02-16\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2022-02-17\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone
2022-02-18\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-02-19\tFalse\tNone\tNone\tNone\tNone
2022-02-20\tFalse\tNone\tNone\tNone\tNone
2022-02-21\tFalse\tNone\tNone\tNone\tMidwinter Recess
2022-02-22\tFalse\tNone\tNone\tNone\tMidwinter Recess
2022-02-23\tFalse\tNone\tNone\tNone\tMidwinter Recess
2022-02-24\tFalse\tNone\tNone\tNone\tMidwinter Recess
2022-02-25\tFalse\tNone\tNone\tNone\tMidwinter Recess
2022-02-26\tFalse\tNone\tNone\tNone\tNone
2022-02-27\tFalse\tNone\tNone\tNone\tNone
2022-02-28\tTrue\tA\tRegular\tNone\tNone
2022-03-01\tTrue\tB1\tRegular\tScience\tNone
2022-03-02\tTrue\tA1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting
2022-03-03\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2022-03-04\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-03-05\tFalse\tNone\tNone\tNone\tNone
2022-03-06\tFalse\tNone\tNone\tNone\tNone
2022-03-07\tTrue\tB\tRegular\tScience\tNone
2022-03-08\tTrue\tA1\tRegular\tScience\tNone
2022-03-09\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2022-03-10\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone
2022-03-11\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-03-12\tFalse\tNone\tNone\tNone\tNone
2022-03-13\tFalse\tNone\tNone\tNone\tNone
2022-03-14\tTrue\tA\tRegular\tScience\tNone
2022-03-15\tTrue\tB1\tRegular\tScience\tNone
2022-03-16\tTrue\tA1\tConference\tWorld Languages, English Language Arts, Health\tDepartment Meeting, End of MP1
2022-03-17\tTrue\tB2\tRegular\tMathematics, Music, Art\tStart of MP2
2022-03-18\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-03-19\tFalse\tNone\tNone\tNone\tNone
2022-03-20\tFalse\tNone\tNone\tNone\tNone
2022-03-21\tTrue\tB\tRegular\tScience\tNone
2022-03-22\tTrue\tA1\tRegular\tScience\tNone
2022-03-23\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tGrades due 8am
2022-03-24\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone
2022-03-25\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-03-26\tFalse\tNone\tNone\tNone\tNone
2022-03-27\tFalse\tNone\tNone\tNone\tNone
2022-03-28\tTrue\tA\tRegular\tScience\tReport Card Distribution
2022-03-29\tTrue\tB1\tRegular\tScience\tNone
2022-03-30\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2022-03-31\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2022-04-01\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-04-02\tFalse\tNone\tNone\tNone\tNone
2022-04-03\tFalse\tNone\tNone\tNone\tNone
2022-04-04\tTrue\tB1\tRegular\tScience\tNone
2022-04-05\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2022-04-06\tTrue\tB2\tConference\tMathematics, Music, Art\tFaculty Meeting
2022-04-07\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tParent Teacher Conferences (evening)
2022-04-08\tTrue\tB\tPTC\tNone\tParent Teacher Conferences (daytime)
2022-04-09\tFalse\tNone\tNone\tNone\tNone
2022-04-10\tFalse\tNone\tNone\tNone\tNone
2022-04-11\tTrue\tA1\tRegular\tScience\tNone
2022-04-12\tTrue\tB1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2022-04-13\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone
2022-04-14\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-04-15\tFalse\tNone\tNone\tNone\tSpring Recess
2022-04-16\tFalse\tNone\tNone\tNone\tNone
2022-04-17\tFalse\tNone\tNone\tNone\tNone
2022-04-18\tFalse\tNone\tNone\tNone\tSpring Recess
2022-04-19\tFalse\tNone\tNone\tNone\tSpring Recess
2022-04-20\tFalse\tNone\tNone\tNone\tSpring Recess
2022-04-21\tFalse\tNone\tNone\tNone\tSpring Recess
2022-04-22\tFalse\tNone\tNone\tNone\tSpring Recess
2022-04-23\tFalse\tNone\tNone\tNone\tNone
2022-04-24\tFalse\tNone\tNone\tNone\tNone
2022-04-25\tTrue\tA\tRegular\tNone\tNone
2022-04-26\tTrue\tB1\tRegular\tScience\tNone
2022-04-27\tTrue\tA1\tConference\tWorld Languages, English Language Arts, Health\tDepartment Meeting
2022-04-28\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2022-04-29\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-04-30\tFalse\tNone\tNone\tNone\tNone
2022-05-01\tFalse\tNone\tNone\tNone\tNone
2022-05-02\tFalse\tNone\tNone\tNone\tEid al-Fitr
2022-05-03\tTrue\tA1\tRegular\tScience\tNone
2022-05-04\tTrue\tB1\tConference\tWorld Languages, English Language Arts, Health\tFaculty Meeting, End of MP2
2022-05-05\tTrue\tA2\tRegular\tMathematics, Music, Art\tStart of MP3
2022-05-06\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-05-07\tFalse\tNone\tNone\tNone\tNone
2022-05-08\tFalse\tNone\tNone\tNone\tNone
2022-05-09\tTrue\tA\tRegular\tScience\tNone
2022-05-10\tTrue\tB1\tRegular\tScience\tNone
2022-05-11\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tGrades due 8am
2022-05-12\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2022-05-13\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-05-14\tFalse\tNone\tNone\tNone\tNone
2022-05-15\tFalse\tNone\tNone\tNone\tNone
2022-05-16\tTrue\tB\tRegular\tScience\tReport Card Distribution
2022-05-17\tTrue\tA1\tRegular\tScience\tNone
2022-05-18\tTrue\tB1\tConference\tWorld Languages, English Language Arts, Health\tDepartment Meeting
2022-05-19\tTrue\tA2\tRegular\tMathematics, Music, Art\tNone
2022-05-20\tTrue\tB2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-05-21\tFalse\tNone\tNone\tNone\tNone
2022-05-22\tFalse\tNone\tNone\tNone\tNone
2022-05-23\tTrue\tA\tRegular\tScience\tNone
2022-05-24\tTrue\tB1\tRegular\tScience\tNone
2022-05-25\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2022-05-26\tTrue\tB2\tRegular\tMathematics, Music, Art\tNone
2022-05-27\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-05-28\tFalse\tNone\tNone\tNone\tNone
2022-05-29\tFalse\tNone\tNone\tNone\tNone
2022-05-30\tFalse\tNone\tNone\tNone\tMemorial Day
2022-05-31\tTrue\tB\tRegular\tScience\tNone
2022-06-01\tTrue\tA1\tRegular\tWorld Languages, English Language Arts, Health\tNone
2022-06-02\tTrue\tB1\tRegular\tMathematics, Music, Art\tNone
2022-06-03\tTrue\tA2\tRegular\tComputer Science, Social Studies, Technology\tNone
2022-04-04\tFalse\tNone\tNone\tNone\tNone
2022-06-05\tFalse\tNone\tNone\tNone\tNone
2022-06-06\tTrue\tB2\tRegular\tFinals\tFinals
2022-06-07\tFalse\tNone\tNone\tNone\tClerical Day
2022-06-08\tTrue\tA1\tRegular\tFinals\tFinals
2022-06-09\tFalse\tNone\tNone\tNone\tChancellor's Day
2022-06-10\tTrue\tB1\tRegular\tFinals\tFinals
2022-06-11\tFalse\tNone\tNone\tNone\tNone
2022-06-12\tFalse\tNone\tNone\tNone\tNone
2022-06-13\tTrue\tA2\tRegular\tFinals\tFinals
2022-06-14\tTrue\tB\tRegular\tFinals\tFinals, End of MP3
2022-06-15\tFalse\tNone\tNone\tNone\tRegents Exams
2022-06-16\tFalse\tNone\tNone\tNone\tRegents Exams
2022-06-17\tFalse\tNone\tNone\tNone\tRegents Exams
2022-06-18\tFalse\tNone\tNone\tNone\tNone
2022-06-19\tFalse\tNone\tNone\tNone\tNone
2022-06-20\tFalse\tNone\tNone\tNone\tJuneteenth
2022-06-21\tFalse\tNone\tNone\tNone\tRegents Exams
2022-06-22\tFalse\tNone\tNone\tNone\tRegents Exams
2022-06-23\tFalse\tNone\tNone\tNone\tRegents Exams
2022-06-24\tFalse\tNone\tNone\tNone\tRegents Exams, Grades due 8am
2022-06-25\tFalse\tNone\tNone\tNone\tNone
2022-06-26\tTrue\tNone\tNone\tNone\tNone
2022-06-27\tTrue\tNone\tRegular\tNone\tLast day of school`;

let termDays = {};

// Parse TSV
termDaysFile.split('\n').forEach(function(line) {
	let [date, school, cycle, schedule, testing, events] = line.split('\t');
	termDays[date] = Info(
		school === "True" ? true : false,
		cycle === "None" ? null : cycle,
		schedule === "None" ? null : schedule,
		testing === "None" ? null : testing,
		events === "None" ? null : events
	);
});


function timeToTimestamp (date) {
	if (date instanceof Date) {
		return date.getTime();
	} else {
		return DateTime.parse(date, 'H:mm A').getTime();
	}
}

// Parse all bell schedules as TSV, return object of Time objects
let regularBellsFile = `Category\tStart\tEnd
Before School\t12:00 AM\t8:00 AM
Period 1\t8:00 AM\t8:41 AM
Passing 1 to 2\t8:41 AM\t8:45 AM
Period 2\t8:45 AM\t9:26 AM
Passing 2 to 3\t9:26 AM\t9:31 AM
Period 3\t9:31 AM\t10:15 AM
Passing 3 to 4\t10:15 AM\t10:20 AM
Period 4\t10:20 AM\t11:01 AM
Passing 4 to 5\t11:01 AM\t11:06 AM
Period 5\t11:06 AM\t11:47 AM
Passing 5 to 6\t11:47 AM\t11:52 AM
Period 6\t11:52 AM\t12:33 PM
Passing 6 to 7\t12:33 PM\t12:38 PM
Period 7\t12:38 PM\t1:19 PM
Passing 7 to 8\t1:19 PM\t1:24 PM
Period 8\t1:24 PM\t2:05 PM
Passing 8 to 9\t2:05 PM\t2:09 PM
Period 9\t2:09 PM\t2:50 PM
Passing 9 to 10\t2:50 PM\t2:54 PM
Period 10\t2:54 PM\t3:35 PM
After School\t3:35 PM\t11:59 PM`;

let conferenceBellsFile = `Category\tStart\tEnd
Before School\t12:00 AM\t8:00 AM
Period 1\t8:00 AM\t8:37 AM
Passing 1 to 2\t8:37 AM\t8:41 AM
Period 2\t8:41 AM\t9:18 AM
Passing 2 to 3\t9:18 AM\t9:22 AM
Period 3\t9:22 AM\t9:59 AM
Passing 3 to 4\t9:59 AM\t10:03 AM
Period 4\t10:03 AM\t10:40 AM
Passing 4 to 5\t10:40 AM\t10:44 AM
Period 5\t10:44 AM\t11:21 AM
Passing 5 to 6\t11:21 AM\t11:25 AM
Period 6\t11:25 AM\t12:02 PM
Passing 6 to 7\t12:02 PM\t12:06 PM
Period 7\t12:06 PM\t12:43 PM
Passing 7 to 8\t12:43 PM\t12:47 PM
Period 8\t12:47 PM\t1:24 PM
Passing 8 to 9\t1:24 PM\t1:28 PM
Period 9\t1:28 PM\t2:05 PM
Passing 9 to 10\t2:05 PM\t2:09 PM
Period 10\t2:09 PM\t2:46 PM
Teacher Conferences\t2:50 PM\t3:30 PM
After School\t3:30 PM\t11:59 PM`;

let homeroomBellsFile = `Category\tStart\tEnd
Before School\t12:00 AM\t8:00 AM
Period 1\t8:00 AM\t8:40 AM
Passing 1 to 2\t8:40 AM\t8:45 AM
Period 2\t8:45 AM\t9:25 AM
Passing 2 to 3\t9:25 AM\t9:29 AM
Period 3\t9:29 AM\t10:09 AM
Passing 3 to Homeroom\t10:09 AM\t10:13 AM
Homeroom\t10:13 AM\t10:25 AM
Passing Homeroom to 4\t10:25 AM\t10:30 AM
Period 4\t10:30 AM\t11:10 AM
Passing 4 to 5\t11:10 AM\t11:14 AM
Period 5\t11:14 AM\t11:54 AM
Passing 5 to 6\t11:54 AM\t11:58 AM
Period 6\t11:58 AM\t12:38 PM
Passing 6 to 7\t12:38 PM\t12:42 PM
Period 7\t12:42 PM\t1:22 PM
Passing 7 to 8\t1:22 PM\t1:26 PM
Period 8\t1:26 PM\t2:06 PM
Passing 8 to 9\t2:06 PM\t2:10 PM
Period 9\t2:10 PM\t2:50 PM
Passing 9 to 10\t2:50 PM\t2:55 PM
Period 10\t2:55 PM\t3:35 PM
After School\t3:35 PM\t11:59 PM`;

let ptcBellsFile = `Category\tStart\tEnd
Before School\t12:00 AM\t8:15 AM
Period 1\t8:15 AM\t8:35 AM
Passing 1 to 2\t8:35 AM\t8:39 AM
Period 2\t8:39 AM\t8:59 AM
Passing 2 to 3\t8:59 AM\t9:03 AM
Period 3\t9:03 AM\t9:23 AM
Passing 3 to 4\t9:23 AM\t9:27 AM
Period 4\t9:27 AM\t9:47 AM
Passing 4 to 5\t9:47 AM\t9:51 AM
Period 5\t9:51 AM\t10:11 AM
Passing 5 to 6\t10:11 AM\t10:15 AM
Period 6\t10:15 AM\t10:35 AM
Passing 6 to 7\t10:35 AM\t10:39 AM
Period 7\t10:39 AM\t10:59 AM
Passing 7 to 8\t10:59 AM\t11:03 AM
Period 8\t11:03 AM\t11:23 AM
Passing 8 to 9\t11:23 AM\t11:27 AM
Period 9\t11:27 AM\t11:47 AM
Passing 9 to 10\t11:47 AM\t11:51 AM
Period 10\t11:51 AM\t12:11 PM
Lunch\t12:11 PM\t12:56 PM
Teacher Preparation\t12:56 PM\t1:00 PM
Parent Teacher Conferences\t1:00 PM\t3:00 PM
After School\t3:00 PM\t11:59 PM`;

let regularBells = {};
let conferenceBells = {};
let homeroomBells = {};
let ptcBells = {};

let regularBellsFileLines = regularBellsFile.split('\n');
regularBellsFileLines.shift();
regularBellsFileLines.forEach(function(line) {
	let cols = line.split('\t');
	regularBells[cols[0]] = Time(DateTime.parse(cols[1], "h:mm A", true), DateTime.parse(cols[2].trim(), "h:mm A", true));
});

let conferenceBellsFileLines = conferenceBellsFile.split('\n');
conferenceBellsFileLines.shift();
conferenceBellsFileLines.forEach(function(line) {
	let cols = line.split('\t');
	conferenceBells[cols[0]] = Time(DateTime.parse(cols[1], "h:mm A", true), DateTime.parse(cols[2].trim(), "h:mm A", true));
});

let homeroomBellsFileLines = homeroomBellsFile.split('\n');
homeroomBellsFileLines.shift();
homeroomBellsFileLines.forEach(function(line) {
	let cols = line.split('\t');
	homeroomBells[cols[0]] = Time(DateTime.parse(cols[1], "h:mm A", true), DateTime.parse(cols[2].trim(), "h:mm A", true));
});

let ptcBellsFileLines = ptcBellsFile.split('\n');
ptcBellsFileLines.shift();
ptcBellsFileLines.forEach(function(line) {
	let cols = line.split('\t');
	ptcBells[cols[0]] = Time(DateTime.parse(cols[1], "h:mm A", true), DateTime.parse(cols[2].trim(), "h:mm A", true));
});

function getDayInfo (date) {
	/**
	 * Returns the info for a given date
	 * @param date: Date
	 * @returns Info
	 */
	let dayInfo = termDays[DateTime.format(date, "YYYY-MM-DD")];

	if (dayInfo === undefined) {
		// Error with DayNotInData
		throw new Error("DayNotInData");
	}
	return dayInfo;
}

function getNextSchoolDay (date) {
	/**
	 * Returns the next school day after the given date
	 * @param date: Date | string
	 * @returns Date
	 */
	let day;
	if (date instanceof String) {
		day = DateTime.parse(date, "YYYY-MM-DD HH:mm:ss");
	} else {
		day = date;
	}
	let dayInfo = getDayInfo(day);
	if (dayInfo === undefined) {
		// Error with DayNotInData
		throw new Error("DayNotInData");
	}
	let nextDay = DateTime.addDays(day, 1);
	while (getDayInfo(nextDay).school === false) {
		console.log(getDayInfo(nextDay));
		if (getDayInfo(nextDay) === undefined) {
			return undefined;
		}
		nextDay = DateTime.addDays(nextDay, 1);
	}
	return nextDay;
}

function getBellSchedule (date, thisDay = false) {
	/**
	 * Returns the bell schedule for a given date
	 * @param date: Date | string
	 * @returns {[key: string]: Time}
	 */
	let day = date;
	let dayInfo = getDayInfo(day);
	if (dayInfo === undefined) {
		// Error with DayNotInData
		throw new Error("DayNotInData");
	}
	let bellSchedule = {};
	if (dayInfo.schedule != null && dayInfo.school === true) {
		if (dayInfo.schedule === "Regular") {
			bellSchedule = regularBells;
		} else if (dayInfo.schedule === "Conference") {
			bellSchedule = conferenceBells;
		} else if (dayInfo.schedule === "Homeroom") {
			bellSchedule = homeroomBells;
		} else if (dayInfo.schedule === "PTC") {
			bellSchedule = ptcBells;
		}
	} else {
		// If thisDay is true, and there was no schedule found in the above if statements, return undefined
		// Otherwise find the next school day and return the bell schedule for that day
		console.log(thisDay);
		if (thisDay) {
			bellSchedule = undefined;
		} else {
			bellSchedule = getBellSchedule(getNextSchoolDay(day));
		}
	}
	return bellSchedule;
}

function getCurrentClass (date) {
	/**
	 * Returns the current class for a given date
	 * @param date: Date | string
	 * @returns Time
	 */
	let day;
	if (date instanceof String) {
		day = DateTime.parse(date, "YYYY-MM-DD HH:mm:ss");
	} else {
		day = date;
	}
	let dayInfo = getDayInfo(day);
	if (dayInfo === undefined) {
		// Error with DayNotInData
		throw new Error("DayNotInData");
	}
	let bellSchedule = getBellSchedule(day, true);
	if (bellSchedule === undefined) {
		return undefined;
	}
	for (let period in bellSchedule) {
		let bellTime = bellSchedule[period];
		let timeEpoch = DateTime.parse(DateTime.format(day, "HH:mm:ss", ), "HH:mm:ss", true);
		if (timeEpoch.getTime() >= bellTime.start.getTime() && timeEpoch.getTime() <= bellTime.end.getTime()) {
			return new Object({
				period: period,
				start: bellTime.start,
				end: bellTime.end
			});
		}
	}
	return undefined;
}

function getNextClass (date, skipPassing = false) {
	/**
	 * Returns the next class for a given date
	 * @param date: Date | string
	 * @returns Time
	 */
	let day;
	if (date instanceof String) {
		day = DateTime.parse(date, "YYYY-MM-DD HH:mm:ss");
	} else {
		day = date;
	}
	let dayInfo = getDayInfo(day);
	if (dayInfo === undefined) {
		// Error with DayNotInData
		throw new Error("DayNotInData");
	}
	let bellSchedule = getBellSchedule(day);
	if (bellSchedule === undefined) {
		return undefined;
	}
	let nextClass = undefined;
	// Get current class
	let currentClass = getCurrentClass(day);
	// Find next class
	for (let x = 0; x < Object.keys(bellSchedule).length; x++) {
		let period = Object.keys(bellSchedule)[x];
		let bellTime = bellSchedule[period];
		if (currentClass === undefined) {
			if (bellTime.start.getTime() >= day.getTime()) {
				if (skipPassing === true && Object.keys(bellSchedule)[x].includes("Passing")) {
					continue;
				} else {
					nextClass = new Object({
						period: period,
						start: bellTime.start,
						end: bellTime.end
					});
					break;
				}
			}
		} else {
			if (bellTime.start.getTime() >= currentClass.end.getTime()) {
				if (skipPassing === true && Object.keys(bellSchedule)[x].includes("Passing")) {
					continue;
				} else {
					nextClass = new Object({
						period: period,
						start: bellTime.start,
						end: bellTime.end
					});
					break;
				}
			}
		}
	}
	return nextClass;
}

// Like getNextClass, but returns just the period name
function getCurrentPeriod (date) {
	/**
	 * Returns the current period name for a given date
	 * @param date: Date | string
	 * @returns string
	 */
	let day;
	if (date instanceof String) {
		day = DateTime.parse(date, "YYYY-MM-DD HH:mm:ss");
	} else {
		day = date;
	}
	let dayInfo = getDayInfo(day);
	if (dayInfo === undefined) {
		// Error with DayNotInData
		throw new Error("DayNotInData");
	}
	let bellSchedule = getBellSchedule(day);
	if (bellSchedule === undefined) {
		return undefined;
	}
	let currentPeriod = undefined;
	for (let period in bellSchedule) {
		let bellTime = bellSchedule[period];
		if (timeToTimestamp(day) >= timeToTimestamp(bellTime.start) && timeToTimestamp(day) <= timeToTimestamp(bellTime.end)) {
			currentPeriod = period;
		}
	}
	return currentPeriod;
}

export default {
getDayInfo: getDayInfo,
	getNextSchoolDay: getNextSchoolDay,
	getBellSchedule: getBellSchedule,
	getCurrentClass: getCurrentClass,
	getNextClass: getNextClass,
	getCurrentPeriod: getCurrentPeriod
}