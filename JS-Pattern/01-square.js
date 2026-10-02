console.log("===============METHOD-1======================");

let n=5;
for(i=0; i<n; i++){
    console.log("*".repeat(n));
}

console.log("===============METHOD-2======================");

for(let row=1;row<=n;row++){
    let data="";
    for(let col=1;col<=n;col++){
        data+= "*";
    }
    console.log(data);    
}

console.log("===============METHOD-3======================");

let singleRow = "*".repeat(n); 
let square = Array(n).fill(singleRow).join("\n");
console.log(square);

console.log("===============METHOD-4======================");

let right = Array(n).fill(null).map(() => "*".repeat(n)).join("\n");
console.log(right);
