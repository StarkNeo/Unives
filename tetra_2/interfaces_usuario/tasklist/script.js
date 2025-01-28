
const closeForm = () => {
    document.getElementById('new-task').style.display = 'none';
}
const openForm = () => {
    document.getElementById('new-task').style.display = 'flex';

}
const addProject = () => {
    let form = document.getElementById('new-task');
    let data = new FormData(form);
    let area = document.querySelector('.future-projects')
    area.innerHTML += `
    <div class="card" draggable="true">
        <img class="minus-icon" src="./minus.png" alt="minus image" onclick="removeProject(this)">
                    
        <p draggable="true">
        ${data.get("task-name")}<br>
        ${data.get('task-description')}<br>
        Inicio: ${data.get("start-date")}<br>
        Termino: ${data.get("end-date")}
        </p>
        
    </div>`


}

const removeProject = (e) => {
    let parent = e.parentNode;
    let descendent = parent.parentNode
    descendent.removeChild(parent)

}
function recoger(e) {
    e.dataTransfer.setData('text/plain', e.target.class);
    e.dataTransfer.effectAllowed = 'move';
}

function arrastrar(e) {
    e.dataTransfer.dropEffect = 'move';
    return false;
}

function soltar(e) {
    let task = document.createElement('div');
    task.className = e.dataTransfer.getData('text');
    document.getElementById('completed').appendChild(task);
}

let cards = document.getElementsByClassName('card');
for (let index = 0; index < cards.length; index++) {
    cards[index].addEventListener("dragstart", (e) => {
        e.currentTarget.classList.add("dragging");
        // Clear the drag data cache (for all formats/types)
        e.dataTransfer.clearData();
        // Set the drag's format and data.
        // Use the event target's id for the data
        e.dataTransfer.setData("text/plain", ev.target.id);
    });
    cards[index].addEventListener("dragend",(e)=>
        e.target.classList.remove("dragging"),
    );

}
let completed = document.getElementById('completed');
completed.addEventListener("dragover",(e)=>{
    e.preventDefault();
})
completed.addEventListener("drop",(e)=>{
    e.preventDefault();
    let data =  e.dataTransfer.getData("text");
    let source = 
})