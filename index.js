var number = 1;

function takeANumber(katzDeliLine,person) {
  katzDeliLine.push(person);
    return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`;
}
 
function takeANumber(katzDeliLine) { 
  katzDeliLine.push(number);
  number++;
  return `Welcome you are ${number} in line.`; }

  
function nowServing(katzDeliLine) {
   const firstPersonInLine = katzDeliLine.shift();
  if (katzDeliLine.length) {
    return `Currently serving ${firstPersonInLine}.`;}
      else { return "There is nobody waiting to be served!" } 
}
   
function currentLine(katzDeliLine) { 
  const line = [];  
     if (katzDeliLine.length) {
      for (let i= 0; i < katzDeliLine.length; i++) 
        { line.push(` ${[i+1]}. ${katzDeliLine[i]}`); }
            return `The line is currently:${line}`;}
          
       else {
         return "The line is currently empty.";}
} 
