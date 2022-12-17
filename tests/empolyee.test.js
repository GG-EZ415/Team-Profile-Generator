const Employee = require("../lib/Employee")
const employee = new Employee('Tony Stark', '007', 'TonyStark@mcu.com','TonyStarkGitHub'); 

test('test whether the entered values for name, id, and email are valid', () => {
    expect(employee.name).toBe('Tony Stark');
    expect(employee.id).toBe('007');
    expect(employee.email).toBe('TonyStark@mcu.com');
    expect(employee.github).toBe('TonyStarkGitHub');
});

test('test if the name comes up when we call getName() method', () => {
    expect(employee.getName()).toBe('Tony Stark');
});

test('test of id number comes up when we call getId() method', () => {
    expect(employee.getId()).toBe('007');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(employee.getEmail()).toBe('TonyStark@mcu.com');
});

test('if github username comes up when we call getGithub() method', () => {
    expect(employee.getGithub()).toBe('TonyStarkGitHub');
})

test('if role comes up when we call getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});