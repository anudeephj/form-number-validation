function validate(){
    var num=document.myform.num.value;
    if(isNaN(num))
    {
       document.getElementById("numloc").innerHTML="enter numbers only";
       return false;
    }
    else{
        document.getElementById("numloc").innerHTML="nice";
        return true;
    }
}

