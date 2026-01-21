let container = document.querySelector('.container');

function makeGrid(num) {
    for (let i = 0; i < num; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < 16; j++) {
            const rowMember = document.createElement("div");
            row.appendChild(rowMember);
        }
        container.appendChild(row);
    }
}

makeGrid(16);

const divs = document.querySelectorAll("div");
divs.forEach((div) => {
    div.addEventListener('mouseover', () => {
        console.log('Event');
        div.style.backgroundColor = 'white';
    })
})
