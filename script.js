let cyfraa = 0;
xd = document.getElementById("cyfra");
if (cyfraa == 1){
    // let timer = setInterval(myTimer, 1000);
}
document.getElementById("cyfra").onclick=function(){
    cyfraa++;
    Cyfra();
}

document.body.addEventListener("keyup", function(event){
    if(event.code == "Enter"){
        cyfraa++;
        Cyfra();
    }
});

function Cyfra(){
    if(cyfraa % 2 == 0){
        xd.innerHTML="Liczba wciśnięć = " + cyfraa + ". Jest to parzysta liczba kliknięć";
        xd.style.color = "green";
    }

    else{
        xd.innerHTML="Liczba wciśnięć = " + cyfraa + ". Jest to nieparzysta liczba kliknięć";
        xd.style.color = "red";
    }

    if(cyfraa == 100) {
        xd.style.border = "thick solid #0000FF"; 
        // xd.innerHTML = xd.innerHTML + " " + timer;
    }

}
