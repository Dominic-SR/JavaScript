let n = 4; 
let currentNum = 1;

for (let row = 1; row <= n; row++) {
    let res = "";
    for (let col = 1; col <= row; col++) {
        res += currentNum;
        currentNum++;
    }
    console.log(res);
}