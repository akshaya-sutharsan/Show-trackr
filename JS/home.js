function displayShows(data) {
    let output = "";

    data.forEach(show => {
        output += `
        <div class="col-md-3">
            <div class="card">
                <h5>${show.name}</h5>
                <p>${show.genre}</p>
            </div>
        </div>
        `;
    });

    document.getElementById("showList").innerHTML = output;
}

// Filter by Letter
function filterByLetter(letter) {
    let filtered = shows.filter(show => show.name.startsWith(letter));
    displayShows(filtered);
}

// Initial Load
displayShows(shows);