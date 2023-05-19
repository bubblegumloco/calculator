let onBtn = document.querySelector('#onBtn');
let numbers = document.querySelectorAll('.numbers');
let buttons = document.querySelectorAll('button');
let screen = document.querySelector('.viewScreen');
let ops = document.querySelectorAll('.op');
let equalBtn = document.querySelector('#equalBtn');
let clearBtn = document.querySelector('#acBtn');
let backspaceBtn = document.querySelector('#delBtn')
let decimalBtn = document.querySelector('#decimalBtn');
let expBtn = document.querySelector('#expBtn');
let trigFunc = document.querySelectorAll('.trigFunc');
let posNegBtn = document.querySelector('.pos-neg');
let logFun = document.querySelectorAll('.logFun');
let piBtn = document.querySelector('#piBtn');
let eulerBtn = document.querySelector('#eulerBtn');
let radDegBtn = document.querySelector('#radDegBtn');
let sqrtBtn = document.querySelector('#sqrtBtn');
let anyRoot = document.querySelector('#anyRoot');
let anyExp = document.querySelector('#anyExpBtn');
let sqBtn = document.querySelector('#expSq');
let absValBtn = document.querySelector('#absValBtn');
let hyperbolic = document.querySelector('#hypBtn');
let modes = document.querySelectorAll('.modes')
let inverseTrigBtn = document.querySelector('#inverseTrig');
let factorialBtn = document.querySelector('#factorialBtn');
let engSciBtn = document.querySelectorAll('.engSciBtn');
let memoryScreen = document.querySelector('.memoryScreen');
let colorChange = document.querySelector('.color');

let a = '';
let c = '';
let operator = ''; 
let trigf = '';
let logfunction = '';
let storage = '';
let decimalCount = 0;
let changeTrig = '';

let arr = [];
screen.textContent = '';

onBtn.addEventListener("click", function(){
  screen.textContent = 0;
})

numbers.forEach(number => {
  number.addEventListener('click', e => {
    if (operator === '') {
      a += e.target.textContent;
      screen.textContent = a;

      if (a.length > 8) a = a.substring(0,8);

    } else {
      c += e.target.textContent;
      screen.textContent = c;

      if (c.length > 8) c = c.substring(0,8);
      }
    decimalTracker(number);
    })
});

function decimalTracker(number){
  if (number.id === "decimalBtn") {
    decimalCount++;
  };

  if (number.id === "decimalBtn" && decimalCount > 1){
    decimalBtn.disabled = true;
  } else if (storage != ''){
    decimalBtn.disabled = false; // helps working w/ decimals values after answers appear
  }

};

ops.forEach(op => {
  op.addEventListener('click', e => {
    operator = e.target.textContent; 
  });
});

trigFunc.forEach(trig => {
  trig.addEventListener('click', e => {
    trigf = e.target.textContent;
    operator = trigf;

    if (trigf != ''){
      screen.textContent = a + trigf + '(' + c;
    } else {
      screen.textContent = trigf + '(' + c;
    }
  });
});

logFun.forEach(logf => {
  logf.addEventListener('click', e => {
    logfunction = e.target.textContent;
    operator = logfunction;

    if (a != ''){
      screen.textContent = a + logfunction + '(';
    } else if (c != ''){
      screen.textContent = a + logfunction + '(' +c + ')';
    } else {
      screen.textContent = logfunction;
    }
  });
});

/*a + logfunction + '(' +  */

function switchSign(){
  parseFloat(a)
  parseFloat(c)
  parseFloat(screen.textContent);

  if (screen.textContent == a){
    a = screen.textContent * -1;
    screen.textContent = a;
  } else if (screen.textContent == c){
    c = screen.textContent * -1;
    screen.textContent = c;
  } else {
    screen.textContent = screen.textContent * -1;
  }
};

posNegBtn.addEventListener("click", switchSign);

piBtn.value = Math.PI;
eulerBtn.value = Math.E;

piBtn.onclick = function(){
  screen.textContent = piBtn.value.substring(0,11);

  if (a != ''){
    c = piBtn.value;
  } else {
    a = piBtn.value;
  }
};

eulerBtn.onclick = function(){
  screen.textContent = eulerBtn.value.substring(0,11);

  if (a != ''){
    c = eulerBtn.value;
  } else {
    a = eulerBtn.value;
  }
};

sqrtBtn.addEventListener("click", e => {
  sqrtTxt = e.target.textContent;
  operator = sqrtTxt;
  screen.textContent = Math.sqrt(a).toFixed(8);
  answer = screen.textContent;
  storage = answer;
  chainOpp();
  newInfo();
});

sqBtn.addEventListener("click", e => {
  sqTxt = e.target.textContent;
  operator = sqTxt;
  if (c == ''){
    answer = a ** 2;
  }
  formatAnswer();
  screen.textContent = answer;
  storage = answer;
  chainOpp();
  newInfo();
});

anyRoot.addEventListener("click", e => {
  anyRootTxt = e.target.textContent;
  operator = anyRootTxt;
});

anyExp.addEventListener("click", e => {
  anyExpTxt = e.target.textContent;
  operator = anyExpTxt;
})

expBtn.addEventListener("click", e => {
  expTxt = e.target.textContent;
  operator = expTxt;
});

absValBtn.addEventListener("click", e => {
  absVal();
});

/* Inverse Trig Functions */

inverseTrigBtn.addEventListener("click", e => {
  inverseTrigBtn.classList.toggle('pink');
  inverseTrigBtn.classList.toggle('changeTxt');
  
  if (inverseTrigBtn.classList.contains('changeTxt')){
    inverseTrigBtn.textContent = 'arcTrig';
  } else {
    inverseTrigBtn.textContent = 'arcTrig';
  }

  flipTrig();
});

function flipTrig(){
  trigFunc.forEach(trig => {
    trig.addEventListener('click', e => {
      changeTrig = e.target.textContent;
      invTrigConditionals(changeTrig);
      
    if (changeTrig == 'sin'){
      trig.textContent = 'arcsin';
    } else if (changeTrig == 'cos'){
      trig.textContent = 'arccos';
    } else if (changeTrig == 'tan'){
      trig.textContent = 'arctan';
    };
  });
});
};

function invTrigConditionals(changeTrig){
  if (changeTrig == 'sin'){
    screen.textContent = 'arcsin';
    operator = 'arcsin';
  } else if (changeTrig == 'cos'){
    screen.textContent = 'arccos';
    operator = 'cos-1';
  } else if (changeTrig == 'tan'){
    screen.textContent = 'arctan';
    operator = 'tan-1';
  } else if (changeTrig == 'sinh'){
    screen.textContent = 'arcsinh';
    operator = 'asinh';
  } else if (changeTrig == 'cosh'){
    screen.textContent = 'arccosh';
    operator = 'acosh';
  } else if (changeTrig == 'tanh'){
    screen.textContent = 'arctanh';
    operator = 'atanh';
  };
};

/* Hyperbolic functions */

hyperbolic.addEventListener("click", e => {
  hyperbolic.classList.toggle('pink');
  hyperbolicFunctions();
});

function hyperbolicFunctions(){
trigFunc.forEach(trig => {
  trig.addEventListener('click', e => {
    changeTrig = e.target.textContent;

    switch(changeTrig){
      case 'sin':
        trig.textContent = 'sinh';
        screen.textContent = 'sinh(';
        operator = 'sinh';
      break;
      case 'cos':
        trig.textContent = 'cosh';
        screen.textContent = 'cosh(';
        operator = 'cosh';
      break;
      case 'tan':
        trig.textContent = 'tanh';
        screen.textContent = 'tanh(';
        operator = 'tanh';
      break;
      case 'asinh':
        trig.textContent = 'arcsinh';
        screen.textContent = 'arcsinh(';
        operator = 'asinh';
      break;
      case 'acosh':
        trig.textContent = 'arccosh';
        screen.textContent = 'arccosh(';
        operator = 'acosh';
      break;
      case 'atanh':
        trig.textContent = 'arctanh';
        screen.textContent = 'arctanh(';
        operator = 'atanh';
      break;
      default:
        screen.textContent = `Please click on the buttons in this order for hyperbolic inverse trig: 
        hyp -> inverse trig -> the trig function you need`;
        screen.style.fontSize = '3vh';
    }
    memoryBank();
  });
});
};

let pi = Math.PI;

radDegBtn.addEventListener("click", e => {
  radDegBtn.classList.toggle('pink');
  radDegBtn.classList.toggle('changeTxt');

  if (radDegBtn.classList.contains('changeTxt')){
    radDegBtn.textContent = 'Deg';
    toDeg();
  } else {
    radDegBtn.textContent = 'Rad';
    toRad();
  }
});


function toDeg(){
  if (radDegBtn.classList.contains('changeTxt')){
    a = parseFloat(a);
    a = a * (180/pi); 
    screen.textContent = a;
  }
};

function toRad(){
  if (!radDegBtn.classList.contains('changeTxt')){
    a = parseFloat(a);
    a = a * (pi/180);
    screen.textContent = a; 
  }
};

engSciBtn.forEach(es => {
  es.addEventListener('click', e => {
    if (es.id === 'engBtn'){
      toENG();
    } else if (es.id === 'sciBtn'){
      toSCI();
    }
  });
});

// c has to be passed first or else there is an error 

function toENG(){
  if (c != ''){
    c = parseFloat(c);
    c = math.format(c, {notation: 'engineering'});  
    screen.textContent = c;
  } else if (a != ''){
    a = parseFloat(a);
    a = math.format(a, {notation: 'engineering'});  
    screen.textContent = a;
  } else {
    answer = math.format(answer, {notation: 'engineering'});  
    screen.textContent = answer;
  }
};

function toSCI(){
  if (c != ''){
    c = parseFloat(c);
    c = c.toExponential();
    screen.textContent = c;
  } else if (a != ''){
    a = parseFloat(a);
    a = a.toExponential(); 
    screen.textContent = a;
  } else {
    answer = parseFloat(answer);
    answer = answer.toExponential();
    screen.textContent = answer;
  }
};

function absVal(){
  a = parseFloat(a);
  c = parseFloat(c);
  screen.textContent = parseFloat(screen.textContent);

  if (screen.textContent < 0){
    if (screen.textContent == a){
      a = screen.textContent * -1;
      screen.textContent = a;
    } else if (screen.textContent == c){
      c = screen.textContent * -1;
      screen.textContent = c;
    } else {
      screen.textContent = screen.textContent * -1;
      c = ''; //prevents NAN error
    }
  }
};

equalBtn.addEventListener('click', function(){
  parseFloat(a);
  parseFloat(c);
  operate(a, operator, c);
  storage = answer;
  chainOpp();
  newInfo();
});

function chainOpp(){
  a = storage;
  operator = '';
  c = ''; 
  arr = [];
};

function newInfo(){
  operator = e.target.textContent;
  arr.push(operator);
  c += e.target.textContent;
  operate(a, operator, c);
};

function factorialize(a){
  let factorial = a;
  if (a === 0 || a === 1) 
    return 1;

    while (a > 1){
      a--;
      factorial = factorial * a;
    }
    return factorial;
};

factorialBtn.addEventListener("click", function(){
  operator = '!';
  arr.push(operator);
  answer = factorialize(a);
  screen.textContent = answer;
  storage = answer;
  a = storage;
});

function memoryBank(){
  memoryScreen.textContent = arr.join('');
};

function operate(a, operator, c) {
  arr.push(a);
  arr.push(operator);
  arr.push(c);
  arr.push('=');

  switch (operator) {
    case '+':
      answer = parseFloat(a) + parseFloat(c);
      break;
    case '-':
      answer = a - c;
      break;
    case 'X':
      answer = a * c;
      break;
    case '÷':
      if (c == 0) {
        answer = `Indeterminate Form - Can't Divide By 0`;
        screen.style.fontSize = '6vh';
      } else {
        answer = a / c;
      };
      break;
    case 'x²':
        if (c == ''){
          answer = a ** 2;
        }
      break;
    case 'x3':
        answer = a ** 3;
      break;
    case 'EXP':
        answer = a * Math.pow(10, c);
      break;
    case 'xInv':
        answer = a ** -1;
      break;
    case 'a √ b':
        answer = Math.pow(c, (1/a));
        break;
    case '^':
        answer = a ** c;
        break;
    case 'sin':
      answer = Math.sin(c);
      if (a != ''){
        answer = a * Math.sin(c);
      }
      break;
    case 'cos':
      answer = Math.cos(c);
      if (a != ''){
        answer = a * Math.cos(c);
      }
      break;
    case 'tan':
      answer = Math.tan(c);
      if (a != ''){
        answer = a * Math.tan(c);
      }
      break;
    case 'arcsin': 
      answer = Math.asin(c);
      if (a != ''){
        answer = a * Math.asin(c);
      }
      break;
    case 'cos-1': 
      answer = Math.acos(c);
      if (a != ''){
        answer = a * Math.acos(c);
      }
      break;
    case 'tan-1': 
      answer = Math.atan(c);
      if (a != ''){
        answer = a * Math.atan(c);
      }
      break;
    case 'sinh':
      answer = Math.sinh(c);
      if (a != ''){
        answer = a * Math.sinh(c);
      }
      break;
    case 'cosh':
      answer = Math.cosh(c);
      if (a != ''){
        answer = a * Math.cosh(c);
      }
      break;
    case 'tanh':
      answer = Math.tanh(c);
      if (a != ''){
        answer = a * Math.tanh(c);
      }
      break;
    case 'asinh': 
      answer = Math.asinh(c);
      if (a != ''){
        answer = a * Math.asinh(c);
      }
      break; 
    case 'acosh':
      answer = Math.acosh(c);
      if (a != ''){
        answer = a * Math.acosh(c);
      }
      break;   
    case 'atanh':
      answer = Math.atanh(c);
      if (a != ''){
        answer = a * Math.atanh(c);
      }
      break;        
    case 'ln':
      answer = Math.log(c);
      if (a != ''){
        answer = a * Math.log(c);
      }
      break;
    case 'log':
      answer = Math.log10(c);
      if (a != ''){
        answer = a * Math.log10(c);
      }
      break;
    default:
      answer = "Please choose a valid operator."
  }
  formatAnswer();
  storage = answer;
  arr.push(storage);
  memoryBank();
  return answer;
};

function formatAnswer(){
  if (answer % 1 != 0){
    screen.textContent = answer.toFixed(8);
  } else {
    screen.textContent = answer;
  }
};
// all trig functions are radians by default 

function clearDisplay(){
  screen.textContent = '';
  memoryScreen.textContent = '';
  answer = 0;
  a = '';
  c = '';
  operator = ''; 
  arr = [];
};

clearBtn.addEventListener('click', clearDisplay);

backspaceBtn.addEventListener('click', (e) => {
  screen.textContent = screen.textContent.slice(0, -1);
  if (a != '' && operator != ''){
    c = screen.textContent;
    a = a; 
  }

  if (operator == ''){
    a = screen.textContent;
    c = '';
  }
});

let storageDisplay = document.querySelector('#storageDiv');
let rclBtn = document.querySelector('#rclBtn');

rclBtn.addEventListener("click", (e) => {
  storageDisplay.textContent = 'Storage:' + answer;
});

let reset = document.querySelector('#resetBtn');
reset.addEventListener("click", resetAll);

function resetAll(){
  screen.textContent = '';
  memoryScreen.textContent = '';
  answer = 0;
  storage = 0;
  a = '';
  c = '';
  operator = ''; 
  arr = [];
  radDegBtn.textContent = 'Rad';
  radDegBtn.classList.remove('pink')
  inverseTrigBtn.textContent = 'arcTrig';
  inverseTrigBtn.classList.remove('pink');
  hyperbolic.classList.remove('pink');
};

/* Keyboard Compatibility */

window.addEventListener('keydown', (e) => {
  if (
    e.key === '0' ||
    e.key === '1' ||
    e.key === '2' ||
    e.key === '3' ||
    e.key === '4' ||
    e.key === '5' ||
    e.key === '6' ||
    e.key === '7' ||
    e.key === '8' ||
    e.key === '9' ||
    e.key === '.'
  ){
    clickButtonEl(e.key);
  }else if(
    e.key === '+' ||
    e.key === '-' ||
    e.key === '^' 
  ){
    clickButtonEl(e.key);
  }else if (e.key === '*'){
    clickButtonEl('X');
  }else if (e.key === '/'){
    clickButtonEl('÷');
  }else if (e.key === 'Enter' || e.key === '='){
    clickEqual();
  }else if (e.key === 'Delete' || e.key === 'Backspace'){
    clickEraser();
  }
});

function clickButtonEl(key){
  numbers.forEach(number => {
    if (number.textContent === key){
      number.click();
    }
  })

  ops.forEach(op => {
    if (op.textContent === key){
      op.click();
    }
  })
};

function clickEqual(){
  equalBtn.click();
};

function clickEraser(){
  backspaceBtn.click();
};

/* Color Switch  */
let container = document.querySelector('.container');
let controller = document.querySelector('.controller');
let colors = document.querySelectorAll('.colors');
let blankBtn = document.querySelector('#blank');

function switchColor(color){
  switch (color.id) {
    case 'pink':
      container.style.backgroundColor = 'rgb(255, 201, 236)';
      controller.style.backgroundColor = 'rgb(243, 223, 237)';
      break;
    case 'blue':
      container.style.backgroundColor = '#a7e7fa';
      controller.style.backgroundColor = '#d3f2fb';
      break;
    case 'pistachio':
      container.style.backgroundColor = '#c9f1c9';
      screen.style.backgroundColor = '#F1eeeb';
      memoryScreen.style.backgroundColor = '#F1eeeb';
      controller.style.backgroundColor = '#e4fbcf';
      break;
    case 'lemon':
      container.style.backgroundColor = '#fcf3a4';
      screen.style.backgroundColor = '#Eae9e2';
      memoryScreen.style.backgroundColor = '#Eae9e2';
      controller.style.backgroundColor = '#fdf6d0';
      break;    
  }
};

colors.forEach(color => {
  color.addEventListener('click', e => {
    switchColor(color);
    buttonLoop(color);
  });
});

function buttonLoop(color){
  buttons.forEach(button => {
      if (color.id === 'pink'){
        button.style.backgroundColor = 'rgb(243, 223, 237)';
        button.style.borderColor = 'rgb(243, 203, 231)';
      } else if (color.id === 'blue'){
        button.style.backgroundColor = '#d3f2fb';
        button.style.borderColor = '#c8eefa';
      } else if (color.id === 'pistachio'){
        button.style.backgroundColor = '#e4fbcf';
        button.style.borderColor = '#ddf7c3';
      } else if (color.id === 'lemon'){
        button.style.backgroundColor = '#fcf5ca';
        button.style.borderColor = '#f7eeb5';
      };
  });
  blankBtn.style.backgroundColor = 'transparent';
  blankBtn.style.borderColor = 'transparent';
};



