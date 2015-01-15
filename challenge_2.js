exports.
sumOfEvenFibonacciNumbers = function(n){
  var sum = 0;
var prev=0;
var curr=1;
var add=0;
var array=[];
  var result=0;
     for(;add<n;){
         
         add= prev+curr;
         array.push(add);
         prev=curr;

        curr=add;
       

     }

for(var j=0;j<array.length;j++){

   if( array[j]%2===0){
        
        result+=array[j];

   }
}
  
  return result;
};