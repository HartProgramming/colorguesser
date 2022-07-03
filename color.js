/* Declare all variables */
/* New Game starts a new game after Easy or Hard is selected */
const newGame = document.querySelector("#newGame")
const hardGame = document.querySelector("#hardGame")
const easyGame = document.querySelector("#easyGame")

/* Selects all divs to loop through */
const divClass = document.querySelectorAll(".divBox")

/* r, g, and b are created and used as the value the player is looking for in the box */
const rgb = document.querySelector("#rgb")

/* Counts the number of guesses a player has */
const update = document.querySelector("#update");

/* Ids that will hold a rgb value for each div */
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


/* This function generates a random integer value between 0 and 255 
that will be placed in a template literal */
const randomColor = (num) => {
    return Math.floor(Math.random() * num);
}

/* The easy function calculates the properties of the easy difficulty
each div is assigned a variable that contains a template literal of its backgroundColor
then those variables are stored inside the easyArr. Next the function checks the
value of easyShuffle which finds a random integer within the length of the easyArr.
After that it uses the value of easyShuffle as an index for the easyArr and stores
that value in the correctResponse variable. Finally the function returns the value of 
correctResponse as the textContent of the rgb id. */

class Btn {
    constructor(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

const applyColor = (button, difficultyBtn) => {
    return button.style.backgroundColor = `rgb(${difficultyBtn.r}, ${difficultyBtn.g}, ${difficultyBtn.b})`;
}

let btnArray = [button1, button2, button3, button4, button5, button6];

let guess = 3;


/* Adjusts Hard difficulty by finding a random number between 0 - 25
and then subtracting from either r, g, b, value. */
function adjustColorHard() {
    return Math.floor(Math.random() * 45);
}

function easy(guess, divArticle, btnArray) {
    console.log(guess)
    let button1Easy = new Btn(randomColor(255), randomColor(255), randomColor(255));
    let button2Easy = new Btn(randomColor(255), randomColor(255), randomColor(255));
    let button3Easy = new Btn(randomColor(255), randomColor(255), randomColor(255));
    let button4Easy = new Btn(randomColor(255), randomColor(255), randomColor(255));
    let button5Easy = new Btn(randomColor(255), randomColor(255), randomColor(255));
    let button6Easy = new Btn(randomColor(255), randomColor(255), randomColor(255));

    let easyArr = [applyColor(button1, button1Easy), applyColor(button2, button2Easy), applyColor(button3, button3Easy), applyColor(button4, button4Easy), applyColor(button5, button5Easy), applyColor(button6, button6Easy)];
    let easyShuffle = Math.floor(Math.random() * easyArr.length);
    let correctResponse = easyArr[easyShuffle];
    console.log(correctResponse);
    rgb.textContent = correctResponse;
    console.log(easyArr)
    for (let x of btnArray) {
        x.addEventListener("click", function () {
            if (x.style.backgroundColor === correctResponse) {
                update.textContent = "YOU WIN";
                console.log("win");
                guess = null;
                easyArr = null;
                btnArray = null;
                divArticle.style.display = "none";
                console.log(divArticle)
                correctResponse = null;
                easyGame.style.color = "teal";
                easyGame.style.backgroundColor = "white";
                return
            } else if (x.style.backgroundColor !== correctResponse) {
                guess = parseInt(guess - 1);
                update.textContent = `${guess} guesses remaining`
                console.log(update.textContent)
                if (guess === 0) {
                    update.textContent = "YOU LOSE";
                    guess = null;
                    divArticle.style.display = "none";
                    easyArr = null;
                    btnArray = null
                    correctResponse = null;
                    easyGame.style.color = "teal";
                    easyGame.style.backgroundColor = "white";
                }
            }
        })
    }
}


/* Hard function for hard game difficulty */
function hard(guess, divArticle) {
    let r = randomColor(255);
    let g = randomColor(255);
    let b = randomColor(255);

    function adjustColor(color) {
        let newColor = color - randomColor(45);
        if (newColor < 1) {
            return newColor + 45;
        } else {
            return newColor;
        }
    }

    let button1Hard = new Btn(r, g, b);
    let button2Hard = new Btn(adjustColor(r), adjustColor(g), adjustColor(b));
    let button3Hard = new Btn(adjustColor(r), adjustColor(g), adjustColor(b));
    let button4Hard = new Btn(adjustColor(r), adjustColor(g), adjustColor(b));
    let button5Hard = new Btn(adjustColor(r), adjustColor(g), adjustColor(b));
    let button6Hard = new Btn(adjustColor(r), adjustColor(g), adjustColor(b));
    let hardArr = [applyColor(button1, button1Hard), applyColor(button2, button2Hard), applyColor(button3, button3Hard), applyColor(button4, button4Hard), applyColor(button5, button5Hard), applyColor(button6, button6Hard)];


    let hardShuffle = Math.floor(Math.random() * hardArr.length)
    let correctResponse = hardArr[hardShuffle]
    console.log(correctResponse)
    rgb.textContent = correctResponse;
    console.log(hardArr)
    for (let x of btnArray) {
        x.addEventListener("click", function () {
            console.log(x)
            if (x.style.backgroundColor === correctResponse) {
                update.textContent = "YOU WIN"
                console.log("win")
                guess = null;
                hardArr = null;
                btnArray = null;
                divArticle.style.display = "none";
                correctResponse = null;
                hardGame.style.color = "teal";
                hardGame.style.backgroundColor = "white";
                return null
            } else if (x.style.backgroundColor !== correctResponse) {
                guess = parseInt(guess - 1);
                console.log(guess)
                update.textContent = `${guess} guesses remaining`
                if (guess === 0) {
                    update.textContent = "YOU LOSE";
                    guess = null;
                    divArticle.style.display = "none";
                    hardArr = null;
                    btnArray = null;
                    correctResponse = null;
                    hardGame.style.color = "teal";
                    hardGame.style.backgroundColor = "white";
                    return null
                }
            } else if (x.style.backgroundColor !== correctResponse && update.textContent === "YOU WIN") {
                hardArr = null;
                guess = null;
                correctResponse = null;
                btnArray = null;
            }

        })

    }
}

function refresh(arr, divArticle, update, guess) {
    setTimeout(() => {
        divArticle.style.display = "flex";
        for (let x of arr) {
            divArticle.append(x);
            x.classList.add("divBox");
            x.style.backgroundColor = null;
        }
        update.textContent = `${guess} guesses remaining`
        if (update.textContent === "YOU WIN" || update.textContent === "YOU LOSE") {
            guess = null;
            console.log(guess)
        }
        console.log(guess);
    }, 300);

}

easyGame.addEventListener("click", function () {
    easyGame.style.color = "white";
    easyGame.style.backgroundColor = "teal";
    easy(guess, divArticle, btnArray);
    hardGame.style.pointerEvents = "none";
    easyGame.style.pointerEvents = "none";
})

hardGame.addEventListener("click", function () {
    hardGame.style.color = "white";
    hardGame.style.backgroundColor = "teal";
    hard(guess, divArticle);
    easyGame.style.pointerEvents = "none";
    hardGame.style.pointerEvents = "none";
})

newGame.addEventListener("click", function () {
    refresh(btnArray, divArticle, update, guess);
    easyGame.style.pointerEvents = "auto";
    hardGame.style.pointerEvents = "auto";
})