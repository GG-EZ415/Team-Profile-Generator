const Employee = require("../lib/Employee")
const employee = new Employee('Sam Wilson', '789', 'samwilson@mcu.com');

test('test whether the entered values for name, id, and email are valid', () => {
    expect(employee.name).toBe('Sam Wilson');
    expect(employee.id).toBe('789');
    expect(employee.email).toBe('samwilson@mcu.com');
});

test('test if the name comes up when we call getName() method', () => {
    expect(employee.getName()).toBe('Sam Wilson');
});

test('test of id number comes up when we call getId() method', () => {
    expect(employee.getId()).toBe('789');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(employee.getEmail()).toBe('samwilson@mcu.com');
});

test('if school comes up when we call getSchool() method', () => {
    expect(intern.getSchool()).toBe('UCLA');
})

test('if role comes up when we call getRole() method', () => {
    expect(employee.getRole()).toBe('Intern');
});