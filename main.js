#! /usr/bin/env node
import inquirer from "inquirer";
let toDo = [];
let condition = true;
let greet = await inquirer.prompt({
    name: "initial",
    message: "Hello, how would you like to add items to your list today?",
    type: "list",
    choices: ["Input manually", "Quick add", "View Items"]
});
if (greet.initial === "Input manually") {
    while (condition) {
        let toDoList = await inquirer.prompt([
            { name: "tasks",
                message: "What do you wish to add to the to do list?[^-^]",
                type: "input" },
            { name: "confirm",
                message: "Are you sure you want to add this item to the to do list?",
                type: "confirm",
                default: true }
        ]);
        if (toDoList.tasks.length > 0) {
            toDo.push(toDoList.tasks);
            console.log(toDo);
        }
        else {
            console.log("Please enter a task you wish to add to your to do list!");
        }
        ;
        if (toDoList.confirm === true) {
            let progress = await inquirer.prompt({
                name: "continue",
                message: "What would you like to do now?",
                type: "list",
                choices: ["View Items", "Continue", "Exit"]
            });
            if (progress.continue === "View Items") {
                console.log(toDo);
            }
            else if (progress.continue === "Continue") {
                condition = toDoList.confirm;
            }
            else {
                condition = false;
            }
        }
        else {
            condition = toDoList.confirm;
        }
    }
}
else if (greet.initial === "Quick add") {
    while (condition) {
        let to_do = await inquirer.prompt([
            { name: "task",
                message: "Please select from the following![^-^]",
                type: "list",
                choices: ["Eating", "Meeting", "Event", "Homework", "Workout", "Prayer", "Assignment", "Study", "Sleep", "Cleaning"] },
            { name: "confirmation",
                message: "Are you sure you want to add this item to the to do list?",
                type: "confirm",
                default: true }
        ]);
        toDo.push(to_do.task);
        console.log(toDo);
        if (to_do.confirmation === true) {
            let progress = await inquirer.prompt({
                name: "continue",
                message: "What would you like to do now?",
                type: "list",
                choices: ["View Items", "Continue", "Exit"]
            });
            if (progress.continue === "View Items") {
                console.log(toDo);
            }
            else if (progress.continue === "Continue") {
                condition = to_do.confirmation;
            }
            else {
                condition = false;
            }
        }
        else {
            condition = to_do.confirmation;
        }
    }
}
else if (greet.initial === "View Items") {
    console.log(toDo);
}
