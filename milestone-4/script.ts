
document.getElementById("dynamicresume")?.addEventListener('submit', (event) => {
    event.preventDefault();
    alert('The resume has been generated below!');

    const profilePictureElement = document.getElementById('profilePicture') as HTMLInputElement;   
    const nameElement = document.getElementById("name") as HTMLInputElement;
    const emailElement = document.getElementById("email") as HTMLInputElement;
    const idElement = document.getElementById("id") as HTMLInputElement;
    const contactElement = document.getElementById("phone") as HTMLInputElement;
    const objectiveElement = document.getElementById("obj") as HTMLInputElement;
    const educationElement = document.getElementById("edu") as HTMLInputElement;
    const skillsElement = document.getElementById("skill") as HTMLInputElement;
    const experienceElement = document.getElementById("exp") as HTMLInputElement;

    if (
      profilePictureElement &&
      nameElement &&
      emailElement &&
      idElement &&
      contactElement &&
      objectiveElement &&
      educationElement &&
      skillsElement &&
      experienceElement
    ) {
      const name = nameElement.value;
      const email = emailElement.value;
      const id = idElement.value;
      const contact = contactElement.value;
      const objective = objectiveElement.value;
      const education = educationElement.value;
      const skill = skillsElement.value;
      const experience = experienceElement.value;

      const profilePictureFile = profilePictureElement.files?.[0];
      const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
      

    const resumeOutput = `
    <h1> PROFESSIONAL RESUME </h1> <br />

    ${profilePictureURL ? `<img src="${profilePictureURL}" alt="Profile Picture" class="profilePicture">` : ""} <br /><br />

    <h2><u> PERSONAL INFORMATION </u> </h2>
    <p><strong>Name:</strong> <span contenteditable="true"> ${name} </span></p> 
    <p><strong>Email Address:</strong> <span contenteditable="true"> ${email} </span></p>
    <p><strong>LinkedIn ID / GitHub ID:</strong> <span contenteditable="true"> ${id} </span></p>
    <p><strong>Contact Number:</strong> <span contenteditable="true"> ${contact} </span></p>
    <br />

    <h2><u>OBJECTIVE</u></h2>
    <p contenteditable="true"> ${objective} </p>
    <br />
    
    <h2><u>EDUCATION</u></h2>
    <p contenteditable="true"> ${education.replace(/\n/g, "<br />")} </p>
    <br />

    <h2><u>SKILLS</u></h2>
    <p contenteditable="true"> ${skill.replace(/\n/g, "<br />")} </p>
    <br />

    <h2><u>EXPERIENCE</u></h2>
    <p contenteditable="true"> ${experience.replace(/\n/g, "<br />")} </p>
    <br />
    `;

    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
    } else {
      console.error("The resume output elements are missing.");
    }
} else {
  console.error("There one or more output elements are missing.");
}
});











