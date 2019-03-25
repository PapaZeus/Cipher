var saySomething = function(whatToSay){
  alert(whatToSay);
}

var inputtedSentence = prompt("Please enter a sentence.");
var prompt = inputtedSentence

var firstLetter = inputtedSentence.charAt(0);
var uppercaseFirstLetter = inputtedSentence.charAt(0).toUpperCase();
var result1 = inputtedSentence.charAt(0).toUpperCase();
// alert(result1);

var lastLetter = inputtedSentence.charAt(15);
var uppercaseLastLetter = inputtedSentence.charAt(15).toUpperCase();
var result2 = inputtedSentence.charAt(15).toUpperCase();
// alert(result2);

saySomething(result1 + "e like epicodu" + result2);
saySomething(result2 + "e like epicodu" + result1);

saySomething(result1 + result2);
saySomething(result2 + result1);

saySomething(prompt + result2 + result1)

var inputL = inputtedSentence.length;
alert(inputL);

//8th character is a blank//
var center = inputtedSentence.length/2 - 1;
var answer = inputtedSentence.charAt(center);
var middle = inputtedSentence.slice(7+1);
var result4 = inputtedSentence.slice(7+1);
alert(answer);

saySomething(answer + "we like epicodus" + result1 + result2);
