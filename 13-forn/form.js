function validateForm() {

    var button=document.getElementById("submit");
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    var confirm=document.getElementById("confirm").value;

    if (username, password, confirm == ""){
        alert("Fields cannot be empty.");
    } else if (password != confirm){
        alert("Passwords do not match");
    } else {
        button.disabled=true;
    }
}