

function refresh() {
    let experience = document.getElementById("experience");
    if (experience.textContent === "Newbie") {
      experience.textContent = "Trainee";  
    } else {
        experience.textContent = "Newbie";
    }
}

