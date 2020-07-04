function myFunction() 
{ 
        let input = document.getElementById('searchbar').value 
        input=input.toLowerCase(); 
        let x = document.getElementsByTagName('th'); 
          
        for (i = 0; i < x.length; i++) 
        {  
            if (!x[i].innerHTML.toLowerCase().includes(input))
             { 
                x[i].style.display="none"; 
             } 
            else 
             { 
                x[i].style.display="highlight";                  
             } 
        } 
    } 
function myFunction() 
{
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
}