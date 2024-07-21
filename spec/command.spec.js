const Command = require('../command.js');
const Message = require('../message.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Command class", function () {

  it("throws error if command type is NOT passed into constructor as the first parameter", function () {
    expect(function () { new Command(); }).toThrow(new Error('Command type required.'));
  });
  it("will set a constructor as command type", function () {

    let command = new Command("Hi There");
    expect(command.commandType).toBe("Hi There");
});

  it("will set a constructor sets a value passed in as the 2nd argument", function () {
    let command = new Command("Hi There", 5860);
    expect(command.value).toBe(5860);
  })
});

