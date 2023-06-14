let s=" "
function InvertedhalfPyramid(n){
for(let i=0;i<=n;i++){
    for(let k=0;k<n-i;k++){
        s+=" "
    }
    for(let j=0;j<i;j++){
        s=s+"*";
        
    }
    s+="\n";
    
}
console.log(s);

}
InvertedhalfPyramid(4);