
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

    // Display the resume in the output container
    const resumeOutputElement = document.getElementById('resumeOutput');
    if (resumeOutputElement) {
      resumeOutputElement.innerHTML = resumeOutput;
      resumeOutputElement.classList.remove("hidden");
    
      // Create container for buttons
      const buttonsContainer = document.createElement("div");
      buttonsContainer.id = "buttonContainer";
      resumeOutputElement.appendChild(buttonsContainer);

      // Add Download PDF button
      const downloadButton = document.createElement("button");
      downloadButton.textContent = "Download as PDF";
      downloadButton.addEventListener("click", () => {
        const originalContent = document.body.innerHTML; // Store the original content
        const resumeContent = resumeOutputElement.innerHTML; // Get the resume content to print

        // Set body to the resume output for printing
        document.body.innerHTML = `
          <html>
            <head>
              <title>Print Resume</title>
              <style>
                @media print {
                  body {
                    font-family: Arial, Helvetica, sans-serif;
                    margin: 20px;
                  }
                  h1, h2, p {
                    margin: 0 0 10px;
                  }
                }
              </style>
            </head>
            <body>
              ${resumeContent}
            </body>
          </html>
        `;

        window.print(); // Open the print dialog

        // Restore original content after printing
        document.body.innerHTML = originalContent; 
      });
      buttonsContainer.appendChild(downloadButton);

      // Add CSS on downloadbutton
      downloadButton.style.color = "rgb(227, 221, 221)";
      downloadButton.style.display = "inline";
      downloadButton.style.padding = "8px 15px";
      downloadButton.style.cursor = "pointer";
      downloadButton.style.borderRadius = "15px";
      downloadButton.style.backgroundColor = "rgb(12, 23, 51)";
      downloadButton.style.fontFamily = "Arial, Helvetica, san-serif";
      downloadButton.style.fontSize = "12px";

      // Add shareable link button
      const shareableLinkButton = document.createElement("button");
      shareableLinkButton.textContent = "Copy Shareable Link";
      shareableLinkButton.addEventListener("click", () => {
        try {
          // Create a unique shareable link (simulate it in this case)
          const shareableLink = `https://myhackathon.com/resumes_${name.replace(/\s+/g,"_")}_cv.html`;

          // Use the clipboard API to copy the shareable link
          navigator.clipboard.writeText(shareableLink);
          alert("Link copied to clipboard!");
        } catch (err) {
          console.error("Failed to copy link:", err);
          alert("Failed to copy link to clipboard, Please try again.");
        }
      });
      buttonsContainer.appendChild(shareableLinkButton);

      // Add CSS on shareableLinkButton
      shareableLinkButton.style.color = "rgb(227, 221, 221)";
      shareableLinkButton.style.display = "inline";
      shareableLinkButton.style.padding = "8px 15px";
      shareableLinkButton.style.cursor = "pointer";
      shareableLinkButton.style.borderRadius = "15px";
      shareableLinkButton.style.backgroundColor = "rgb(12, 23, 51)";
      shareableLinkButton.style.fontFamily = "Arial, Helvetica, san-serif";
      shareableLinkButton.style.fontSize = "12px";

    } else {
      console.error("Resume output container not found!");
    }
  } else {
    console.error("Form elements are missing.");
  }
});

