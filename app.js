var btnclick=document.querySelector("#check-button");
var initial=document.querySelector("#initial-price");
var current=document.querySelector("#current-price");
var quantity=document.querySelector("#no-of-stocks");
var message=document.querySelector("#display-message");
function clickHandler(){
    
    var buy=Number(initial.value);
    var today=Number(current.value);
    var no=Number(quantity.value);
    if(today>buy){
        var gain=(today-buy)*no;
        var gainper=(gain/buy)*100;
        var state="Congrats you have gained "+gain +" which is "+gainper+"% of your investment";
        message.innerText=state;
        message.style.color="green";
    }
    else if(today<buy){
        var loss=(buy-today)*no;
        var lossper=(loss/buy)*100;
        var state="Sorry you have lost "+loss+" which is "+lossper+"% of your investment";
        message.innerText=state;
        message.style.color="red";
    }
    else{
        message.innerText="No gain, no loss";
    }
}
btnclick.addEventListener("click",clickHandler);