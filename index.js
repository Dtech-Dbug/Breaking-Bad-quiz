var readlineSync = require('readline-sync')
var chalk = require('chalk')

console.log(chalk.white('B R E A K I N G   B A D '))
console.log('-----')

var userName = readlineSync.question('May I have your name? ')
console.log('-----')
console.log(chalk.bold('WELCOME '+ userName +' TO THE BREAKING BAD TRIVIA QUIZ IN THE CLASSIC OLD FASHIONED WAY'))
console.log('-----')
console.log(chalk.bgYellow.bold.underline('TRY TO TYPE THE ANSWERS IN LOWER-CASE & WATCH OUT FOR SPELLING ERRORS!'))
console.log(chalk.bgYellow.bold.underline('THERE ARE TOTAL 20 QUESTIONS FOR THE SUPERFANS.FOR EVERY RIGHT ANSWER YOU SCORE 1 POINT AND FOR EVERY WRONG ANSWER YOU LOSE 1 POINT'))
console.log('------')

console.log('HIGHEST SCORE: 20 ' + ' BY ' + (chalk.underline ('HEISENBERG')))
console.log('-----')
console.log(chalk.black.bold.bgGreen('LET US START!'))
console.log('-----')

 var score = 0



function play (question,answer){
 
  var userAnswer = readlineSync.question(question);
  if(userAnswer === answer){
    console.log(chalk.green.bold('You are Goddamn right! '))
    score = score + 1;
    //console.log('You scored ' +score)
    return '-----';
  
    }
     else{
       console.log((chalk.red.bold('OOPS!You are not Danger,You are wrong.')))
       score = score -1
      // console.log('You scored ' +score)
       var correctAnswer = answer;

       console.log('The right answer is ' + correctAnswer)
       return ('-----');
      
    }


    
  }

  console.log(play('1. Two elements from the periodic table – Br and Ba – are used in the Breaking Bad title image. Name the elements: ', 'bromine, barium'))
 console.log(play('2.Which year was Breaking Bad first aired? ','2008'))
 console.log(play('3.Which area of science does Walt teach at school? ','chemistry'))
 console.log(play('4.What does DEA stand for? ', 'drug enforcement agency'))
 console.log(play('5.Name the actor who plays Walt Jr. ','rj mitte'))
 console.log(play('6. What was the name of the alter-ego of Walter White? ','werner heisenberg'))
 console.log(play('7.Name the actor who plays heisenberg? ', 'bryan cranston'))
 console.log(play('8.Which colour is commonly associated with Marie Schrader throughout the show? ','purple'))
 console.log(play('9.What nickname does Jesse give to the RV he uses with Walt to cook meth? ', 'the krystal ship'))
 console.log(play('10.The highest-rated episode on IMDB – scoring a perfect 10/10 with over 110,000 votes – shares its name with the work of famous poet Percy Shelley. Name it: ', 'ozymandias'))
 console.log(play('11.Name the famous author of the book Hank reads to discover Walt’s true identity: ', 'walt whitman'))
 console.log(play('12.Which food does Walt infamously throw onto the roof of his house? ', 'pizza'))
 console.log(play('13.Name the infant daughter of Walt and Skyler White: ', 'holly'))
 console.log(play('14. Complete the iconic phrase: I am not in danger, Skyler. I am the danger! A guy opens his door and gets shot and you think that of me? No. I am ____: ','the one who knocks'))

//mcq incl array, for loops and if else conditioning for comparison of answer

console.log('15.What was the name of the high school where Walter White taught chemistry? ')
var answer15 = ['a.Albuquerque Senior High School',
'b.J.P. Wynne High School',
'c.Rio Rancho High School',
'd.Santa Ana Pueblo High School']
var rightAnswer15 = 'b'
//function of mcq and comparing actual result and viewing score

for (i=0;i<answer15.length;i++){
  console.log(answer15[i])
}
var userInput = readlineSync.question('Your answer: ')
if(userInput === rightAnswer15){
    console.log(chalk.green.bold('You are Goddamn right! '))
    score = score +1
    //console.log('You scored ' + score)
    
  }
  
    else{
       console.log(chalk.red.bold('OOPS!You are not Danger,You are wrong.'))
       score = score -1
      // console.log('You scored ' +score)
      

       console.log('The right answer is ' + rightAnswer15)
       
  }
  console.log('------')

console.log("16.What was Jesse Pinkman's license plate?")

answer16 = ['a.YEAHBTCH',
'b.CAPN COOK',
'c.THE CAPN',
'd.GO AWAY']
var rightAnswer16 = 'c'
for (i=0;i<answer16.length;i++){
  console.log(answer16[i])
}
var userInput = readlineSync.question('Your answer: ')
if(userInput === rightAnswer16){
    console.log(chalk.green.bold('You are Goddamn right! '))
     score = score +1
     //console.log('You scored ' + score)
    
  }
  
    else{
       console.log(chalk.red.bold('OOPS!You are not Danger,You are wrong.'))
       score = score -1
       //console.log('You scored ' +score)
      

       console.log('The right answer is ' + rightAnswer16)}
        console.log('------')

console.log("17.What was the name of Hank Schrader's homemade beer? ")
var answer17 = ["a.Schrader Ale",
"b.Uncle Hank's Brew",
"c.Hankeken",
"d.Schraderbräu"]

var rightAnswer17 = "d"
for (i=0;i<answer17.length;i++){
  console.log(answer17[i])
}
var userInput = readlineSync.question('Your answer: ')
if(userInput === rightAnswer17){
    console.log(chalk.green.bold('You are Goddamn right! '))
     score = score +1
     //console.log('You scored ' + score)
    
  }
  
    else{
       console.log(chalk.red.bold('OOPS!You are not Danger,You are wrong.'))
       score = score -1
       //console.log('You scored ' +score)
      

       console.log('The right answer is ' + rightAnswer17)
  }
   console.log('------')

console.log("18.What was Walter White's address? ")
var answer18 = ['a.3828 Piermont Drive NE',
'b.1617 Candelaria Street',
'c.4257 Isleta Boulevard Southwest',
'd.308 Negra Arroyo Lane']

var rightAnswer18 = 'd'
for (i=0;i<answer18.length;i++){
  console.log(answer18[i])
}
var userInput = readlineSync.question('Your answer: ')
if(userInput === rightAnswer18){
    console.log(chalk.green.bold('You are Goddamn right! '))
     score = score +1
     //console.log('You scored ' + score)
    
  }
  
    else{
       console.log(chalk.red.bold('OOPS!You are not Danger,You are wrong.'))
       score = score -1
       //console.log('You scored ' +score)
      

       console.log('The right answer is ' + rightAnswer18)
  }
   console.log('------')

  console.log("19'What was Jesse's little brother's name? ")
  var answer19 = ['a.Ben',
'b.Jake',
'c.Josh',
'd.Jonny'] 
var rightAnswer19 = 'b'
for (i=0;i<answer19.length;i++){
  console.log(answer19[i])
}
var userInput = readlineSync.question('Your answer: ')
if(userInput === rightAnswer19){
    console.log(chalk.green.bold('You are Goddamn right! '))
     score = score +1
    //console.log('You scored ' + score)
    
  }
  
    else{
       console.log(chalk.red.bold('OOPS!You are not Danger,You are wrong.'))
       score = score -1
       //console.log('You scored ' +score)
      

       console.log('The right answer is ' + rightAnswer19)
  }
   console.log('------')
  console.log("20.What is the name of the Walt Whitman book that Hank finds in Walt's bathroom, confirming that his brother-in-law is the Heisenberg? ")
  var answer20 = ['a.Song of Myself',
'b.A Noiseless Patient Spider',
'c.Drum-Taps',
'd.Leaves of Grass']
var rightAnswer20 ='d'
for (i=0;i<answer20.length;i++){
  console.log(answer20[i])
}
var userInput = readlineSync.question('Your answer: ')
if(userInput === rightAnswer20){
    console.log(chalk.green.bold('You are Goddamn right! '))
     score = score +1
     //console.log('You scored ' + score)
    
  }
  
    else{
       console.log(chalk.red.bold('OOPS!You are not Danger,You are wrong.'))
       score = score -1
       //console.log('You scored ' +score)
      

       console.log('The right answer is ' + rightAnswer20)
  }
   console.log('------')


   console.log('WOW! YOU SCORED A TOTAL ' + score);
   console.log(chalk.bold.green.bgBlack('DO NO FORGET TO SEND ME THE SCREENSHOT OF YOUR SCORE! '))
