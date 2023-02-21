console.clear();

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
[10,9,8,7,6,5,4,3,2,1].forEach((a) => console.log(a) );
// =========================================================
console.log([...Array(10)].map(_ => rand(120, 220)).reduce((b, a) => b += a, 0) / 10);
// ==========================================================
let kuras = 44;
for (let i = 1; i < 10; i++) {
    kuras -= rand(3, 6);
    if (kuras < 0) break; 
}
console.log((kuras > 0) ? 'Uzteko' : 'Neuzteko');
//============================================================
let min = 121;
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 5; j++) {
        const speed = rand(20, 120);
        if(speed < min) min = speed;
    }
}
console.log(min);
// ==============================================================
let km = 0;
do {
    km++;
} while (rand(0, 1) || (rand(0, 1) || rand(0, 1)));
console.log(km);

