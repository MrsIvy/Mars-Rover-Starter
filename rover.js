class Rover {
   constructor(position) {
      this.position = position;
      if (!position) {
         throw Error("Postion required.");
      }
      this.mode = "Normal";
      this.generatorWatts = 110;
   };
   receiveMessage(message) {
      let response = message.name;
      let results = message.commands;
   
      return {message: message.name, results: results}


   }

};
// Write code here!
// let response return an object containing 2 properties
// message is the key value is message.name
// results is a key empty array [] is value 
;



module.exports = Rover;