//Get range value

const getTip =()=>{
    let billAmount = parseFloat(document.getElementById("bill").value);
    let tipTotal;
    let tipValue = parseFloat(document.getElementById("slider").value);
    let totalValue;
    let people = parseInt(document.getElementById("people").value);
    let billEach;
    let tipEach;
    document.getElementById("tipslider").value = people;
    //console.log(people)
    

    
    if (tipValue != 0){
        document.getElementById("rangeValue").innerHTML = `${tipValue}%`; 
        tipTotal = (tipValue /100) * billAmount;
        tipTotal =tipTotal.toFixed(2);
        document.getElementById("tipAmount").innerHTML = `$ ${tipTotal}`
        totalValue = parseFloat(tipTotal) + parseFloat(billAmount);
        totalValue =totalValue.toFixed(2);
        document.getElementById("total").innerHTML = `$ ${totalValue}`;
        billEach = parseFloat(billAmount) / parseFloat(people);
        document.getElementById("billEach").innerHTML = `$ ${billEach.toFixed(2)}`;
        tipEach = parseFloat(tipTotal) / parseFloat(people);
        document.getElementById("tipEach").innerHTML = `$ ${tipEach.toFixed(2)}`;
        
    }



    //split

    



    
}


setInterval(getTip, 50);


