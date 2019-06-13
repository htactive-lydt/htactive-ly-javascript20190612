// import { linkSync } from "fs";
const fs = require("fs");
const students = [{
        id: 1,
        name: "Ly",
        age: 20,
        score: [10, 6, 8, 6]
    },
    {
        id: 2,
        name: "Minh",
        age: 20,
        score: [6, 6, 9, 10]
    },
    {
        id: 3,
        name: "Lan",
        age: 20,
        score: [7, 10, 8, 1]
    },
    {
        id: 4,
        name: "Chi",
        age: 20,
        score: [4, 8, 10, 5]
    },
    {
        id: 5,
        name: "Anh",
        age: 20,
        score: [10, 9, 8, 10]
    }
]

const studentIDs = [1, 3, 5];

let listStudent = studentIDs.map(id => {
    let student = students.find(student => student.id == id)
    return student
});
console.log(listStudent);

// let totalGrade = students.map(student => student.grade).reduce((sum, curr) => sum + curr, 0);

// console.log(totalGrade);

const studentNames = ["Anh", "Chi", "Lan", "Nhung"];

let listStudentMatch = studentNames.map(name => {
    let student = students.find(student => student.name == name)
    return student
});

console.log(listStudentMatch.filter(student => typeof student === 'object'));

let scoreOfEachStudent = students.map(student => student.score.map(score => score).reduce((sum, curr) => sum + curr, 0) / student.score.map(score => score).length);

console.log(scoreOfEachStudent);

function myFilter(coll, callback) {
    let returnArr = [];
    coll.forEach(item => {

        if (callback(item)) {
            console.log(item);
            returnArr.push(item);
        }
    });
    return returnArr;
}

// console.log("My result: ");
// console.log(myFilter(students, item => item.name == "Ly"));

// Array.prototype.myFilter = myFilter
Array.prototype.myFilter = function(predicateFunction) {
    var results = [];
    this.forEach(itemInArray => {
        if (predicateFunction(itemInArray)) {
            console.log(itemInArray);
            results.push(itemInArray);
        }
    });

    return results;
};
[1, 2, -1, 4, -6, 9, -3].myFilter(n => n < 0)

Array.prototype.myReduce = function(callback, initializer) {
    var accumulator = (initializer === undefined) ? 0 : initializer;
    this.forEach(itemInArray => {
        accumulator = callback(accumulator, itemInArray);
    });

    return accumulator;
};

console.log([1, 2, -1, 4, -6, 9, -3].myReduce((sum, curr) => sum + curr));