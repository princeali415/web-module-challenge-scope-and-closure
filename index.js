// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
  
    Counter 1 uses closure and is the correct way to create a counter because it follows DRY methodology.
    Counter 2 uses global scope to initialize the counter so can only be used for one specific count.

  2. Which of the two uses a closure? How can you tell?

  Counter 1 uses closure, its count adds 1 to the count variable within the child function of CounterMaker. (encloses)
  
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  

    Counter 1 will always be preferable to counter 2 because it uses DRY Metholdology. 
    Counter 2 uses global scope to initialize count variable and you never want to do this.

*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  NOTE: You will be using this function over and over again in the tasks below
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
*/

function inning(){
    return Math.floor(Math.random()*3)
}

/* Task 3: finalScore()
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the game
For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(inningCB, numOfInnings){
let homeScore = 0;
let awayScore = 0;
  for (let i = 1; i <= numOfInnings; i++){
    const currentHomeScore = inningCB();
    const currentAwayScore = inningCB();
    homeScore += currentHomeScore;
    awayScore += currentAwayScore; 
  }
return {Home: homeScore, Away: awayScore};
}

/* Task 4: 
// create a function called getInningScore 
// the function should take the inning function as an argument 
// it should return an object with with a score for home and a score for away that that populates from invoking the inning callback. */

function getInningScore(inningCB) {
  return {
    Home: inningCB(),
    Away: inningCB(),
  }
}
/* Task 5: scoreboard()
Use the scoreboard function below to do the following:
  1. Receive a callback function, that you create, called `getInningScore`
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning (see example below)
  5. If there's a tie, add this message with the score to the end of the array: 
     "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there is no tie, add this message to the end of the array: 
     "Final Score: Away 13 - Home 11"  (see no tie example below)
  HINT: `getInningScore` should be invoked by `scoreboard` and use `inning` to get and return the scores back to `scoreboard`
  
  For example: If there is no tie, invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 3",
  "Inning 3: Away 4 - Home 4", 
  "Inning 4: Away 5 - Home 5", 
  "Inning 5: Away 7 - Home 7", 
  "Inning 6: Away 9 - Home 8", 
  "Inning 7: Away 10 - Home 8", 
  "Inning 8: Away 12 - Home 9",
  "Inning 9: Away 13 - Home 11", 
  "Final Score: Away 13 - Home 11"  
]  
  If there is a tie, invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 3",
  "Inning 3: Away 4 - Home 4", 
  "Inning 4: Away 5 - Home 5", 
  "Inning 5: Away 7 - Home 7", 
  "Inning 6: Away 9 - Home 8", 
  "Inning 7: Away 10 - Home 8", 
  "Inning 8: Away 12 - Home 10",
  "Inning 9: Away 12 - Home 12", 
  "This game will require extra innings: Away 12 - Home 12"
]  
  */


function scoreboard(getInningScoreCB, inningCB, numOfInnings) {
  let finalArr = [];
  let homeScore = 0;
  let awayScore = 0;
  for (let i = 1; i <= numOfInnings; i++){
    const currentScore = getInningScoreCB(inningCB);
    homeScore += currentScore.Home;
    awayScore += currentScore.Away;
    finalArr.push(`Inning ${i}: Away ${awayScore} - Home: ${homeScore}`)
  }

  let checkAwayTie = Number(finalArr[finalArr.length - 1].slice(15,17))
  let checkHomeTie = Number(finalArr[finalArr.length - 1].slice(25))

  let tieMessage = `This game will require extra innings: ${finalArr[finalArr.length - 1].slice(10)}`
  let noTieMessage = `Final Score: ${finalArr[finalArr.length - 1].slice(10)}`

  if (checkAwayTie === checkHomeTie){
      finalArr.push(tieMessage)
  } else {
      finalArr.push(noTieMessage)
  }
  return finalArr
}




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
export default{
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}