//classes

class Problem {
  constructor(numI,numII){
    this.numI = numI;
    this.numII=numII;
  }

  answer(){
    let sum = this.numI + this.numII;
    return sum;
  }

  format(){
    let pretty = this.numI + ' + ' + this.numII + ' ='
    return pretty;
  }
}

//da lets (variables)

let numLimit = 10;

let error = document.getElementById("errmess");

let count = 0;

let problems = []; //lol i got 99 problems...

let test = new Problem(randomize(),randomize());

let goodmess = document.getElementById("goodmess");

let streak=0;



let highcookie=document.cookie
if (highcookie!=''){
  highscore=parseInt(highcookie);
};

let scoretrack = document.getElementById("streak");

problems.push(test)

let prob = document.getElementById("prob");

//let sol = document.getElementById("sol");

prob.innerHTML = test.format();

//functions

function format (x,y){ //tbu in Refresh()
  let pretty = x + ' + ' + y + ' =';
  return pretty;
}

/*function nope(){
  if (inp.value!
}*/

function randomize(){//tbu in Refresh()
  let res = Math.random()*numLimit;
  res=Math.ceil(res);
  return res;
}

function clear(){
  document.getElementById("ans").value = '';
}

function Refresh(){
  submit.disabled = false;
  goodmess.innerHTML = 'Problem'
  error.innerHTML = '';
  let fir = randomize();
  let sec = randomize()
  let p = new Problem(fir,sec);
  problems.push(p);
  prob.style.color = "white"
  prob.innerHTML = p.format();
  count++;
}

function check(){
  let inp = document.getElementById("ans")
  if (inp.value===''){
    //BLANK
    error.innerHTML = "Make sure you've entered your answer!"
  } else if (inp.value==problems[count].answer()){ //RIGHT
    prob.innerHTML='';
    error.innerHTML = '';
    prob.style.color = "rgb(66,240,202)";
    prob.innerHTML = problems[count].format() + ' ' + problems[count].answer();
    streak++;
  } else {
    //WRONG
    error.innerHTML = "You'll get it next time!";
    prob.style.color = "rgb(255,185,32)";
    prob.innerHTML = problems[count].format() + ' ' + problems[count].answer()
    streak = 0;
  }
  if (streak===3){
    goodmess.innerHTML = 'Keep it up!'
  }
  scoretrack.innerHTML = "Problem Streak: " + streak; 
  submit.disabled = true;
}


