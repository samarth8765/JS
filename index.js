// 2nd way of firing the event 
const callingFunc = () => {
    alert('Phir bhago yr')
}

// 3rd way of firing the event
const third_way = document.getElementById('event_third_way');
third_way.onclick = function (){
    alert('Third_way');
}

// 4th way of firing the event
const fourthWay = document.querySelector('#fourthWay');
fourthWay.addEventListener('click',()=>{
    alert('$ 4th way');
});

// Event Object
const event_object = document.getElementById('event_object')

const checkEvent = ()=>{
    alert('Event Object')
    console.log(window.event);
    console.log(window.event.target);
}

event_object.addEventListener('click',checkEvent);

// Mouse Event 
const mouseEvent = document.getElementById('mouse_event')

mouseEvent.addEventListener('mousedown',function() {
    this.style.color = 'red';
});
mouseEvent.addEventListener('mouseup',function() {
    this.style.color = 'black';
});

mouseEvent.addEventListener('mouseenter',function(){
    this.style.backgroundColor = 'pink';
})

mouseEvent.addEventListener('mouseleave',function(){
    this.style.backgroundColor = 'white'
})


// KeyBoard Events
const keyboard_event = document.getElementById('keyboard_event');

// Key-press
// keyboard_event.addEventListener('keypress',function(){
//     document.getElementById('key').innerHTML = `You have typed ${this.value}`;
// });

// key-down
// keyboard_event.addEventListener('keydown',function(){
//     document.getElementById('key').innerHTML = `Key is Down`;
// });

// key-up
// keyboard_event.addEventListener('keyup',function(){
//     document.getElementById('key').innerHTML = `Key is Up`;
// });


// Input events


// setTimeout

const btn = document.getElementById('btn');
const setTime = document.getElementById('setTime');

let x;

const showMyName = ()=>{
    setTime.innerHTML = "Loading ..."
    x = setTimeout(()=>{
        setTime.innerHTML= "Samarth Dhawan"
    },2000)
}; 


btn.addEventListener('click',showMyName);

//clearTimeout
const btn_1 = document.getElementById('btn_1');
const hideMyName = ()=>{
    setTime.innerHTML="Stopped!!"
    clearTimeout(x)
}
btn_1.addEventListener('click', hideMyName);

// set Interval
const set_Int = document.getElementById('set_Int');
const start_countDown = document.getElementById('start_countDown');

let stop_time;
let num = 0;
const countDown = ()=>{
    stop_time = setInterval(()=>{
        set_Int.innerHTML = `${num}`;
        num++;
    },1000);
}

start_countDown.addEventListener('click',countDown);

//clearInterval

const stop_countDown = document.getElementById('stop_countDown')

stop_countDown.addEventListener('click',()=>{
    clearTimeout(stop_time);
});


// OOPS

let bioData = {
    myName : "Samarth",
    myAge : 20,
    getData (){
        console.log( );
    }
}

// console.log(this);

// function getData(){
//     console.log(this)
// }
//  getData()

// const obj = {
//     myName : 'Samarth',
//     myAge : 20,
//     getData(){
//         console.log(this);
//         console.log(`Name: ${this.myName} \n Age: ${this.myAge}`);
//     }
// }

// obj.getData()


// Output of the following given below:
// const obj = {
//     myName : 'Samarth',
//     myAge : 20,
//     getData : ()=>{
//         console.log(this);
//         console.log(`Name: ${this.myName} \n Age: ${this.myAge}`);
//     }
// }

// obj.getData()
//it will be window object bcoz of arrow function


// Array destructing

// let arr = ['Samarth','Dhawan', '20BDS0029'];

// let [fname, lname, reg_num] = arr;

// console.log(`Name -> ${fname} ${lname} \nReg_Number -> ${reg_num}`);

// Object destructing

// let obj1 = {
//     fname : 'Samarth',
//     lname : 'Dhawan',
//     reg_num : '20BDS0029'
// }

// let {fname, lname, reg_num} = obj1;
// console.log(`Name -> ${fname} ${lname}\nReg_Number -> ${reg_num}`);

// Object properties:
// 1-)let myName = 'Samarth';

// const obj = {
//     [myName] : 'Hello how are you?',
//     [20+6] : 'is my age.'
// };
// console.log((obj));

// if we have to use value of myName in key part then we have to put that into square brackets

// 2-) if key and value are same then no need of writng key value pair,JS will automatically figure out which one  is key and pair.

// let myName = 'Samarth';
// let age = 21;

// let myData = {myName, age};
// console.log(myData);


// Spread Operator
// this is use to add eleme.nts in an object from other object
// const colors = ['red','green','blue','white'];
// const myColors = ['red','green','blue','white','yellow','black'];

// const myFavColors = [...colors, 'red']
// console.log(myFavColors);

// REST operator
// function fun(...input){
    // let sum = 0;
//     for(let i of input){
//         sum+=i;
//     }
//     return sum;
// }
// console.log(fun(1,2)); //3
// console.log(fun(1,2,3)); //6
// console.log(fun(1,2,3,4,5)); //15

// ES7 features:

// 1-) Arrays.includes
// const icecreams = ['vanilla','butterscotch','pista']
// console.log(icecreams.includes('vanilla'));
// console.log(icecreams.includes('black-current'));

// 2-) exponantiation operator
// console.log(2**3);

// ES8 features:

// 1-) Object.values(), Object.keys()

// const person = {name: 'Samarth', age: 21}
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// ES9

// 1-) spread and rest operator in objects

// const person = {name: 'Samarth', age: 21}
// const person1 = {...person}
// console.log(person1);

//---------------------------------------------------------

/* Advanced Javascript */

/*1) Event Propogation */

// ->The event propagation mode determines in which order the
// elements recieve the event.

// -> Event capturing and bubbling

// 2) High order and callback functions

// const add = (a,b) =>{
//     return a+b;
// }
// const sub = (a,b) =>{
//     return a-b;
// }
// const mul = (a,b) =>{
//     return a*b;
// }
// const divide = (a,b) =>{
//     return a/b;
// }

// const calculator = (num1, num2, operator) =>{
//     return operator(num1,num2);
// }
// console.log(calculator(5,6,add));


// Asynchronous JS
// 1) Hoisting in JS
// https://www.w3schools.com/js/js_hoisting.asp

// 2) Scope chain and Lexical scoping

// 3) Closures in JS
// Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
// ???????????????????????????????????????????????????




