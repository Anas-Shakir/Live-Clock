function update_time(){
    const now = new Date();

    // For Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    document.getElementById("Time").textContent = `${hours}:${minutes}:${seconds}`;

    // For Time
    const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December", ]
    
    let dayName = days[now.getDay() - 1];
    let monthName = month[now.getMonth()];
    let date = now.getDate();
    let year = now.getFullYear();

    document.getElementById("Date").textContent = `${dayName}, ${date} ${monthName} ${year} `
}
update_time();

// Repeating Function again and again to get DATE()
setInterval(update_time, 1000)

// Change Color of Window
function changeView(){
    const container = document.getElementById("container");
    const Time = document.getElementById("Time");
    const date = document.getElementById("Date");
    const currentColor = getComputedStyle(container).backgroundColor;
    const outside = document.body.style;
    
    console.log("Button Clicked!");
    if(currentColor === "rgb(255, 228, 196)")
    {
        container.style.backgroundColor = "black";
        Time.style.color = "gray";
        date.style.color = "gray";
        outside.backgroundColor = "gray";
    }
    else{
        container.style.backgroundColor = "bisque";
        Time.style.color = "black";
        date.style.color = "black";
        outside.backgroundColor = "white";
    }
}

// Calling functions: changeView and spawnEnemy 
document.getElementById("button").addEventListener("click", changeView);




// Spanw Enemy on every click on button (later)
// The user will use cursor either: 
// 1) as shield to stop the missiles coming to the button
// 2) as just dodging the missiles
// Life of cursor on top
// Can also have a bulb looking object at the top as target




