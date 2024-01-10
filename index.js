// digital clock program


// function updateClock(){
//     const now = new Date();
//     const hours = now.getHours().toString().padStart(2,0);
//     const mins = now.getMinutes().toString().padStart(2,0);
//     const seconds = now.getSeconds().toString().padStart(2,0);
//     const timeString = `${hours}:${mins}:${seconds}`;
//     document.getElementById("clock").textContent = timeString;
//
//
// }

updateClock();
setInterval(updateClock, 1000);

// am pm version
function updateClock(){
    const now = new Date();
    let hours = now.getHours().toString().padStart(2,0);
    const meridiem = hours >= 12? "PM":"AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2,0)
    const mins = now.getMinutes().toString().padStart(2,0);
    const seconds = now.getSeconds().toString().padStart(2,0);
    const timeString = `${hours}:${mins}:${seconds} ${meridiem}`;
    document.getElementById("clock").textContent = timeString;
}

updateClock();
setInterval(updateClock, 1000);


