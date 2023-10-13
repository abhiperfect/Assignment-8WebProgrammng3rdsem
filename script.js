//alert("Hello");
var i = 0;
function displayDate(){
    const d  = new Date();
    
    var date = d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
   
   document.querySelector("#currentDate").value = date; 
   }
   
   function fib(  n ){
      if( n <= 1 ) return 1;
   
      return n * fib(n-1);
   
   }
   
   
   function prompts1(){
       
        let n = prompt();
       
        alert(fib(n));
   }
   
   function prompts2(){
       
       let n = prompt();
   
       for(  i = 1; i < 11; ++i){
          alert( i * n);
      }
     
   }
   
   function prompts3(){
   
     let n = prompt("Enter how many number you want add");
     var b = 0;
     for( i = 0; i < n; ++i){
       
      const a = parseInt(prompt("Enter " +( i+1) + " number and press confirm"));
       
      b = (b + a);
     }
   
     alert("After addition all numbers : " + b);
   }


document.querySelector("#sortButton").addEventListener('click',function(){
    let str =  document.querySelector("#textarea").value;
    let number = str.match(/\d+/g);
    number.sort();
    document.querySelector("#answer").value = number;
    // alert(number);
});



document.querySelector("#oddevenButton").addEventListener('click',function(){

       i = i + 1;
         
        if( i % 2 === 0 ){
            document.querySelector("#oddevenButtonText").value = i + " is even";
        }else{
            document.querySelector("#oddevenButtonText").value = i + " is odd";
        }

    if( i == 15 ) i = 0;

});


// alert( string);