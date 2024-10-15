var toggleBtn = document.getElementById('toggle-all-btn');
var sections = [
    document.getElementById('section5'), // Experience Section
    document.getElementById('section4'), // Skills Section
    document.getElementById('section3'), // Education Section
    document.getElementById('section2'), // Objective Section
    document.getElementById('section1') // Personal Info Section
];
var currentSection = 0;
toggleBtn.addEventListener('click', function () {
    if (currentSection < sections.length) {
        sections[currentSection].style.display = 'none';
        currentSection++;
        if (currentSection === sections.length) {
            toggleBtn.textContent = 'Show Sections';
        }
    }
    else {
        sections.forEach(function (section) {
            section.style.display = 'block';
        });
        currentSection = 0;
        toggleBtn.textContent = 'Hide Sections';
    }
});
