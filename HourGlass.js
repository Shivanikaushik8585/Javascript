function  revpyaramid(n){
    let str =" "
    for(let i=1;i<=n;i++){
        for(let j=0;j<i;j++){
            str+=" ";
        }
        for(let k=0;k<(2*(n-i)-1);k++){
            str =str+"*";

        }
        str=str+"\n";
    }
    console.log(str);
}
function pyaramid(n){
    let str =" "
    for(let i=1;i<=n;i++){
        for(let j=0;j<n-i;j++){
            str+=" ";
        }
        for(let k=0;k<2*(i)-1;k++){
            str =str+"*";

        }
        str=str+"\n";
    }
    console.log(str);
}
function HourGlass(n){
revpyaramid(n);
pyaramid(n)
}
HourGlass(6);