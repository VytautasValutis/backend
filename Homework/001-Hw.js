console.clear();

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const arr = [...Array(2)].map(_ => rand(1, 6));
arr.forEach((a) => console.log(a));
console.log(arr.reduce((a, s) => a + s, 0) > 8 ? "Win" : "Lose");

console.log("==========================================");

const cat = [...Array(2)].map(_ => rand(3,6));
cat.forEach((x) => console.log(x));
console.log((cat[0] > cat[1]) ? "Pukis" : (cat[1] > cat[0]) ? "Murkis" : "katineliu svoriai lygus");

console.log("===========================================");

const gyv2 = [...Array(2)].map(_ => rand(0, 30) - 15);
gyv2.forEach((a) => console.log(a));
console.log(gyv2.every((a) => a <= 0) ? "Telpa" : "Netelpa");

console.log("=========================================");

console.log(["TV","Frig","Washer","Washer","TV","Frig"].at(rand(0,5)));

console.log("===========================================");

console.log([...Array(3)].map(_ => rand(1, 7)).sort((a, b) => a - b));

console.log("======================================");

