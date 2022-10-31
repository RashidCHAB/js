// задание 1
const userAge = 20;

/*
  напиши ниже условие, которое выведет в консоль текст "ты пацан" 
  если userAge меньше 35, иначе выведет текст "не по-пацански"
*/
// if userAge < 35 {
//     return "ты пацан"
// }
// else {
//     return "не по-пацански"
// }


//задание 2
const isUser = false;

/* 
  напиши ниже условие, которое выведет в консоль текст "привет, юзер", если 
  значение константы isTrue истинно, иначе нужно вывести "не пользователь ты мне"
*/
// тут твой код
// if isUser === true {
// return "привет юзер"
// } else { return "не пользователь ты мне"}


//задание 3
const password = "sherlock";
const realPassword = "holmes";

/* 
   напиши ниже условие, которое выведет в консоль текст "правильный пароль" 
   только в том случае, если значения констант password и realPassword совпадают,
   иначе необходимо вывести "неверный пароль".
*/   
// if password === realPassword
// return "правильный пароль"
// else return "нэвэрный пароль"


// задание 4 (со звездочкой)
const email = "admin@intocode.ru";

/*
  напиши ниже условие, которое выведет в консоль текст "неверный эмайл" если
  в значении переменной email нет символа "@", иначе выведи "ты зареган"
  Тебе понадобится метод indexOf: https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf
*/

function ara(mail) {
    if (mail.indexOf("@") === false) {
        return "неверный эмайл"
    } else { return "ты зареган"}
    
}
console.log(ara(email))

// задание 5
const x = 2.7;
const y = -6;
/*
  напиши ниже условие, которое выведет в консоль значение переменной x, если
  оно больше значения переменной y, иначе выведи значение переменной y
*/
// тут твой код
function ara2(a, b) {
    if (a > b) return a
    else return b
    
}
console.log(ara2(x, y))
