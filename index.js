//validation of login page
function myFunction(){
    var username = document.forms['form']['Uname'].value;
    var password = document.forms['form']['pass'].value;

    if(username == "lina" && password == "lina"){
        alert("Login Successful!");
        window.location.href = "order-page.html";
    }
    else{
        alert("Please Enter Valid Credentials ");
    }
}

/*--------------------the end--------------------------*/


