let n=5;

console.log("===============METHOD-1======================");

for(let row=1; row <=n; row++){
    let res="";
    for(let col=1; col<=n; col++){
        res+=row;
    }
    console.log(res);
}