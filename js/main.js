let screen = document.querySelector("#screen")
let deleteAll = document.querySelector("#d-all")
let deleteOne = document.querySelector("#delete")
let numBtn = document.getElementsByClassName("num");
let equal = document.getElementById("eq");

[...numBtn].forEach((btn)=>{
    btn.addEventListener("click",()=>{
        screen.value =="|"? screen.value = btn.innerHTML :screen.value += btn.innerHTML
    })
})

equal.addEventListener("click",()=>{
    screen.value = eval(screen.value)
})

deleteAll.addEventListener("click",()=>{
    screen.value = ""
})

deleteOne.addEventListener("click",()=>{
    screen.value = screen.value.slice(0 , -1)
})