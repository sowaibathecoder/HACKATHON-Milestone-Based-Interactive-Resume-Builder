var _a;
(_a = document.getElementById("dynamicresume")) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    var _a;
    event.preventDefault();
    alert('The resume has been generated below!');
    var profilePictureElement = document.getElementById('profilePicture');
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var idElement = document.getElementById("id");
    var contactElement = document.getElementById("phone");
    var objectiveElement = document.getElementById("obj");
    var educationElement = document.getElementById("edu");
    var skillsElement = document.getElementById("skill");
    var experienceElement = document.getElementById("exp");
    if (profilePictureElement &&
        nameElement &&
        emailElement &&
        idElement &&
        contactElement &&
        objectiveElement &&
        educationElement &&
        skillsElement &&
        experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var id = idElement.value;
        var contact = contactElement.value;
        var objective = objectiveElement.value;
        var education = educationElement.value;
        var skill = skillsElement.value;
        var experience = experienceElement.value;
        var profilePictureFile = (_a = profilePictureElement.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';
        var resumeOutput = "\n      <h1> PROFESSIONAL RESUME </h1> <br />\n      ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", " <br /><br />\n      <h2><u> PERSONAL INFORMATION </u> </h2>\n      <p><strong>Name:</strong> <span contenteditable=\"true\"> ").concat(name_1, " </span></p> \n      <p><strong>Email Address:</strong> <span contenteditable=\"true\"> ").concat(email, " </span></p>\n      <p><strong>LinkedIn ID / GitHub ID:</strong> <span contenteditable=\"true\"> ").concat(id, " </span></p>\n      <p><strong>Contact Number:</strong> <span contenteditable=\"true\"> ").concat(contact, " </span></p>\n      <br />\n      <h2><u>OBJECTIVE</u></h2>\n      <p contenteditable=\"true\"> ").concat(objective, " </p>\n      <br />\n      <h2><u>EDUCATION</u></h2>\n      <p contenteditable=\"true\"> ").concat(education.replace(/\n/g, "<br />"), " </p>\n      <br />\n      <h2><u>SKILLS</u></h2>\n      <p contenteditable=\"true\"> ").concat(skill.replace(/\n/g, "<br />"), " </p>\n      <br />\n      <h2><u>EXPERIENCE</u></h2>\n      <p contenteditable=\"true\"> ").concat(experience.replace(/\n/g, "<br />"), " </p>\n      <br />\n    ");
        // Display the resume in the output container
        var resumeOutputElement_1 = document.getElementById('resumeOutput');
        if (resumeOutputElement_1) {
            resumeOutputElement_1.innerHTML = resumeOutput;
            resumeOutputElement_1.classList.remove("hidden");
            // Create container for buttons
            buttonsContainer.id = "buttonContainer";
            resumeOutputElement_1.appendChild(buttonsContainer);
            // Add Download PDF button
            var downloadButton = document.createElement("button");
            downloadButton.textContent = "Download as PDF";
            downloadButton.addEventListener("click", function () {
                var originalContent = document.body.innerHTML; // Store the original content
                var resumeContent = resumeOutputElement_1.innerHTML; // Get the resume content to print
                // Set body to the resume output for printing
                document.body.innerHTML = "\n          <html>\n            <head>\n              <title>Print Resume</title>\n              <style>\n                @media print {\n                  body {\n                    font-family: Arial, Helvetica, sans-serif;\n                    margin: 20px;\n                  }\n                  h1, h2, p {\n                    margin: 0 0 10px;\n                  }\n                }\n              </style>\n            </head>\n            <body>\n              ".concat(resumeContent, "\n            </body>\n          </html>\n        ");
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
            var shareableLinkButton = document.createElement("button");
            shareableLinkButton.textContent = "Copy Shareable Link";
            shareableLinkButton.addEventListener("click", function () {
                try {
                    // Create a unique shareable link (simulate it in this case)
                    var shareableLink = "https://myhackathon.com/resumes_".concat(name_1.replace(/\s+/g, "_"), "_cv.html");
                    // Use the clipboard API to copy the shareable link
                    navigator.clipboard.writeText(shareableLink);
                    alert("Link copied to clipboard!");
                }
                catch (err) {
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
        }
        else {
            console.error("Resume output container not found!");
        }
    }
    else {
        console.error("Form elements are missing.");
    }
});
var buttonsContainer = document.createElement("div");
