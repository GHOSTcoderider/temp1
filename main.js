
function showmenu()
{

// document.getElementById("main_menu").style.display="block";
document.getElementById("main_menu").style.right="0px";

}
function closemenu()
{
    
    // document.getElementById("main_menu").style.display="none";
    document.getElementById("main_menu").style.right="-300px";

}

function gotop()
{
    y = window.scrollY
    document.getElementById("gotop").innerHTML="<h1>"+y;
    
    if(y>300)
    {
      
        document.getElementById("gotop").style.display="block";
      
    }
    else
        document.getElementById("gotop").style.display="none";
   
    }
    window.addEventListener("scroll",gotop);
  
    