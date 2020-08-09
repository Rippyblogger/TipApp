//Get range value

const getTip =()=>{
    let tipValue = document.getElementById("slider").value;
    tipValue = parseInt(tipValue);  
    if (tipValue != 0){
        document.getElementById("rangeValue").innerHTML = `${tipValue}%`; 
    }
    
}


setInterval(getTip, 50);


