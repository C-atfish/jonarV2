const textSpot = document.getElementById("animated-text-spot");
const words_to_type = ['backend', 'frontend', 'full-stack developer.'];
let i = 0;
let timer;

function type() {
    let word = words_to_type[i].split("");
    function type_word() {
        if (word.length > 0) {
            textSpot.textContent += word.shift();
            timer = setTimeout(type_word, 200);
        } else {
            clearTimeout(timer);
            if (i < words_to_type.length - 1) {
                setTimeout(deletingEffect, 100);
            } else {
                setTimeout(() => {
                    setTimeout(deletingEffect, 100);
                }, 8000);
            }
        }
    }
    type_word();
}

function deletingEffect() {
    let word = words_to_type[i].split("");
    function loopDeleting() {
        if (word.length > 0) {
            word.pop();
            textSpot.textContent = word.join("");
            timer = setTimeout(loopDeleting, 100);
        } else {
            clearTimeout(timer);
            if (i === words_to_type.length - 1) {
                i = 0;
            } else {
                i++;
            }
            setTimeout(type, 200);
        }
    }
    loopDeleting();
}

type();






