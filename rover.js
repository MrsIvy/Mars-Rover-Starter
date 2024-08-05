class Rover {
   constructor(position) {
      this.position = position;
      if (!position) {
         throw Error("Postion required.");
      }
      this.mode = "NORMAL";
      this.generatorWatts = 110;
   };
   receiveMessage(message) {
      let response = message.name;
      let results = [];
      // let roverStatus = response.results[1].roverStatus;
      // iterate over the commands array for loop message.commands.length
      // check the commandtype conditional if/else if/else if/ else(push {completed: true}
      for (let i = 0; i < message.commands.length; i++) {
         if (message.commands[i].commandType === 'STATUS_CHECK') {
            results.push({
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: 110,
                  position: 5860
               }
            });
         } else if (message.commands[i].commandType === "MODE_CHANGE") {
            this.mode = message.commands[i].value;
            results.push({
               completed: true
            })
         } else if (message.commands[i].commandType === "MOVE") {
            if (this.mode === "LOW_POWER") {
               results.push({
                  completed: false
               })
            } else {
               this.position = message.commands[i].value;
               results.push({
                  completed: true
               })
            }

         } else {
            results.push({
               completed: true
            })
         }

      }
      // if message.commands[i].commandtype is STATUS_CHECK: 
      // finally .push status objects into the results array

      // if message.commands[i].commandtype is MODE_CHANGE:
      // update the mode to the value that is being passed in (message.commands[i].value)
      // .push {completed:true} 

      // if message.commands[i].commandtype is MOVE:
      // check the mode and if MODE is LOW_POWER push in {completed: false}
      // else: udpate the position of the rover to the value (message.commands[i].value)
      // Push to the results array[] results.push {completed: true}

      return { message: message.name, results: results }

   }

};
// Write code here!
// let response return an object containing 2 properties
// message is the key value is message.name
// results is a key empty array [] is value 




module.exports = Rover;