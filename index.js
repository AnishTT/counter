

let counter = document.getElementById("counter");
let count = 0;
function increase(){
    count+=1;
    counter.innerHTML = count;
}

function decrease(){
    count-=1;
    counter.innerHTML = count;
}

function reset(){
    count-=count;
    counter.innerHTML = count;
}

function save(){
    document.getElementById("saves").innerHTML += count+ ",";
}