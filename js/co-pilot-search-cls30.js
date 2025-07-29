let results = document.querySelector('.results');
let allUsers = []; // Store fetched users

fetch('https://jsonplaceholder.typicode.com/users')
.then((alu) => alu.json())
.then((data) => {
    allUsers = data; // Save users for searching
    displayResults(allUsers); // Show all users initially
});

function displayResults(users) {
    results.innerHTML = ''; // Clear previous results
    users.forEach((item) => {
        let div = document.createElement('div');
        let h2 = document.createElement('h2');
        let h3 = document.createElement('h3');
        let p = document.createElement('p');

        div.classList.add('result1');
        h2.innerHTML = 'User name: ' + item.name;
        h3.innerHTML = 'User email: ' + item.email;
        p.innerHTML = 'website: ' + item.website;

        div.appendChild(h2);
        div.appendChild(h3);
        div.appendChild(p);
        results.appendChild(div);
    });
}

function searchInfo() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    const filtered = allUsers.filter(user =>
        user.name.toLowerCase().includes(query) ||
        user.email.toLowerCase().includes(query) ||
        user.website.toLowerCase().includes(query)
    );
    displayResults(filtered);
}