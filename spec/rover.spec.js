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
    let rover = new Rover(5860);
    let response = rover.receiveMessage(message);
    expect(response.message).toBe("LaTanya");
    console.log(response);
  });

  it("will give a response returned by receiveMessage includes two results if two commands are sent in the message", function () {

    let commands = [new Command("MOVE", 99482), new Command("STATUS_CHECK")];
    let message = new Message("LaTanya", commands);
    let rover = new Rover(5860);
    let response = rover.receiveMessage(message);
    expect(response.results.length).toBe(commands.length);
    console.log(response);
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
    expect(response.results[0]).toBe("STATUS_CHECK");


    console.log(response);
    // I know that STATUS_CHECK doesn't require a value
    // but I dont know why this test is passing 
    // and if I put something in the toBe it fails
  });

  it("responds correctly to the mode change command", function () {

    let commands = [new Command("MOVE", 99482), new Command("STATUS_CHECK")];
    let message = new Message("LaTanya", commands);
    let rover = new Rover(5860);
    let response = rover.receiveMessage(message);
   
    expect(response.mode).toBe("LOW_POWER");
    // expect(response.commands[1].result).toBe("LOW_POWER");

    console.log(response);

  });

  test.todo("responds with a false completed value when attempting to move in LOW_POWER mode"), function () {

    let commands = [new Command("MOVE", 99482), new Command("STATUS_CHECK")];
    let message = new Message("LaTanya", commands);
    let rover = new Rover(5860);
    let response = rover.receiveMessage(message);
    let firstPosition = rover.position;
  }
  expect(response.commands[0].completed).toBe(false);
  expect(rover.position).toBe(firstPosition);
  // If feel like I should use commandtype and then mode right 
  // here to change mode from NORMAL to LOW_POWER 

  console.log(response);
})

it("responds with the position for the move command"), function () {

  let commands = [new Command("MOVE", 99482), new Command("STATUS_CHECK")];
  let message = new Message("LaTanya", commands);
  let rover = new Rover(5860);
  let response = rover.receiveMessage(message);

  expect(response.commands[1].completed).toBe(true);
  expect(rover.position).toBe(99482);

  console.log(response);
}

// If feel like I should use commandtype and then mode right 
// here to change mode from NORMAL to LOW_POWER 


