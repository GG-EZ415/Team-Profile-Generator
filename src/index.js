const createEmployee = function (employee) {
    return `
    <div class="card employee-card p-4 m-2">
    <div id="miniHeader" class="card-header">
    <h2 id="comic" class="card-title text-center">${employee.name}</h2>
    <h3 id="comic" class="card-title text-center">Manager</h3>
        </div>
            <div class="card-body">
            <ul class="list-group">
                <li class="id">ID: ${employee.id}</li>
                <li class="email">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                <li class="office">Office Number: ${employee.office}</li>
            </ul>
        </div>
    </div>
    `;
}
const createManager = function (manager) {
    return `
    <div class="card employee-card p-4 m-2">
    <div id="miniHeader" class="card-header">
    <h2 id="comic" class="card-title text-center">${manager.name}</h2>
    <h3 id="comic" class="card-title text-center">Manager</h3>
        </div>
            <div class="card-body">
            <ul class="list-group">
                <li class="id">ID: ${manager.id}</li>
                <li class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="office">Office Number: ${manager.office}</li>
            </ul>
        </div>
    </div>
    `;
}

const createEngineer = function (engineer) {
    return `
        <div class="card employee-card p-4 m-2">
            <div id="miniHeader" class="card-header">
            <h2 id="comic" class="card-title text-center">${engineer.name}</h2>
            <h3 id="comic" class="card-title text-center">Engineer</h3>
                </div>
                <div class="card-body">
                <ul class="list-group">
                    <li class="id">ID: ${engineer.id}</li>
                    <li class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
    `
}

const createIntern = function (intern) {
    return `
        <div class="card employee-card p-4 m-2">
        <div id="miniHeader" class="card-header">
        <h2 id="comic" class="card-title text-center">${intern.name}</h2>
        <h3 id="comic" class="card-title text-center">Intern</h3>
                </div>
                <div class="card-body">
                <ul class="list-group">
                    <li class="id">ID: ${intern.id}</li>
                    <li class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="school">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
    `
};

const createTeamPage = function (employeeInfo) {   
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Team Profile</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Faster+One&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
  <body>
  <div class="container-fluid">
      <div class="row">
          <div id="header" class="col-12 jumbotron mb-3 team-heading">
              <h1 id="comicHeader" class="text-center text-white">The Team</h1>
          </div>
      </div>
  </div>
  <div class="container ">
      <div class="row">
          <div class="row team-area col-12 d-flex justify-content-center">
              ${createTeamPage(employeeInfo)}
          </div>
      </div>
  </div>
</body>
</html>
  `
};

generateHTML = (employees) => {
    let generatedCards = ``;
  employees.forEach(function(employee){
    if (employee.getRole() === "Manager"){
      let manager = createManager(employee)
      generatedCards += manager
    } else if (employee.getRole() === "Engineer"){
      let engineer = createEngineer(employee)
      generatedCards += engineer
    } else if (employee.getRole() === "Intern"){
      let intern = createIntern(employee)
      generatedCards += intern
    }
  })
};


module.exports = generateHTML;