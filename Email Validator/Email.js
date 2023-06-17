let check = document.querySelector(".check");
let password = document.querySelector(".password");
let text = document.querySelector(".text");

let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

check.addEventListener("click", ()=>{
    if(password.value == "")
    {
        text.innerText = "Please Enter An Email Address"
        text.style.color = "#000";

    }
    else if(password.value.match(regex))
    {
        text.innerText = "Congracts You Enter Correct Email Address"
        text.style.color = "green";
    }
    else{
        text.innerText = "Sorry! Wrong Email Address"
        text.style.color = "red";
    }
})