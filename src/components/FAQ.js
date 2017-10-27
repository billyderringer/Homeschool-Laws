import React, {Component} from 'react';

class FAQ extends Component {

    render() {
        const location = this.props.location;
        let answerClass = "";



        const answers = [{
            currentLocation: "Alabama",
            level: " ",
            intent: "None required",
            withdrawal: "Yeppers",
            testing: "None required",
            certification: "Certification required (Church schools exempt)",
            age: "7-16",
            attendance: "140 days per year",
            yearlyHrs: "Between 8:00 a.m. and 4 p.m. for a minimum of three hours per day",
            subjects: "State mandated subjects must be included",
            curriculum: "Not regulated",
            records: "Keep records."
        },
        {
            currentLocation: "Alaska",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Arizona",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Arkansas",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "California",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Colorado",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Connecticut",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Delaware",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Florida",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Georgia",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Hawaii",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Idaho",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Illinois",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Indiana",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Iowa",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Kansas",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Kentucky",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Louisiana",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Maine",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Maryland",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Massachusetts",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Michigan",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Minnesota",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Mississippi",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Missouri",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Montana",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Nebraska",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Nevada",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "New Hampshire",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "New Jersey",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "New Mexico",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "New York",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "North Carolina",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "North Dakota",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Ohio",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Oklahoma",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Oregon",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Pennsylvania",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Rhode Island",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "South Carolina",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "South Dakota",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Tennessee",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Texas",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Utah",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Vermont",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Virginia",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Washington",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "West Virginia",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Wisconsin",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        },
        {
            currentLocation: "Wyoming",
            intent: "Nope",
            withdrawal: "None",
            testing: "Maybe",
            certification: "1",
            age: "2",
            attendance: "3",
            yearlyHrs: "4",
            subjects: "5",
            curriculum: "6",
            records: "7"
        }
        ];

        let newAnswers =
            {
                currentLocation: "Choose State",
                level: "",
                intent: "",
                withdrawal: "",
                testing: "",
                certification: "",
                age: "",
                attendance: "",
                yearlyHrs: "",
                subjects: "",
                curriculum: "",
                records: ""
            };

        function handleChange() {
            for (let i = 0; i < answers.length; i++) {
                if (answers[i].currentLocation === location) {
                    newAnswers.currentLocation = answers[i].currentLocation;
                    newAnswers.level = answers[i].level;
                    newAnswers.intent = answers[i].intent;
                    newAnswers.withdrawal = answers[i].withdrawal;
                    newAnswers.testing = answers[i].testing;
                    newAnswers.certification = answers[i].certification;
                    newAnswers.age = answers[i].age;
                    newAnswers.attendance = answers[i].attendance;
                    newAnswers.yearlyHrs = answers[i].yearlyHrs;
                    newAnswers.subjects = answers[i].subjects;
                    newAnswers.curriculum = answers[i].curriculum;
                    newAnswers.records = answers[i].records;
                }
                if (newAnswers.currentLocation === "Choose State") {
                    answerClass = "blank"
                }
                else {
                    answerClass = "answer"
                }
            }
        }


        return (
            <div>
                <div className="col-xs-12 col-md-6 faq-col">
                    <ul onChange={handleChange()}>
                        <li className="question">Notice of intent required?</li>
                        <li className={answerClass}>{newAnswers.currentLocation === "Choose State" ? "?" : newAnswers.intent}</li>
                        <li className="question">Public school withdrawal required?</li>
                        <li className={answerClass}>{newAnswers.currentLocation === "Choose State" ? "?" : newAnswers.withdrawal}</li>
                        <li className="question">Testing required?</li>
                        <li className={answerClass}>{newAnswers.currentLocation === "Choose State" ? "?" : newAnswers.testing}</li>
                        <li className="question">Teacher certification required?</li>
                        <li className={answerClass}>{newAnswers.currentLocation === "Choose State" ? "?" : newAnswers.certification}</li>
                        <li className="question">Age requirements?</li>
                        <li className={answerClass}>{newAnswers.currentLocation === "Choose State" ? "?" : newAnswers.age}</li>
                    </ul>
                </div>
                <div className="col-xs-12 col-md-6 faq-col">
                    <ul onChange={handleChange()}>
                        <li className="question">Attendance requirements?</li>
                        <li className={answerClass}>{newAnswers.currentLocation === "Choose State" ? "?" : newAnswers.attendance}</li>
                        <li className="question">Hours required per year?</li>
                        <li className={answerClass}>{newAnswers.currentLocation === "Choose State" ? "?" : newAnswers.yearlyHrs}</li>
                        <li className="question">Subjects required?</li>
                        <li className={answerClass}>{newAnswers.currentLocation === "Choose State" ? "?" : newAnswers.subjects}</li>
                        <li className="question">Curriculum required?</li>
                        <li className={answerClass}>{newAnswers.currentLocation === "Choose State" ? "?" : newAnswers.curriculum}</li>
                        <li className="question">Records to keep?</li>
                        <li className={answerClass}>{newAnswers.currentLocation === "Choose State" ? "?" : newAnswers.records}</li>
                    </ul>
                </div>
            </div>
        );
    }
}


export default FAQ;