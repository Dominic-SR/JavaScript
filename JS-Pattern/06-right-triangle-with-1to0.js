let n = 5;

for(let row=1; row<=n; row++){
    let res="";
    for(let col=1; col<=row; col++){
        res+= (row + col) % 2 === 0 ? "1" : "0";
        res+= col==row ? "" : " ";
    }
    console.log(res);
}