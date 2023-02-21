console.clear();

function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const bitGirls = ['Edita', 'Lina', 'Brigita', 'Deimantė', 'Justė'];
const cats = ['Murka', 'Rainius', 'Meilutė', 'Bosas', 'Dičkis'];

console.log(bitGirls);
console.log(['Nausėda'].concat(bitGirls));
console.log('====================================');
let bigCats = cats.map((a) => [a, rand(0,1) ? 'storas' : 'normalus']);
console.log(bigCats);
console.log('====================================');
console.log(bigCats);
console.log('storas:', bigCats.reduce((b, a, i, c) => c[i][1] === 'storas' ? ++b : b, 0 ));
console.log('normalus:', bigCats.reduce((b, a, i, c) => c[i][1] === 'normalus' ? ++b : b, 0 ));
console.log('====================================');
console.log(bigCats);
console.log(bigCats.sort((a, b) => a[0].charCodeAt(1) - b[0].charCodeAt(1)));
console.log('====================================');
let happyCats = [['Nausėda', 'Barsukas']].concat(bitGirls.map((a, i) => [a, cats[i]] ));
console.log(happyCats);
console.log('============================================');


