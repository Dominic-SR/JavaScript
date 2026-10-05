let n = 5;

console.log("===============METHOD-1======================");

for (let row = 1; row <= n; row++) {
    let res = "";
    for (let col = 1; col <= row; col++) {
        res += "*";
    }
    console.log(res);
}

console.log("===============METHOD-2======================");

for(let row = 1; row <= n; row++){
    console.log("*".repeat(row));
}
