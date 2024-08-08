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
      let roverMessage = message.name;
      let results = [];
      
      
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
      
      return { message: message.name, results: results }

   }

};




module.exports = Rover;
