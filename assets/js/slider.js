var controls = document.querySelectorAll(".controls")
var card = document.querySelectorAll(".card")
var prev = document.querySelector("#prev_btn")
let currentCard = 0;
const maxCards = card.length;

controls.forEach((control) => {
    control.addEventListener("click", () => {
        const isLeft = control.prev;

        if (isLeft) {
            currentCard -= 1;
        } else {
            currentCard += 1;
        }

        if (currentCard >= maxCards) {
            currentCard = 0;
        }

        if(currentCard < 0) {
            currentCard = maxCards -1;
        }

        card.forEach(card => 
            card.classList.remove('current_card'));

            card[currentCard].scrollIntoView({
    inline: "nearest",
    behavior: "smooth"
})    
})
})

var controls2 = document.querySelectorAll(".controls2")
var card2 = document.querySelectorAll(".card2")
let currentCard2 = 0;
const maxCards2 = card2.length;

controls2.forEach((control2) => {
    control2.addEventListener("click", () => {
        const isLeft2 = control2.classList.contains("prev");

        if (isLeft2) {
            currentCard2 -= 1;
        } else {
            currentCard2 += 1;
        }

        if (currentCard2 >= maxCards2) {
            currentCard2 = 0;
        }

        if(currentCard2 < 0) {
            currentCard2 = maxCards2 -1;
        }

        card2.forEach(card2 => 
            card2.classList.remove('curren_card2'));

            card2[currentCard2]
.scrollIntoView({
    inline: "nearest",
    behavior: "smooth"
})    })
})