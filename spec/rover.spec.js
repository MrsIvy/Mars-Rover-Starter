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
    expect(rover.mode).toBe("NORMAL");
    expect(rover.generatorWatts).toBe(110);
  });

  it("will give a response returned by receiveMessage contains the name of the message", function () {

    let commands = [new Command("MOVE", 99482), new Command("STATUS_CHECK")];
    let message = new Message("LaTanya", commands);
    let rover = new Rover(5860);
    let response = rover.receiveMessage(message);
    expect(response.message).toBe("LaTanya");

  });

  it("will give a response returned by receiveMessage includes two results if two commands are sent in the message", function () {

    let commands = [new Command("STATUS_CHECK"), new Command("STATUS_CHECK")];
    let message = new Message("LaTanya", commands);
    let rover = new Rover(5860);
    let response = rover.receiveMessage(message);
    expect(response.results.length).toBe(commands.length);

  });

  it("responds correctly to the status check command", function () {

    let commands = [new Command("STATUS_CHECK")];
    let message = new Message("LaTanya", commands);
    let rover = new Rover(5860);
    let response = rover.receiveMessage(message);
    let status = {
      completed: true,
      roverStatus: {
        mode: "NORMAL",
        generatorWatts: 110,
        position: 5860
      }
    }

    expect(response.results[0]).toEqual(status);

    // I know that STATUS_CHECK doesn't require a value
    // but I dont know why this test is passing 
    // and if I put something in the toBe it fails
  });

  it("responds correctly to the mode change command", function () {

    let commands = [new Command("MODE_CHANGE", "LOW_POWER"), new Command("STATUS_CHECK")];
    let message = new Message("LaTanya", commands);
    let rover = new Rover(5860);
    let response = rover.receiveMessage(message);

    expect(rover.mode).toBe("LOW_POWER");

  });

  it("responds with a false completed value when attempting to move in LOW_POWER mode", function () {

    let commands = [new Command("MOVE", 99482), new Command("STATUS_CHECK")];
    let message = new Message("LaTanya", commands);
    let rover = new Rover(5860);
    let test = rover.receiveMessage(message);
    let firstPosition = rover.position;

    expect(test.results[0].completed).toBe(false);
    expect(rover.position).toBe(firstPosition);
  })
console.log(test.results[0])
  // If feel like I should use commandtype and then mode right 
  // here to change mode from NORMAL to LOW_POWER 


})

it("responds with the position for the move command", function () {

  let commands = [new Command("MOVE", 99482), new Command("STATUS_CHECK")];
  let message = new Message("LaTanya", commands);
  let rover = new Rover(5860);
  let response = rover.receiveMessage(message);

  expect(response.commands.completed).toBe(true);
  expect(rover.position).toBe(99482);

  console.log(response);
});

// If feel like I should use commandtype and then mode right
// here to change mode from NORMAL to LOW_POWER 


