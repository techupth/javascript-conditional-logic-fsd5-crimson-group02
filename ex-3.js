//Exercise 3
// Ternary Operator
let lightBulbStatus = "Off";

lightBulbStatus === "Off"
  ? console.log("Light bulb is Off.")
  : lightBulbStatus === "On"
  ? console.log("Light bulb is On.")
  : console.log("Please choose the correct input (On/Off)");
