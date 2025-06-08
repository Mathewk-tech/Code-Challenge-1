function calculateBodaFare(){
    // prompt the user to enter amount
    const userinput=prompt("Unafika wapi Mkubwa? Kilometer ngapi?");
     // convert string to an integer
    distanceinkm=parseInt(userinput);
    //   checks if the input is a number and is greater than 0
    if(isNaN(distanceinkm)||distanceinkm<=0){
        alert("Invalid input!please enter a positive number")
        return;
    }
    // creating values to for variables
    const BaseFare = 50 ;
    const chargePerKm =15;
//mathematical expression
    const totalFare = BaseFare+(distanceinkm * chargePerKm);
    const pesa = distanceinkm*chargePerKm;
//creates a multiline string to store the output message
    var message=`
    uko kwote?Io ni ${distanceinkm} km:
    Ukikalia Pikipiki: KES 50
    Mpaka Uko: KES ${pesa}
    Total: KES ${totalFare}

    Panda Pikipiki!
`
// to print the output to console
console.log(message);
  //to display an alert pop up for the output message
alert(message);
}
//to initialize the function when the script is loaded
calculateBodaFare();