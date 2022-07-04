/* Declare all variables */
/* New Game starts a new game after Easy or Hard is selected */
const newGame = document.querySelector("#newGame")
const hardGame = document.querySelector("#hardGame")
const easyGame = document.querySelector("#easyGame")
const divClass = document.querySelectorAll(".divBox")
const rgb = document.querySelector("#rgb")
const update = document.querySelector("#update");
const divSection = document.querySelector("#divSection");
const divArticle = document.querySelector("#divArticle");
const button1 = document.createElement("button");
const button2 = document.createElement("button");
const button3 = document.createElement("button");
const button4 = document.createElement("button");
const button5 = document.createElement("button");
const button6 = document.createElement("button");
button1.setAttribute("id", "button1");
button2.setAttribute("id", "button2");
button3.setAttribute("id", "button3");
button4.setAttribute("id", "button4");
button5.setAttribute("id", "button5");
button6.setAttribute("id", "button6");

const randomNum = (num) => {
    return Math.floor(Math.random() * num);
}

const applyColor = (btn, colorR, colorG, colorB) => {
    btn.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`;
}

let btnArray = [button1, button2, button3, button4, button5, button6];

let guess;
let correctResponseIndex;
let correcResponse;

function adjustHard(origin, adjustment){
    if(origin - adjustment < 1){
        return origin + adjustment;
    }else{
        return origin - adjustment;
    }
}

easyGame.addEventListener("click", function () {
    guess = 3;
    correctResponseIndex = randomNum(btnArray.length)
    console.log(btnArray[correctResponseIndex])
    update.textContent = `${guess} guesses remaining`;
    for (let x of btnArray) {
        x.disabled = false;
        divArticle.append(x);
        x.classList.add("divBox");
        applyColor(x, randomNum(255), randomNum(255), randomNum(255));
        console.log(x.style.backgroundColor)
    }
    rgb.textContent = `${btnArray[correctResponseIndex].style.backgroundColor}`
    easyGame.style.pointerEvents = "none";
    hardGame.style.pointerEvents = "none";
})

hardGame.addEventListener("click", function () {
    guess = 3;
    correctResponseIndex = randomNum(btnArray.length)
    console.log(btnArray[correctResponseIndex])
    update.textContent = `${guess} guesses remaining`;
    let r = randomNum(255);
    let g = randomNum(255);
    let b = randomNum(255);
    for (let x of btnArray) {
        x.disabled = false;
        divArticle.append(x);
        x.classList.add("divBox");
        applyColor(x, adjustHard(r, randomNum(80)), adjustHard(g, randomNum(80)), adjustHard(b, randomNum(80)));
        console.log(x.style.backgroundColor)
    }
    rgb.textContent = `${btnArray[correctResponseIndex].style.backgroundColor}`
    easyGame.style.pointerEvents = "none";
    hardGame.style.pointerEvents = "none";
})

for (let j of btnArray) {
    j.addEventListener("click", function () {
        console.log("hi")
        console.log(correctResponseIndex)
        if (btnArray.indexOf(j) === correctResponseIndex) {
            console.log("correct")
            update.textContent = "YOU WIN";
            divArticle.style.display = "none";
            guess = null;
            
        } else if (btnArray.indexOf(j) !== correctResponseIndex) {
            --guess;
            update.textContent = `${guess} guesses remaining`;
            console.log(guess)
            if (guess === 0) {
                update.textContent = "YOU LOSE";
                guess = undefined;
                
                divArticle.style.display = "none";
                return
            }
        } 
    })
}

newGame.addEventListener("click", function () {
    console.log(btnArray)
    update.textContent = `Select Easy or Hard`
    for (let i of btnArray) {
        divArticle.append(i);
        i.classList.add("divBox");
        applyColor(i, null, null, null);
        i.style.backgroundColor = null;
        console.log(correctResponseIndex)
        console.log(i)
        i.disabled = true;
    }
    divArticle.style.display = "flex"
    easyGame.style.pointerEvents = "auto";
    hardGame.style.pointerEvents = "auto";
    hardGame.style.color = "teal";
    hardGame.style.backgroundColor = "white";
    easyGame.style.color = "teal";
    easyGame.style.backgroundColor = "white";
})