function checkWindowSize()
{
    const width = window.innerWidth;
    if (width < 835)
    {
        document.getElementById("for_the_header").style.display = "none";
        document.getElementById("contact_box").style.display = "flex";
    } else
    {
        document.getElementById("for_the_header").style.display = "block";
    }
};
// On Window Reload
checkWindowSize();
// On Resizing Window
window.addEventListener("resize", checkWindowSize);