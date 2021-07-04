const { test, expect } = require('@jest/globals');
const { string } = require('yargs');
const Intern = require('../lib/Intern');



test("create an intern object",() =>{
    const intern = new Intern('Deepa','intern1','deepa@222.com','Berkely University');

    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(String));
    expect(intern.email).toContain('@');
    expect(intern.school).toEqual(expect.any(String));
    
})