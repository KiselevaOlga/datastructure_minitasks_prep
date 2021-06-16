const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();
const nextPages = new Stack();
let currentPage = 'Start page';
// ------------------------------
// Helper Functions
// ------------------------------
const showCurrentPage = (action)=>{
  console.log(
  `The action is ${action}\n
  The current page is ${currentPage}\n
  The top element of backpage is ${backPages.peek()}\n
  The top element of nextPages is ${nextPages.peek()}`)
}

const newPage = (page)=>{
  backPages.push(currentPage);
  currentPage = page;
  while(!nextPages.isEmpty()){
    nextPages.pop();
  }
  showCurrentPage("NEW: ");
}

const backPage = ()=>{
  nextPages.push(currentPage);
  currentPage = backPages.pop();
  showCurrentPage('BACK: ')
}

const nextPage = ()=>{
  backPages.push(currentPage);
  nextPages.pop();
  showCurrentPage('NEXT: ')
}
/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
let finish = false;
let showBack = false;
let showNext = false;

showCurrentPage('DEFAULT: ')
while( finish===false ){
  let instructions = baseInfo;

  if(!backPages.peek()!= null){
    instructions = `${instructions}, ${backInfo}`;
    showBack = true;
  } else {
    showBack = false
  }

  if(!nextPages.peek() != null){
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  } else {
    showNext = false;
  }
  instructions = `${instructions}, ${quitInfo}.`;
  console.log(instructions);
  const answer = prompt('Where would you like to go today?');
  const lowerCaseAnswer = answer.toLowerCase();

  if(lowerCaseAnswer !== 'b' && lowerCaseAnswer !== 'n' && lowerCaseAnswer !== 'q' ){
    newPage(answer);
  } else if ((showBack === true) && (lowerCaseAnswer === 'b')) {
    backPage()
  } else if ((showNext === true) && (lowerCaseAnswer === 'n')){
    nextPage()
  } else if (lowerCaseAnswer === 'q'){
    finish = true;
  } else if (lowerCaseAnswer === 'b'){
    console.log('Cannot go back')
  } else if (lowerCaseAnswer === 'n'){
    console.log('Cannot go forward')
  }
}
