let email = document.querySelector(".email");
let pass = document.querySelector(".pass");


function login(){
   if(email.value == ""){
        alert("please enter your email address")
        return;
    }
    else if(pass.value == ""){
        alert("please enter your password")
        return;
    }

    let user = window.localStorage.getItem("user");
    let retrievedUser = JSON.parse(user);//converts a string back to object
    console.log(user,retrievedUser);

    if(user){
        let retrievedUser = JSON.parse(user);//converts a string back to object
 
    if(email.value == retrievedUser.email){
        if(pass.value == retrievedUser.pass){
                window.localStorage.setItem("loggedIn","1");
                window.location.href = "main.html";
        }
        else{
            alert("wrong password!");
        }
    }
    else{
        alert("user not found.please consider signing up!");
        return; 
    }
    }
    else{
        alert("user not found.please consider signing up!");
        return;
    }
   


}