//random integer generated 



document.getElementById("roll").addEventListener("click",dicegen);

document.getElementsByClassName("2dice")[0].addEventListener("click", secondDice);

document.getElementsByClassName("1dice")[0].addEventListener("click", firstDice);

function firstDice()
{
    $("a.1dice").addClass("active");
    $("a.2dice").removeClass("active");
   
}

function secondDice()
{
    $("a.1dice").removeClass("active");
    $("a.2dice").addClass("active");
}


function dicegen()
{

    $("i").addClass("hide");

    var rndInt = Math.floor(Math.random() * 6) + 1;
    
 
    


 switch (rndInt) {
    case 1:
        $("i.5").removeClass("hide");
        break;
    case 2:
        $("i.1 , i.9").removeClass("hide");
        break;
    case 3:
        $("i.1 , i.5 , i.9").removeClass("hide");
        break;
    case 4:
        $("i.1 ,i.3,i.7, i.9").removeClass("hide");
        break;
    case 5:
        $("i.1 ,i.3,i.7, i.9,i.5").removeClass("hide");
        break;
    case 6:
        $("i.1 ,i.4,i.3,i.6, i.7, i.9").removeClass("hide");
        break;
}

}