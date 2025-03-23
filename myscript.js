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
    } else if (switchOn === 0) {
        document.body.style.backgroundColor = 'black';
        toggle.textContent = "☀️";
        switchOn = 1;
        document.body.style.transition = "1.0s ease-in";
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
