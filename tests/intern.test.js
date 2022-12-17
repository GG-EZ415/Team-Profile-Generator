const Intern = require("../lib/Intern")
const intern = new Intern('Sam Wilson', '789', 'samwilson@mcu.com', 'UCLA');

test('test whether the entered values for name, id, and email are valid', () => {
    expect(intern.name).toBe('Sam Wilson');
    expect(intern.id).toBe('789');
    expect(intern.email).toBe('samwilson@mcu.com');
    expect(intern.school).toBe('UCLA');
});

test('test if the name comes up when we call getName() method', () => {
    expect(intern.getName()).toBe('Sam Wilson');
});

test('test of id number comes up when we call getId() method', () => {
    expect(intern.getId()).toBe('789');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(intern.getEmail()).toBe('samwilson@mcu.com');
});

test('if school comes up when we call getSchool() method', () => {
    expect(intern.getSchool()).toBe('UCLA');
})

test('if role comes up when we call getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});