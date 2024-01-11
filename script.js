let allData = [];

function getData () {
    fetch('characters.json')
    .then(response => {
        return response.json()
    })
    .then(data => {
        allData = data;
        displayCharacters(data);
        characterSay(data);
    })
    .catch(error => console.error('Error loading data:', error))
}


function displayCharacters(data) {
    let itemsContainer = document.getElementById('character');
    itemsContainer.innerHTML = '';
    data.forEach(item => {
        let itemDiv = document.createElement('div');
        itemDiv.className = 'item';
        itemDiv.innerHTML = `
        <img src="${item.images.main}" alt="${item.first} ${item.middle} ${item.last}">
        `;

        let divInfo = document.createElement('div');
        divInfo.className = 'info';
        divInfo.textContent = `${item.name.first} ${item.name.last}`;
        divInfo.addEventListener('click', () => characterSay(item));
        itemDiv.appendChild(divInfo)

        itemsContainer.appendChild(itemDiv)
    })
}

function characterSay (data) {
    if (data.sayings && data.sayings.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.sayings.length);
        alert(`${data.name.first} ${data.name.last} ${data.sayings[randomIndex]}`);

}
}
getData ()