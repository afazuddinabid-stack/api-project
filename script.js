console.log("Hello, World!");
 document.getElementById("signin-btn").addEventListener("click", function() {
    const inputuser = document.getElementById("input-user")
    const inputpassword = document.getElementById("input-password")
    const username = inputuser.value;
    const password = inputpassword.value;
    console.log(username, password);
    if (username === "admin" && password === "admin123") {
        alert("Login successful!");
        window.location.href = "home.html";
    }
    else{
        alert("Login failed! Please check your username and password.");
        return false;
    }
 });