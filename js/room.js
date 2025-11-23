const people = document.getElementById("people")
const cakeTable = document.getElementById("cake-table")
const gotoBtn = document.getElementById("gotoTable")

async function animateCake(){
    cakeTable.style.display = "block";
    let bottom = parseInt(getComputedStyle(cakeTable).bottom)

    while(bottom > 0){
        bottom -= 10
        cakeTable.style.bottom = bottom + "px"

        await new Promise(resolve => setTimeout(resolve, 5))
    }   
    people.style.bottom = "200px"
    setTimeout(() => {
        gotoBtn.style.display = "block"
    }, 2000);
}

setTimeout(() => {
    animateCake();
}, 5000);