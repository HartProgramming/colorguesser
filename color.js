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
const guesses = document.querySelector("#guesses");


const update = document.querySelector("#update");

/* Ids that will hold a rgb value for each div */
const divSection = document.querySelector("#divSection");
const divArticle = document.querySelector("#divArticle");
const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");
const div5 = document.querySelector("#div5");
const div6 = document.querySelector("#div6");

/* This function generates a random integer value between 0 and 255 
that will be placed in a template literal */
function randomEasy() {
    return Math.floor(Math.random() * 255);
}

/* The easy function calculates the properties of the easy difficulty
each div is assigned a variable that contains a template literal of its backgroundColor
then those variables are stored inside the easyArr. Next the function checks the
value of easyShuffle which finds a random integer within the length of the easyArr.
After that it uses the value of easyShuffle as an index for the easyArr and stores
that value in the correctResponse variable. Finally the function returns the value of 
correctResponse as the textContent of the rgb id. */
function easy() {
    let div1Color = div1.style.backgroundColor = `rgb(${randomEasy()}, ${randomEasy()}, ${randomEasy()})`
    let div2Color = div2.style.backgroundColor = `rgb(${randomEasy()}, ${randomEasy()}, ${randomEasy()})`
    let div3Color = div3.style.backgroundColor = `rgb(${randomEasy()}, ${randomEasy()}, ${randomEasy()})`
    let div4Color = div4.style.backgroundColor = `rgb(${randomEasy()}, ${randomEasy()}, ${randomEasy()})`
    let div5Color = div5.style.backgroundColor = `rgb(${randomEasy()}, ${randomEasy()}, ${randomEasy()})`
    let div6Color = div6.style.backgroundColor = `rgb(${randomEasy()}, ${randomEasy()}, ${randomEasy()})`
    let easyArr = [div1Color, div2Color, div3Color, div4Color, div5Color, div6Color]
    let easyShuffle = Math.floor(Math.random() * easyArr.length);
    let correctResponse = easyArr[easyShuffle];
    console.log(correctResponse);
    rgb.textContent = correctResponse;
    console.log(easyArr)
    for (let x of divClass) {
        x.addEventListener("click", function () {
            console.log(x)
            if (x.style.backgroundColor === correctResponse) {
                update.textContent = "YOU WIN";
                console.log("win");
                divArticle.style.display = "none";
                return divSection.textContent = "GREAT JOB"
            } else if (x.style.backgroundColor !== correctResponse) {
                guesses.textContent = parseInt(guesses.textContent - 1);
                if (guesses.textContent === "0") {
                    update.textContent = "YOU LOSE";
                    divArticle.style.display = "none";
                    return divSection.textContent = "TRY AGAIN"
                }
            }
        })
    }
}

/* Adjusts Hard difficulty by finding a random number between 0 - 25
and then subtracting from either r, g, b, value. */
function adjustHard() {
    return Math.floor(Math.random() * 45);
}

/* Hard function for hard game difficulty */
function hard() {
    let r = randomEasy();
    let g = randomEasy();
    let b = randomEasy();
    function rAdjust() {
        let newR = r - adjustHard();
        if (newR < 1) {
            return newR + 45;
        } else {
            return newR;
        }
    }
    function gAdjust() {
        let newG = g - adjustHard();
        if (newG < 1) {
            return newG + 45;
        } else {
            return newG;
        }
    }
    function bAdjust() {
        let newB = b - adjustHard();
        if (newB < 1) {
            return b + 45;
        } else {
            return newB;
        }
    }
    let div1Color = div1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
    let div2Color = div2.style.backgroundColor = `rgb(${rAdjust()}, ${gAdjust()}, ${bAdjust()})`
    let div3Color = div3.style.backgroundColor = `rgb(${rAdjust()}, ${gAdjust()}, ${bAdjust()})`
    let div4Color = div4.style.backgroundColor = `rgb(${rAdjust()}, ${gAdjust()}, ${bAdjust()})`
    let div5Color = div5.style.backgroundColor = `rgb(${rAdjust()}, ${gAdjust()}, ${bAdjust()})`
    let div6Color = div6.style.backgroundColor = `rgb(${rAdjust()}, ${gAdjust()}, ${bAdjust()})`
    let hardArr = [div1Color, div2Color, div3Color, div4Color, div5Color, div6Color]
    let hardShuffle = Math.floor(Math.random() * hardArr.length)
    let correctResponse = hardArr[hardShuffle]
    console.log(correctResponse)
    rgb.textContent = correctResponse;
    console.log(hardArr)
    for (let x of divClass) {
        x.addEventListener("click", function () {
            console.log(x)
            if (x.style.backgroundColor === correctResponse) {
                update.textContent = "YOU WIN"
                console.log("win")
                divSection.textContent = "GREAT JOB"
                return divArticle.style.display = "none";
            } else if (x.style.backgroundColor !== correctResponse) {
                guesses.textContent = parseInt(guesses.textContent - 1);
                if (guesses.textContent === "0") {
                    update.textContent = "YOU LOSE"
                    divSection.textContent = "TRY AGAIN"
                    return divArticle.style.display = "none";
                }
            }
        })
    }
}


easyGame.addEventListener("click", function () {
    easyGame.style.color = "teal";
    easyGame.style.backgroundColor = "white";
    easy()
})

hardGame.addEventListener("click", function () {
    hardGame.style.color = "teal";
    hardGame.style.backgroundColor = "white";
    hard()
})


newGame.addEventListener("click", function () {
    window.location.reload()
})
