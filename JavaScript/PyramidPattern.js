function pyaramid(n){
    let str =" "
    for(let i=1;i<=n;i++){
        for(let j=1;j<=n-i;j++){
            str+=" ";
        }
        for(let k=0;k<(2*i-1);k++){
            str =str+"*";

        }
        str=str+"\n";
    }
    console.log(str);
}
pyaramid(5);