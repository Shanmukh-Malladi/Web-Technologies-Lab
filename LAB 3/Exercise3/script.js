
var surveyQuestions = [
    {
        id: "q1",
        text: "What is your full name? ",
        type: "text",
        required: true
    },
    {
        id: "q2",
        text: "Which programming language do you like most?",
        type: "radio",
        options: ["JavaScript", "Python", "Java"],
        required: true
    },
    {
        id: "q3",
        text: "Which hobbies do you have? ",
        type: "checkbox",
        options: ["Reading", "Gaming", "Travelling", "Sports"],
        required: true
    }
];


function buildSurvey() {
    var container = document.getElementById("questions-container");

    for (var i = 0; i < surveyQuestions.length; i++) {
        var q = surveyQuestions[i];
        
       
        var questionDiv = document.createElement("div");
        questionDiv.style.marginBottom = "20px"; 

        
        var label = document.createElement("p");
        label.innerHTML = "<strong>" + q.text + "</strong>";
        questionDiv.appendChild(label);

        
        if (q.type === "text") {
            var input = document.createElement("input");
            input.setAttribute("type", "text");
            input.setAttribute("id", q.id);
            questionDiv.appendChild(input);
        } 
        else if (q.type === "radio" || q.type === "checkbox") {
            for (var j = 0; j < q.options.length; j++) {
                var optionInput = document.createElement("input");
                optionInput.setAttribute("type", q.type);
                optionInput.setAttribute("name", q.id); 
                optionInput.setAttribute("value", q.options[j]);
                
                var optionLabel = document.createElement("span");
                optionLabel.innerHTML = q.options[j] + " ";

                questionDiv.appendChild(optionInput);
                questionDiv.appendChild(optionLabel);
            }
        }

        
        var errorSpan = document.createElement("div");
        errorSpan.setAttribute("id", "error-" + q.id);
        errorSpan.style.color = "red";
        questionDiv.appendChild(errorSpan);

        container.appendChild(questionDiv);
    }
}


function validateAndSubmit() {
    var isFormValid = true;
    document.getElementById("success-message").innerHTML = "";

    for (var i = 0; i < surveyQuestions.length; i++) {
        var q = surveyQuestions[i];
        var errorDisplay = document.getElementById("error-" + q.id);
        errorDisplay.innerHTML = "";

      
        if (q.type === "text") {
            var val = document.getElementById(q.id).value;
            if (q.required && val.trim() === "") {
                errorDisplay.innerHTML = "This field cannot be empty.";
                isFormValid = false;
            } else if (val.length > 20) {
                errorDisplay.innerHTML = "Too long! (Max 20 chars)";
                isFormValid = false;
            }
        }

       
        if (q.type === "radio") {
            var radios = document.getElementsByName(q.id);
            var checked = false;
            for (var r = 0; r < radios.length; r++) {
                if (radios[r].checked) checked = true;
            }
            if (q.required && !checked) {
                errorDisplay.innerHTML = "Please select one option.";
                isFormValid = false;
            }
        }

        
        if (q.type === "checkbox") {
            var checks = document.getElementsByName(q.id);
            var count = 0;
            for (var c = 0; c < checks.length; c++) {
                if (checks[c].checked) count++;
            }
            if (q.required && count === 0) {
                errorDisplay.innerHTML = "Select at least one hobby.";
                isFormValid = false;
            }
        }
    }

    if (isFormValid) {
        document.getElementById("success-message").innerHTML = "Form Submitted Successfully!";
        document.getElementById("success-message").style.color = "green";
    }
}


buildSurvey();