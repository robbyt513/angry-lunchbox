
let swing = ["Ball", "Strike", "Single", "Double", "Triple", "Home Run", "Groundout", "Flyout"]
const renderEl = document.getElementById("render-el")
const newRandomHitEl = document.getElementById("newrandomhit-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


const welcomeEl = document.getElementById("welcome-el")

function greetUser() {
    welcomeEl.textContent = "Welcome back, Jackie!! 👋"    
}
//greetUser()

function getOutcome() {
    for (let i = 0; i < swing.length; i++) {
       return swing[Math.floor(Math.random() * swing.length)]
    }
}

function finalOutcome() {
    if (getOutcome() === "Ball") {
        console.log("Ball")
    } else if (getOutcome() === "Strike") {
        console.log("Strike")
    } else if (getOutcome() === "Single") {
        console.log("Single")
    } else if (getOutcome() === "Double") {
        console.log("Double")
    } else if (getOutcome() === "Triple") {
        console.log("Triple")
    } else if (getOutcome() === "Home Run") {
        console.log("Home Run")
    } else if (getOutcome() === "Groundout") {
        console.log("Groundout")
    } else {
        console.log("Flyout")
    }
}




/*function finalOutcome() {
    if (getOutcome() === "Single") {
        console.log("Single")
}   else if (getOutcome() === "Double") {
        console.log("double")
}   else if (getOutcome() === "Triple") {
        console.log("triple")
}   else if (getOutcome() === "Home Run") {
        console.log("home run") + "Run Jackie!"
}   else {
        console.log("out")
}
renderEl.textcontent = getOutcome()
}

finalOutcome()
hits.innerHTML = "<p>" + finalOutcome() + "</p>"


//console.log(finalOutcome())





/*function newRandomHit() {
    for(i = 0; i < hits.length; i++) {
        newRandomHitEl.textContent += hits[i] + " "
    }
}

function getHit() {
    return Math.floor(Math.random() * 6)
}

function produceOutcome() {
    if(getHit() === 0)
}







//let totalBasesEl = document.getElementById("totalBases-el")
//let totalBases = "Total Bases: " 
//let newRandomHit = document.getElementById("newrandomhit-el")
/*let baseHit = 1
let double = 2
let triple = 3
let bomb = 4
let out = 0*/
//console.log(randomHit())


/*function runJackie() {
    if (randomHit() === 1) {
        message = totalBases + randomHit() + " Alright Jackie 🙂"
    } else if (randomHit() === 2) {
        message = totalBases + randomHit() + " Way to hit the ball Jackie!!"
    } else if (randomHit() === 3) {
        message = totalBases + randomHit() + " RUN JACKIE!!"
    } else if (randomHit() === 4) {
        message = totalBases + randomHit() +  " Get round the bases Jackie!! 🥳"
    } else {
        message = totalBases + randomHit() + " Get em next time Jackie 😭" + " "
    }
    totalBasesEl.textContent = message
}*/


/*function randomHit() {
    let totalBases = "Total Bases: " + 0
    let baseHit = 1
    let double = 2
    let triple = 3
    let bomb = 4
    let out = 0
    let message = ""
    let hit = Math.floor(Math.random() * 5)
    if (hit === 0) {
        return hit + " Damn Jackie"
    } else if (hit === 1) {
        return hit + " Base Knock"
    } else if (hit === 2) {
        return hit + " Double Tuble"
    } else if (hit === 3) {
        return hit + " Triple"
    } else if (hit === 4) {
        return hit + " YARD"
    }
    totalBasesEl.textContent = message
}*/


//messageEl.textContent = message


