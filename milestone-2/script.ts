
let toggleBtn = document.getElementById('toggle-all-btn') as HTMLButtonElement;
const sections = [
    document.getElementById('section5') as HTMLElement,  // Experience Section
    document.getElementById('section4') as HTMLElement,  // Skills Section
    document.getElementById('section3') as HTMLElement,  // Education Section
    document.getElementById('section2') as HTMLElement,  // Objective Section
    document.getElementById('section1') as HTMLElement   // Personal Info Section
];

let currentSection = 0;  

toggleBtn.addEventListener('click', () => {
    if (currentSection < sections.length) {
        sections[currentSection].style.display = 'none';
        currentSection ++;

        if (currentSection === sections.length) {
            toggleBtn.textContent = 'Show Sections';
        }
    } else {
        sections.forEach(section => {
            section.style.display = 'block';
        });
        currentSection = 0; 
        toggleBtn.textContent = 'Hide Sections';
    }
});
