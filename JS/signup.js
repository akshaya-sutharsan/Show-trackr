function signup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (name.length < 5) {
        document.getElementById("msg").innerText = "Name too short";
        return;
    }

    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        document.getElementById("msg").innerText = "Invalid Email";
        return;
    }

    let passPattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8}$/;
    if (!password.match(passPattern)) {
        document.getElementById("msg").innerText = "Invalid Password";
        return;
    }

    users.push({ email, password });

    document.getElementById("msg").innerText = "Signup Successful";
}