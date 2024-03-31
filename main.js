#! /usr/bin/env node
import inquirer from "inquirer";
let toDo = [];
let condition = true;
let greet = await inquirer.prompt({
    name: "initial",
    message: "Hello, how would you like to add items to your list today?",
    type: "list",
    choices: ["Input manually", "Quick add"]
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
                default: false }
        ]);
        toDo.push(toDoList.tasks);
        console.log(toDo);
        condition = toDoList.confirm;
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
                default: false }
        ]);
        toDo.push(to_do.task);
        console.log(toDo);
        condition = to_do.confirmation;
    }
}
