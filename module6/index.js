//Задание 1
let arr = [0, 13, 88, undefined, null, 65, 0.1, 0.5, 542, 28, 3516,];
function evenOdd(arr){
let even = 0;
let odd = 0;
let nulls = 0;
let str = 0;
let zero = 0;

for(let i = 0; i < arr.length; i++){
    let x = arr[i];
    if(typeof x == 'number' && x % 2 == 0 && x != 0){
        even++;
    }else if(typeof x == 'number' && x % 2 != 0 && x != 0){
        odd++;
    }else if(typeof x == 'string'){
        str++;
    }else if(x == 0){
        zero++;
    }else if (x == null){
    		nulls++;
    }
  }
  
console.log('Чётные - ' + even + '\nНечётные - ' + odd + '\nСтроки - ' + str + '\nНули - ' + zero + '\nNull/Undefined - ' + nulls);
}
evenOdd(arr); 

//Задание 2
function primeNum(a) {
  let primeNum;
  if (typeof a == 'number' && !isNaN(a)) {
    if (a <= 1000) {
      for (let i = 2; i < 10; i++) {
        if (a % i != 0 && a != i) {
          primeNum = true;
        } else if (a != i) {
          primeNum = false;
          return 'Это составное число';
        }
      }
      if (primeNum == true) {
        return 'Это простое число';
      }
    } else {
      return 'Число больше 1000';
    }
  } else {
    return 'Это не число';
  }
}
number = +prompt('Введите число:');
alert(primeNum(number));

//Задание 3
function returnSum(a){
  return function(b){
  console.log(a+b);
  }
}
returnSum(111)(222);


//Задание 4
let x = + prompt("Введите начальное число");
let y = + prompt("Введите конечное число");
function countNum(x, y) {
	
  let current = x;
  let timerId = setInterval(function () {
    console.log(current);
    if (current == y) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
}
countNum(x, y);

//Задание 5
const pow = (x,n) => Math.pow(x,n);
console.log(pow(4,4));