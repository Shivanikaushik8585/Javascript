let str="";
let n=4;



function rightpascal(n){
    for(let i=0;i<n;i++){
        str =str+"*";

        console.log(str)
    }
for(var i=1;i<=n;i++){
    for(j=i;j<=n;j++){
        str =str+"*"
        
        
    }
    str=str+"\n";
}
console.log(str);
    // str+="\n";
}
rightpascal(4);