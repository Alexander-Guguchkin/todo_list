let input = document.querySelector("input");
let add = document.querySelector(".add");
let div = document.querySelector(".todo__task-op");
let del = document.querySelector(".del");

add.addEventListener('click', ()=>{
    div.innerHTML +=`<div class = "wrap">${input.value}</div>`;
})
del.addEventListener("click", ()=>{
    alert("Нажмите на те задачи кторые хотите удалить");
    div.addEventListener('click', (e)=>{
        e.target.remove()
    });
})