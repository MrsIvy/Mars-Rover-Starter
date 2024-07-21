class Rover {
   constructor(position) {
      this.position = position;
      if (!position) {
         throw Error("Postion required.");
      }
      this.mode = "Normal";
      this.generatorWatts = 110;
   };
};
// Write code here!
// let response return an object containing 2 properties
// message is the key
// value is message.name
// reuslts is a key 
// [] is value 
receiveMessage(message) {
   let response;
};



module.exports = Rover;