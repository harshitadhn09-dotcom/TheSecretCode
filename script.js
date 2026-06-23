let secretCode = Math.floor(Math.random() * 100) + 1;//creates random number

let attempts = 0;// counts attempts

function checkGuess(){

    let guess = Number(document.getElementById("guessInput").value);

    attempts++;

    document.getElementById("attempts").textContent =
    "Transmission Attempts: " + attempts;

    let missionLog = document.getElementById("missionLog");

    if (guess === secretCode) {
    window.location.href = "access-granted.html";
    }

    else if (guess > secretCode) {
    missionLog.textContent = "CODE TOO HIGH.";
    }

    else {
    missionLog.textContent = "CODE TOO LOW.";    
    }

}

   