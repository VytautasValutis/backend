
console.clear();
const bigCats = [
    [ 'Murka', 'normalus' ],  
    [ 'Rainius', 'normalus' ],
    [ 'Meilutė', 'storas' ],  
    [ 'Bosas', 'storas' ],    
    [ 'Dičkis', 'normalus' ]  
  ];
  console.log(bigCats);
  console.log(bigCats.map((a, i, c) => c[i][0].substring(1, 2)));
  console.log(bigCats.sort((a, b) => a[0].charCodeAt(1) - b[0].charCodeAt(1)));
  



