const Manager = require("../lib/Manager")
const manager = new Manager('Steve Rodgers', '123', 'steverodgers@mcu.com','1'); 

test('test whether the entered values for name, id, and email are valid', () => {
    expect(manager.name).toBe('Steve Rodgers');
    expect(manager.id).toBe('123');
    expect(manager.email).toBe('steverodgers@mcu.com');
});

test('test if the name comes up when we call getName() method', () => {
    expect(manager.getName()).toBe('Steve Rodgers');
});

test('test of id number comes up when we call getId() method', () => {
    expect(manager.getId()).toBe('123');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(manager.getEmail()).toBe('steverodgers@mcu.com');
});

test('if office number comes up when we call getOfficeNumber() method', () => {
    expect(manager.getOfficeNumber()).toBe('1');
})

test('if role comes up when we call getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});