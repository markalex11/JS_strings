//перевод из римских чисел в аробские
function solution (roman) {
  const arabic = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
   
  return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + arabic[roman], 0);
}

//есть два массива , отфильтровать один массив так чтобы в нем осталисть только строки которые имеют в себе подстроки другого мссива
function inArray(a1,a2){
  return a1.filter( sub => a2.some( whole => whole.includes(sub))).sort();
}

//возвращает букву которой не хватает в списке
function findMissingLetter(array)
{
   var i=array[0].charCodeAt();
   array.map(x=>  x.charCodeAt()==i?i++:i);
   return String.fromCharCode(i);
}


//делает из обычного числа формат мобильного номера тел
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

//возвращает только буквы которые повторяются в строке
function duplicateCount(text){
  var count = text.toLowerCase().split('').reduce((accum, curr) => {
    accum[curr] ? accum[curr] += 1 : accum[curr] = 1;
    return accum;
  }, {});
  return Object.keys(count).filter(key => count[key] > 1).length;
}

// создает двухмерный массив сколько каких символов в строке
const orderedCount = str => [...new Set([...str])].map(char => [char, str.split(char).length - 1])   



//делает волну из строки
function wave(str){
  let result = [];
  
  str.split("").forEach((char, index) => {
      if (/[a-z]/.test(char)) {
          result.push(str.slice(0, index) + char.toUpperCase() + str.slice(index + 1));
      }
  });
  
  return result;
}



//валидотор Айпи адресса
function isValidIP(str) {
  if((/[a-zA-Z]|\s/).test(str) || str.split('.').some(el=> el.length>1&&el.startsWith('0'))){
    return false
  }
  return str.split('.').every(el => Number(el)>=0 && Number(el)<=255) && str.split('.').filter(el=>el != '').length == 4
}

// разделить прямоугольник по формуле 
function sqInRect(lng, wdth){
  const  result = [];
  if(lng == wdth) {
    return null
  }
  while(lng > 0 && wdth > 0){
    result.push(lng > wdth ? wdth : lng);
    lng > wdth ? lng -= wdth : wdth -= lng;
  }
  return result
}

// и так все понятно
String.prototype.camelCase=function(){
  if(this == ''){
    return ''
  }
  return this.trim().split(' ').map(el=> el[0].toUpperCase() + el.substring(1)).reduce((acc,el)=>acc+el,'')
}


// сумма всех цыфр от нуля до н
function f(n){
  if(typeof n != 'number' || !Number.isInteger(n) || n<1 ){
    return false
  }
 return (n*(n+1))/2
};

//найти букву моя версия 
function findMissingLetter(array){
  let res;
  
  const a = array.map(el=>el.toLowerCase())
              .sort()
              .map(el=>el.charCodeAt());
  
  for(let i = a[0]; i < a[a.length-1]; i++){
    if(!a.includes(i)){
      res = i
    }
  }
  if(array[0] == array[0].toUpperCase()){
    return String.fromCharCode(res).toUpperCase()
  }
     return String.fromCharCode(res)      
}


function duplicateEncode(word){
  word = word.toLowerCase().split('');
  const store = word.reduce((acc, cur) => {
    !acc[cur] ? acc[cur] = 1 : acc[cur]++;
    return acc;
  }, {});
  for(let key in store){
    if(store[key] > 1){
      delete store[key]
    }
  }
  
  for(let i = 0; i < word.length; i++){
    if(store.hasOwnProperty(word[i])){
      word[i] = '(';
    } else {
      word[i] = ')';
    }
  }
  
  
   return word.join('');
}

function getCount(str) {
  const myRegex = /[aeiou]/gi;
   
  return str.split('').filter(el => el.match(myRegex)).length
  
  
}

function removeChar(str){
  if(str.length < 3){
    return ''
  }else{
    return str.slice(1,-1)
  }
  
};

function isPangram(string){
  string = string.toLowerCase().match(/[a-z]/g);
  return [...new Set(string)].length == 26
}


function encrypt(text, n) {
  if(n == 0){
    return text;
  }else if(text == ''){
    return '';
  }else if(!text){
    return null;
  }
  
  
  while(n > 0) {
  const result = [];
  text = text.split('');
  for(let i = 1; i < text.length; i++){
    result.push(text[i]);
    i++;
  }
  for(let i = 0; i < text.length; i++){
    result.push(text[i]);
    i++;
  }
  n--;
  text = result.join('');
    
    }
  return text
}



function decrypt(encryptedText, n) {
  if(n == 0){
    return encryptedText;
  }else if(encryptedText == ''){
    return '';
  }else if(!encryptedText){
    return null;
  }
  
  
  while(n > 0){
    let first = encryptedText.slice(0,Math.floor(encryptedText.length/2)).split('');
    let second = encryptedText.slice(Math.floor(encryptedText.length/2)).split('');
    for(let i = 0; i < encryptedText.length; i+=2){
      first.splice(i,0,second.shift());
    }
    n--;
    encryptedText = first.join('');
  }
  return encryptedText
}


function removeUrlAnchor(url){
  if(url.indexOf('#') == -1){
    return url
  } else {
  return url.slice(0,url.indexOf('#'))
    }
}

function sortByLength (array) {
  return array.sort((a,b)=> a.length - b.length,0)
};


const rps = (p1, p2) => {
  if(p1 == p2){
    return "Draw!"
  }else if(p1 == 'rock'&& p2 == 'scissors'||p1 == 'scissors'&& p2 == 'paper'||p1 == 'paper'&&p2 == 'rock'){
    return "Player 1 won!";
  }else{
    return "Player 2 won!"
  }
  
 };

 function shortcut (string) {
  return string.replace(/[aeiou]+/g,'')
}

function bmi(weight, height) {
  const myBmi = weight/(height*height);
  if(myBmi <= 18.5){
  return "Underweight";
    }else if(myBmi<=25.0){
      return "Normal";
    }else if(myBmi<=30.0){
      return  "Overweight";
    }else{
      return "Obese"
    }
  
}

var isAnagram = function(test, original) {
  test = test.toLowerCase().split('').sort().join('');
  original = original.toLowerCase().split('').sort().join('');
  return original == test
};

function gimme (triplet) {
  const myTr = triplet.slice();
  myTr.sort((a,b)=>a-b,0);
  return triplet.indexOf(myTr[1])
}

function howMuchILoveYou(nbPetals) {
  const phrase = {1:"I love you",2:"a little",3:"a lot",4:"passionately",5:"madly",6:"not at all"}
    while(nbPetals > 6){
      nbPetals -= 6;
    }
  return phrase[nbPetals]
}


function correct(string){
  string = string.split('').map((el)=> el.replace('0','O')).map((el)=> el.replace('5','S')).map((el)=> el.replace('1','I')).join('');
   return string 
 }

 function count (string) {  
  string = string.split('').sort();
  const store = string.reduce((acc, cur) => {
    !acc[cur] ? acc[cur] = 1 : acc[cur]++;
    return acc;
  }, {})
   return store;
}

function wave(str){
  const result = [];
  for(let i = 0; i < str.length; i++) {
    let letter = str[i];
    if (letter === " ") {
      continue;
    } else {
      result.push(str.slice(0, i) + letter.toUpperCase() + str.slice(i + 1))
    } 
  }
  return result;
}

String.prototype.toAlternatingCase = function () {
  const myStr = this.split('');
  const upp = /[A-Z]/;
  const low = /[a-z]/;
  for(let i = 0; i < myStr.length; i++){
    if(upp.test(myStr[i])){
       myStr[i] = myStr[i].toLowerCase();
       continue
       }
    if(low.test(myStr[i])){
       myStr[i] = myStr[i].toUpperCase();
    }
  }
  return myStr.join('')
}

function isPalindrome(x) {
  let y = x;
  return y.toLowerCase().split("").reverse().join("") == x.toLowerCase();
}

function incrementString (strng) {
  const base = strng.slice(0, -1);
  const last = strng.slice(-1).match(/[0-9]/);
  return last === null
    ? strng + "1"
    : last != 9
    ? base + (+last + 1)
    : incrementString(base) + "0";
  
}

function solution(str, ending){
  str = str.split('').reverse().join('');        
  ending = ending.split('').reverse().join('');   
  let myStr = str.slice(0,ending.length);
  return myStr == ending
}

function isIsogram(str){
  
  str = str.toLowerCase();
  const copy = [...str];
  
  return [...new Set(copy)].join('') == str
}


function solution(string) {
  const replace = {A:" A",B:" B",C:" C",D:" D",E:" E",F:" F",G:" G",H:" H",I:" I",J:" J",K:" K",L:" L",
                  M:" M",N:" N",O:" O",P:" P",Q:" Q",R:" R",S:" S",T:" T",U:" U",V:" V",W:" W",X:" X",Y:" Y",Z:" Z"}
  string = string.split("");
  for(let key in replace){
    for(let i = 0; i < string.length; i++){
      if(string[i] === key){
        string[i] = replace[key];
      }
    }
  }
  return string.join("")
}


function countSmileys(arr) {
  if(arr === []){
    return 0;
  } else {
    let result = 0;
    for(let i = 0; i < arr.length; i++){
      if(arr[i] === ':D'|| arr[i] === ':~)'|| arr[i] === ';~D'||arr[i] === ':)'||arr[i] === ';-D'||arr[i] === ':-D'||arr[i] === ';)'||arr[i] === ':-)'||arr[i] === ';D'||arr[i] === ';~)'||arr[i] === ':~D'||arr[i] === ';-)'){
        result += 1;
      }
    }
    return result;
  }

}


function alphabetPosition(text) {
  const myRegex = /[a-z]+/g;
  text = text.toLowerCase().match(myRegex);
  if(!text){
    return ""
  }
  text = text.join("");
  const result = [];
  const myA = {
    a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26 
  }
  
  for(let i = 0; i < text.length; i++){
    result.push(myA[text[i]])
  }
  return result.join(" ");
}

String.prototype.toJadenCase = function () {
  const str = this.toLowerCase().split(' ');
  for(let i = 0; i < str.length; i++){
    str[i] = str[i].charAt(0).toUpperCase() + str[i].substring(1);
  }
  return str.join(' ');
};

function duplicateCount(text){
  if(text === ""){
    return 0;
  }else{
   const myText = text.toLowerCase().split("");
   const countItems = {};
    for (const item of myText) {
      countItems[item] = countItems[item] ? countItems[item] + 1 : 1;
  }
   const result = Object.keys(countItems).filter((item) => countItems[item] > 1);
    return result.length;
  }
  
  }

  function getMiddle(s) {
    if (s.length % 2 == 1) {
      return s.substring((s.length / 2),(s.length / 2)+1) 
    } else if (s.length % 2 == 0) {
        return s.substring((s.length / 2)-1, (s.length / 2)+1)
    }
  }
  

  function validatePIN (pin) {
    const myRegex = /^(\d{4}|\d{6})$/;
    return myRegex.test(pin);
      
    
  }

  function areYouPlayingBanjo(name) {
    name = name.split("");
    if(name[0] === "r" || name[0] ==="R"){
      return name.join("") + " plays banjo";
    } else {
      return name.join("") + " does not play banjo";
    }
    
    
  }

  function abbrevName(name){
    const myRegex = /\./
    if(myRegex.test(name)){
      return name.toUpperCase();
    } else {
    name = name.split(" ");
    return name[0][0].toUpperCase() + "." + name[1][0].toUpperCase();
    }
  }

  function solution(str){
    return str.split("").reverse().join("")
  }

  function findNeedle(haystack) {
    return "found the needle at position " + haystack.indexOf("needle");
  }

  function greet (name, owner) {
    if(name == owner){
      return 'Hello boss';
    } else {
      return 'Hello guest';
    }
  }

  function repeatStr (n, s) {
    let result = "";
    for(let i = 0; i < n; i++){
      result += s;
    }
    return result;
  }

  function doReverse(p1) {
    return p1.split("").reverse().join("")
}
function someFunction(p1, p2, p3) {
    p1 = doReverse(p1);
    p2 = ['1', '2', '3'];
    p3.push('9999');
}
let a = 'xyz';
let b = ['123', '567'];
let c = ['abc', 'def'];


function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Змініть код лише під цим рядком
  for (let i = 0; i < len; i++) {
  // Змініть код лише над цим рядком
    console.log(firstFive[i]);
  }
}

function zeroArray(m, n) {
  // Створіть 2-D масив із m-рядків m та n-стовпчиків нулів
  let newArray = [];
  for (let i = 0; i < m; i++) {
    // Додайте m-ий рядок до newArray
  let row = [];
    for (let j = 0; j < n; j++) {
      // Додає n нулів до поточного рядка, щоб створити стовпчики
      row.push(0);
    }
    // Штовхає поточний рядок, який тепер містить n нулів, до масиву
    newArray.push(row);
  }
  return newArray;
}


function loopy() {
  while(true) {
    console.log("Hello, world!");
  }
}


function checkScope() {
  const i = 'function scope';
  if (true) {
    let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

function makeList(arr) {
  // Змініть код лише під цим рядком
  const failureItems = [];
  for (let i = 0; i < arr.length; i++) {
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  }
  // Змініть код лише над цим рядком

  return failureItems;
}

function capitalize(s){
  let first = '';
  let second = '';
  s = s.split('');
  
  for(let i = 0; i < s.length; i++){
    if(i%2==0){
      first += s[i].toLowerCase();
    }else{
      first += s[i].toUpperCase()
    }
  }
  
  
  for(let i = 0; i < s.length; i++){
    if(i%2 !== 0){
      second += s[i].toLowerCase();
    }else{
      second += s[i].toUpperCase()
    }
  }
  
  
  return [second , first]
};

function inAscOrder(arr) {
  
  return arr.toString() == arr.sort((a,b)=>a-b).toString()
}

function solution(digits){
  let result = 0;
  digits = digits.split('');
  for(let i = 0; i < digits.length; i++){
    if(Number(digits.slice(i,i+5).join('')) > result )
      result = Number(digits.slice(i,i+5).join(''))
  }
  
  return result
}

function solve(s){
  let low = 0;
  let upp = 0;
  const myR = /[a-z]/;
  s = s.split('');
  for(let i = 0; i < s.length; i++){
    if(myR.test(s[i])){
      low += 1;
    } else {
      upp += 1
    }
  }
  
  if(low == upp || low > upp){
    return s.join('').toLowerCase();
  }else {
    return s.join('').toUpperCase();
  }
  
  
}

function minValue(values){
  return Number([...new Set(values)].sort((a,b)=>a-b).join(''))
}
function sumDigits(number) {
  return (number+'').match(/\d/g).reduce((acc,el)=> acc + Number(el),0)
}

function maxMultiple(divisor, bound){
  
  for(let i = bound; i > 1; i--){
    if(i%divisor == 0){
      return i
    }
  }
}

function reverseLetter(str) {
  return str.match(/[a-zA-Z]/g).reverse().join('')
}


function smallEnough(a, limit){
  return !a.some(el => el > limit)
}

function twoOldestAges(ages){
  return ages.sort((a,b)=>a-b).slice(-2)
}

function nbDig(n, d) {
  const myR = new RegExp(d,'g');
  let count = 0;
  for(let i = 0; i <= n; i++){
    if(myR.test(Math.pow(i,2)+'')){      
      count += (Math.pow(i,2)+'').match(myR).length;
    }
  }
return count
}

function calculateYears(principal, interest, tax, desired) {
  let years = 0;
  while(principal < desired){
    let first = principal * interest;
    principal += first - (first*tax)
    years++
  }
    return years
}

function findOutlier(integers){
  const f = integers.filter(el=> el%2==0);
  const s = integers.filter(el=> el%2!==0);
  if(f.length<s.length){
    return f[0]
  }else{
    return s[0]
  }
}

function mostFrequentItemCount(collection) {
  if(!collection.length){
    return 0
  }
  const count =  collection.reduce((acc,el)=>{
                    acc[el]? acc[el] += 1: acc[el] = 1;
                    return acc
  },{})
  return Math.max(...Object.values(count))
}

function likes(names) {
  if(!names.length){
    return "no one likes this"
  }else if(names.length === 1){
    return  names[0] + ' likes this'
  }else if(names.length === 2){
    return names[0] + ' and ' + names[1] + ' like this'
  }else if(names.length === 3){
    return names[0] + ', ' + names[1] + ' and ' + names[2] + ' like this'
  }else {
    return names[0] + ', ' + names[1] + ' and ' + (names.length-2) +' others like this'
  }
  
}

const forderedCount = function (text) {
  let result = [];
 
 for (let i = 0; i < text.length; i++) {
   let count = 0;
   for (let j = 0; j < result.length; j++) {
     if (result[j][0] === text[i]) {
       count++;
     }
   }
   if (count === 0) {
     for (let j = i; j < text.length; j++) {
       if (text[j] === text[i]) {
         count++;
       }
     }
     result.push([text[i], count]);
   }
 }
 return result;
                   
}

var palindromeChainLength = function(n) {
  n = n.toString();
  const r = n.toString().split('').reverse().join('');
  if (n == r){
    return 0
  } else {
    return 1 + palindromeChainLength(Number(r)+Number(n))
  }
    
};

var SequenceSum = (function() {
  function SequenceSum() {}

  SequenceSum.showSequence = function(count) {
     if(count == 0){
       return '0=0'
     }else if(count < 0){
       return (count+'')+'<0'
     } else {
       return Array.from({length: count+1}, (_, i)=> i).join('+') + ' = ' + Array.from({length: count+1}, (_, i)=> i)
         .reduce((acc,el)=> acc+el)
     }
  };

  return SequenceSum;

})();

function minSum(arr) {
  arr.sort((a,b)=>a-b);
  const first = arr.slice(0,arr.length/2);
  const second = arr.slice(-arr.length/2).reverse();
  return first.map((el,i)=> el * second[i]).reduce((acc,el)=>acc+el)
}

function vertMirror(strng) {
  return strng.split('\n').map(el=> el = el.split('').reverse().join('')).join('\n')
}
function horMirror(strng) {
  return strng.split('\n').reverse().join('\n')
}
function oper(fct, s) {
  return fct(s)
}

function fizzbuzz(n){
  return Array.from({length: n}, (_, i)=> i+1).reduce((acc,el)=>{ 
         acc.push((el%3==0 && el%5==0)?"FizzBuzz":
                   el%3==0?'Fizz':
                   el%5==0?'Buzz':
                   el);
                                               
                   return acc
    
  },[])
}

