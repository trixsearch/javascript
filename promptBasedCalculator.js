var num;
var result = 0;
var m= true ;

function check(choice){
    if (choice=="y") {

        m = true;
        num= parseInt(prompt("give a number: "));
        result = result + num;
        
        
    } else {
        m = false;
        
    }
}


do{
    // result = result + num;
    choice = prompt("your sum is : " +result +" , write y for add number : ");
    check(choice);
    
} while (m);

