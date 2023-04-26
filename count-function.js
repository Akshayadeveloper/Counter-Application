      //function for increment
      let count=0;
      function CountIn(){
        count++;
        document.querySelector('h1').innerHTML=count;
      }
      
      //Function for decrement
     
      function CountDe(){
        count--; 
        document.querySelector('h1').innerHTML=count;
      }
      
      //Function for reset
      
      function Stop(){
          count=0;
          document.querySelector('h1').innerHTML=count;
      }


