function checkWindowSize()
{
    const width = window.innerWidth;

    if (width < 1250)
    {
        document.getElementById("for_the_header").style.display = "none";
        document.getElementById('about_box_1').style.display = 'none';
        document.getElementById('widget_1').style.height = 'auto';
        document.getElementById('widget_2').style.display = 'none';
        document.getElementById('widget_3').style.display = 'none';
        document.getElementById('widget_4').style.display = 'none';
        document.getElementById('sub_widget_1').style.display = 'block';
        document.getElementById('sub_widget_2').style.display = 'flex';
        document.getElementById('sub_widget_3').style.display = 'block';
        document.getElementById('sub_widget_4').style.display = 'flex';
        document.getElementById('parent_label_nav').style.display = 'none';

    }
    else
    {
        document.getElementById("for_the_header").style.display = "block";
        document.getElementById('about_box_1').style.display = 'block';
        document.getElementById('widget_1').style.height = '40vh';
        document.getElementById('widget_2').style.display = 'block';
        document.getElementById('widget_3').style.display = 'block';
        document.getElementById('widget_4').style.display = 'block';
        document.getElementById('sub_widget_1').style.display = 'none';
        document.getElementById('sub_widget_2').style.display = 'none';
        document.getElementById('sub_widget_3').style.display = 'none';
        document.getElementById('sub_widget_4').style.display = 'none';
        document.getElementById('parent_label_nav').style.display = 'flex';
    }
};
// On Window Reload
checkWindowSize();
// On Resizing Window
window.addEventListener("resize", checkWindowSize);

// Label Highlighter
const buttons = document.querySelectorAll(".label_nav");
const highlights = document.querySelectorAll(".highlights");
function highlight_label(buttons, highlights, color)
{
    for (let i = 0; i < buttons.length; i++)
    {
        const targetHighlight = highlights[i];
        if (targetHighlight)
        {
            buttons[i].addEventListener("mouseenter", () => {
               targetHighlight.style.backgroundColor = color;
            });
            buttons[i].addEventListener("mouseleave", () => {
                targetHighlight.style.backgroundColor = '#9ae3d0';
            });
        }
    }
};
highlight_label(buttons, highlights, "yellow");