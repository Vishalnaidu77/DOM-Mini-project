// Progress bar



// let progressBar = document.querySelector(".fill")
// let btn = document.querySelector("button")
// let statusBar = document.querySelector("h3")

// btn.addEventListener("click", () => {
//     grow = 0;
    
//     let progress = setInterval(() => {
//         grow++
//         statusBar.innerText = `${grow}%`
//         progressBar.style.width = `${grow}%`
//         btn.style.pointerEvents = "none"
//     }, 50);

//     setTimeout(() => {
//         clearInterval(progress);
//         btn.innerText = "Downloaded";
//         btn.style.backgroundColor = "#8dbaeb"
//     }, 5000);
// })






// Toggle Button

let btns = document.querySelectorAll("button")

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.innerText == "Add Friend") {
            btn.innerText = "Remove Friend"
            btn.style.backgroundColor = "#777"
        }
        else{
            btn.innerText = "Add Friend"
            btn.style.backgroundColor = "royalblue"
        }
    })
})