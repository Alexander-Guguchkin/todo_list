let input = document.querySelector("input");
let add = document.querySelector(".add");
let div = document.querySelector(".todo__task-op");
let tasks = [];

add.addEventListener('click', ()=>{
    let task = {id:tasks.length+1, decription:input.value };
    // div.innerHTML +=`<div class = "wrap">${input.value}</div>`;

    for (let i of tasks){

    }
})
div.addEventListener('click', (e)=>{
    e.target.remove();
});