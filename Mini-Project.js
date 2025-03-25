// Event-Bubling : it is basically happened when we have an inheritance property
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click" , function() {
//     console.log("Div Was Clicked");
// });
// ul.addEventListener("click" , function(event) {
//     event.stopPropagation();
//     console.log("ul Was Clicked");
// });
// for(li of lis){
//     li.addEventListener("click" , function(event) {
//         event.stopPropagation(); // to stop the propagation....
//         console.log("li Was Clicked");
//     });
// }
// Todo App
// let btn = document.querySelector("button");
// let inp = document.querySelector("input");
// let ul = document.querySelector("ul");

// btn.addEventListener("click" , function() {
//    let item = document.createElement("li");
//    item.innerText = inp.value;

//    let delBtn = document.createElement("button");
//    delBtn.innerText = "delete";
//    delBtn.classList.add("delete");
//    item.appendChild(delBtn);



//    ul.appendChild(item);
//    inp.value = "";

// });
// ul.addEventListener("click", function(event) {
//     if(event.target.nodeName == "BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("delete");
//     }

// });
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click" , function() {
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }



// Simon -  Game


let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple", "green"];

let started = false;
let level = 0;

let h3 = document.querySelector("h3");


document.addEventListener("keypress", function() {
    if(started == false) {
        console.log("Game Started....");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    },250);
}




function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    
   let ranIdx = Math.floor(Math.random() * 3);
   let randColor = btns[ranIdx];
   let randBtn = document.querySelector(`.${randColor}`);
   gameSeq.push(randColor);
   console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log("level is ", level);

    // let idx = level-1;
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else {
        h3.innerHTML = `Game over ! Your Score Was <b> ${level} </b> <br> Press Any Key To Start..`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector("body").style.backgroundColor = "white";
        },200);
        // highestScore();
        reset();
    }
}



function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click" , btnPress);
}


function reset() {
    started = false;
    userSeq = [];
    gameSeq = [];
    level = 0;
}
// let highscore = 1;
// function highestScore() {
//     if(level > highscore){
//         h3.innerText = `your hiest score was ${level}`;
//     }else {
//        h3.innerText = `your hiest score was ${level}`;
//     }
    
// }