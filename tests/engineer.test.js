const Engineer = require("../lib/Engineer")
const engineer = new Engineer('David Banner', '123', 'davidbanner@mcu.com','DavidBannerGitHub'); 

test('test whether the entered values for name, id, and email are valid', () => {
    expect(engineer.name).toBe('David Banner');
    expect(engineer.id).toBe('123');
    expect(engineer.email).toBe('davidbanner@mcu.com');
});

test('test if the name comes up when we call getName() method', () => {
    expect(engineer.getName()).toBe('David Banner');
});

test('test of id number comes up when we call getId() method', () => {
    expect(engineer.getId()).toBe('123');
});

test('if email address comes up when we call getEmail() method',() => {
    expect(engineer.getEmail()).toBe('davidbanner@mcu.com');
});

test('if github username comes up when we call getGithub() method', () => {
    expect(engineer.getGithub()).toBe('DavidBannerGitHub');
})

test('if role comes up when we call getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});