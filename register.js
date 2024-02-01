let name = document.querySelector(".name");
let email = document.querySelector(".email");
let pass = document.querySelector(".pass");

function register(){

    if(name.value == ""){
        alert("please provide a name");
        return;
    }
    else if(email.value == ""){
        alert("please enter your email address")
        return;
    }
    else if(pass.value == ""){
        alert("please enter your password")
        return;
    }
let user = {
    name:name.value,
    email:email.value,
    pass:pass.value,
};

window.localStorage.setItem("user",JSON.stringify(user));
window.location.href = "login.html";
}