// using formula ( n - row + 1)

let n=5;

for(let row=1; row <=n; row++){
    let res="";
    console.log("===>",n, row, 1,  n - row + 1)
    for(let col=1; col<=n - row + 1; col++){
        res+="*";
    }
    console.log(res);
}
