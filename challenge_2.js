exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
var prev=0;
var curr=1;
var array=[];
  var result=0;
     while(sum<n){
         
         sum= prev+curr;
         array.push(sum);//array=[1,2,3,5,8]
         prev=curr;//prev=3

         curr=sum;//curr=5
       

     }

     var add= function(x,y){
        return x+y;

     };
    var total= array.map(function(x){
  
     if(x%2===0){
        return x;
       
     }

  }).filter(function(x){
         return typeof(x) === "number";
         
       }).reduce(function(x,y){
        return x+y;

     },0);
// for(var j=0;j<array.length;j++){

//    if( array[j]%2===0){
        
//         result+=array[j];

//    }
// }
  
  return total;//result;
};
