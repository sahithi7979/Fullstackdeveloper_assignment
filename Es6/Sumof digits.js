let funcs=[]
function sumOfDigits(num){
    let sum=0
    while(num>0){
        let lastdigit=num%10;
        sum=sum+lastdigit;
        num=Math.floor(num/10);
    }
    console.log('Number =',i,'Sum =',sum)
}
let i;
for(i=0;i<5;i++){
    funcs.push(sumOfDigits)
}
//let use function in array with an example//
console.log(funcs[0](12))