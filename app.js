const empties = document.querySelectorAll('.empty');
const fill = document.querySelector('.fill');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);


empties.forEach((e) => {
    e.addEventListener('dragover', dragOver);
    e.addEventListener('dragenter', dragEnter);
    e.addEventListener('dragleave', dragLeave);
    e.addEventListener('drop', drop);
})


function dragStart() {
    this.classList.add('hold');
    setTimeout(() => this.classList.add('invisable'), 0)
}
function dragEnd() {
    this.className = 'fill';
}

function dragOver(e) {
    e.preventDefault();
}
function dragEnter() {
    this.classList.add('hover');
}
function dragLeave() {
    this.className = 'empty';
}
function drop() {
    this.className = 'empty';
    this.appendChild(fill)
}

/////////////// another/////////////

const dragable = document.querySelectorAll('.dragable');
const container = document.querySelectorAll('.container');

dragable.forEach(d => {
    d.addEventListener('dragstart', () => {
        d.classList.add('dragging');
    })
    d.addEventListener('dragend', () => {
        d.classList.remove('dragging');
    })
})
container.forEach(c => {
    c.addEventListener('dragover', (e) => {
        e.preventDefault();
    })
    c.addEventListener('drop', (e) => {
        e.preventDefault();
        const dragable = document.querySelector('.dragging');
        c.appendChild(dragable);
    })

})