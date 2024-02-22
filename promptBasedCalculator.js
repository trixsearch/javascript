//by @trixsearch
// always free to work and contribute
//@trixsearch at github and many more sites


var num;
var result = 0;
var m= true ;


// idhar hum ek choice dene wale hai ki aapko aage add karna hai ya nhi

function check(choice){
    if (choice=="y") {
        //agar add karna hoga toh ye kar dena

        m = true;
        num= parseInt(prompt("give a number: "));
        result = result + num;
        //result mein humne bus purane number ko sath mein addd kar diya hai
        
    } else {
        m = false;
        
    }
}
// ye loop sey humne decision le liya hai ki jabtak humko m ki value false nhi milti tab tak humko karte rahna hai 

do{
    // result = result + num;
    choice = prompt("your sum is : " +result +" , write y for add number : ");
    check(choice);
    
} while (m);

