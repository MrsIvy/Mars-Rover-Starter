const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


// 7 tests here!
describe("Rover class", function () {

  it("constructor sets position and default value for mode and generatorWatts", function () {

    let rover = new Rover(98382);
    expect(rover.position).toBe(98382);
    expect(rover.mode).toBe("Normal");
    expect(rover.generatorWatts).toBe(110);

  });

  it("will give a response returned by receiveMessage contains the name of the message", function () {
    let commands = [new Command("MOVE", 99482), new Command("STATUS_CHECK")];
    let message = new Message("LaTanya", commands);
    let rover = new Rover(5840);
    let response = rover.receiveMessage(message).message
    expect(response).toBe(message.name);

  })


});

// it("will set constructor sets position and default for mode and generatorWatts", functon () {
// expect(rover.position).toBe(98382);
// expect(rover.mode).toBe("Normal");
// expect(rover.generatorWatts).toBe(110);
// let  rover = new Rover(98382);