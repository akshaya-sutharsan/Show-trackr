function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let user = users.find(u => u.email === email && u.password === password);

    if (user) {
        alert("Login Successful");
    } else {
        alert("Login Failed");
    }
}
