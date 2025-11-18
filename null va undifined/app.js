let age = null;


let mevalar = ["olcha", "olma", "gilos", "banan"];
let sonlar = [1, 2, 3, 4, 5, 6];
console.log(...mevalar, ...sonlar);
let meva = mevalar;
console.log(meva);

function result() {
    let mevalar = ["olcha", "olma", "gilos", "banan"];
    // let sonlar = [1, 2, 3, 4, 5, 6];
    // console.log(...mevalar, ...sonlar);
    // let meva = mevalar;
    // console.log(meva);
    return mevalar
}console.log(result());

