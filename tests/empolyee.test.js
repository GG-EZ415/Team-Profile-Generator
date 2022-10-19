const Engineer = require("../lib/Engineer")
const engineer = new Engineer('Tony Stark', '007', 'TonyStark@mcu.com','TonyStarkGitHub'); 

test('test whether the entered values for name, id, and email are valid', () => {
    expect(engineer.name).toBe('Tony Stark');
    expect(engineer.id).toBe('007');
    expect(engineer.email).toBe('TonyStark@mcu.com');
});

test('test if the name comes up when we call getName() method', () => {
    expect(engineer.getName()).toBe('Tony Stark');
});

test('test of id number comes up when we call getId() method', () => {
    expect(engineer.getId()).toBe('007');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(engineer.getEmail()).toBe('TonyStark@mcu.com');
});

test('if github username comes up when we call getGithub() method', () => {
    expect(engineer.getGithub()).toBe('TonyStarkGitHub');
})

test('if role comes up when we call getRole() method', () => {
    expect(engineer.getRole()).toBe('Employee');
});