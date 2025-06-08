function calculateChaiIngredients(){
    // prompt the user to enter amount
    const userinput = prompt("How many cups of chai do you want to make?");
     // convert string to an integer
    numberOfcups=parseInt(userinput);
//   checks if the input is a number and is greater than 0
    if(isNaN(numberOfcups)||numberOfcups<=0){
        alert("Invalid input! Please enter a positive number.");
        return;
    }
    // creating values to for variables
    const waterPerCup = 200;      
    const milkPerCup = 50;      
    const teaLeavesPerCup = 1;    
    const sugarPerCup = 2; 
// mathematical expressions
    const totalWater = waterPerCup * numberOfcups;
    const totalMilk = milkPerCup * numberOfcups;
    const totalTeaLeaves = teaLeavesPerCup * numberOfcups;
    const totalSugar = sugarPerCup * numberOfcups;
    //creates a multiline string to store the output message
   var message=      `
         
         To make  ${numberOfcups} cups of Kenyan Chai,you will need:        
         Water:${totalWater} ml
         Milk: ${totalMilk} ml 
         Tea Leaves (Majani): ${totalTeaLeaves} tablespoon${totalTeaLeaves > 1 ? 's' : ''} 
         Sugar (Sukari): ${totalSugar} teaspoon${totalSugar > 1 ? 's' : ''} \n
         Enjoy your Chai Bora        
        `
        // to print the output to console
    console.log(message);
    //to display an alert pop up for the output message
    alert(message)
}
//to initialize the function when the script is loaded
calculateChaiIngredients();