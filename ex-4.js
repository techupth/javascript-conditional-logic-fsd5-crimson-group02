//Exercise 4
// Switch Statement
let lightBulbStatus = "On";

//Start coding here
let message;
switch (lightBulbStatus) {
  case "On":
    message = "Light bulb is On.";
    console.log(message);
    break;
  case "Off":
    message = "Light bulb is Off.";
    console.log(message);
    break;
  case "Broken":
    message = "Light bulb is Broken.";
    console.log(message);
    break;
  default:
    message = "Please choose the correct input (On/Off/Broken)";
    console.log(message);
}
