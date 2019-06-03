class ColourChanger {
    constructor(colour){
      this.colour = colour
    }
    log(text){
      if(this.colour == "Red"){
        console.log('\x1b[31m',text);
      }
      if(this.colour == "Yellow"){
         console.log('\x1b[33m',text);
      }
      if(this.colour == "Green"){
         console.log('\x1b[32m',text);
      }
    }
  }
  
  let changeColour = new ColourChanger("Green");
  changeColour.log("Abhishek Malviya");
  let changeColour = new ColourChanger("Yellow");
  changeColour.log("Abhishek Malviya");
  let changeColour = new ColourChanger("Red");
  changeColour.log("Abhishek Malviya");