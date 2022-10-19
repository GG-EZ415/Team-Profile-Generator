const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./src/generateHTML');

const team = [];

function start() {
    function createTeam () {
        inquirer.prompt([{
          type: "list",
          message: "What type of employee would you like to add to your team?",
          name: "addEmployeePrompt",
          choices: ["Manager", "Engineer", "Intern", "No more team members are needed."]
        }]).then(function (userInput) {
          switch(userInput.addEmployeePrompt) {
            case "Manager":
              addManager();
              break;
            case "Engineer":
              addEngineer();
              break;
            case "Intern":
              addIntern();
              break;
    
            default:
              htmlBuilder();
          }
        })
      };

    function addManager () {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Team Manager's Name:",
            name: "name",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter name to continue");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter Team Manager's Employee ID:",
            name: "id",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter ID to continue");
                    return false;
                }
            }        
        },
        {
            type: "input",
            message: "Enter Team Manager's e-mail address:",
            name: "email",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter email to continue");
                    return false;
                }
            }        
        },
        {
            type: "input",
            message: "Enter Team Manager's office number:",
            name: "office",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter office number to continue");
                    return false;
                }
            }        
        },
    ])

    .then((value) => {
        const manager = new Manager (value.name, value.id, value.email, value.office);
        console.log(manager);
        team.push(manager);
        addEmployee();
    });

};

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Please select from the following:",
            name: "menu",
            choices: ["Engineer", "Intern", "Neither"],
        }
    ]).then(employeeData => {
        switch (employeeData.menu) {
            case "Intern":
                addIntern();
                break;
            case "Engineer":
                addEngineer();
                break;
            default:
                writeFile();
        }
    });    
}

const addIntern = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Intern's Name:",
            name: "name",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter name to continue");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter Intern's employee ID:",
            name: "id",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter ID to continue");
                    return false;
                }
            }        
        },
        {
            type: "input",
            message: "Enter Intern's e-mail address:",
            name: "email",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter email to continue");
                    return false;
                }
            }        
        },
        {
            type: "input",
            message: "Enter Intern's school name:",
            name: "school",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter school name to continue");
                    return false;
                }
            }        
        },
    ]).then(response => {
        console.log(response);
        const intern = new Intern (response.name, response.id, response.email, response.school);
        team.push(intern);
        addEmployee();
        
    })
};

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Engineers's Name:",
            name: "name",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter name to continue");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter Engineers's employee ID:",
            name: "id",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter ID to continue");
                    return false;
                }
            }        
        },
        {
            type: "input",
            message: "Enter Engineers's e-mail address:",
            name: "email",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter email to continue");
                    return false;
                }
            }        
        },
        {
            type: "input",
            message: "Enter Engineers's GitHub username:",
            name: "github",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter GitHub username to continue");
                    return false;
                }
            }        
        },
    ]).then(response => {
        console.log(response);
        const engineer = new Engineer (response.name, response.id, response.email, response.github);
        team.push(engineer);
        addEmployee();
        
    })
};

const writeFile = () => {
    fs.writeFile('./resources/index.html', generateHTML(team), err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Team profile created")
        }
    })
}; 
};
createTeam();
start();