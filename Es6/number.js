var i;
for(i=1;i<=100;i++){
    let num=i
    let sum=0
    while(num>0){
        let lastdigit=num%10;
        sum=sum+lastdigit;
        num=Math.floor(num/10);
    }
    console.log('Number =',i,'Sum =',sum)
}
