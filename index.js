var katzDeli = [];

function takeANumber(katzDeliLine, newName){
  katzDeliLine.push(newName) //Adding newName to katzDeliLine
  return `Welcome, ${newName}. You are number ${katzDeliLine.length} in line.` //but why use length here?
}
function nowServing(katzDeliLine){
  if (katzDeliLine === 0); //why ===, ==, =
  return "There is nobody waiting to be served!"
} //the next one im confused....

function currentLine(katzDeliLine) {
  if (katzDeliLine === 0);
  return "The line is currently empty."
}