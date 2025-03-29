// Changes mode theme
const toggle = document.getElementById('toggle');
document.body.style.backgroundColor = 'black';
switchOn = 1;
function doSomething(){
    if (switchOn === 1) {
        document.body.style.backgroundColor = 'white';
        toggle.textContent = '🌙';
        switchOn = 0;
        document.body.style.transition = "1.0s ease-in";
        document.querySelector(".codings").style.boxShadow = 'none';
    } else if (switchOn === 0) {
        document.body.style.backgroundColor = 'black';
        toggle.textContent = "☀️";
        switchOn = 1;
        document.body.style.transition = "1.0s ease-in";
        document.querySelector(".codings").style.boxShadow = '0 0 50px darkorange';
        document.querySelector(".codings").style.transition = '2.0s ease-in';
    }
}
toggle.addEventListener('click', doSomething);
// Updates scroll bar
window.onscroll = function() {
    updateBar();
}
function updateBar() {
    let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollPercentage = (scrollTop / scrollHeight) * 100;
    document.getElementById('progressBar').style.width = scrollPercentage + "%";
}
// background: linear-gradient(180deg, greenyellow, yellowgreen);
// make all codings glitter
let doOrange = setInterval(() => {
    let desiredClass = document.querySelector(".codings");
    if (desiredClass) {
        desiredClass.style.borderRadius = '50px';
        desiredClass.classList.add('nice');
        clearInterval(doOrange);
    }
}, 500);

window.onload = function() {
    const letters = document.querySelectorAll("#myName span");
    // nodeList animating every inline block char
    letters.forEach((letter, index) => {
        setTimeout(() => {
            letter.classList.add('jump');
            letter.style.color = 'black';
            letter.classList.transition = '3.0s ease-in';
        }, index * 600);
    });
    // remove all letters from classList jump
    setTimeout(() => {
        letters.forEach(letter => {
            letter.classList.remove('jump');
        });
    }, 400); // in 400 seconds
};
