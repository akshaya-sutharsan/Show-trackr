function addShow() {
    let name = document.getElementById("name").value;

    if (!/^[A-Za-z]/.test(name)) {
        document.getElementById("message").innerText = "Invalid TV Show name";
        return;
    }

    shows.push({ name: name, genre: "Unknown" });

    document.getElementById("message").innerText = name + " has been added";
}