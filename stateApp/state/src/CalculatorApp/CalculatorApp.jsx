
// import React from 'react'
import reactDom from 'react-dom'
import React, { useState } from 'react';


export default function CalculatorApp() {

    let colors = [];

    const displayColors = () => {
        for (let i = 0; i < colors.length; i++) {
            const item = (colors[i]);
            console.log(item);

        }
    }
    colors.push("red");
    colors.push("yellow");
    displayColors();



    const students = [{
        name: "Big Mama",
        grade: 12
    }];

    const addStudent = (nameVal, gradeVal) => {
        students.push({ name: nameVal, grade: gradeVal })


    }
    addStudent("Tommy", 12);
    console.log(students);

    for (let index = 0; index < students.length; index++) {
        const element = students[index];
        console.log(element.name + " got a grade of " + element.grade)


    }
    const [displayGrade, setDisplayGrade] = useState(0);

    const getGrade = (name) => {
        const found = students.find((element) => element.name === name);

    }
    getGrade("Tommy");



let PassingStudents = [];

    const getPassingStudents = () => {
  passingStudents = students.filter(students => getGrade > 65);
        return students.grade > 65;
)
}




return (
    <div>Calculator

        <p> The Grade is {displayGrade} </p>
    </div>
);
}