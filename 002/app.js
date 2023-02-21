console.clear();
console.log('Hello 002');

//anonimine funkcija
const hello = function () {
    console.log('Hello Fun');
    return 'pie';
}

console.log('code');

const hello2 = hello;     // <-- funkcija
const hello3 = hello();   // <-- rezultatas
// hello2();
console.log(typeof(hello2));
console.log(hello2);
console.log(hello2());
console.log(hello3);

const fancy = () => {
    return 'Fancy';
}

const fancy3 = () => 'Fancy';

// tik su VIENU parametru
const fancy4 = a => 'Fancy' + a;

console.clear();

const fun = (fn) => {
    const result = fn();
    return result;
}

const miau = () => {
    return 'Miau miau';
}

console.log(fun(miau));

const colors = [
    'red',
    'blue',
    'green',
    'white'
];

const print = what => {
    console.log('*** ' + what + ' ***');
}

// for (let i = 0; i < colors.length; i++) {
//     print(colors[i]);
// }

// const myForeach = (arr, fn) => {
//     for (let i = 0; i < arr.length; i++) {
//         fn(arr[i]);
//     }
// }

// myForeach(colors, print);

Array.prototype.myForeach = function (fn) {
    for (let i = 0; i < this.length; i++) {
        fn(this[i]);
    }
}

colors.myForeach(print);
colors.forEach(print);

colors.forEach(what => console.log('*** ' + what + ' ***'));

const animals2  = [
    {id: 5, title: 'A'},
    {id: 7, title: 'F'},
    {id: 17, title: 'F'},
    {id: 102, title: 'F'},
    {id: 88, title: 'C'},
    {id: 20, title: 'E'},
    {id: 5, title: 'B'},
];

console.clear();

const WAT1 = animals2.forEach(v => console.log(v));
const WAT2 = animals2.filter(v => v !== 'C');
const WAT3 = animals2.filter(v => v.id === 88);


// animals2.sort((a, b) => a.id - b.id);
// animals2.sort((a, b) => b.title.localeCompare(a.title));

animals2.sort((a, b) => {
    if(a.title < b.title) return -1;
    if(a.title > b.title) return 1;
    return a.id - b.id;
})

console.log(animals2);

console.clear();

let a = 5;
let b = a;
a++;
console.log(a, b);

// OBJEKTAI priskiriami pagal nuoroda (referenca)
const c = [4, 5];
const d = c;
const e = [...c]; //spredas
const f = {...c};
c.push(6);
console.log(c, d, e);
console.log(f);

const g = [...c, 20];
console.log(g);

console.clear();

const v = {id: 77, title: 'wolf'};
const v2 = {...v, id: 100};
console.log(v2);

console.clear();

const sum = (a, b) => {
    console.log(a + b);
}
console.log(sum(5, 7));
sum(...c);

const obj = {anId: 77, title: "wolf", show: false};
const { title, anId } = obj;

console.log(title, anId);

const obj1 = { title, anId};
console.log(obj1);

const arr12 = [45, 25];
const [ff, qq] = arr12;
console.log(ff, qq);










