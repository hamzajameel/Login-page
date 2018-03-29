function submit(){
    var name = document.getElementById("name");
    var number = document.getElementById("number");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    localStorage.setItem("Name", name.value)
    localStorage.setItem("Number", number.value)
    localStorage.setItem("Email", email.value)
    localStorage.setItem("Password", password.value)
    window.location = "login.html";
}

function Pogin(){
    var userEmail = document.getElementById("userEmail");
    var userPassword = document.getElementById("userPassword");
    var storageEmail = localStorage.getItem("Email");
    var storagePassword = localStorage.getItem("Password")
    if(userEmail.value === storageEmail && userPassword.value === storagePassword)
   { alert ("Login Successfull")
    window.location = "user.html"
 
}
else{
    alert("Incorrect Detail")
}

}