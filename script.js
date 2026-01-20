// Light and Dark Mode
const themeButton = document.getElementById('themeButton');
themeButton.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme');
    themeButton.innerText = document.body.classList.contains('dark-theme') 
        ? "Switch to Light Theme" 
        : "Switch to Dark Theme";
});

// Hide and Show 
function setupToggle(buttonId, contentId, sectionName) {
    const btn = document.getElementById(buttonId);
    const content = document.getElementById(contentId);

    btn.addEventListener('click', function() {
        if (content.style.display === "none") {
            content.style.display = "block";
            btn.innerText = "Hide " + sectionName;
        } else {
            content.style.display = "none";
            btn.innerText = "Show " + sectionName;
        }
    });
}
setupToggle('hide-about-button', 'about-content', 'About Me');
setupToggle('hide-edu-button', 'edu-content', 'Education');
setupToggle('hide-exp-button', 'exp-content', 'Experience');
setupToggle('hide-skills-button', 'skills-content', 'Technical Skills');

// Greeting 
window.onload = function() {
    alert("Welcome to Renson Peña's Portfolio! Thank you for visiting.");
};