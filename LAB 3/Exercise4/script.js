
var activityLog = [];
var clickCount = 0;

window.addEventListener("click", function(event) {
    logActivity("Click", "Target: " + event.target.tagName);
    
   
    clickCount++;
    if (clickCount > 10) {
        document.getElementById("warning-msg").innerHTML = "WARNING: Suspiciously high click rate!";
    }
});

window.addEventListener("keydown", function(event) {
    logActivity("KeyPress", "Key: " + event.key);
});


window.addEventListener("focus", function(event) {
    logActivity("Focus", "Entered: " + event.target.tagName);
}, true);


function logActivity(type, detail) {
    var activity = {
        time: new Date().toLocaleTimeString(),
        type: type,
        detail: detail
    };
    
    activityLog.push(activity);
    displayLog(); 
}


function displayLog() {
    var display = document.getElementById("log-display");
    var html = "";
    
    
    for (var i = activityLog.length - 1; i >= 0; i--) {
        var act = activityLog[i];
        html += "[" + act.time + "] " + act.type + " - " + act.detail + "<br>";
    }
    
    display.innerHTML = html;
}


function resetLog() {
    activityLog = [];
    clickCount = 0;
    document.getElementById("warning-msg").innerHTML = "";
    displayLog();
}


function exportLog() {
    var text = "--- ACTIVITY LOG ---\n";
    for (var i = 0; i < activityLog.length; i++) {
        var a = activityLog[i];
        text += a.time + " | " + a.type + " | " + a.detail + "\n";
    }
    
   
    alert(text);
    console.log(text);
}