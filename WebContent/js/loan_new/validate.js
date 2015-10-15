function validateData(){
    //Logic to validate Data
    console.log("Validation Start");
    //Get the value from the elements - HTML-------------
    var at = document.getElementById("email").value.indexOf("@");
    var amount = document.getElementById("amount").value;
    var tenure = document.getElementById("tenure").value;
    var name = document.getElementById("name").value;
    var reason = document.getElementById("reason").value;
    var email = document.getElementById("email").value;
    //validation for amount
    if (amount == null || amount == " " || amount.length <= 0) {
        
        alert("amount must be filled out");
        return false;
    }
        //validation for tenure
    else if (tenure == null || tenure == " " || tenure.length <= 0) {
        
        alert("tenure must be filled out");
        return false;
    }
        //validation for name
    else if (name == null || name == " " || name.length <= 0) {

        alert("name must be filled out");
        return false;
    }//validation for email
   
    else if (email == null || email == " " || email.length <= 0 ) {

        alert("email must be filled out");
        return false;
    }
    else if (at==-1) {

        alert("email is not valid");
        return false;
    }

    //validation for date
    console.log(document.getElementById("dob").value);
    if (document.getElementById("dob").value == '') {
        alert("Enter a valid date");
        return false;
    }
    var d = new Date("" + document.getElementById("dob").value + "");
    
    var curDate = new Date();
    if ((curDate.getFullYear() - 100) > d.getFullYear()) {
        
        alert("your age is above 100 years");
        return false;
    } else
        if (d > curDate) {            
            alert("Not Possible:Birthday cannot be future");
            return false;
        }
    else if (curDate.getFullYear() - d.getFullYear() < 18) {
        alert("you are not above 18")
        return false;
    }
    return true;

}
