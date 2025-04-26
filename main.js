
// Масив для зберігання пар
let pairs = [];

function addPair() {
    const input = document.getElementById('pairInput').value.trim();

    const regex = /^([a-zA-Z0-9]+)\s*=\s*([a-zA-Z0-9]+)$/;
    const match = input.match(regex);


    if (match) {
        const name = match[1];
        const value = match[2];
        pairs.push({ name, value });
        updateList();

        document.getElementById('pairInput').value = '';


    } else {
        alert('An error has occurred. Enter the value in English letters or numbers');

    }

}

function updateList() {
    const list = document.getElementById('pairList');
    list.innerHTML = '';
    pairs.forEach((pair, index) => {

        const option = document.createElement('option');
        option.text = `${pair.name} = ${pair.value}`;
        option.value = index;
        list.appendChild(option);

    });

}

function sortByName() {
    pairs.sort((a, b) => a.name.localeCompare(b.name));
    updateList();
}

function sortByValue() {

    pairs.sort((a, b) => a.value.localeCompare(b.value));
    updateList();
}

    function deleteSelected() {

    const list = document.getElementById('pairList');
    const selected = Array.from(list.selectedOptions).map(option => parseInt(option.value));

    pairs = pairs.filter((_, index) => !selected.includes(index));
    updateList();



}
