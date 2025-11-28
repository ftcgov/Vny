let timerInterval;
let timeLeft = 900; // 15 minutes

document.getElementById("userForm").addEventListener("submit", function(e){
    e.preventDefault();
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("scanner").classList.remove("hidden");
    startTimer();
    fakeLogs();
});

function runCommand() {
    const cmd = document.getElementById("commandInput").value;
    const terminal = document.getElementById("terminal");

    terminal.innerHTML += `<p>$ ${cmd}</p>`;

    if(["errorfix403","errorfix456","errorfix923","errorfix780"].includes(cmd)){
        terminal.innerHTML += `<p>Running ${cmd}… OK</p>`;
    } else {
        terminal.innerHTML += `<p>Unknown command</p>`;
    }
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        let min = Math.floor(timeLeft/60);
        let sec = timeLeft % 60;
        document.getElementById("timer").innerText = `Scan Time: ${min}:${sec<10?"0"+sec:sec}`;

        if(timeLeft <= 0) finishScan();
    }, 1000);
}

function fakeLogs() {
    const terminal = document.getElementById("terminal");
    let i = 0;
    let interval = setInterval(() => {
        terminal.innerHTML += `<p>Scanning file: system/resource/${i}.dat</p>`;
        terminal.scrollTop = terminal.scrollHeight;
        i++;
        if(i > 200) clearInterval(interval);
    }, 200);
}

function finishScan(){
    clearInterval(timerInterval);
    document.getElementById("scanner").classList.add("hidden");
    document.getElementById("finalReport").classList.remove("hidden");

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const ip = document.getElementById("ip").value;

    document.getElementById("reportDetails").innerHTML =
    `<b>Name:</b> ${name}<br>
     <b>Email:</b> ${email}<br>
     <b>Phone:</b> ${phone}<br>
     <b>IP Address:</b> ${ip}`;

    const hackers = document.getElementById("hackerList");

    for(let i=1;i<=37;i++){
        hackers.innerHTML += `<li>ThreatActor-${i} | Origin: Unknown Sector | IP: 192.0.${i}.55</li>`;
    }

    localStorage.setItem("finalReport", hackers.innerHTML);
}

// Technician page
function openTechPage(){
    let pw = prompt("Enter Technician Password:");
    if(pw === "98999 23392"){
        window.location.href = "tech.html";
    } else {
        alert("Incorrect Password");
    }
}
