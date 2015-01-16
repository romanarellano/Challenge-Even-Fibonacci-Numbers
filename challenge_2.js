exports.sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
var prev=0;
var curr=1;
var array=[];
  var result=0;
     while(sum<n){
         
         sum= prev+curr;
         array.push(sum);
         prev=curr;

         curr=sum;
     }

      var add= function(x,y){
        return x+y;

     };
    
      var total= array.filter(function(x){
  
      if(x%2===0){
        return x;
       
     }

  }).reduce(add);

  
     return total;//result;
};
