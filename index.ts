#! /usr/bin/env node
import inquirer from "inquirer";

const currency:any = {
    "USD" :1,
    "EUR" :0.91,
    "GBP":0.76,
    "INR" :74.57,
    "PKR" :280
};

let user_Answer =await inquirer.prompt([{
    name: "From",
    message:"Enter from Currency",
    type:"list",
    choices: ["USD","EUR","GBP","INR","PKR"],
},
{
    name: "to",
    message:"Enter to Currency",
    type:"list",
    choices: ["USD","EUR","GBP","INR","PKR"],
},
{
    name:"amount",
    message:"Your Amount",
    type: "number"
}]);

// Call User input in Variable
let from_Amount = currency[user_Answer.From];
let to_Amount = currency[user_Answer.to];
let Amount = user_Answer.amount ;

// Actual Formula
let base_Amount = Amount/from_Amount;
let converted_Amount = base_Amount * to_Amount;

console.log(`${Amount} ${user_Answer.From} = ${converted_Amount} ${user_Answer.to}`);