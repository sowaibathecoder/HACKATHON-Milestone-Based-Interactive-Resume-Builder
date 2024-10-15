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
        var resumeOutput = "\n    <h1> PROFESSIONAL RESUME </h1> <br />\n\n    ".concat(profilePictureURL ? "<img src=\"".concat(profilePictureURL, "\" alt=\"Profile Picture\" class=\"profilePicture\">") : "", " <br /><br />\n\n    <h2><u> PERSONAL INFORMATION </u> </h2>\n    <p><strong>Name:</strong> <span contenteditable=\"true\"> ").concat(name_1, " </span></p> \n    <p><strong>Email Address:</strong> <span contenteditable=\"true\"> ").concat(email, " </span></p>\n    <p><strong>LinkedIn ID / GitHub ID:</strong> <span contenteditable=\"true\"> ").concat(id, " </span></p>\n    <p><strong>Contact Number:</strong> <span contenteditable=\"true\"> ").concat(contact, " </span></p>\n    <br />\n\n    <h2><u>OBJECTIVE</u></h2>\n    <p contenteditable=\"true\"> ").concat(objective, " </p>\n    <br />\n    \n    <h2><u>EDUCATION</u></h2>\n    <p contenteditable=\"true\"> ").concat(education.replace(/\n/g, "<br />"), " </p>\n    <br />\n\n    <h2><u>SKILLS</u></h2>\n    <p contenteditable=\"true\"> ").concat(skill.replace(/\n/g, "<br />"), " </p>\n    <br />\n\n    <h2><u>EXPERIENCE</u></h2>\n    <p contenteditable=\"true\"> ").concat(experience.replace(/\n/g, "<br />"), " </p>\n    <br />\n    ");
        var resumeOutputElement = document.getElementById('resumeOutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("The resume output elements are missing.");
        }
    }
    else {
        console.error("There one or more output elements are missing.");
    }
});
