let n=7;
 let str="";
for(let i=0;i<=n;i++){
    for(let j=0;j<i;j++){
        if(i==n){
            str+="*";
        }
        else{
            if(j==0||j==i-1){
                str =str+"*"
            }
            else{
                str=str+" ";
            }
        }
    }
    str=str+"\n";
}
console.log(str);

