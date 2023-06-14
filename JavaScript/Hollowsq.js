 function fullrow(n){
 var str=" ";
 for(var i=0;i<n;i++){
    str=str+"*";
}
console.log(str);
 }
  function partialStar(n){
    var st=" ";
    st=st+"*";
    for(var j=0;j<n-2;j++){
        st=st+" "
    }
    st=st+"*";
    console.log(st)

  }
  function wholePattern(n){

      fullrow(n);
      for(var k=0;k<n-2;k++){

          partialStar(5);
      }
      fullrow(n);
  }
  wholePattern(5);
//   settimeOut
function print(){
    console.log('10 sec')
}
setTimeout(print ,10*1000)
  
