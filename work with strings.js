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
