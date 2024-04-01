//  1.
// let num = Number(window.prompt("Enter number"));
// function getCase(num) {
//     switch (num) {
//         case 1:
//             console.log("January");
//             break;
//         case 2:
//             console.log("February");
//             break;
//         case 3:
//             console.log("March");
//             break;
//         case 4:
//             console.log("Aprel");
//             break;
//         case 5:
//             console.log("May");
//             break;
//         case 6:
//             console.log("June");
//             break;
//         case 7:
//             console.log("July");
//             break;
//         case 8:
//             console.log("August");
//             break;
//         case 9:
//             console.log("September");
//             break;
//         case 10:
//             console.log("October");
//             break;
//         case 11:
//             console.log("November");
//             break;
//         case 12:
//             console.log("December");
//             break;

//         default:
//             console.log("Invalid input");
//             break;
//     }
// }
// getCase(num);


// //ANONYM FUNCTION

// const getDetailsCase = function (num) {
//     switch (num) {
//         case 1:
//             console.log("January");
//             break;
//         case 2:
//             console.log("February");
//             break;
//         case 3:
//             console.log("March");
//             break;
//         case 4:
//             console.log("Aprel");
//             break;
//         case 5:
//             console.log("May");
//             break;
//         case 6:
//             console.log("June");
//             break;
//         case 7:
//             console.log("July");
//             break;
//         case 8:
//             console.log("August");
//             break;
//         case 9:
//             console.log("September");
//             break;
//         case 10:
//             console.log("October");
//             break;
//         case 11:
//             console.log("November");
//             break;
//         case 12:
//             console.log("December");
//             break;
    
//         default:
//             console.log("Invalid input");
//             break;
//     }
// }
// getDetailsCase(num);



//ARROW FUNCTION

// const getDetailsCase = num => {
//     switch (num) {
//         case 1:
//             console.log("January");
//             break;
//         case 2:
//             console.log("February");
//             break;
//         case 3:
//             console.log("March");
//             break;
//         case 4:
//             console.log("Aprel");
//             break;
//         case 5:
//             console.log("May");
//             break;
//         case 6:
//             console.log("June");
//             break;
//         case 7:
//             console.log("July");
//             break;
//         case 8:
//             console.log("August");
//             break;
//         case 9:
//             console.log("September");
//             break;
//         case 10:
//             console.log("October");
//             break;
//         case 11:
//             console.log("November");
//             break;
//         case 12:
//             console.log("December");
//             break;
    
//         default:
//             console.log("Invalid input");
//             break;
//     }
// }
//getDetailsCase(num);

// 2. Prompt-dan 2 dəyər qəbul edirsiniz. biri bir simvoldur, biri isə bir rəqəm və nəticədə həmin rəqəm sayı qədər simvol-u ekrana çap etməlidir. Məsələn, inputlar: b ve 5 daxil olunubsa, nəticə bbbbb olmalıdır.


//REGULAR FUNCTION

// let b = prompt("Enter you number");
// let a = prompt("Enter you symbol");
// let c = ""
// function symbol(b,a) {
//     for (let i = 0; i < b; i++) {
//      c+=a
//     }
//     return c
// }
// alert(symbol(b,a));

//ANONYM FUNCTION
// let b = prompt("Enter you number");
// let a = prompt("Enter you symbol");
// let c = "";
// const getDetails = function(b,a) {
//     for (let i = 0; i < b; i++) {
//      c+=a
//     }
//     return c
// }
// alert(getDetails(b,a));

//ARROW FUNCTION
// let b = prompt("Enter you number");
// let a = prompt("Enter you symbol");
// let c = "";
// const getDetails = (b,a)=> {
//     for (let i = 0; i < b; i++) {
//      c+=a
//     }
//     return c
// }
// alert(getDetails(b,a));

// 3. Daxil olunmuş ədədin mərtəbələrinin cəmini qaytaran alqoritm yazın. Məsələn: 125 daxil olunarsa, nəticə 1+2+5=>8 qaytarmalıdır.

// REGULAR FUNCTION
// let a = prompt("enter you number");
// let sum = 0;
// function getSum(a) {
//   for (let i = 0; i < a.length; i++) {
//     sum += Number(a[i]);
//   }
//   return sum;
// }
// alert(getSum(a));

//ANONYM FUNCTION

// let a = prompt("enter you number");
// let sum = 0;
// const getDetailSum = function (a) {
//   for (let i = 0; i < a.length; i++) {
//     sum += Number(a[i]);
//   }
//   return sum;
// }
// alert(getDetailSum(a));

//ARROW FUNCTION

// let a = prompt("enter you number");
// let sum = 0;
// const getDetailSum =  (a) => {
//   for (let i = 0; i < a.length; i++) {
//     sum += Number(a[i]);
//   }
//   return sum;
// }
// alert(getDetailSum(a));

// 4. Bir alqoritm yazın, bir ədəd qəbul edir ve hemin ədədin perfect number olub-olmamasini yoxlayir. Perfect number - ededin ozunden bashqa butun bolenlerinin cemin ededin ozune beraberdir-se o zaman eded perfect number hesab olunur. Meselen 6 -->  1+2+3 =  6, demeli 6 perfect number-dir. (perfect numbers - 6, 28, 496, 8128, and 33550336)
//REGULAR FUNCTION
// let a = Number(prompt("Enter number"));
// let sum = 0;
// function perfect(a) {
//     for (let i = 0; i < a; i++) {
//         if(a % i ===0){
//             sum+=i
//         }

//     }
//     if (sum === a) {
//           alert(`${a}"perfect number"`);
//         } else {
//           alert(`${a}" not perfect number"`);
//         }
//         return sum
// }
// alert(perfect(a))

// //ANONYM FUNCTION

// let a = Number(prompt("Enter number"));
// let sum = 0;
// const getPerfect = function (a) {
//     for (let i = 0; i < a; i++) {
//         if(a % i ===0){
//             sum+=i
//         }
//     }
//     if (sum === a) {
//           alert(`${a}"perfect number"`);
//         } else {
//           alert(`${a}" not perfect number"`);
//         }
//         return sum
// }
// alert(getPerfect(a))

//ARROW FUNCTION

// let a = Number(prompt("Enter number"));
// let sum = 0;
// const getPerfect =  (a) => {
//     for (let i = 0; i < a; i++) {
//         if(a % i ===0){
//             sum+=i
//         }
//     }
//     if (sum === a) {
//           alert(`${a}"perfect number"`);
//         } else {
//           alert(`${a}" not perfect number"`);
//         }
//         return sum
// }
// alert(getPerfect(a))





// 6. Listdəki sadə ədədlərin ədədi ortasını qaytaran bir alqoritm yazın. Məsələn: [3,7,9,4,24,25,8]; bu listdəki sadə ədədlərin ədədi ortasını hesablayıb qaytarılmalıdır.
//REGULAR FUNCTION
// let a = [3,7,9,4,24,25,8]
// let counter = 0
// let sum = 0
// let simp = 0
// function getSimple(a) {
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 2; j < a[i]; j++) {
//            if (a[i]%j===0) {
//                 counter++;
//                 break
//            }
//         }
//         if(counter===0){
//             sum+=a[i]
//             simp++
//         }
//         counter=0
//     }
//     return sum/simp

    
// }

// console.log(getSimple(a));


//ANONYM FUNCTION
// let a = [3,7,9,4,24,25,8]
// let counter = 0
// let sum = 0
// let simp = 0
// const getDetailSimple = function (a) {
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 2; j < a[i]; j++) {
//            if (a[i]%j===0) {
//                 counter++;
//                 break
//            }
//         }
//         if(counter===0){
//             sum+=a[i]
//             simp++
//         }
//         counter=0
//     }
//     return sum/simp

    
// }

// console.log(getDetailSimple(a));


//ARROW FUNCTION

// let a = [3,7,9,4,24,25,8]
// let counter = 0
// let sum = 0
// let simp = 0
// const getDetailSimple = a => {
//     for (let i = 0; i < a.length; i++) {
//         for (let j = 2; j < a[i]; j++) {
//            if (a[i]%j===0) {
//                 counter++;
//                 break
//            }
//         }
//         if(counter===0){
//             sum+=a[i]
//             simp++
//         }
//         counter=0
//     }
//     return sum/simp
// }

// console.log(getDetailSimple(a));




// 7. Listdəki ən böyük və ən kiçik element-lərin ədədi ortasını tapıb qaytaran alqoritm yazın.
//REGULAR FUNCTION

// let a = [4,2,7,9,3,12,46,32,19];
// let largest = a[0];
// let smallest = a[0];

// function average(a) {
//     for (let i = 0; i < a.length; i++) {
//      if(a[i]>largest){
//         largest = a[i]
//      }else if(a[i]<smallest){
//         smallest = a[i]
//      }
//     }
//     return ( largest +smallest)/2
// }
// console.log(average(a));

//ANONYM FUNCTION
// let a = [4,2,7,9,3,12,46,32,19];
// let largest = a[0];
// let smallest = a[0];

// const getAverage = function (a) {
//     for (let i = 0; i < a.length; i++) {
//      if(a[i]>largest){
//         largest = a[i]
//      }else if(a[i]<smallest){
//         smallest = a[i]
//      }
//     }
//     return ( largest +smallest)/2
// }
// console.log(getAverage(a));

//ARROW FUNCTION
// let a = [4,2,7,9,3,12,46,32,19];
// let largest = a[0];
// let smallest = a[0];

// const getAverage =  a => {
//     for (let i = 0; i < a.length; i++) {
//      if(a[i]>largest){
//         largest = a[i]
//      }else if(a[i]<smallest){
//         smallest = a[i]
//      }
//     }
//     return ( largest +smallest)/2
// }
// console.log(getAverage(a));






// 8. 1 eded daxil olunur. Eger o eded 50den kicikdirse o edede qeder 3-e bolunen, 50-100 araligindadirsa o edede qeder 5e bolunen, 
// 100den boyukdurse o edede qeder 8 e bolunen ededlerin sayini return edən bir function yazin. (arrow function)


// const returnNumberCount = () => {
//     const number = Number(prompt("Zehmet olmasa 1 eded daxil edin:"));
//     let counter = 0;

//     if (number < 50) {
//         for (let i = 1; i <= number; i++) {
//             if (i % 3 === 0) {
//                 counter++;
//             }
//         }
//     } else if (number >= 50 && number <= 100) {
//         for (let i = 1; i <= number; i++) {
//             if (i % 5 === 0) {
//                 counter++;

//             }
//         }
//     } else {
//         for (let i = 1; i <= number; i++) {
//             if (i % 8 === 0) {
//                 counter++;

//             }
//         }
//     }

//     return counter;
// };
// console.log(returnNumberCount());

// 9..


// const getDetailletter = function() {
//     const string1 = prompt("Birinci metni daxil edin:");
//     const string2 = prompt("İkinci metni daxil edin:");

//     let count = 0;

//     for (let i = 0; i < string1.length; i++) {
//         const letter = string1[i];
//         if (string2.includes(letter)) {
//             count++;
//             string2 = string2.replace(letter, '');
//         }
//     }

//     return count;
// };

// console.log(getDetailletter()); b


