//Exercise 2
let lightBulbStatus = "Broken";

// Start coding here.
let message;
if (lightBulbStatus === "On") {
  message = "Light bulb is On.";
  console.log(message);
} else if (lightBulbStatus === "Off") {
  message = "Light bulb is Off.";
  console.log(message);
} else if (lightBulbStatus === "Broken") {
  message = "Light bulb is Broken.";
  console.log(message);
} else {
  message = "Please choose the correct input (On/Off/Broken)";
  console.log(message);
}
