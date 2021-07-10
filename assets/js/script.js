// different color for different category
var catEle = document.getElementsByClassName('category-label-container');

for (let i of catEle) {
    if (i.innerText === "Work") {
        i.style.backgroundColor = "red";

    } else if (i.innerText === "Home") {
        i.style.backgroundColor = "blue";

    } else if (i.innerText === "Personal") {
        i.style.backgroundColor = "cyan";

    }else if (i.innerText === "Meeting") {
        i.style.backgroundColor = "yellow";

    } 
    // else if(i.innerText==="other") {
    //     i.style.backgroundColor="pink";
    // }
}

//code for line through when the task is clicked

var taskContainer = document.getElementsByClassName('task-container');
for (let i of taskContainer) {
    i.addEventListener('click', function () {
        i.style.textDecoration = "line-through";
        i.style.cursor = "pointer";
    });
}