#! /usr/bin/env node
import inquirer from "inquirer";
let toDo:any = [];
let condition = true;
// Getting the user to choose how to add items to the to do list;
let greet= await inquirer.prompt({
  name:"initial",
  message:"Hello, how would you like to add items to your list today?",
  type:"list",
  choices:["Input manually","Quick add"]
})
// If the user chooses the option to add manually;
if (greet.initial === "Input manually"){
while (condition) {
  let toDoList = await inquirer.prompt
  (
    [
        {name: "tasks",
        message:"What do you wish to add to the to do list?[^-^]",
        type: "input"},
        {name:"confirm",
        message:"Are you sure you want to add this item to the to do list?",
        type:"confirm",
        default:true}
    ]
    );
    // Making sure that the user doesn't add an empty item to the list; 
    if (toDoList.tasks.length>0){
    toDo.push(toDoList.tasks);
    toDo.forEach((items : string)=>{console.log(items)})} 
    else {console.log("Please enter a task you wish to add to your to do list!")};
    // Giving the user additional choices to choose wether to exit, delete an item, view the list or continue adding items.
    if (toDoList.confirm===true){
    let progress = await inquirer.prompt({
      name:"continue",
      message:"What would you like to do now?",
      type:"list",
      choices:["View Items","Continue","Delete", "Exit"]
    })
    // If the user wishes to view his to do list, printing the list.
    if (progress.continue === "View Items"){
      toDo.forEach((items : string)=>{console.log(items)});
      // Giving user another choice to let him choose what he wants to do after viewing the list;
      let choice2 = await inquirer.prompt({
        name:"choose",
        message:"What would you like to do now?",
        type:"list",
        choices:["Continue", "Exit"]
      })
      if (choice2.choose === "Exit"){
      condition = false}
      else {condition = true};                
    } 
    // If the user wishes to continue;
    else if (progress.continue === "Continue") {condition = toDoList.confirm;}
    // If the user wishes to delete an item from the list, let him choose the position of item he wishes to delete.
  //  Leting the user further choose if he wishes to continue or exit after deleting the desired item from the list,
    else if (progress.continue === "Delete"){
      toDo.index 
      let index = await inquirer.prompt({
        name:"number",
        message:"Please enter the serial number of item you wish to delete:",
        type:"number",
      });
      let deletes = index.number - 1;
      toDo.splice(deletes, 1);
      toDo.forEach((items : string)=>{console.log(items)});
      let choice2 = await inquirer.prompt({
        name:"choose",
        message:"What would you like to do now?",
        type:"list",
        choices:["Continue", "Exit"]
      })
      if (choice2.choose === "Exit"){
      condition = false}
      else {condition = true};
    }
    // If the user wsihes to exit the to do list.
   else {condition = false}}   
    else {condition = toDoList.confirm;}      
}}
// Leting user to quicklly add items to the list by giving him multiple options giving him the same choices as were given in input manually. 
else if (greet.initial === "Quick add"){
  while (condition) {
    let to_do = await inquirer.prompt
    (
      [
          {name: "task",
          message:"Please select from the following![^-^]",
          type: "list",
        choices:["Eating","Meeting", "Event", "Homework", "Workout", "Prayer","Assignment","Study", "Sleep","Cleaning"]},
          {name:"confirmation",
          message:"Are you sure you want to add this item to the to do list?",
          type:"confirm",
          default:true}
      ]
      );
      toDo.push(to_do.task);
      toDo.forEach((items : string)=>{console.log(items)})
      if (to_do.confirmation === true){
      let progress = await inquirer.prompt({
        name:"continue",
        message:"What would you like to do now?",
        type:"list",
        choices:["View Items","Continue","Delete", "Exit"]
      })
      if (progress.continue === "View Items"){
        toDo.forEach((items : string)=>{console.log(items)});
        let choice2 = await inquirer.prompt({
          name:"choose",
          message:"What would you like to do now?",
          type:"list",
          choices:["Continue", "Exit"]
        })
        if (choice2.choose === "Exit"){
        condition = false}
        else {condition = true};
      } else if (progress.continue === "Continue") {condition = to_do.confirmation;}
      else if (progress.continue === "Delete"){
        toDo.index 
        let index = await inquirer.prompt({
          name:"number",
          message:"Please enter the serial number of item you wish to delete:",
          type:"number",
        });
        let deletes = index.number - 1;
        toDo.splice(deletes, 1);
        toDo.forEach((items : string)=>{console.log(items)});
        let choice2 = await inquirer.prompt({
          name:"choose",
          message:"What would you like to do now?",
          type:"list",
          choices:["Continue", "Exit"]
        })
        if (choice2.choose === "Exit"){
        condition = false}
        else {condition = true};
      }
    else {condition = false}}
      else {condition = to_do.confirmation;}
  }}
                 
  