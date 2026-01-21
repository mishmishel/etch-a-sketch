let container = document.querySelector('.container');

function makeGrid(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < num; j++) {
            const rowMember = document.createElement("div");
            row.appendChild(rowMember);
        }
        container.appendChild(row);
    }
}

makeGrid(16);

container.addEventListener('mouseover', (e) => {
    if (e.target.parentElement.classList.contains("row")) {
        e.target.style.backgroundColor = 'white';
    }
})

let rows = document.querySelectorAll('.row');

const button = document.querySelector("button");
button.addEventListener('click', () => {
    let number = prompt("Please enter a number:")
    if (number > 0 && number < 100) {
        rows.forEach((row) => {
            row.innerHtml = '';
        })
        container.innerHTML = '';
        makeGrid(number);
    }
})
