
let formData = {
    name: "",
    email: "",
    theme: ""
};


function nextStage(current) {
    let isValid = false;

    
    if (current === 1) {
        var nameVal = document.getElementById("name-input").value;
        if (nameVal.length >= 3) {
            formData.name = nameVal;
            isValid = true;
        } else {
            document.getElementById("error1").innerHTML = "Name must be at least 3 characters.";
        }
    } 
    else if (current === 2) {
        let emailVal = document.getElementById("email-input").value;
        
        if (emailVal.includes("@") && emailVal.includes(".")) {
            formData.email = emailVal;
            isValid = true;
        } else {
            document.getElementById("error2").innerHTML = "Enter a valid email address.";
        }
    } 
    else if (current === 3) {
        let themeVal = document.getElementById("theme-input").value;
        if (themeVal !== "") {
            formData.theme = themeVal;
            isValid = true;
            showReview(); 
        } else {
            document.getElementById("error3").innerHTML = "Please select a theme.";
        }
    }

    
    if (isValid) {
        document.getElementById("stage" + current).style.display = "none";
        document.getElementById("stage" + (current + 1)).style.display = "block";
        updateProgress(current + 1);
    }
}


function prevStage(current) {
    document.getElementById("stage" + current).style.display = "none";
    document.getElementById("stage" + (current - 1)).style.display = "block";
    updateProgress(current - 1);
}


function updateProgress(stageNum) {
    let percent = stageNum * 25;
    document.getElementById("progress-text").innerHTML = percent + "%";
    document.getElementById("progress-bar").style.width = percent + "%";
}


function showReview() {
    let reviewDiv = document.getElementById("review-data");
    reviewDiv.innerHTML = "Name: " + formData.name + "<br>" +
                         "Email: " + formData.email + "<br>" +
                         "Theme: " + formData.theme;
}


function submitForm() {
    document.getElementById("multi-stage-form").style.display = "none";
    document.getElementById("progress-container").style.display = "none";
    document.getElementById("final-msg").innerHTML = "Form Submitted Successfully!";
}